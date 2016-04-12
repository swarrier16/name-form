// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

  var playerFirstName = ' ';
  var playerMiddleName = '';
  var playerLastName = '';

  $('#first-name').focus();
  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerFirstName = $('#player-first-name').val();
    $('#show-player-first-name').text(playerFirstName);
  })


  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerMiddleName = $('#player-middle-name').val();
    $('#show-player-middle-name').text(playerMiddleName);
  })
  

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerLastName = $('#player-last-name').val();
    $('#show-player-last-name').text(playerLastName);
  })
  
}) // ready function ends

