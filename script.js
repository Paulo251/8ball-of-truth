$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["Não", "Sim", "não faço ideia", "É claro!", "Sem duvidas", "So nos seus sonhos"];
  
    $("#answer").hide();
  
    magic8Ball.askQuestion = function(question) {
      $("#8ball").effect("shake");
  
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
      $("#answer").fadeIn(4000);
  
      var randomNumber = Math.random();
  
      var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
      var randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      var answer = this.listOfAnswers[randomIndex];
  
      $("#answer").text(answer);
  
      console.log(question);
      console.log(answer);
    };
  
    var onClick = function() {
  
      $("#answer").hide();
  
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
  
      setTimeout(function(){
        var question = prompt("Faça uma pergunta de Sim ou Não");
        magic8Ball.askQuestion(question);
      }, 500);
  
  
    };
  
    $("#questionButton").click(onClick);
  
  });