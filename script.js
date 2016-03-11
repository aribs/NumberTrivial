/**
 * Created by alejoribes on 11/3/16.
 */

$(document).ready(function(){
    ArrayQuestion = [];
    getTextQuestion(22)
    getTextQuestion(13);
    getTextQuestion(42);
    var question1 = new Question(22);
    
    console.log(question1);

});

function getTextQuestion(number){
    var url = 'http://numbersapi.com/' + number + '/trivia?fragment'
    $.ajax({
        url: url,
        type: 'GET',
        data: '',
        dataType: "jsonp",
        success:function(response){saveQuestion(response)},
        error:function(){console.log("error, number not found")}
    });
};
function saveQuestion(response){
    return response;


};
function printArray(){
    console.log(ArrayQuestion);
};

function Question(number){
    this.answer = number
    this.badResponse1 = Math.round(Math.random() * (100 - 0) + 0);
    this.badResponse2 = Math.round(Math.random() * (100 - 0) + 0);
    this.badResponse3 = Math.round(Math.random() * (100 - 0) + 0);
};