const image = document.getElementById('image');
//const range = document.getElementById('range').value;
image.width= window.innerwidth;
var source = "http://noisyboy.github.io/av.mp3";
let audio = new Audio(source);
audio.autoplay=true;
audio.addEventListener("load",function(){
audio.play();
});
image.addEventListener("mouseover", function() {
audio.play();  
alert("Don't dare to touch me");
  if (confirm(" *Do you think that Noisy is smart ?")){
alert("*** Thanks a lot,I Appreciate it ***");  
}
else{alert(" ! You are an Asshole");}
}, true);
