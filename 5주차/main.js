//translate(x,y) 좌표설정

// Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

draw();
// setInterval(draw, 1000.0/60.0)

var earthAngle = 0;
var moonAngle = 0;
var sunselfAngle = 0;
var earthselfAngle = 0;
var moonselfAngle = 0;


function draw() {
    sunselfAngle += Math.PI / 100; //태양자전
    earthAngle -= Math.PI / 200; //지구공전
     moonAngle += Math.PI / 100; // 달 공전
    earthselfAngle += Math.PI / 150; //지구자전
    moonselfAngle += Math.PI / 80; // 달자전
    

    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.save();
    ctx.fillStyle = "red";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(sunselfAngle);
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "blue";
    ctx.translate(canvas.width/2+200*Math.cos(earthAngle),canvas.height/2+200*Math.sin(earthAngle));
    ctx.rotate(earthselfAngle);
    ctx.fillRect(-30, -30, 60, 60);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "gray";
    ctx.translate(canvas.width/2+200*Math.cos(earthAngle)+75*Math.cos(moonAngle),canvas.height/2+200*Math.sin(earthAngle)+75*Math.sin(moonAngle));
    ctx.rotate(moonselfAngle);
    ctx.fillRect(-15, -15, 30, 30);
    ctx.restore();

    requestAnimationFrame(draw);
}

// // 다음 프레임 요청 (requestAnimationFrame 안쓸 때)
// setInterval(draw, 1000.0/60.0);

// 다음 프레임 요청 (setInterval 안쓸 때)
// requestAnimationFrame(draw);

//Math.cos(앵글값)
//Math.sin(앵글값)

//태양의 x축 값(가운데) : canvas.width/2.
//height : 똑같음

//태양 : 100 * 100
//지구 : 75 * 75
//달 : 10 * 10