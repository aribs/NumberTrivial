/**
 * Created by alejoribes on 11/3/16.
 */
var GlobalQuestion = '';
$(document).ready(function(){
   var ArrayQuestion = getArrayQuestions();
    


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
}
