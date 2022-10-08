let miniBulb, miniBulb2, miniBulb3, oldBulb, robot, stdBulb, tower, tv;

let leftNum = 0;
let rightNum = 0;

let instructions = `
Which number is bigger,
          left or right?

           Use your
             arrow keys.`;
let message = instructions;
let isCorrect = false;
let checkingPick = false;

function preload() {
	miniBulb = loadTextAni('miniBulb.txt');
	oldBulb = loadTextAni('oldBulb.txt');
	robot = loadTextAni('robot.txt');
	stdBulb = loadTextAni('stdBulb.txt');
	tower = loadTextAni('tower.txt');
	tv = loadTextAni('tv.txt');
}

function start() {
	QuintOS.defaultTextSpeed = 0;
	frameRate(4);
	miniBulb2 = miniBulb.clone();
	miniBulb3 = miniBulb.clone();
	pickNumbers();
	button('DECIMAL', 10, 2, pickedLeft);
	button('BINARY ', 12, 29, pickedRight);
	update();
}

function update() {
	if (kb.pressed('ArrowLeft')) pickedLeft();
	if (kb.pressed('ArrowRight')) pickedRight();
	requestAnimationFrame(update);
}

function pickNumbers() {
	leftNum = round(random(0, 15));
	rightNum = leftNum;
	while (rightNum == leftNum) {
		rightNum = round(random(0, 15));
	}
}

function draw() {
	eraseRect(12, 4, 24, 5, 0);

	textAni(tower, 15, 25);

	textAni(stdBulb, 1, 11, isCorrect ? undefined : 0);
	if (random() < 0.8) {
		textAni(robot, 14, 1, isCorrect ? undefined : 0);
	} else {
		textAni(robot, 14, 1, 1);
	}
	textAni(tv, 1, 1);
	textAni(tv, 3, 28);

	text(leftNum.toString(10).padStart(4, ' '), 7, 6);
	text(rightNum.toString(2).padStart(4, '0'), 9, 33);

	if (!checkingPick) {
		text('DECIMAL', 10, 2);
		text('BINARY ', 12, 29);
	}

	text(message, 12, 4);
}

function pickedLeft() {
	if (checkingPick) return;
	if (leftNum > rightNum) {
		message = '             Correct!';
		isCorrect = true;
	} else {
		message = '            Incorrect!';
	}
	newGame();
}

function pickedRight() {
	if (checkingPick) return;
	if (rightNum > leftNum) {
		message = '             Correct!';
		isCorrect = true;
	} else {
		message = '            Incorrect!';
	}
	newGame();
}

async function newGame() {
	checkingPick = true;
	await delay(2000);
	pickNumbers();
	isCorrect = false;
	message = instructions;
	checkingPick = false;
}
