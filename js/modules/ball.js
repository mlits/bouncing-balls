// import of modules
import { random } from './random';

// define Ball constructor
export class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // define ball draw method
  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fill();
  }

  // define ball update method
  update(screenSize) {
    if ((this.x + this.size) >= screenSize.width) {
      if (this.velX > 0) {
        this.velX = -(this.velX);
      }
      //this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= screenSize.height) {
      if (this.velY > 0) {
        this.velY = -(this.velY);
      }
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // define ball collision detection
  collisionDetect(ballsArr) {
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
  }
}
