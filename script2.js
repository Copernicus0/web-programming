var g=document.getElementById("c3");
var c=g.getContext("2d");

function square(x,y,width){
c.strokeRect(x,y,width,width);
}
c.fillStyle="rgba(40,40,40,0.5)";
c.fillRect(50,40,200,200);
square(50,40,200);
c.fillStyle="rgba(20,40,240,0.5)";
c.fillRect(70,70,60,60);
square(70,70,60);
c.fillStyle="rgba(20,40,240,0.5)";
c.fillRect(170,70,60,60);
square(170,70,60);
c.fillStyle="rgba(20,244,140,0.5)";
c.fillRect(80,170,145,40);
c.strokeRect(80,170,145,40);