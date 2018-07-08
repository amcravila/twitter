var text = document.getElementById('textTwitter');
var btn = document.getElementById('tweetar');
var counter = document.getElementById('counter');
var rest = document.getElementById('rest');
var form = document.getElementsByTagName('form')[0];
var hour = document.getElementById('hour');
btn.addEventListener('click', onClickTweetar);
btn.addEventListener('click', currentTime);
text.addEventListener('keyup', stylesCounterBtn);
text.addEventListener('keyup', autoResize);
btn.style.backgroundColor = '#a9a9a9';

function onClickTweetar() {
  var textMsg = text.value;
  if (textMsg !== '') {
    document.querySelector('#msg').innerHTML = textMsg;
    event.preventDefault();
    form.removeChild(counter);
    form.removeChild(rest);
    text.value = '';
  }
}

function stylesCounterBtn() {
  btn.removeAttribute('style');
  var quant = 140;
  var textMsg = text.value;
  var rest = quant - textMsg.length;
  counter.innerHTML = rest;
  if (textMsg.length <= quant) {
    btn.removeAttribute('disabled');
  }
  if (textMsg.length > quant) {
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
}

function autoResize() {
  while (text.scrollHeight > text.offsetHeight) {
    text.rows += 1;
  }
}

function currentTime() {
  var data = new Date;
  hour.innerHTML = 'Hora: ' + data.getHours() + ':' + data.getMinutes();
}
