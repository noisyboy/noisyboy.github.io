const image = document.getElementById('image');
//const range = document.getElementById('range').value;
image.width= window.innerwidth;
var source = "http://noisyboy.github.io/av.mp3";
let audio = new Audio(source);
image.addEventListener("mouseup", function() {
  alert("Don't dare to touch me");
  if (confirm(" *Do you think that Noisy is smart ?")){
  audio.play();
  }
  else {audio.pause();}
}, true);
