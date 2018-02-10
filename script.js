var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');


$saveBtn.on('click', newInstance);


function newInstance(){
  var $userTitleVal = $userInputTitle.val();
  var $userBodyVal = $userInputBody.val();
  appendCard($userTitleVal, $userBodyVal);
  clearInputs();
}

function appendCard(title, body){
  var $section = $('section');
  $section.append(`<article>
      <h2 contenteditable="false">${title}</h2>
      <img src="assets/delete.svg" class="card__icon" id="card__icon--delete">
      <p contenteditable="false">${body}</p>
      <div class="card__icon--votes">
        <img src="assets/upvote.svg" class="card__icon">
        <img src="assets/downvote.svg" class="card__icon" id="card__icon--downvote">
      </div>
      <h6>quality:</h6>
    </article>`);   
}

function clearInputs(){
  $userInputTitle.val('');
  $userInputBody.val('');
}

  // var newCard = new Card(date.now(), $userTitleVal, $userBodyVal);
//create a new instance- capturing the id (JSON)
//
//append the information to the bottom section-- template literals




function Card(id, title, body, quality){
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'swill' || quality;
}


