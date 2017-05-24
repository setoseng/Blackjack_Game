var deck=[];
var dealerHand=[];
var playerHand=[];
var card;
var img=[];
function newdeck(){
  for (var x=1;x<=13;x++){
    deck.push({point: x,suit:'spades'});
    deck.push({point: x,suit:'clubs'});
    deck.push({point: x,suit:'diamonds'});
    deck.push({point: x,suit:'hearts'});
  }
}

function deal(){
  card=deck.pop();
  playerHand.push(card);
  card=deck.pop();
  playerHand.push(card);

  card=deck.pop();
  dealerHand.push(card);
  card=deck.pop();
  dealerHand.push(card);
  console.log(playerHand);
  return playerHand;
  return dealerHand;


}

function getCardImageUrl(card){
  var points=card.point;
  var suits = card.suit;
  if(points==1){
    points = 'ace';
  }
  else if (points==11) {
      points='jack';
  }
  else if (points==12) {
      points='queen';
  }
  else if (points==13) {
      points='king';
  }
  var url = "images/"+points+"_of_"+suits + ".png";
  return url;
};

function calculatePoints(card){
  var points=card.point;
  var suits = card.suit;
  var handPoint = 0;
  if(points=="ace"){
    handPoint +=1;
  }
  else if(points=="jack"||points=="queen"||points=="king"){
    handPoint +=10;
  }
  return handPoint;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
newdeck();
deck = shuffleArray(deck);
deal();
handPoint = calculatePoints(playerHand);
