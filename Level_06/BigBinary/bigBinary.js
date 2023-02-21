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
	miniBulb = loadTxtAni('miniBulb.txt');
	oldBulb = loadTxtAni('oldBulb.txt');
	robot = loadTxtAni('robot.txt');
	stdBulb = loadTxtAni('stdBulb.txt');
	tower = loadTxtAni('tower.txt');
	tv = loadTxtAni('tv.txt');
}

function start() {
	QuintOS.defaultTxtSpeed = 0;
	frameRate(4);
	miniBulb2 = miniBulb.clone();
	miniBulb3 = miniBulb.clone();
	pickNumbers();
	button('DECIMAL', 10, 2, pickedLeft);
	button('BINARY ', 12, 29, pickedRight);
	update();
}

function update() {
	if (kb.presses('ArrowLeft')) pickedLeft();
	if (kb.presses('ArrowRight')) pickedRight();
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

	txtAni(tower, 15, 25);

	txtAni(stdBulb, 1, 11, isCorrect ? undefined : 0);
	if (random() < 0.8) {
		txtAni(robot, 14, 1, isCorrect ? undefined : 0);
	} else {
		txtAni(robot, 14, 1, 1);
	}
	txtAni(tv, 1, 1);
	txtAni(tv, 3, 28);

	txt(leftNum.toString(10).padStart(4, ' '), 7, 6);
	txt(rightNum.toString(2).padStart(4, '0'), 9, 33);

	if (!checkingPick) {
		txt('DECIMAL', 10, 2);
		txt('BINARY ', 12, 29);
	}

	txt(message, 12, 4);
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
