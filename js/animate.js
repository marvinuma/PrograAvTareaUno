(function(){
    $("#right").click(function() {
        $(".block").animate(
            {"left": "+=100px"},
            "slow");
      });
       
      $("#left").click(function(){
        $(".block").animate(
            {"left": "-=100px"},
            "slow");
      });
})()

//https://api.jquery.com/animate/#animate-properties-duration-easing-complete