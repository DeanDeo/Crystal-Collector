var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var Images = ["C:\Users\djdeo\Desktop\unit-4-game\assets\images\blue.png"]


//functions

function randomTargetNumber(){
    targetNumber = Math.floor(Math.random()*102 + 19);
}

$("#number-to-guess").text(targetNumber);

var numberOptions = [10,5,3,7]

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "Images[i]" )
    imageCrystal.attr("data-crystalValue", numberOptions[i]);
    $("#crystals").append(imageCrystal);

}
