var userNumber;
var numberArray = [];
var total = 1;

$(document).ready(function(){

  $("form#factorial").submit(function(event){
  event.preventDefault();
  $("#results").show();
  $("form#factorial").hide();
  userNumber = parseInt($("input#userInput").val());

  for (i = userNumber; i >= 1; i--) {
    numberArray.push(i);
  }

  numberArray.forEach(function(number){
    total = total * number;
  });

  $("#results").text(total);
  });

});
