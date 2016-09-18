$(document).ready(function(){

var userPlay = prompt("Rock, Paper, Scissors?");

if (userPlay == 'rock') {
	var userAnswer = 'Rock';
	$("#rock").css('background', 'white');
}	else if (userPlay == 'paper') {
	var userAnswer = 'Paper'; 
	$("#paper").css('background', 'white'); 
}	else if (userPlay == 'scissors') {
	var userAnswer = 'Scissors'; 
	$("#scissors").css('background', 'white');
}
 
var computerPlay = Math.random();

if (computerPlay < 0.33) {
	var computerAnswer = 'Rock';
	$("#comp_rock").css('background', 'red');
}	else if (computerPlay > 0.66) {
		var computerAnswer = 'Paper';
		$("#comp_paper").css('background', 'red')
	} else { 
			var computerAnswer = 'Scissors';
			$("#comp_scissors").css('background', 'red');
		}
	
console.log(computerPlay)	
console.log(computerAnswer)	
	
if (userAnswer == computerAnswer) {
		$("#choose").html("It's a tie!");
		$("#computer").css('background', 'red');
	} 
	if (userAnswer == 'Rock')
		if (computerAnswer == 'Paper') {
			$("#choose").html("You lose!");
		}	else if (computerAnswer == 'Scissors') {
			$("#choose").html("You win!");	
			}
	if (userAnswer == 'Paper')
		if (computerAnswer == 'Rock') {
			$("#choose").html("You win!");
		}	else if (computerAnswer == 'Scissors') {
			$("#choose").html("You lose!");	
			}
	if (userAnswer == 'Scissors')
		if (computerAnswer == 'Rock') {
			$("#choose").html("You lose!")
		}	else if (computerAnswer =='Paper') {
			$("#choose").html("You win!")
			}

 })
