var readLineSync = require('readline-sync');

var score = 0;

var questions = [
	{
		question: 'Largest district in Tamilnadu by areawise?',
		Answer: 'viluppuram'
	},
	{
		question: 'Smallest district in Tamilnadu by area?',
		Answer: 'chennai'
	},
	{
		question: 'Total international airports in tamiladu?',
		Answer: 'four'
	},
	{
		question: 'Chiefminister of tamilnadu?',
		Answer: 'Palanisamy'
	},
	{
		question: 'Koodal name of which city?',
		Answer: 'madurai'
	},
	{
		question: 'Thanjai periyakovil built by?',
		Answer: 'Rajaraja chola'
	},
	{
		question: 'Manchester of Tamilnadu?',
		Answer: 'Coimbatore'
	},
	{
		question: 'state tree of tamilnadu?',
		Answer: 'Palm '
	},
	{
		question: 'Capital city of Tamilnadu?',
		Answer: 'Chennai'
	},
	{
		question: 'Ponniyin Selvan written by...........',
		Answer: 'kalki Krishnamoorthi'
	}
];

function welcome() {
	var userName = readLineSync.question('May I know your Name?');
	console.log(
		'WELCOME,' + userName + ',Heartly welcomed by SELVAKUMARBALASUBRAMANI'
	);
}

function quiz(question, Answer) {
	var userAnswer = readLineSync.question(question);
	if (userAnswer == Answer) {
		console.log('you are correct');
		score = score + 1;
	} else {
		console.log('you are incorrect');
	}
	console.log('your score:' + score);
}
function play() {
	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		quiz(currentQuestion.question, currentQuestion.Answer);
	}
	console.log('your final score is ' + score);
}

//function finalScore(){
//console.log("your final score is " +score);
//highScore.map(score=console.log(score.name,":",score.score));
//console.log("Thank you 🙏" +userName);
//}

//front end

welcome();

play();

//finalScore();
