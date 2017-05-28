//doc ready
$(document).ready(function(){
  $('#hit-button').hide();
  $('#stand-button').hide();
  $('#restart-button').hide();
  //deal button
  $('#deal-button').click(function(){
    playerHand.addCard(deck.draw());
    playerHand.addCard(deck.draw());
    dealerHand.addCard(deck.draw());
    dealerHand.addCard(deck.draw());

    var playerPoint = playerHand.getPoints();
    var dealerPoint = dealerHand.getPoints();

    var img1 = playerHand.hand[0].getImgUrl();

    var img2 = playerHand.hand[1].getImgUrl();

    var img3 = dealerHand.hand[0].getImgUrl();
    var img4 = dealerHand.hand[1].getImgUrl();

    $('#player-hand').prepend(`<img src="${img1}" height="100" width="75"/>`);
    $('#player-hand').prepend(`<img src="${img2}" height="100" width="75"/>`);

    $('#dealer-hand').prepend(`<img src="${img3}" height="100" width="75"/> `);
    $('#dealer-hand').prepend(`<img src="${img4}" height="100" width="75"/> `);

    $('#deal-button').hide();
    $('#hit-button').show();
    $('#stand-button').show();
    $('#player-points').html(`${playerPoint}`);
  });
  //hit button
  $('#hit-button').click(function(){
    var card = deck.draw();
    playerHand.addCard(card);
    var img = card.getImgUrl();
    playerPoint = playerHand.getPoints();
    dealerPoint = dealerHand.getPoints();
    $('#player-hand').prepend('<img src="' + img + '" height="100" width="75"/>' );
    $('#player-points').html(`${playerPoint}`);
    if (playerPoint>21){
      $('#hit-button').hide();
      $('#stand-button').hide();
      //Bust
      $('#dealer-points').html(`${dealerPoint}`);
      $('#messages').html("Bust")
      $('#restart-button').show();
    }
    //dealer also Draw

      //hit button end
  });
    //stand button
    $('#stand-button').click(function(){
      $('#hit-button').hide();
      $('#stand-button').hide();
      dealerPoint = dealerHand.getPoints();
      playerPoint = playerHand.getPoints();
      $('#dealer-points').html(`${dealerPoint}`);
      while(dealerPoint<17){
        card = deck.draw();
        dealerHand.addCard(card);
        img = card.getImgUrl();
        dealerPoint = dealerHand.getPoints();
        $('#dealer-hand').prepend('<img src="' + img + '" height="100" width="75"/>' );
        $('#dealer-points').html(`${dealerPoint}`);
        if (dealerPoint>21){
          $('#messages').html("You win!");
          $('#restart-button').show();
        }
      }
      if (playerPoint>dealerPoint && playerPoint<=21){
        $('#dealer-points').html(`${dealerPoint}`);
        $('#messages').html("You win!");
        $('#restart-button').show();
      }
      else if (dealerPoint>playerPoint && dealerPoint<=21){
        $('#dealer-points').html(`${dealerPoint}`);
        $('#messages').html("You lose.")
        $('#restart-button').show();
      }
      else if (dealerPoint===playerPoint){
        $('#dealer-points').html(`${dealerPoint}`);
        $('#messages').html("Draw");
        $('#restart-button').show();
      }
      else{
        $('#messages').html("You win!");
        $('#restart-button').show();
      }
    });//stand button end
    //restart button
    $('#restart-button').click(function(){
      //clear html
      $('#messages').html("");
      $('#dealer-points').html("");
      $('#player-points').html("");
      $('#dealer-hand').html("");
      $('#player-hand').html("");
      //button hide/show
      $('#hit-button').hide();
      $('#stand-button').hide();
      $('#restart-button').hide();
      $('#deal-button').show();
      //hand reset
      playerHand = new Hand();
      dealerHand = new Hand();

      deck = new Deck();
      card = new Card();
      playerPoint = playerHand.getPoints();
      dealerPoint = dealerHand.getPoints();

    });//restart button end













});
//doc end
