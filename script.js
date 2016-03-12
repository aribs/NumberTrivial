/**
 * Created by alejoribes on 11/3/16.
 */
var GlobalQuestion = '';
var GlobalIterator = 0;
var countGood = 0;
var ArrayQuestion = getArrayQuestions();
$(document).ready(function(){
   game(ArrayQuestion);

});

function getTextQuestion(number){
    var url = 'http://numbersapi.com/' + number + '/trivia?fragment'
   var textQuestion =  $.ajax({
        url: url,
        type: 'GET',
        data: '',
        async: false,
        cache: false,
        success:function(response){saveQuestion(response)},
        error:function(){console.log("error, number not found")},

    });
};
function saveQuestion(response){
    GlobalQuestion = response;

};


function Question(number){
    this.answer = number
    this.badResponse1 = rnd1to100();
    this.badResponse2 = rnd1to100();
    this.badResponse3 = rnd1to100();
    this.questionText = GlobalQuestion;
};

function getArrayQuestions(){
    ArrayQuestion = [];
    getTextQuestion(22);
    var Question1 = new Question(22);
    ArrayQuestion.push(Question1);

    getTextQuestion(13);
    var Question2 = new Question(13);
    ArrayQuestion.push(Question2);

    getTextQuestion(45);
    var Question3 = new Question(45);
    ArrayQuestion.push(Question3);

    getTextQuestion(76);
    var Question4 = new Question(76);
    ArrayQuestion.push(Question4);

    getTextQuestion(34);
    var Question5 = new Question(34);
    ArrayQuestion.push(Question5);

    getTextQuestion(11);
    var Question6 = new Question(11);
    ArrayQuestion.push(Question6);

    getTextQuestion(31);
    var Question7 = new Question(31);
    ArrayQuestion.push(Question7);

    getTextQuestion(46);
    var Question8 = new Question(46);
    ArrayQuestion.push(Question8);

    getTextQuestion(42);
    var Question9 = new Question(42);
    ArrayQuestion.push(Question9);

    getTextQuestion(99);
    var Question10 = new Question(99);
    ArrayQuestion.push(Question10);

    return ArrayQuestion;
};
function game(ArrayQuestion){
        if(GlobalIterator < 10) {
            updateProgressBar();
            $('#countQuestion').text('Question ' + (GlobalIterator + 1) + ' of 10');
            $('.questionText').text(ArrayQuestion[GlobalIterator].questionText + '?');
            $('#inlineAnswerBad1').text(ArrayQuestion[GlobalIterator].badResponse1);
            $('#inlineAnswerBad2').text(ArrayQuestion[GlobalIterator].badResponse2);
            $('#inlineAnswerTrue').text(ArrayQuestion[GlobalIterator].answer);
            $('#inlineAnswerBad3').text(ArrayQuestion[GlobalIterator].badResponse3);
        }
        else{
            $('#gameRow').slideUp();
            $('#resultslabel').before("<h2>Game Finished!!!</h2>");
            $('#resultslabel').before("<h4>Review your score: " + countGood + " successes of 10 Questions </h4>");
        }

};
function compAnswer(){
    if($('#answerTrue').is( ':checked' )){
        drawGoodResponse();
        GlobalIterator++;
        countGood++;
        game(ArrayQuestion);
    }
    else{
        drawBadResponse();
        GlobalIterator++;
        game(ArrayQuestion);

    }
};
$('#buttonSend').on('click',function(){
    compAnswer();
});
$('#buttonDontKnow').on('click',function(){
    drawBadResponse();
    GlobalIterator++;
    game(ArrayQuestion);
});

function rnd1to100(){
    return Math.round(Math.random() * (100 - 0) + 0);
}
function drawGoodResponse(){
    $('#resultslabel').append("<hr>");
    $('#resultslabel').append("Question " + (GlobalIterator + 1) + " : " + ArrayQuestion[GlobalIterator].questionText + '?');
    $('#resultslabel').append("<br> <span class='glyphicon glyphicon-ok' aria-hidden='true' id='iconOk'></span> " +  ArrayQuestion[GlobalIterator].answer);

};
function drawBadResponse(){
    $('#resultslabel').append("<hr>");
    $('#resultslabel').append("Question " + (GlobalIterator + 1) + " : " + ArrayQuestion[GlobalIterator].questionText + '?');
    $('#resultslabel').append("<br> <span class='glyphicon glyphicon-remove' aria-hidden='true' id='iconBad'></span> " +   "The correct answer is: " + ArrayQuestion[GlobalIterator].answer);

};
function updateProgressBar(){
    var actualProgress = (GlobalIterator +1) * 10;
    $('.progress-bar').css("width",  "" + actualProgress + "%");
};