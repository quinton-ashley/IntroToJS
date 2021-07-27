const log = console.log;

// space and period are transparent
let palette = {
	k: '#000000', // blacK
	d: '#626252', // Dark-gray
	m: '#898989', // Mid-gray
	l: '#adadad', // Light-gray
	w: '#ffffff', // White
	c: '#cb7e75', // Coral
	r: '#9f4e44', // Red
	n: '#6d5412', // browN
	o: '#a1683c', // Orange
	y: '#c9d487', // Yellow
	e: '#9ae29b', // light grEEn
	g: '#5cab5e', // Green
	t: '#6abfc6', // Teal
	b: '#50459b', // Blue
	i: '#887ecb', // Indigo
	p: '#a057a3' // Purple
};

// an array of color letters
let colors = Object.keys(palette);

let paletteBoxes = spriteArt(colors, 25);

let brush = `
k
kkk
kkkk
kkkk
.kkww
...wnn
.....nn
......nn
.......nn
........nn
.........nn`;

let brushImg = spriteArt(brush);
let brushColor = 'k'; // black

let width = 25;
let height = 25;
let scale = 16;

class Pixel {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.color = 'd';
	}

	draw() {
		fill(palette[this.color]);
		stroke(0);
		rect(this.x, this.y, scale, scale);
	}
}

let pixels = [];
for (let i = 0; i < width; i++) {
	pixels.push([]);
	for (let j = 0; j < height; j++) {
		pixels[i].push(new Pixel(30 + i * scale, 5 + j * scale));
	}
}

function draw() {
	background(50);

	if (mouseIsPressed) {
		drawOnPixels();
	}

	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			pixels[i][j].draw();
		}
	}

	image(paletteBoxes, 0, 0);
	image(brushImg, mouseX, mouseY);
}

function changeBrushColor(c) {
	let _brush = brush.replaceAll('k', c);
	brushImg = spriteArt(_brush);
	brushColor = c;
}

function saveImage() {
	let img = '';
	for (let j = 0; j < height; j++) {
		for (let i = 0; i < width; i++) {
			img += pixels[i][j].color;
		}
		img += '\n';
	}
	log(img);
	img = spriteArt(img);
	img.save();
}

let saveBtn = pc.button("Save Image", 30, 24, saveImage);

function mouseClicked() {
	// If the click is in the pallette area, change the brush color
	// according to the x,y.
	if (mouseX > 0 && mouseX < 25) {
		let y = 0;
		for (let c of colors) {
			if (mouseY > y && mouseY < y + 25) {
				changeBrushColor(c);
			}
			y += 25;
		}
	}
}

function drawOnPixels() {
	// change the pixel's color.
	let brushX = Math.floor((mouseX - 30) / scale);
	let brushY = Math.floor((mouseY - 5) / scale);

	let p = pixels[brushX][brushY];
	p.color = brushColor;
}
