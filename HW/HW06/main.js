//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

class HeartObject
{
    constructor(x, y, color, scale, seta)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.seta = seta;
        this.color = color;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        var radius = 5;
        ctx.moveTo(this.x,this.y);

        for(var i = 0; i < Math.PI; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = -radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = 0;
            var ry = -radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * -Math.sin(i));
            ry = (tempX * Math.sin(i) + tempY * Math.cos(i));

            ry += radius * 2;

            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = -radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * -Math.sin(i));
            ry = (tempX * Math.sin(i) + tempY * Math.cos(i));

            rx += radius *2;
            ry += radius * 2;

            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = 0;
            var ry = radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx += radius *2;
      

            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx += radius *2;
      
            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }

        for(var i = 0; i < Math.PI / 2 ; i += 0.01)
        {
            var rx = 0;
            var ry = -radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx += radius *2;
      
            rx -= radius;

            rx *=this.scale;
            ry *=this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx, ry);
        }
        ctx.fill();
    }
}

class Vector
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
}

class Effector
{
    constructor(x, y, color, particleScale, speed, direction, seta)
    {
        this.x= x;
        this.y= y;
        this.color= color;
        this.scale= particleScale;
        this.speed = speed;
        this.particle = new HeartObject(this.x, this.y, this.color, this.scale, seta);
        this.direction = direction;
    }

    draw()
    {
        this.particle.x +=(this.direction.x * this.speed);
        this.particle.y +=(this.direction.y * this.speed);
        this.particle.draw();
    }
}


var prevPosX = 0;
var prevPosY = 0;

var posX = 0;
var posY = 0;

canvas.onmousemove = (e) =>
{
    posX = e.offsetX;
    posY = e.offsetY;
}

var pool = [];

var prevTime = new Date();

setInterval(() => {
    ctx.fillStyle = canvas.style.backgroundColor;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    var currnetTime = new Date();
    if(currnetTime.getTime() - prevTime.getTime() > 200)
    {
        var direction = new Vector(prevPosX - posX, prevPosY - posY);
        var magnitube = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
        direction = new Vector(direction.x / magnitube, direction.y / magnitube);
        pool.push(new Effector(
            posX,
            posY,
            "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16),
            Math.random() * 8 + 1,
            5,
            direction,
            Math.atan2(direction.x, direction.y)
        ));
        if(pool.length > 100)
        {
            pool.shift();
        }
        prevPosX = posX;
        prevPosY = posY;
        prevTime = new Date();
    };

    for(var i = 0; i < pool.length; i++)
    {
        pool[i].draw();
    };
    
}, 10);
