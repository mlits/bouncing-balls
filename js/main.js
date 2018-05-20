// import of modules
import { random } from './modules/random';
import { Ball } from './modules/ball';

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const screenSize = { width, height };

window.addEventListener('resize', () => {
  width = canvas.width = screenSize.width = window.innerWidth;
  height = canvas.height = screenSize.height = window.innerHeight;
});

// define array to store balls

const balls = [];

// define loop that keeps drawing the scene constantly

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    const ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7, 0),
      random(-7, 7, 0),
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
