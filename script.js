var z=document.getElementById("c1");
var c=z.getContext("2d");
var nr=200;
var size=60;
c.strokeStyle="green";
for(i=60;i<nr;i=i+3)
{c.beginPath();
c.moveTo(i,i);
c.lineTo(i+size,i);
c.lineTo(i+size/2,i-50);
c.lineTo(i,i);
c.stroke();

}