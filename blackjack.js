//doc ready
$(document).ready(function(){
  $('#hit-button').hide();
  $('#stand-button').hide();
  //deal button
  $('#deal-button').click(function(){

    var img1 = getCardImageUrl(playerHand[0]);
    var img2 = getCardImageUrl(playerHand[1]);

    var img3 = getCardImageUrl(dealerHand[0]);
    var img4 = getCardImageUrl(dealerHand[1]);

    $('#player-hand').prepend(`<img src="${img1}" height="100" width="75"/>`);
    $('#player-hand').prepend(`<img src="${img2}" height="100" width="75"/>`);

    $('#dealer-hand').prepend(`<img src="${img3}" height="100" width="75"/> `);
    $('#dealer-hand').prepend(`<img src="${img4}" height="100" width="75"/> `);
    $('#deal-button').hide();
    $('#hit-button').show();
    $('#stand-button').show();
  });
  //hit button
  $('#hit-button').click(function(){
    $('#player-hand').prepend('<img src="images/jack_of_hearts.png" height="100" width="75"/>' );
  });













});
//doc end
