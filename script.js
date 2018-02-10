var $userInputTitle = $('#userinput__title');
var $userInputBody = $('#userinput__body');
var $saveBtn = $('#userinput__btn');

function card(id, title, body, quality){
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'swill' || quality;
}

