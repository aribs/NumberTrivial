/**
 * Created by alejoribes on 11/3/16.
 */
var GlobalQuestion = '';
$(document).ready(function(){

    ArrayQuestion = [];
    getTextQuestion(22);
    var Question1 = new Question(22);
    console.log(Question1);




});

function getTextQuestion(number){
    var url = 'http://numbersapi.com/' + number + '/trivia?fragment'
   var textQuestion =  $.ajax({
        url: url,
        type: 'GET',
        data: '',
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
