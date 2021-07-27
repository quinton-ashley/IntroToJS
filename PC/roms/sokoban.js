// bitmap lcd is 28w x 20h

let level = 0;

pc.text('SOKOBAN', 0, 0);
pc.text(level, 0, 1);

let player = {
	block: '⩀',
	type: 'head',
	direction: 'up',
	x: 5,
	y: 10,
	next: null
};

pc.lcd(player.block, player.x, 0, player.direction);
pc.lcd(player.block, player.x, 1, player.direction);
pc.lcd(player.block, player.x, 2, player.direction);
pc.lcd(player.block, player.x, 3, player.direction);
pc.lcd(player.block, player.x, 4, player.direction);
pc.lcd(player.block, player.x, 5, player.direction);
pc.lcd(player.block, player.x, 6, player.direction);
pc.lcd(player.block, player.x, 7, player.direction);
pc.lcd(player.block, player.x, 8, player.direction);
pc.lcd(player.block, player.x, 9, player.direction);
