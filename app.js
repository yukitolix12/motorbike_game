var c = document.createElement("canvas"); 
var ctx = c.getContent("2d");
c.width = 500;
c.height = 350;

document.body.appendChild(c);

function loop() {

    requestAnimationFrame(loop);
}