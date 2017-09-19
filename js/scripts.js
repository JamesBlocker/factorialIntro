$(document).ready(function(){
$("form#anxiety-quiz").submit(function(event){
  event.preventDefault();
  $("#questionOneResponse").show();
  $("input:checkbox[name=social-question]:checked").each(function(){
    var q1Answer = $(this).val();
    $("#questionOneResponse").append(q1Answer + "<br>");
    });

  $("#questionTwoResponse").show();
  $("input:checkbox[name=deadline-question]:checked").each(function(){
    var q2Answer = $(this).val();
    $("#questionTwoResponse").append(q2Answer + "<br>");
  });

  $("#questionThreeResponse").show();
  $("input:checkbox[name=bed-question]:checked").each(function(){
    var q3Answer = $(this).val();
    $("#questionThreeResponse").append(q3Answer + "<br>");
  });

  $("#questionFourResponse").show();
  $("input:checkbox[name=pair-question]:checked").each(function(){
    var q4Answer = $(this).val();
    $("#questionFourResponse").append(q4Answer + "<br>");
  });

    $("#transportation_survey").hide();
  });
});
