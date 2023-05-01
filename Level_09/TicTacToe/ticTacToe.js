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
  T    OOO   EEEE`;

const bigSpace = '        \n'.repeat(7);

const bigO = `
 OOOOOO
OO    OO
OO    OO
OO    OO
OO    OO
OO    OO
 OOOOOO`;

const bigX = `
XX    XX
 XX  XX
  XXXX
   XX
  XXXX
 XX  XX
XX    XX`;

const gridRow = 3;
const gridCol = 26;

function start() {
	txt(title, 5, 6);

	/* Part A: finish the grid of 9x8 spaces */
	txt('─'.repeat(26), gridRow + 7, gridCol);
	// txt('─'.repeat(26), ?, ?); // draw another horizontal line

	txt('│\n'.repeat(23), gridRow, gridCol + 8);
	// txt('│\n'.repeat(23), ?, ?); // draw another vertical line

	// the following buttons were created just to help you make the grid
	// you can delete them once you're done
	button(bigO, gridRow, gridCol);
	button(bigX, gridRow + 8, gridCol + 9);
	button(bigO, gridRow + 16, gridCol + 18);
}
