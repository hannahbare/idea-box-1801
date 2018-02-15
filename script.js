var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');
var $section = $('.card__list');
var $searchBar = $('#searchbar');

$(document).ready(displayCardsToPage);
$saveBtn.on('click', newInstance);
$section.on('click', ('.card__icon--upvote'), changeUpvote);
$section.on('click', ('.card__icon--downvote'), changeDownvote);
$section.on('click', ('.card__icon--delete'), deleteCard);
$searchBar.on('keyup', searchCards);

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

function changeUpvote(event) {
  event.preventDefault();
  var cardId = $(this).closest('article').attr('id');
  var parseCard = getCards(cardId);
  var qualityText = $(this).siblings('h6');;
  if(parseCard.quality === 'Swill'){
    qualityText.text('quality: Plausible');
    qualityChange(cardId, 'Plausible');
  } else if (parseCard.quality === 'Plausible'){
    qualityText.text('quality: Genius');
    qualityChange(cardId, 'Genius');
  }
};

function changeDownvote(event){
  event.preventDefault();
  var cardId = $(this).closest('article').attr('id');
  var parseCard = getCards(cardId);
  var qualityText = $(this).siblings('h6');;
  if(parseCard.quality === 'Genius'){
    qualityText.text('quality: Plausible');
    qualityChange(cardId, 'Plausible');
  } else if (parseCard.quality === 'Plausible'){
      qualityText.text('quality: Swill');
      qualityChange(cardId, 'Swill');
  }
};

function deleteCard(event){
  event.preventDefault();
  var cardId = $(this).closest('article').attr('id');
  localStorage.removeItem(cardId);
  $(this).closest('article').remove();
};

function qualityChange(id, newQuality) {
  var parseCard = getCards(id);
  parseCard.quality = newQuality;
  var updatedCard = JSON.stringify(parseCard);
  localStorage.setItem(id, updatedCard);
  }

function searchCards(){
  var uiLowercase = $searchBar.val().toLowerCase();
  var articleArray = $('article');
  for(var i = 0; i < articleArray.length; i++){
    var titleText = articleArray[i].children[0].innerText.toLowerCase();
    console.log(titleText);
    // debugger;
    //turn titleText to lowercase
    var bodyText = articleArray[i].children[2].innerText;
    //turn bodytext to lowercase
    // if(searchContent === !searchContent){
    // }
  }
}

function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}




