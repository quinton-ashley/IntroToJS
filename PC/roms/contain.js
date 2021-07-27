// screen width is 640, height is 400
const log = console.log;

let imgBall = spriteArt(`
..bbby
.wbbbyb
wbbbyybw
byyyybbb
yybbybbb
wbbbyybb
.bbbbyb
..wbby`);

let imgPaddleY = spriteArt('.wwwwww.\nwwwwwwww\n' +
	'ww....ww\n'.repeat(50) + 'wwwwwwww\n.wwwwww.');

let imgPaddleX = spriteArt(
	' ' + 'w'.repeat(52) + ' \n' +
	'w'.repeat(54) + '\n' +
	('ww' + ' '.repeat(50) + 'ww\n').repeat(4) +
	'w'.repeat(54) + '\n' +
	' ' + 'w'.repeat(52)
);

// let imgWall = spriteArt(('w'.repeat(320) + '\n').repeat(3));

let imgBg = createGraphics(640, 400);
imgBg.scale(2);
imgBg.background(color16('g'));
imgBg.fill(color16('e'));
imgBg.stroke(color16('w'));
imgBg.strokeWeight(1);
imgBg.rect(20, 30, 280, 140);
imgBg.line(125, 30, 125, 170);
imgBg.line(195, 30, 195, 170);
imgBg.circle(160, 25, 3);
imgBg.circle(160, 175, 3);
imgBg.circle(160, 100, 40);
imgBg.line(160, 25, 160, 175);


let imgLogo = `
..wwwwwwwwwwwwwwwwwwwww
.wwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwww..........wwwwwwwwww
wwwwwww..............wwwwwwwww
wwwwwww..............wwwwwwwww
wwwwwww..............wwwwwwwww
wwwwwww..............wwwwwwwww
wwwwwww..............wwwwwwwww
wwwwwwwww...........wwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwww\n` +
	('wwwwwww\n').repeat(8) +
	'.wwwwww';
log(imgLogo);
imgLogo = spriteArt(imgLogo);


// class Wall {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		this.w = 320;
// 		this.h = 3;
// 	}
//
// 	draw() {
// 		image(imgWall, this.x, this.y);
// 	}
// }
class Ball {

	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.w = r * 2;
		this.h = r * 2;
		this.vel = {
			x: 1,
			y: 1
		};
		this.changeDirection();
	}

	draw() {
		/* PART A2: make the ball move */
		this.x += this.vel.x;
		this.y += this.vel.y;
		image(imgBall, this.x, this.y);
	}

	changeDirection() {
		this.vel.x = Math.random() * .5 + 1.75;
		this.vel.y = Math.random() * .5 + 1.75;
		if (Math.random() < 0.5) {
			this.vel.x *= -1;
		}
		if (Math.random() < 0.5) {
			this.vel.y *= -1;
		}
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
		// mouse y position changes the paddle's y value
		// -this.h/2 is used to center the paddle
		this.y = mouseY - this.h / 2;
		image(imgPaddleY, this.x, this.y);
	}
}

class Paddle0 {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		this.x = mouseX - this.w / 2;
		image(imgPaddleX, this.x, this.y)
	}
}

/* PART A0: create a ball and two paddles on each end of the screen */
// use the Ball and Paddle classes
let ball = new Ball(160, 100, 8);
let paddle0 = new Paddle(3, 200, 16, 108);
let paddle1 = new Paddle(630, 200, 16, 108);
// let wall0 = new Wall(0, 0);
// let wall1 = new Wall(0, 197);
let paddle2 = new Paddle0(320, 3, 108, 16);
let paddle3 = new Paddle0(320, 390, 108, 16);


function intersects(a, b) {
	// right  zone            left zone
	if (a.x > b.x + b.w || a.x + a.w < b.x ||
		a.y + a.h < b.y || a.y > b.y + b.h) {
		// top                bottom
		return false; //if this is all false the function becomes true
	}
	// log(a, b);
	return true;
}

/* PART A1: create the p5 draw function, draw the ball and paddles */
function draw() {
	image(imgBg, 0, 0);
	image(imgLogo, 294, 180);
	if (intersects(ball, paddle0) || intersects(ball, paddle1)) {
		ball.vel.x *= -1;
	}
	if (intersects(ball, paddle2) || intersects(ball, paddle3)) {
		ball.vel.y *= -1;
	}
	//reset ball
	if (ball.x < -9 || ball.x > 640 || ball.y < -9 || ball.y > 400) {
		ball.x = 320;
		ball.y = 200;
		ball.changeDirection();
	}


	ball.draw();
	paddle0.draw();
	paddle1.draw();
	paddle2.draw();
	paddle3.draw();
}
