(function(){
  $("#fadeOut").click(function(){
    $("#sentence").fadeOut("slow",function(){
    });
    $("#fadeIn").click(function(){
      $("#sentence").fadeIn("slow",function(){
      });
    });
  });
})()

//https://api.jquery.com/fadeIn/
//https://api.jquery.com/fadeOut/