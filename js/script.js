var text = document.getElementById('textTwitter');
var btn = document.getElementById('tweetar');
var counter = document.getElementById('counter');
btn.addEventListener('click', onClickTweetar);
btn.addEventListener('click', currentTime);
text.addEventListener('keyup', stylesCounterBtn);
text.addEventListener('keyup', autoResize);
btn.setAttribute('disabled', 'true');
btn.style.backgroundColor = '#a9a9a9';

function onClickTweetar() {
  var tweets = document.createElement('p');
  tweets.textContent = document.querySelector('#textTwitter').value;
  msg.appendChild(tweets);
  text.value = '';
  counter.innerHTML = 140;
  btn.style.backgroundColor = '#a9a9a9';
  event.preventDefault();
  btn.setAttribute('disabled', 'true');
  text.rows = 2;
}

function stylesCounterBtn() {
  btn.removeAttribute('style');
  var sizeText = 140;
  var textMsg = text.value;
  var rest = sizeText - textMsg.length;
  counter.innerHTML = rest;
  if (textMsg.length <= sizeText) {
    btn.removeAttribute('disabled');
  }
  if (textMsg.length > sizeText) {
    btn.setAttribute('disabled', 'true');
    counter.style.color = '#ff0000';
    btn.style.backgroundColor = '#a9a9a9';
  }
  if (textMsg.length > 130 && textMsg.length <= 140) {
    counter.style.color = '#0000ff';
  }
  if (textMsg.length > 120 && textMsg.length <= 130) {
    counter.style.color = '#ff00ff';
  }
  if (textMsg.trim() === '') {
    btn.setAttribute('disabled', 'true');
    btn.style.backgroundColor = '#a9a9a9';
  }
  text.style.height = '';
  text.style.height = text.scrollHeight + 'px';
}

function autoResize() {
  while (text.scrollHeight > text.offsetHeight) {
    text.rows += 1;
  }
}

function addZero(i){
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function currentTime() {
  var date = new Date();
  var hour = document.createElement('span');
  var gHour = addZero(date.getHours());
  var gMinutes = addZero(date.getMinutes());
  hour.textContent = 'Hora: ' + gHour + ':' + gMinutes;
  msg.appendChild(hour);
}
