let table = `
| id | film title                      |
|====|=================================|
| 02 | Harry Potter and The Prisone... |
|----|---------------------------------|
| 31 | Titanic                         |
|----|---------------------------------|
| 19 | Groundhog Day                   |
|----|---------------------------------|`;
// example film data

async function start() {
	text(table, 2, 0);
	let cmd = await prompt('0: Back, 1: View, 2: Return', 20, 0, 40);
}
