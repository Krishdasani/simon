var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
level = 0;
var toggle = false;
count = 0;
function nextSequence()
{
  level ++;
  $("h1").text("level "+level);
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 4);
  //return randomNumber;
  var randomChosenNumber = buttonColors[randomNumber];
  gamePattern.push(randomChosenNumber);
  $("#"+randomChosenNumber).fadeOut(100).fadeIn(100);
  // console.log(gamePattern)

  return gamePattern

};
$(document).keypress(function(event){
    // $("h1").text("Level "+ level);
  if(toggle == false){
    // $("h1").text("Level"+level);
  gamePattern = nextSequence();

  toggle = true;
  // console.log($('h1'));
}
  else{
    console.log("click button not key");
  }
});


// console.log(gamePattern);

$(".btn").click(function(e){
  count ++;
  length = gamePattern.length;
  userClickPatternLength = userClickPattern.length;
  // console.log(gamePattern);
  // console.log(length);
    var buttonClicked = e.target.id
    userClickPattern.push(buttonClicked);
    var crash = new Audio('sounds/'+buttonClicked+'.mp3');
    crash.play();
      $("#"+buttonClicked).fadeOut(100).fadeIn(100);
// console.log(count);
// console.log(length);
// console.log(count);
// console.log(userClickPatternLength);
// console.log(count);
// console.log(userClickPatternLength);
// console.log(userClickPattern);
// console.log(length)
      if(count==length){
      if(gamePattern[length-1]==userClickPattern[length-1])
        {
          // console.log(gamePattern[length-1]);
          // console.log(userClickPattern);
          userClickPattern = [];
          count = 0;
          setTimeout(nextSequence,1000);
        // console.log(userClickPattern);
        //  console.log(gamePattern);
        }
        else{
          userClickPattern = [];
          gamePattern = [];
          function RemoveTimeout(){
          $("body").removeClass('game-over');
          var crash = new Audio('sounds/wrong.mp3');
          crash.play();
        }
          $("body").addClass("game-over");
          setTimeout(RemoveTimeout,100);
         $("h1").text("Game Over!!!!! press any key to start a new game")
           toggle = false;
           level = 0;
           count = 0;
         }

      }
      else{
        // console.log(count-1);
        // console.log(gamePattern[count-2]);
        // console.log(userClickPattern[count-2]);
        // console.log(count-1);
        console.log(userClickPattern[0]);
        if(gamePattern[count-1]==userClickPattern[count-1]){
          // console.log('working');
        }
        else{
          // console.log('Not Working!!!');
          gamePattern = [];
          userClickPattern = [];
              function RemoveTimeout(){
              $("body").removeClass('game-over');
            }
              $("body").addClass("game-over");
              setTimeout(RemoveTimeout,100);
              var crash = new Audio('sounds/wrong.mp3');
              crash.play();
             $("h1").text("Game Over!!!!! press any key to start a new game")
               toggle = false;
               level = 0;
               count = 0;
         }
      }
// console.log(userClickPattern);

});



// nextSequence();
