var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');
var $section = $('.card__list');

$(document).ready(displayCardsToPage);
$saveBtn.on('click', newInstance);

// $userInputTitle.on('keyup', enableBtns);
// $userInputBody.on('keyup', enableBtns);

// function enableBtns(){
//   if($userInputTitle.value.length > 0 && $userInputBody.value.length > 0){
//     $saveBtn.disabled = false;
//   } else {
//     $saveBtn.disabled = true;
//   }
// }

function Card(quality){
  this.id = Date.now();
  this.title = $userInputTitle.val();
  this.body = $userInputBody.val();
  this.quality = quality || 'Swill';
}

function newInstance(e){
  e.preventDefault();
  var newCard = new Card();
  prependCard(newCard);
  storeCard(newCard.id, newCard);
  getCards(newCard);
  clearInputs();
}

function prependCard(newCard) {
  $section.prepend(
    `<article id="${newCard.id}">
      <h2 contenteditable="false">${newCard.title}</h2>
      <button class="card__icon card__icon--delete"></button>
      <p contenteditable="false">${newCard.body}</p>
      <button class="card__icon card__icon--upvote bottom"></button>
      <button class="card__icon card__icon--downvote bottom"></button>
      <h6 class="bottom">quality: ${newCard.quality}</h6>
    </article>`);
}

function storeCard(id, newCard) {
  var stringifiedNewCard = JSON.stringify(newCard);
  localStorage.setItem(id, stringifiedNewCard);
}

function getCards(newCard){
  var getCard = localStorage.getItem(newCard);
  var parseCard = JSON.parse(getCard);
  return parseCard;
}

function displayCardsToPage(){
  for(var i = 0; i < localStorage.length; i++){
    var storedCard = getCards(localStorage.key(i));
    prependCard(storedCard);
  }
}

$section.on('click', ('.card__icon--upvote'), function(event){
  event.preventDefault();
  var cardId = $(this).closest('article').attr('id');
  var getCard = localStorage.getItem(cardId);
  var parseCard = JSON.parse(getCard);
  var qualityText = $(this).siblings('h6');;
  if(parseCard.quality === 'Swill'){
    qualityText.text('quality: Plausible');
    qualityChange(cardId, 'Plausible');
  } else if (parseCard.quality === 'Plausible'){
      qualityText.text('quality: Genius');
      qualityChange(cardId, 'Genius');
  }
});

function qualityChange(id, newQuality) {
  var cardId = localStorage.getItem(id);
  var parsedCard = JSON.parse(cardId);
  parsedCard.quality = newQuality;
  var cardId = JSON.stringify(parsedCard);
  localStorage.setItem(id, cardId);
  }


function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}

//--------------------------------------------------
//make a function to toggle on page
//make that toggling persist
//make a function to delete on page
//make 
//contenteditable -- 
  //find specific id
  //run getCards
  // var parsedCard = getCards();
  //make change to the card
  //run storeCard();
