var long = document.getElementsByClassName("long");
var nb;

var myVar = setInterval(function(){
  var fade = document.getElementsByClassName("fade");
  var short = document.getElementsByClassName("short");
  var prem = document.getElementsByClassName("article-premium-locked");
  var info = document.getElementsByClassName("info-text");
  var premBot = document.getElementsByClassName("premium-bottom");

  long[0].style.display = "block";
  fade[0].style.display = "none";
  short[0].style.display = "none";
  prem[0].style.display = "none";
  info[0].style.display = "none";
  premBot[0].style.display = "none";

  nb = long.length + fade.length + short.length + prem.length + info.length + premBot.length;
  chrome.runtime.sendMessage({
    method:'setTitle',
    title:nb
  });
}, 5000);
