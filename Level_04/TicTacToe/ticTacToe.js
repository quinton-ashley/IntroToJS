const log = console.log; // shortcut for console.log

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

pc.text(title, 5, 6);

const bigSpace = '        \n'.repeat(7);

const bigO = `
 OOOOOO
OO    OO
OO    OO
OO    OO
OO    OO
OO    OO
 OOOOOO`.slice(1); // slice off the first newline character

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
pc.text('─'.repeat(26), gridX, gridY + 7);
// pc.text('─'.repeat(26), ?, ?); // draw another horizontal line

pc.text('│\n'.repeat(23), gridX + 8, gridY);
// pc.text('│\n'.repeat(23), ?, ?); // draw another vertical line

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
pc.button(bigO, gridX, gridY);
pc.button(bigX, gridX + 9, gridY + 8);
pc.button(bigO, gridX + 18, gridY + 16);
