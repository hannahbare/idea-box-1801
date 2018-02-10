var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');


$saveBtn.on('click', captureVals)


function captureVals(){
  var $userTitleVal = $userInputTitle.val();
  var $userInputVal = $userInputBody.val();
  
}


  // var newCard = new Card(id, $userTitleVal, $userInputBody, quality);





// function Card(id, title, body, quality){
//   this.id = id;
//   this.title = title;
//   this.body = body;
//   this.quality = 'swill' || quality;
// }

