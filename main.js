// setup canvas

import { random } from './random';

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
})

// define Ball constructor

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// define ball draw method

Ball.prototype.draw = function(context) {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  context.fill();
};

// define ball update method

Ball.prototype.update = function(screenSize) {
  if((this.x + this.size) >= screenSize.width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= screenSize.height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function(ballsArr) {
  for(var j = 0; j < ballsArr.length; j++) {
    if(!(this === ballsArr[j])) {
      var dx = this.x - ballsArr[j].x;
      var dy = this.y - ballsArr[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ballsArr[j].size) {
        ballsArr[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};

// define array to store balls

var balls = [];
var screenSize = {width:width,height:height};

// define loop that keeps drawing the scene constantly

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  while(balls.length < 25) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      random(10,20)
    );
    balls.push(ball);
  }

  for(var i = 0; i < balls.length; i++) {
    balls[i].draw(ctx);
    balls[i].update(screenSize);
    balls[i].collisionDetect(balls);
  }

  requestAnimationFrame(loop);
}



loop();