// bitmap lcd is 28w x 20h
const log = console.log;
let score = 0;

pc.text('SNAKE', 0, 0);
pc.text(score, 0, 1);

let sbx = 0;
let sby = 0;

class LinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	push(elem) {
		// if the list is empty
		if (this.head == null) {
			this.head = elem;
			this.head.prev = null;
			this.head.next = null;

			this.tail = elem;
			this.tail.prev = null;
			this.tail.next = null;
			return;
		}
		if (this.head == this.tail) {
			this.head.next = this.tail;
			this.tail.prev = this.head;
		}
		elem.prev = this.tail;
		this.tail.next = elem;
		this.tail = elem;
		elem.next = null;
	}
}


class Iterator {
	constructor(list) {
		this.list = list;
		this.cur = null;
	}

	hasNext() {
		// in the beginning it should be true
		// otherwise it is true until cur.next is null
		return this.cur == null || this.cur.next != null;
	}

	next() {
		// in the beginning return the head
		if (this.cur == null) {
			this.cur = this.list.head;
			return this.cur;
		}
		// set cur to cur.next
		this.cur = this.cur.next;
		return this.cur;
	}
}

let snake = new LinkedList();

snake.push({
	block: 'head',
	direction: 'right',
	x: 5,
	y: 10
});

snake.push({
	block: 'body',
	direction: 'right',
	x: 4,
	y: 10
});

snake.push({
	block: 'tail',
	direction: 'right',
	x: 3,
	y: 10
});


let food = {
	block: 'food',
	x: 0,
	y: 0
};
let isSnakeDead = false;
let speed = 10; // increment snake position every ten frames

function draw() {
	// frameCount is a p5.js variable that stores how many frames
	// have been drawn, slow down the motion of the snake to 6fps
	if (frameCount % speed != 0) return;

	let itr = new Iterator(snake);
	while (itr.hasNext()) {
		let s = itr.next();
		// set lcd segment to null
		if (s == snake.tail) pc.lcd(null, s.x, s.y);
		if (s == snake.head) continue;

		s.x = s.prev.x;
		s.y = s.prev.y;

		if (!isSnakeDead || frameCount % 3 == 0) {
			pc.lcd(s.block, s.x, s.y, s.direction);
		} else {
			// set lcd segment to null
			pc.lcd(null, s.x, s.y);
		}
	}

	if (!isSnakeDead) {
		if (snake.head.direction == 'up') {
			snake.head.y--;
		} else if (snake.head.direction == 'down') {
			snake.head.y++;
		} else if (snake.head.direction == 'left') {
			snake.head.x--;
		} else if (snake.head.direction == 'right') {
			snake.head.x++;
		}
	}
	if (snake.head.x == food.x && snake.head.y == food.y) {
		spawnFood();
		snake.push({
			block: 'body',
			direction: snake.head.direction
		});
	}
	//check if the snake is dead
	if (snake.head.x > 27 || snake.head.x < 0 || snake.head.y < 0 || snake.head.y > 19) {
		if (snake.head.direction == 'up') {
			snake.head.y++;
		} else if (snake.head.direction == 'down') {
			snake.head.y--;
		} else if (snake.head.direction == 'left') {
			snake.head.x++;
		} else if (snake.head.direction == 'right') {
			snake.head.x--;
		}
		isSnakeDead = true;
	}
	if (!isSnakeDead || frameCount % 3 == 0) {
		pc.lcd(snake.head.block, snake.head.x, snake.head.y, snake.head.direction);
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW && snake.head.direction != 'down') {
		snake.head.direction = 'up';
	} else if (keyCode == DOWN_ARROW && snake.head.direction != 'up') {
		snake.head.direction = 'down';
	} else if (keyCode == LEFT_ARROW && snake.head.direction != 'right') {
		snake.head.direction = 'left';
	} else if (keyCode == RIGHT_ARROW && snake.head.direction != 'left') {
		snake.head.direction = 'right';
	}
	return false;
}

function spawnFood() {
	let avail = [];
	for (let i = 0; i < 28; i++) {
		for (let j = 0; j < 20; j++) {
			if (!(snake.x == i && snake.y == j)) {
				avail.push([i, j]);
			}
		}
	}
	let coord = avail[Math.floor(Math.random() * avail.length)];
	food.x = coord[0];
	food.y = coord[1];
	pc.lcd(food.block, food.x, food.y);
}

spawnFood();
