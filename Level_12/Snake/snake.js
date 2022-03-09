// screen size: 160x144 pixels
// text rows: 18 cols: 20

let score = 0; // number of apples eaten

text('SCORE: ' + score, 17, 6);

let apple = world.createSprite('apple', 0, 0);

function draw() {
	background(colorPal(2));

	drawSprites();
}
