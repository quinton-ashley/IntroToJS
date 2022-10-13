let frog, lilypads;

function preload() {
	frog = new Sprite();
	lilypads = new Group();
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 16;
	frog.y = 90;
	frog.w = 10;
	frog.h = 8;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	makeLilyPads();
}

function makeLilyPads() {
	/* Part A: Use a loop to make more lily pads. */
	let lily = new lilypads.Sprite();
	lily.x = 16;
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);

	if (kb.presses('ArrowUp')) {
		// little jump
		frog.velocity.y = -1.4;
	} else if (kb.presses('ArrowRight')) {
		// BIG jump!
		frog.velocity.y = -2;
	}

	camera.x = frog.x + 64;
}
