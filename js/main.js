// import of modules
import { random } from './modules/random';
import { Ball } from './modules/ball';

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// define ball draw method

Ball.prototype.draw = function (context) {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  context.fill();
};

// define ball update method

Ball.prototype.update = function (screenSize) {
  if ((this.x + this.size) >= screenSize.width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= screenSize.height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function (ballsArr) {
  for (let j = 0; j < ballsArr.length; j++) {
    if (!(this === ballsArr[j])) {
      const dx = this.x - ballsArr[j].x;
      const dy = this.y - ballsArr[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ballsArr[j].size) {
        ballsArr[j].color = this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
      }
    }
  }
};

// define array to store balls

const balls = [];
const screenSize = { width, height };

// define loop that keeps drawing the scene constantly

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    const ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
      random(10, 20)
    );
    balls.push(ball);
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw(ctx);
    balls[i].update(screenSize);
    balls[i].collisionDetect(balls);
  }

  requestAnimationFrame(loop);
}


loop();
