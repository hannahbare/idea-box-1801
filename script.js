var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');


$saveBtn.on('click', appendCard);
$('card__icon--upvote').on('click', toggleUpvote);
$('card__icon--downvote').on('click', toggleDownvote);

function appendCard(){
  var newCard = new Card;
  var $section = $('.card__list');
  $section.prepend(`<article>
      <h2 contenteditable="false">${newCard.title}</h2>
      <img src="assets/delete.svg" class="card__icon" id="card__icon--delete">
      <p contenteditable="false">${newCard.body}</p>
      <div class="card__icon--votes">
        <img src="assets/upvote.svg" class="card__icon" id="card__icon--upvote">
        <img src="assets/downvote.svg" class="card__icon" id="card__icon--downvote">
      </div>
      <h6>quality: ${newCard.quality}</h6>
    </article>`);
  clearInputs();
}

function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}

  // var newCard = new Card(date.now(), $userTitleVal, $userBodyVal);
//create a new instance- capturing the id (JSON)

function Card(id, title, body){
  this.id = id;
  this.title = $userInputTitle.val();
  this.body = $userInputBody.val();
  this.quality = 'Swill';
}

Card.prototype.toggleUpvote = function(){
  // console.log('&userBodyVal');
  if(this.quality === 'Swill'){
      this.quality = 'Plausible';
  } else if (this.quality === 'Plausible'){
    this.quality = 'Genius';
  }
}

Card.prototype.toggleDownvote = function(){
    if(this.quality === 'Genius'){
      this.quality = 'Plausible';
  } else if (this.quality === 'Plausible'){
    this.quality = 'Swill';
  }
}













