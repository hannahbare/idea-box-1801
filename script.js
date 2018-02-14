var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');
var $section = $('.card__list');

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
  this.quality = 'Swill' || quality;
}

function newInstance(e){
  e.preventDefault();
  var newCard = new Card();
  appendCard(newCard);
  storeCard(newCard.id, newCard);
  getCards(newCard);
  clearInputs();
  // enableBtns();
}

function appendCard(newCard) {
  $section.prepend(`<article id="${newCard.id}">
      <h2 contenteditable="false">${newCard.title}</h2>
      <button class="card__icon card__icon--delete"></button>
      <p contenteditable="false">${newCard.body}</p>
      <div class="card__icon--votes">
        <button class="card__icon card__icon--upvote"></button>
        <button class="card__icon card__icon--downvote"></button>
      </div>
      <h6>quality: ${newCard.quality}</h6>
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

$(document).ready(displayCardsToPage);

function displayCardsToPage(){
  for(var i = 0; i < localStorage.length; i++){
    var storedCard = getCards(localStorage.key(i));
    // console.log (localStorage.key(i));
    appendCard(storedCard);
  }
}

//--------------------------------------------------
//make a function to toggle on page
//make that toggling persist
//make a function to delete on page
//make 
//contenteditable -- 

function toggleUpvote(id){
  var id = $(this).closest('article').attr('id');
  console.log(id);
  //find specific id
  //run getCards
  var parsedCard = getCards();
  //make change to the card
  //run storeCard();


  // var articleId = document.getElementById(id);
  // var target = event.target.id;
  // target.find('#card__icon--upvote');

  // console.log(target);






  if(quality === 'Swill'){
      this.quality = 'Plausible';
  } else if (this.quality === 'Plausible'){
    this.quality = 'Genius';
  }
}

//the child button with the article with that key id


function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}


// Card.prototype.toggleDownvote = function(){
//     if(this.quality === 'Genius'){
//       this.quality = 'Plausible';
//   } else if (this.quality === 'Plausible'){
//     this.quality = 'Swill';
//   }
// }



