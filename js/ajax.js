(function () {
    var datos = [];
    var post = {
        userId: 0,
        id: 0,
        title: '',
        body: ''
    }

    var inicializar = () => {
        validarBotones();
        cargarPosts();
    }

    var inputChanged = e => {
        var { name, value } = e.target;
        post[name] = value;
    }

    var cargarNuevoDato = e => {
        e.preventDefault();
        datos.push(post);
        cargarDatosTabla();
    }

    var cargarPosts = () => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            success: function (result, status, xhr) {
                datos = result;
                cargarDatosTabla();
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error);
            }
        })
    }

    var cargarDatosTabla = () => {
        var cuerpoTabla = $('#tbdPost');
        cuerpoTabla.html('');
        var cantidad = datos.length;
        datos.map(function (dato, index) {
            var fila = `<tr id="${dato.userId}-${dato.id}">
            <td><div class="fila">${dato.userId}</div></td>
            <td><div class="fila">${dato.id}</div></td>
            <td><div class="fila">${dato.title}</div></td>
            <td><div class="fila">${dato.body}</div></td>
            </tr>`;
            cuerpoTabla.append(fila);
            if (index === cantidad - 1) {
                $('.fila').dblclick(eliminarDato);
            }
        });
    }
    var eliminarDato = (llave) => {
        Console.log("Entro al metodo Eliminar Dato");
        var ids = llave.split('-')
        var nuevalista = datos.filter(function (dato) {
            if (dato.userId !== ids[0] && dato.id !== ids[1])
            alert("Dato" + dato);
                return dato;
        });
        datos = nuevalista;
        cargarDatosTabla();
    }

    validarBotones = () =>{
        var inputs = $('input');
        inputs.on('change',inputChanged);

        var btnGuardar = $('#guardar');
        btnGuardar.on('click',cargarNuevoDato);

        var btnActualizar = $('#actualizar');

        var btnEliminar = $('#eliminar');
    }

    inicializar();
})()