// screen width is 640, height is 400
const log = console.log;

// sprites are scaled x2 by default
let imgBall = spriteArt(`
..wwww..
.wwyyww.
wwywwyww
wyyyyyyw
wyyyyyyw
wwywwyww
.wwyyww.
..wwww..`);

let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' +
	'www..www\nww.ww.ww\n'.repeat(21) + 'wwwwwwww\n.wwwwww.');

let imgWall = spriteArt(('w'.repeat(320) + '\n').repeat(3));

class Ball {

	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.w = r * 2;
		this.h = r * 2;

		this.speed = 4;
		this.changeDirection();
	}

	reset() {
		this.x = width / 2 - this.w / 2;
		this.y = height / 2 - this.h / 2;
	}

	changeDirection() {
		let sectors = [.25, .75, 1.25, 1.75];
		let sect = Math.floor(Math.random() * 4);
		log(sect);
		let theta = sectors[sect] + Math.random() * .1;
		theta *= Math.PI;
		log(theta);
		this.vel = {
			x: this.speed * Math.cos(theta),
			y: this.speed * Math.sin(theta)
		};
		log(this.vel);
	}

	draw() {
		this.x += this.vel.x;
		this.y += this.vel.y;
		image(imgBall, this.x, this.y);
	}
}

class Paddle {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		this.y = mouseY - this.h / 2;
		image(imgPaddle, this.x, this.y);
	}
}

class Wall {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		image(imgWall, this.x, this.y);
	}
}

function intersects(a, b) {
	if (!(b.x >= a.x + a.w ||
			b.x + b.w <= a.x ||
			b.y >= a.y + a.h ||
			b.y + b.h <= a.y)) {
		log(a, b);
		return true;
	}
}

// place ball in center of the screen
let ball = new Ball(width / 2 - 8, height / 2 - 8, 8);

// place paddles 12px from the sides, center vertically
let pad0 = new Paddle(12, height / 2 - 50, 16, 100);
let pad1 = new Paddle(width - 16 - 12, height / 2 - 50, 16, 100);

// place walls on the top and bottom of the screen
let wall0 = new Wall(0, 0, width, 6);
let wall1 = new Wall(0, height - 6, width, 6);

let imgBg = createGraphics(width, height);
imgBg.background(color16('r'));
imgBg.fill(color16('c'));
imgBg.stroke(color16('w'));
imgBg.strokeWeight(2);
imgBg.rect(40, 40, 560, 40); // top
imgBg.rect(40, 80, 120, 280); // left
imgBg.rect(480, 80, 120, 280); // right
imgBg.rect(40, 320, 560, 40); // bottom

let imgNet = spriteArt('w.\n.w\n'.repeat(80));

let centerLine = spriteArt('w'.repeat(5) + '.'.repeat(55) + 'w'.repeat(160) + '.'.repeat(55) + 'w'.repeat(5));

function draw() {
	image(imgBg, 0, 0);
	image(imgNet, width / 2 - 2, 40);
	image(centerLine, 40, height / 2);

	if (intersects(pad0, ball) || intersects(pad1, ball)) {
		ball.vel.x = -ball.vel.x;
	}
	if (intersects(wall0, ball) || intersects(wall1, ball)) {
		ball.vel.y = -ball.vel.y;
	}

	// if the ball leaves the screen
	if (ball.x < -10 || ball.x > width + 10) {
		ball.reset();
		ball.changeDirection();
	}

	ball.draw();

	pad0.draw();
	pad1.draw();

	wall0.draw();
	wall1.draw();
}
