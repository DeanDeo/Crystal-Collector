var random_result;
var losses = 0;
var wins = 0;
var previous = 0;


$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'assets/images/red.png', 
			'assets/images/blue.png', 
			'assets/images/yellow.png', 
			'assets/images/green.png'];
		
	random_result = Math.floor(Math.random() * 120 ) + 1; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 12) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Your Total Score is: " + previous);

}


resetAndStart();


//functions

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Your Total score is: " + previous);


	if(previous > random_result){

		losses++;

		$("#losses").html("Losses: " + losses);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		wins++;

		$("#wins").html("Wins: " + wins);

		previous = 0;

		resetAndStart();

	}

});
