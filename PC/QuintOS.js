window.addEventListener('keydown', function(e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

$(async () => {
	const log = console.log;

	if (typeof QuintOS.level == 'undefined') {
		alert('ERROR: GAMES/load.js not found! Create this file and write: QuintOS.level = 0;');
		return; // exit
	}

	let screen = {
		w: 40,
		h: 25
	};
	if (QuintOS.level == 0) {
		screen.w = 23;
		screen.h = 2;
	} else if (QuintOS.level == 1) {
		screen.w = 55;
		screen.h = 35;
	} else if (QuintOS.level == 2) {
		screen.w = 55;
		screen.h = 30;
	} else if (QuintOS.level == 3 || QuintOS.level == 4) {
		screen.w = 80;
		screen.h = 30;
	} else if (QuintOS.level == 7) {
		screen.w = 20;
		screen.h = 2;
	}
	window.pc = new PC(screen.w, screen.h, QuintOS.level);
	window.prompt = async (msg) => {
		return await pc.prompt(msg);
	};
	window.alert = async (msg) => {
		return await pc.alert(msg);
	};
	window.exit = async () => {
		return await pc.exit();
	};


	let bootScreens = {
		'GuessTheNumber': [{
			name: 'info',
			x: 0,
			y: 0,
			speed: 1,
			txt: 'Hello! QuintOS v0.0'
		}],
		'PickAPath': [{
			name: 'bg',
			x: 1,
			y: 1,
			speed: 1,
			txt: `
*** QUINTOS JAVASCRIPT 0.0 ***

 2902 BYTES FREE

READY`
		}, {
			name: 'h1',
			x: 5,
			y: 10,
			speed: 5,
			txt: `
 ██████                          █████   █████
██    ██ ██  ██ ██  ████  █████ ██   ██ ██    
██    ██ ██  ██ ██ ██  ██  ██   ██   ██  ████
██  ▄ ██ ██  ██ ██ ██  ██  ██   ██   ██     ██`
		}, {
			name: 'h1-b',
			x: 5,
			y: 14,
			speed: 2,
			txt: `
 ██████   ████  ██ ██  ██  ██    █████  █████
     ▀`
		}],
		'SketchBook': [{
			name: 'bg',
			x: 1,
			y: 1,
			speed: 10,
			txt: `
31743 Bytes free
Ok`
		}, {
			name: 'h1',
			x: 0,
			y: 12,
			speed: 20,
			txt: `
                         ████◣             ██◣ ██◣
────────────────▄▄───▐█  █    █             █  █ █
────▄▄▄───▄██▄──█▀───█─▄ █    █ █ █▐▌██◣██◣ █  █ █    
──▄██▀█▌─██▄▄──▐█▀▄─▐█▀  █    █ █ █▐▌█ █ █  █  █ ◥██◣
─▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌  █    █ █ █▐▌█ █ █  █  █    █
─▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄ █  ▗ █ ██◤▐▌█ █ █  █  █    █
                         ◥████◤             ◥██◤ ◥██◤
                              ▘`
		}, {
			name: 'info',
			x: 20,
			y: 31,
			speed: 1,
			txt: `
JavaScript READY
QuintOS version 0.1
CopyLeft 1977`
		}],
		'Hangman': [{
			name: 'info',
			x: 22,
			y: 1,
			speed: 1,
			txt: 'QuintOS ]['
		}, {
			name: 'bg',
			x: 10,
			y: 3,
			speed: 80,
			txt: `
    _     _     _  _     _     _
(_.' )  .' )  .' )( \`.  ( \`.  ( \`._)
   .' .' .' .' .'  \`. \`. \`. \`. \`.
  (_.' .' .' ,' .'\`. \`, \`. \`. \`._)
     .' .' ,' .'    \`. \`, \`. \`.
   .' .' .' .'        \`. \`. \`. \`.
  (_.' .' .'            \`. \`. \`._)
     .' .'                \`. \`.
   .' .'                    \`. \`.
 .' .'                        \`. \`.
(_.'                            \`._)
 _                               _
( '.                            ,' )
 '. '.                        ,' ,'
   '. '.                    ,' ,'
   _ '. '.                ,' ,' _
  ( '. '. '.            ,' ,' ,' )
   '. '. '. '.        ,' ,' ,' ,'
   _ '. '. \`. '.    ,' ,\` ,' ,' _
  ( '. '. '. \`. '.,' ,\` ,' ,' ,' )
 _ '. '. '. '. '.  ,' ,' ,' ,' ,' _
( '._)  '._)  '._)(_,'  (_,'  ( ,' )`
		}, {
			name: 'logo',
			x: 24,
			y: 12,
			speed: 1,
			txt: `
▓▓▓ ▓▓▓
  ▓ ▓
  ▓ ▓
  ▓ ▓
▓▓▓ ▓▓▓`
		}],
		'QuickClicks': [{
			name: 'bg',
			x: 5,
			y: 4,
			speed: 100,
			txt: (() => {
				let p = ['\\', ' ', ' ', '\\', '_', '_'];
				let txt = '';
				for (let i = 0; i < 88; i += 4) {
					let pat = '';
					for (let j = 5; j >= 0; j--) {
						pat += p[(i + j) % 6];
					}
					txt += pat.repeat(12).slice(0, -2) + '\n';
				}
				return txt;
			})()
		}, {
			name: 'logo',
			x: 2,
			y: 2,
			speed: 50,
			txt: `
          ________\n         /\\       \\\n        /  \\       \\
       /    \\       \\\n      /      \\_______\\\n      \\      /       /
    ___\\    /   ____/___\n   /\\   \\  /   /\\       \\
  /  \\   \\/___/  \\       \\\n /    \\       \\   \\       \\
/      \\_______\\   \\_______\\\n\\      /       /   /       /
 \\    /       /   /       /\n  \\  /       /\\  /       /
   \\/_______/  \\/_______/`
		}, {
			name: 'h1',
			x: 20,
			y: 10,
			speed: 5,
			txt: `
 ██████╗ ██╗   ██╗██╗███╗   ██╗████████╗ ██████╗ ███████╗
██╔═══██╗██║   ██║██║████╗  ██║╚══██╔══╝██╔═══██╗██╔════╝
██║   ██║██║   ██║██║██╔██╗ ██║   ██║   ██║   ██║███████╗
██║▄▄ ██║██║   ██║██║██║╚██╗██║   ██║   ██║   ██║╚════██║
╚██████╔╝╚██████╔╝██║██║ ╚████║   ██║   ╚██████╔╝███████║
 ╚══▀▀═╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════╝`
		}, {
			name: 'title',
			x: 5,
			y: 0,
			speed: 1,
			txt: 'QuintOS'
		}, {
			name: 'info',
			x: 20,
			y: 23,
			speed: 1,
			txt: `
THE Personal Computer: Powered by JavaScript™
Version 0.3 Copyleft QuintOS ©1981`
		}],
		'TicTacToe': [{
			name: 'logo',
			x: 24,
			y: 4,
			speed: 30,
			txt: `
             ,,,,,,
         o#'9MMHb':'-,o,
      .oH":HH$' "' ' -*R&o,
     dMMM*""'\`'      .oM"HM?.
   ,MMM'          "HLbd< ?&H\\
  .:MH ."\\          \` MM  MM&b
 . "*H    -        &MMMMMMMMMH:
 .    dboo        MMMMMMMMMMMM.
 .   dMMMMMMb      *MMMMMMMMMP.
 .    MMMMMMMP        *MMMMMP .
      \`#MMMMM           MM6P ,
  '    \`MMMP"           HM*\`,
   '    :MM             .- ,
    '.   \`#?..  .       ..'
       -.   .         .-
         ''-.oo,oo.-''`
		}, {
			name: 'info',
			x: 23,
			y: 24,
			speed: 2,
			txt: `
QUiNT Compass qOS BIOS Version 04
Copyleft © 1983 QUiNT Systems Corp`
		}],
		'Pong': [{
			name: 'boot',
			txt: `
  **** QUINTOS 05 JAVASCRIPT ES12 ****

  64GB RAM SYSTEM 38911 GIGABYTES FREE

READY.
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
  RUN\n`.slice(1)
		}],
		'Snake': [{
			name: 'logo',
			txt: 'QuintOS',
			x: 0,
			y: 0,
			speed: 1
		}, {
			name: 'version',
			txt: 'v7',
			x: 0,
			y: 1,
			speed: 1
		}]
	};

	async function loadGame(game) {
		if (pc.level < 5 || pc.level == 7) {
			await pc.erase();
		}
		pc.loadGame(game);
	}

	async function displayBootscreen() {
		if (pc.level == 0 || pc.level == 7) {
			let txt0 = "'-.⎽⎽.-'⎺⎺".repeat(3);
			for (let i = 0; i < 30 * (pc.level == 7 ? .5 : 1); i++) {
				// pc.text(txt1.slice(0, 12), 0, 0, 0, 0, 12);
				await pc.text(txt0.slice(0, 23), 0, 0, 0, 0, 23);
				txt0 = txt0[txt0.length - 1] + txt0.slice(0, -1);
				// txt1 = txt1.slice(1) + txt1[1];
			}
			await pc.erase();
		}
		if (pc.level < 5 || pc.level == 7) {
			for (let el of bootScreen) {
				let txt = (el.txt.charAt(0) == '/n') ? el.txt.slice(1) : el.txt;
				await pc.text(txt, el.x, el.y, 0, 0, el.speed);
			}
			if (pc.level == 7) await delay(500);
		} else if (pc.level == 5) {
			// support
			const stdout = document.getElementById('bootScreen');
			const PRINT = (str) => {
				stdout.innerHTML += str;
				stdout.scrollTop = stdout.scrollHeight
			};
			const STR$ = (val) => String.fromCodePoint((9380 + val) >>> 0);
			const RND = (range) => Math.random() * range;

			PRINT(bootScreen[0].txt);

			async function makeMaze() {
				for (let i = 0; i < 50; i++) {
					let txt = '';
					for (let j = 0; j < 20; j++) {
						txt += STR$(205.5 + RND(1));
					}
					PRINT(txt);
					await delay();
				}
			}

			await Promise.race([makeMaze(), delay(1000)]);

			$('#bootScreen').remove();
			$('#tube').addClass('clear');
			$('#tube').append($('main'));

			$('main').css('display', 'block');
			$('canvas').css('width', '96vmin');
			$('canvas').css('height', '60vmin');

			let logo = spriteArt(`
.www.................www...ww
w...w.w.w.w.www.www.w...w.w..
w.w.w.w.w.w.w.w..w..w...w..ww
.www..www.w.w.w..w...www..www
....w........................`, 6);
			let wasDrawn = false;
			window.draw = () => {
				if (!wasDrawn) {
					image(logo, 320 - logo.width / 2, 200 - logo.height / 2, logo.width, logo.height);
					wasDrawn = true;
				}
			}
			await delay(500);
		}
	}

	let games = ['GuessTheNumber', 'PickAPath', 'Hangman', 'QuickClicks', 'TicTacToe', 'Pong', 'SpeakAndSpell', 'Snake', 'BubbleBlasters', 'Sokoban'];

	let game = games[pc.level];
	if (typeof QuintOS.gameSelect != 'undefined') {
		game = QuintOS.gameSelect;
	}
	if (QuintOS.preload) {
		pc.preloadData(game);
	}
	if (pc.level >= 2 && pc.level < 5) {
		await pc.frame(0, 0, screen.w, screen.h, 10);
	}
	let bootScreen = bootScreens[game] || bootScreens[games[pc.level]];
	await displayBootscreen();
	if (pc.level == 0) await delay(1000);
	if (pc.level == 2) await delay(500);

	if (pc.level >= 3 && pc.level < 5) {
		// Add the Clock
		setInterval(() => {
			let time = new Date($.now());
			time = time.toString().split(' GMT')[0];
			pc.text(time, 3, 29);
		}, 1000);
	}

	// onerror = (msg, url, lineNum) => {
	// 	pc.error(msg + ' ' + url + ':' + lineNum);
	// };

	loadGame(game);

});
