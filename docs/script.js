var bcg = document.getElementById('body');
//bcg = new Image();
bcg.style.background="url(b2.jpg)";
//bcg.width=window.innerWidth;
//bcg.height=window.innerHeight;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext('2d');
//ctx.drawImage(bcg,0,0,canvas.width,canvas.height);

var n= 100;
let arry = [];
class Particle{
    constructor(){
        this.x= Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.vx=Math.random()+1;
        this.vy=Math.random()*4;
        this.rad=Math.random()*10;
        this.ran=Math.floor(Math.random()*2);
    }
    draw(){
var txt="Under Construction";
ctx.font="50px Monospace";
ctx.textAlign="center";
ctx.fillText(txt,canvas.width/2,canvas.height/2);
       ctx.beginPath();
       ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
       let color= ["black","white"];
       ctx.fillStyle=color[this.ran];
       ctx.fill();
    //   ctx.strokeStyle= "yellow";
       //ctx.stroke();
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
   //ctx.globalopacity=0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<n;i++) {
    arry[i].update();
    arry[i].draw();
        
    }
}
pmk();
setInterval(animate,1000/30);

canvas.addEventListener("resize",function(){
  n=200;
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
    
});
function action(){
    alert();
    
}