//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var colors = ["E5CCFF", "black", "blue","magneta","pink","cyan","CCFFFF"];

class HeartObject{
    constructor(col, radius, positionX, positionY){
        this.color=col;
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
        }
    draw(){
        ctx.beginPath();
        for (var angle = 0; angle < Math.PI * 2; angle += 0.01)
        {
            var x = this.positionX + this.radius * Math.cos(angle);
            var y = this.positionY + this.radius * Math.sin(angle);
            ctx.lineTo(x,y);
        }
        var ColorIndex = Math.floor(Math.random()*6);
        ctx.fillStyle = colors[ColorIndex];  
        ctx.fill();
        ctx.closePath();
    }
}





function draw()
{
    var Circle = new HeartObject ("Blue", Math.random()*100, Math.random()*500, Math.random()*500)
    Circle.draw();
    requestAnimationFrame(draw);
}

draw();