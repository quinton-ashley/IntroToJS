// bitmap lcd is 28w x 20h

let score = 0;

pc.text('SNAKE', 0, 0);
pc.text(score, 0, 1);

let snake = {
	block: 'snake head',
	direction: 'right',
	x: 5,
	y: 10
};

let speed = 10; // increment snake position every ten frames

function draw() {
	// frameCount is a p5.js variable that stores how many frames
	// have been drawn, slow down the motion of the snake to 6fps
	if (frameCount % speed != 0) return;

	// set lcd segment to null
	pc.lcd(null, snake.x, snake.y);

	snake.x++; // move snake head
	pc.lcd(snake.block, snake.x, snake.y, snake.direction);
}
