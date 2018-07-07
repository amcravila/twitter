var text = document.getElementById('textTwitter');
var btn = document.getElementById('tweetar');
btn.addEventListener('click', onClickTweetar);
text.addEventListener('keyup', disabledBtn);
text.addEventListener('keyup', autoResize);
var hour = document.getElementById('hour');
btn.addEventListener('click', currentTime);

function onClickTweetar() {
  var textMsg = text.value;
  document.querySelector('#msg').innerHTML = textMsg;
  event.preventDefault();
}

function disabledBtn() {
  var quant = 140;
  var textMsg = text.value;
  var rest = quant - textMsg.length;
  document.getElementById('counter').innerHTML = rest;
  if (textMsg.length <= quant) {
    btn.removeAttribute('disabled');
  }
  if (textMsg.length > quant) {
    btn.setAttribute('disabled', 'true');
    document.getElementById('counter').style.color = '#ff0000';
  }
  if (textMsg.length > 130 && textMsg.length <= 140) {
    document.getElementById('counter').style.color = '#0000ff';
  }
  if (textMsg.length > 120 && textMsg.length <= 130) {
    document.getElementById('counter').style.color = '#ff00ff';
  }
}

function autoResize() {
  while (text.scrollHeight > text.offsetHeight) {
            text.rows += 1;
  }
}

function currentTime() {
  var data = new Date;
  hour.innerHTML = 'Hora: ' + data.getHours() + ':' + data.getHours();
}
