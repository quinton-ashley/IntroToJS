const title = `
TTTTT IIIII   CCC
	T     I    C
	T     I    C
	T     I    C
	T   IIIII   CCC

TTTTT  AAA    CCC
	T   A   A  C
	T   AAAAA  C
	T   A   A  C
	T   A   A   CCC

TTTTT  OOO   EEEE
	T   O   O  E
	T   O   O  EEE
	T   O   O  E
	T    OOO   EEEE`.slice(1);

text(title, 5, 6);

const bigSpace = '        \n'.repeat(7);

const bigO = `
 OOOOOO
OO    OO
OO    OO
OO    OO
OO    OO
OO    OO
 OOOOOO`.slice(1);

const bigX = `
XX    XX
 XX  XX
  XXXX
   XX
  XXXX
 XX  XX
XX    XX`.slice(1);

const gridX = 26;
const gridY = 3;

/* PART A: finish the grid of 9x8 spaces */
text('─'.repeat(26), gridX, gridY + 7);
// text('─'.repeat(26), ?, ?); // draw another horizontal line

text('│\n'.repeat(23), gridX + 8, gridY);
// text('│\n'.repeat(23), ?, ?); // draw another vertical line

// board stores the game data
// in a two dimensional array of spaces
let board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

/* PART A: Make the buttons in the grid */
// test code, delete after reading
// note the intervals! x += 9 and y += 8
// use these in the increment sections of nested for loops
button(bigO, gridX, gridY);
button(bigX, gridX + 9, gridY + 8);
button(bigO, gridX + 18, gridY + 16);
