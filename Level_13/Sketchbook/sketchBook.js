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

function draw() {
	background(50);

	image(paletteBoxes, 0, 0);
	image(brushImg, mouseX, mouseY);
}
