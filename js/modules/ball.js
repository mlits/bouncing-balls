// import of modules
import { random } from './random';

// define Ball constructor
export function Ball(x, y, velX, velY, color, size) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.color = color;
	this.size = size;
}

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