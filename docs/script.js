canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext('2d');   


var txt="NOISY_BOY";// window.prompt("Enter a String");
//
var n= 500;
var arr = ["0","1"];
let arry = [];
class Particle{
    constructor(){
        this.x= Math.random()*canvas.width;
        this.y=0;//Math.random()*canvas.height;
        this.vx=0;
        this.vy=Math.random()*10;
        this.rad=1;
        this.ran=Math.floor(Math.random()*2);
    }
    draw(){

ctx.font="50px Monospace";
ctx.textAlign="center";
ctx.fillText(txt,canvas.width/2,canvas.height/2);
ctx.font="18px Monospace";
       ctx.beginPath();
      ctx.fillText(arr[this.ran],this.x,this.y);
     //  ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
       ctx.fillStyle="cyan";
       ctx.fill();
    }
    update(){
        this.x+=this.vx;
        this.y+=this.vy;
        this.draw();
        
if (this.x - this.rad > canvas.width || this.x+this.rad < 0) {
 this.x = 0;
 //this.y=0;
}
if (this.y > canvas.height) {
 this.y =0;  
}
    }
}
function pmk(){
    for(var i=0;i< n;i++){
    arry.push(new Particle());
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    for (var i = 0; i<n;i++) {
    arry[i].update();
    arry[i].draw();
        
    }

}
pmk();
setInterval(animate,1000/10);

canvas.addEventListener("resize",function(){
  n=200;
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
    
});
 // setInterval(function(){ctx.clearRect(0, 0, canvas.width, canvas.height)},1000);
function music(){
    var audio = new Audio();
    audio.src="av.mp3";
    audio.loop=true;
    audio.play();    
}


