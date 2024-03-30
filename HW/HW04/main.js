//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327029;

//const = 고정값,상수
const SEGMENT_HORIZONTAL_SIZE = 1;
const SEGMENT_VERTICAL_SIZE = 4;

drawNum(studentID);

function drawNum(num)
{
    var digit = 0;
    for (var i = num; parseInt(i) != 0; i /= 10)
        digit++;
    
    var fontSize = 8;

    var padding = (SEGMENT_VERTICAL_SIZE * fontSize) + (SEGMENT_HORIZONTAL_SIZE * 4 * fontSize) + (fontSize * 0.8) + fontSize;
    for (var i = 0; i < digit; i++)
    {
        var digitNum = num / (10 ** (digit -  (i + 1)));
        num %= (10 ** (digit - (i + 1)));
        drawSevenSegment(padding * i, 0, fontSize, digitNum)
    }
}

function drawSevenSegment(x, y, fontSize, num)
{
    if (num > 9)
        return;

    var padding = fontSize * 0.5;

    const SEGMENT_SIZE = (SEGMENT_VERTICAL_SIZE * fontSize) / 2 + SEGMENT_HORIZONTAL_SIZE * fontSize;

    var A = num & 0b1000;
    A = A >> 3;
    var B = num & 0b0100;
    B = B >> 2;
    var C = num & 0b0010;
    C = C >> 1;
    var D = num & 0b0001;

    //a
    if((!B & !D) | C | (B & D) | A)
    drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_HORIZONTAL_SIZE * fontSize + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false)
    
    //b
    if(!B | (!C & !D) | (C & D))
    drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + x, SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    //c
    if(!C | D | B)
    drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + x, (SEGMENT_SIZE * 3) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true);
    
    //d
    if((!B & !D) | (!B & C) | (B & !C & D) | (C & !D) | A )
    drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, (SEGMENT_SIZE * 4) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 4 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false )
    
    //e
    if((!B & !D) | (C & !D))
    drawSegment(SEGMENT_HORIZONTAL_SIZE * fontSize + x, (SEGMENT_SIZE * 3) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true)
    
    //f
    if((!C & !D) | (B & !C) | (B & !D) | A)
    drawSegment(SEGMENT_HORIZONTAL_SIZE * fontSize + x, SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true)
    
    //g
    if((!B & C) | (B & !C) | A | (B & !D))
    drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 2 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false)
}

 

//x,y= 중간 기점 좌표   
//segmentSize 사이즈
function drawSegment(x, y, segmentSize, hSize, vSize,isVertical)
{
    ctx.beginPath();

    // 현재  ctx 브러쉬의 위치
    var currentX = x;
    var currentY = y;

    // vertical, orizontal
    vSize *= segmentSize;
    hSize *= segmentSize;

    if(isVertical)
    {
        ctx.moveTo(currentX, currentY -= ((vSize /2)+ hSize));
        ctx.lineTo(currentX += hSize, currentY += hSize);
        ctx.lineTo(currentX, currentY += vSize);
        ctx.lineTo(currentX -= hSize, currentY += hSize)
        ctx.lineTo(currentX -= hSize, currentY -= hSize)
        ctx.lineTo(currentX, currentY -= vSize);
        ctx.lineTo(currentX += hSize, currentY -= hSize);
    }else
    {
        ctx.moveTo(currentX -= ((vSize /2) +hSize),currentY);
        ctx.lineTo(currentX += hSize, currentY -= hSize)
        ctx.lineTo(currentX += vSize ,currentY);
        ctx.lineTo(currentX += hSize, currentY +=hSize);
        ctx.lineTo(currentX -= hSize, currentY +=hSize);
        ctx.lineTo(currentX -= vSize, currentY);
        ctx.lineTo(currentX -= hSize, currentY -=hSize);
    }
    
    ctx.fill();


}


// (50,300) (974,300) magenta 3
ctx.beginPath();
ctx.moveTo(50,canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

drawNum(studentID);     //화면 우측 상단에 숫자 쓰기