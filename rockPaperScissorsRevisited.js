hands = ['rock','scissors','paper'];

function getHand(){
  return hands[parseInt((Math.random() * 10) % 3)];
}

var ey = {
  name: 'EY',
  getHand: getHand,
};

var james = {
  name: 'James',
  getHand: getHand,
};

var chris = {
  name: 'Chris',
  getHand: getHand,
};

var julie = {
  name: 'Julie',
  getHand: getHand,
};

var player1Score = 0;
var player2Score = 0;

var playRound = function(player1,player2){

  var player1Pick = player1.getHand();
  console.log(player1.name + ' picked ' + player1Pick);
  var player2Pick = player2.getHand();
  console.log(player2.name + ' picked ' + player2Pick);

  if(player1Pick=== player2Pick){
    console.log('it\'s a tie');
  } else if(
    player1Pick == 'rock' && player2Pick == 'scissors'
    ||
    player1Pick == 'scissors' && player2Pick == 'paper'
    ||
    player1Pick == 'paper' && player2Pick == 'rock'
    ){
    player1Score++;
    return console.log(player1.name + ' win!');
  }else {
    player2Score++;
    return console.log(player2.name + ' win!');
  }
};

var playGame = function(player1,player2,playUntil) {
     while(player1Score <= playUntil && player2Score <= playUntil){
        playRound(player1,player2);
     }
};

playGame(ey,julie,5);

if(player1Score > player2Score){
  return console.log( player1.name +' is the winner!');
} else{
  return console.log( player2.name +' is the winner!');
}
