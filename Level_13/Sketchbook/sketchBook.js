// gets an array of color letters from the default color palette
let colors = Object.keys(QuintOS.palette);
// scale each color pixel by 10
let paletteBoxes = spriteArt(colors, 10);

let brush = `
b
bbb
bbbb
bbbb
.bbww
...wnn
.....nn
......nn
.......nn
........nn
.........nn`;

let brushImg = spriteArt(brush);
let brushColor = 'b'; // black

function draw() {
	background(50);

	image(paletteBoxes, 0, 0);
	image(brushImg, mouseX, mouseY);
}
