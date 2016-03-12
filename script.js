/**
 * Created by alejoribes on 11/3/16.
 */
var GlobalQuestion = '';
var GlobalIterator = 0;
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
    this.badResponse1 = Math.round(Math.random() * (100 - 0) + 0);
    this.badResponse2 = Math.round(Math.random() * (100 - 0) + 0);
    this.badResponse3 = Math.round(Math.random() * (100 - 0) + 0);
    this.questionText = GlobalQuestion;
};

function getArrayQuestions(){
    ArrayQuestion = [];
    getTextQuestion(22);
    var Question1 = new Question(22);
    ArrayQuestion.push(Question1);

    getTextQuestion(13);
    var Question1 = new Question(13);
    ArrayQuestion.push(Question1);

    getTextQuestion(45);
    var Question1 = new Question(45);
    ArrayQuestion.push(Question1);

    getTextQuestion(76);
    var Question1 = new Question(76);
    ArrayQuestion.push(Question1);

    getTextQuestion(34);
    var Question1 = new Question(34);
    ArrayQuestion.push(Question1);

    getTextQuestion(11);
    var Question1 = new Question(11);
    ArrayQuestion.push(Question1);

    getTextQuestion(31);
    var Question1 = new Question(31);
    ArrayQuestion.push(Question1);

    getTextQuestion(46);
    var Question1 = new Question(46);
    ArrayQuestion.push(Question1);

    getTextQuestion(42);
    var Question1 = new Question(42);
    ArrayQuestion.push(Question1);

    getTextQuestion(99);
    var Question1 = new Question(99);
    ArrayQuestion.push(Question1);

    return ArrayQuestion;
};
function game(ArrayQuestion){
        if(GlobalIterator < 10) {
            $('#countQuestion').text('Question ' + (GlobalIterator + 1) + ' of 10');
            $('.questionText').text(ArrayQuestion[GlobalIterator].questionText + '?');
            $('#inlineAnswerBad1').text(ArrayQuestion[GlobalIterator].badResponse1);
            $('#inlineAnswerBad2').text(ArrayQuestion[GlobalIterator].badResponse2);
            $('#inlineAnswerTrue').text(ArrayQuestion[GlobalIterator].answer);
            $('#inlineAnswerBad3').text(ArrayQuestion[GlobalIterator].badResponse3);
        }
        else{
            console.log('end of game tutututututututututtuttututut')
        }

};
function compAnswer(){
    if($('#answerTrue').is( ':checked' )){
        GlobalIterator++;
        game(ArrayQuestion);
    }
    else{
        GlobalIterator++;
        game(ArrayQuestion);

    }
};
$('#buttonSend').on('click',function(){
    compAnswer();
});

