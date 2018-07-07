var text = document.querySelector('#textTwitter');

function onClickTweetar() {
  var textMsg = text.value;
  document.querySelector('#msg').innerHTML = textMsg;
  event.preventDefault();
}

function limitTextarea(value) {
    quant = 140;
    total = value.length;
    if(total <= quant) {
        rest = quant - total;
        document.getElementById('counter').innerHTML = rest;
    } else {
        document.getElementById('textTwitter').value = value.substr(0,quant);
    }
}

// var tweet = document.getElementsByClassName("tweets")[0];
// var myButton = document.getElementsByClassName("btn")[0];
// var mensage = document.getElementById("mensages");
// var paragraph = document.getElementById("paragraphs");
//
//
// tweet.addEventListener("keyup", textEntered);
//
// function textEntered(/*event*/){
//     myButton.setAttribute("class", "pressed");
//     event.preventDefault();
// }
// console.log(myButton);
//
// // myButton.addEventListener("click", transformInTweet());
//
// myButton.addEventListener("click", event => {
//     event.preventDefault();
//    transformInTweet();
// });
//
// function transformInTweet(){
//     var div = document.createElement("div");
//     div.className = "post";
//     div.innerHTML = tweet.value;
//     mensage.appendChild(div);
// }
