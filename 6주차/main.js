//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");



draw();

var radius = 50;
function draw()
{

    ctx.beginPath();
    for (var angle = 0; angle < Math.PI * 2; angle += 0.01)
    {
        var x = 200 + radius * Math.cos(angle);
        var y = 200 + radius * Math.sin(angle);
    }
    ctx.arc(canvas.width / 2, canvas.height / 2 , 100, 0, 2*Math.PI)
    ctx.stroke();
    ctx.fill();

    requestAnimationFrame(draw);
}