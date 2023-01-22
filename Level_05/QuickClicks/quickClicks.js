const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

// TODO: find the range of row and column values the target can be placed at
function makeTargets() {
	let row = 1;
	let col = 1;
	button(target, row, col);
}

function start() {
	makeTargets();
}
