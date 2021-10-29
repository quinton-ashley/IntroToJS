// bitmap lcd is 28w x 20h

let score = 0;

text('SNAKE', 0, 0);
text(score, 0, 1);

let snake = [
	{
		block: 'snake head',
		direction: 'right',
		x: 5,
		y: 10
	}
];

let speed = 10; // increment snake position every ten frames

function draw() {
	// frameCount is a p5.js variable that stores how many frames
	// have been drawn, slow down the motion of the snake to 6fps
	if (frameCount % speed != 0) return;

	// set lcd segment to null
	lcd(null, snake[0].x, snake[0].y);

	snake[0].x++; // move snake head
	lcd(snake[0].block, snake[0].x, snake[0].y, snake[0].direction);
}
