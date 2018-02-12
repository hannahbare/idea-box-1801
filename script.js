var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');

$saveBtn.on('click', newInstance);

function Card(){
  this.id = Date.now();
  this.title = $userInputTitle.val();
  this.body = $userInputBody.val();
  this.quality = 'Swill';
}

function newInstance(e){
  e.preventDefault();
  var newCard = new Card();
  appendCard(newCard);
  storeCard(newCard.id, newCard);
  clearInputs();
}

function appendCard(newCard) {
  var $section = $('.card__list');
  $section.prepend(`<article id="${newCard.id}">
      <h2 contenteditable="false">${newCard.title}</h2>
      <img src="assets/delete.svg" class="card__icon" id="card__icon--delete">
      <p contenteditable="false">${newCard.body}</p>
      <div class="card__icon--votes">
        <img src="assets/upvote.svg" class="card__icon" id="card__icon--upvote">
        <img src="assets/downvote.svg" class="card__icon" id="card__icon--downvote">
      </div>
      <h6>quality: ${newCard.quality}</h6>
    </article>`);
  console.log(newCard.id)
}

function storeCard(id, newCard) {
  var stringifiedNewCard = JSON.stringify(newCard);
  var stringifiedId = JSON.stringify(id);
  localStorage.setItem(stringifiedId, stringifiedNewCard);
};

function myStore(string1, string2){
  localStorage.setItem(string1, string2);
}

function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}

// Card.prototype.toggleUpvote = function(quality){
//   //hey card-- i need you. now I need to see your quality and let's change it
//   if(quality === 'Swill'){
//       this.quality = 'Plausible';
//   } else if (this.quality === 'Plausible'){
//     this.quality = 'Genius';
//   }
// }

// Card.prototype.toggleDownvote = function(){
//     if(this.quality === 'Genius'){
//       this.quality = 'Plausible';
//   } else if (this.quality === 'Plausible'){
//     this.quality = 'Swill';
//   }
// }



