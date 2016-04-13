chrome.runtime.sendMessage({method:'getTitle'}, function(response){
  document.getElementById("message").innerHTML = response + "élements bloqués";
});
