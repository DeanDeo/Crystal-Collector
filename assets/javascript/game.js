var randomResult;
var wins = 0;
var losses = 0;
var previous = 0;
// var Images = ["assets/images/red.png","assets/images/blue.png","assets/images/yellow.png", "assets/images/green.png"]


var resetAndStart = function (){
    $(".crystals").empty();

    var Images = ["assets/images/red.png","assets/images/blue.png","assets/images/yellow.png", "assets/images/green.png"]

    randomResult = Math.floor(Math.random() *120 +1);

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++){

        var random = Math.floor(Math.random()*11 +1);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random

            });
        
    }
}
