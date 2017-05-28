
//Card Constructor
function Card (point,suit){
  this.point = point;
  this.suit = suit;
} //Get Img Method
Card.prototype.getImgUrl = function(){
  if(this.point===1){
    return ("images/ace_of_"+this.suit+".png");
  }
  else if (this.point===11) {
      return ("images/jack_of_"+this.suit+".png");
  }
  else if (this.point===12) {
      return ("images/queen_of_"+this.suit+".png");
  }
  else if (this.point===13) {
      return ("images/king_of_"+this.suit+".png");
  }

  return ("images/"+this.point+"_of_"+this.suit+".png");

}
// Deck Constructor
function Deck(){
  this.deck = [];
  for (var x=1;x<=13;x++){
    this.deck.push(new Card(x,'spades'));
    this.deck.push(new Card(x,'clubs'));
    this.deck.push(new Card(x,'diamonds'));
    this.deck.push(new Card(x,'hearts'));
  }
  //Shuffle while making new deck
  for (var i = this.deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
  }
}
//Draw Method
Deck.prototype.draw = function(){
  return this.deck.pop();
}


//Hand Constructor
function Hand(){
  this.hand = [];
}//Push Card Into Hand Method
Hand.prototype.addCard = function(card){
  this.hand.push(card);
}
//Calls Deck Draw and Hand Draw
function deal(){
  hand.addCard(deck.draw());
}
//calculatePoints in Hand
Hand.prototype.getPoints=function(){
  var counter = 0;
  for(var h = 0;h<this.hand.length;h++){
    var point = this.hand[h].point;
      if (point > 10) {
      counter = counter + 10;
      }
      else if (point ==1){
       counter = counter + 11;
      } else{
        counter=counter+point;
      }
  }
    return counter ;
  };

var deck=new Deck();
var dealerHand= new Hand();
var playerHand= new Hand();
var card = new Card();
