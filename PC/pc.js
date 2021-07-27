window.delay = (millisec) => {
	if (!millisec) {
		return new Promise(requestAnimationFrame);
	} else {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('');
			}, millisec);
		});
	}
};

$(() => {

	let log = console.log;

	class PC {
		constructor(w, h, level) {

			this.w = w;
			this.h = h;
			this.width = w;
			this.height = h;
			this.level = level;
			this.gpu = [];

			this.popup = {
				default: {
					x: 3,
					y: 2,
					w: 50,
					h: 4
				},
				0: {
					x: 0,
					y: 0,
					w: 23,
					h: 1
				},
				1: {
					x: 0,
					y: 2,
					w: 55,
					h: 4
				},
				2: {
					x: 2,
					y: 2,
					w: 51,
					h: 4
				},
				5: {
					x: 10,
					y: 10,
					w: 20,
					h: 4
				}
			};

			let screen0 = document.getElementById('screen0');

			if (level == 0) {
				this.rows = screen0.childNodes;
				for (let i = 0; i < h; i++) {
					this.rows[i].tiles = this.rows[i].childNodes;
				}
				return;
			}
			// if (level > 5) return;
			//create rows
			for (let i = 0; i < h; i++) {
				let row = document.createElement('row');
				screen0.appendChild(row);
			}
			this.rows = screen0.childNodes;

			//tiles
			for (let i = 0; i < h; i++) {
				for (let j = 0; j < w; j++) {
					let tile = document.createElement('tile');
					tile.appendChild(document.createTextNode(' '));
					this.rows[i].appendChild(tile);
				}
				this.rows[i].tiles = this.rows[i].childNodes;
			}

			let _tile = window.getComputedStyle($('#screen0 row tile').eq(0)[0]);
			_tile.w = Number(_tile.width.slice(0, -2)); // slice  off px
			_tile.h = Number(_tile.height.slice(0, -2));
			screen0.style.width = (w * _tile.w) + 'px';
			screen0.style.height = (h * _tile.h) + 'px';

			if (level == 7) {
				let lcdBG = document.getElementById('bitmapBG');
				for (let i = 0; i < 560; i++) {
					let div = document.createElement('div');
					div.classList.add('null');
					// div.appendChild(document.createTextNode('⩀⪽⪾'));
					lcdBG.appendChild(div);
				}

				let lcd = document.getElementById('bitmap');
				for (let i = 0; i < 560; i++) {
					let div = document.createElement('div');
					// div.appendChild(document.createTextNode(' '));
					lcd.appendChild(div);
				}
				this.bitmap = lcd.childNodes;
			}
		}
		/* -------------Adds a Character at the given y and xumn------------*/
		drawChar(x, y, char) {
			// out of bounds check
			if (x >= 0 && y >= 0 && x < this.w && y < this.h) {
				if (this.level == 0 && y == 1 && x > 4) return;
				this.rows[y].tiles[x].childNodes[0].nodeValue = char;
			}
		}

		charAt(x, y) {
			// if (x >= 0 && y >= 0 && x < this.w && y < this.h) {
			if (this.level == 0 && y == 1 && x > 4) return;
			return this.rows[y].tiles[x].childNodes[0].nodeValue;
			// }
		}

		async text(txt, x, y, w, h, speed) {
			if (typeof txt != 'string') txt += '';
			w = w || (this.w - x);
			speed = speed || 10;
			let chars = 0;
			let frames = 1;
			let _speed = speed;

			// checks the accuracy of the speed every four frames
			let interval;
			if (speed) interval = setInterval(() => {
				if (!chars) return;
				speed = Math.max(1, _speed + (_speed * frames - chars));
				frames += 4;
			}, 64);

			// if (this.level == 0) txt = txt.toUpperCase();
			if (this.level <= 1) txt = txt.replace(/\t/g, '  ');
			let lines = txt.split('\n');

			for (let i = 0; i < lines.length; i++) {
				let line = lines[i];
				if (line.length > w) {
					let part0 = line.slice(0, w);
					let bp = part0.lastIndexOf(' ');
					let part1;
					if (bp < 0) {
						part1 = line.slice(w);
					} else {
						part0 = line.slice(0, bp);
						part1 = line.slice(bp + 1);
					}
					lines.splice(i, 1, part0, part1);
					i--;
					continue;
				}
				for (let j = 0; j < line.length; j++) {
					if (speed && chars % speed == 0) await delay();
					this.drawChar(x + j, y, line.charAt(j));
					chars++;
				}
				y++;
				if ((h && i >= h) || y >= this.h) break;
			}
			if (speed) clearInterval(interval);
			return lines.length; // return the height
		}

		lcd(block, x, y, direction, name) {
			let idx = y * 28 + x;
			this.bitmap[idx].className = '';
			if (!block || block == 'none') {
				// this.bitmap[idx].childNodes[0].nodeValue = ' ';
				return;
			}
			// this.bitmap[idx].childNodes[0].nodeValue = block;
			let list = block.split(' ');
			if (direction) list.push(direction);
			for (let _class of list) {
				this.bitmap[idx].classList.add(_class);
			}
		}

		// applies hover effect to all tiles which belong to an object
		hovered(object) {
			for (let tile of object.tiles) {
				$(tile).addClass('hovered');
			}
		}

		async frame(x, y, w, h, speed, c) {
			if (this.level == 2) c = '*';
			if (this.level == 5) c = '─';
			return await this.rect(x, y, w, h, speed, c || '═');
		}

		/* ------------- Draws a rectangle with character or set ---------*/
		async rect(x, y, w, h, speed, c) {

			if (!c || c == '─') {
				c = {
					tl: '┌',
					tr: '┐',
					bl: '└',
					br: '┘',
					hori: '─',
					vert: '│'
				};
			} else if (c == '═') {
				c = {
					tl: '╔',
					tr: '╗',
					bl: '╚',
					br: '╝',
					hori: '═',
					vert: '║'
				};
			} else if (!c.hori) {
				c = {
					tl: c,
					tr: c,
					bl: c,
					br: c,
					hori: c,
					vert: c
				};
			}

			if (speed) await delay();
			this.drawChar(x, y, c.tl);
			this.drawChar(x + w - 1, y, c.tr);
			this.drawChar(x, y + h - 1, c.bl);
			this.drawChar(x + w - 1, y + h - 1, c.br);

			let chars = 0;
			for (let i = x + 1, j = y + 1;
				(i < x + w / 2) || (j < y + h / 2); i++, j++) {
				if (speed && chars % speed == 0) await delay();
				// Horizontal Lines
				if (i < x + w / 2) {
					this.drawChar(i, y, c.hori);
					this.drawChar(i, y + h - 1, c.hori);
					this.drawChar(x + w - (i - x + 1), y, c.hori);
					this.drawChar(x + w - (i - x + 1), y + h - 1, c.hori);
				}
				// Vertical Lines
				if (j < y + h / 2) {
					this.drawChar(x, j, c.vert);
					this.drawChar(x + w - 1, j, c.vert);
					this.drawChar(x, y + h - (j - y + 1), c.vert);
					this.drawChar(x + w - 1, y + h - (j - y + 1), c.vert);
				}
				chars++;
			}
		}

		line(x1, y1, x2, y2, c) {
			if (y1 == y2) {
				c = c || '-';
				this.text(c.repeat(Math.abs(x1 - x2)), x1, y1);
			} else if (x1 == x2) {
				c = c || '|';
				this.text((c + '\n').repeat(Math.abs(y1 - y2)), x1, y1);
			}
		}

		overlap(a, b) {
			if (a.x >= b.x + b.w || b.x >= a.x + a.w) {
				return false;
			}

			if (a.y >= b.y + b.h || b.y >= a.y + a.h) {
				return false;
			}
			return true;
		}

		dist(x0, y0, x1, y1) {
			return 0;
		}

		async erase(x, y, w, h, speed) {
			if (this.level == 0 && (typeof h == 'undefined' || h > 1)) {
				await this.erase(0, 0, this.w, 1);
				await this.erase(0, 1, 4, 1);
				return;
			}
			x = x || 0;
			y = y || 0;
			w = w || this.w;
			h = h || this.h;
			if (typeof speed == 'undefined') speed = 160;

			let eraser = {
				x,
				y,
				w,
				h
			};

			await this.text((' '.repeat(w) + '\n').repeat(h), x, y, w, h, speed);

			for (let i in this.gpu) {
				let el = this.gpu[i];
				if (this.overlap(el, eraser)) {
					el.erase();
					this.gpu.splice(i, 1);
				}
			}
		}

		button(txt, x, y, action) {
			let _this = this;
			class Button {
				constructor(txt, x, y, action) {
					this.x = x;
					this.y = y;
					if (_this.level < 2) txt += '←';
					if (_this.level == 2) txt = '<' + txt + '>';
					this.txt = txt;
					this.tiles = new Array(txt.length);

					// Add all tiles belonging to the button, to the button
					for (let i = 0, cols = 0, nl = 0; i < txt.length; i++, cols++) {
						if (txt.charAt(i) == '\n') {
							y++;
							cols = -1;
							nl++;
							continue;
						}
						this.tiles[i - nl] = _this.rows[y].tiles[x + cols];
					}
					// ButtonAction
					for (let i = 0; i < this.tiles.length; i++) {

						// click stuff
						$(this.tiles[i]).click(() => {
							if (!action) return;
							action();
						});

						let thisBtn = this;
						// Hover stuff
						$(this.tiles[i]).hover(() => {
								for (let i = 0; i < thisBtn.tiles.length; i++) {
									$(thisBtn.tiles[i]).addClass('hovered');
								}
							},
							() => {
								for (let i = 0; i < thisBtn.tiles.length; i++) {
									$(thisBtn.tiles[i]).removeClass('hovered');
								}
							});
					}
					let sp = txt.split('\n');
					this.h = sp.length;
					this.w = 1;
					for (let t of sp) {
						if (t.length > this.w) this.w = t.length;
					}
					_this.text(txt, this.x, this.y, 0, 0, 1000);
				}

				erase() {
					for (let tile of this.tiles) {
						$(tile).off();
						$(tile).removeClass('hovered');
						if (tile) tile.childNodes[0].nodeValue = ' ';
					}
					_this.gpu.splice(_this.gpu.indexOf(this), 1);
				}
			}
			let btn = new Button(txt, x, y, action);
			this.gpu.push(btn);
			return btn;
		}

		input(value, x, y, onSubmit, onChange) {
			let _this = this;
			class Input {
				constructor(value, x, y, onSubmit, onChange) {
					this.x = x;
					this.cursorX = x;
					this.y = y;
					this.h = 1;
					this.onSubmit = onSubmit || (() => {});
					this.onChange = onChange || (() => {});
					this.value = '';

					this.blink = setInterval(() => {
						$(_this.rows[this.y].tiles[this.cursorX]).toggleClass('hovered');
						if (_this.level == 0 && _this.charAt(this.cursorX, this.y) != '_') {
							_this.drawChar(this.cursorX, this.y, '_');
						} else {
							_this.drawChar(this.cursorX, this.y, ' ');
						}
					}, 500);
				}

				erase() {
					clearInterval(this.blink);
					document.removeEventListener('keydown', this.onKeyDown);
					for (let tile of _this.rows[this.y].tiles) {
						$(tile).off();
						$(tile).removeClass('hovered');
						if (tile) tile.childNodes[0].nodeValue = ' ';
					}
					_this.gpu.splice(_this.gpu.indexOf(this), 1);
				}

				get w() {
					return this.value.length || 1;
				}
			}
			let input = new Input(value, x, y, onSubmit, onChange);
			input.onKeyDown = (e) => {
				// log(e.key);
				$(_this.rows[input.y].tiles[input.cursorX]).removeClass('hovered');

				if (e.key == 'Enter') {
					input.onSubmit(input.value);
					return;
				} else if (e.key == 'Backspace' && input.value.length > 0) {
					if (_this.level == 0 && (input.y != 1 || input.value.length != 4)) {
						_this.drawChar(input.cursorX, input.y, ' ');
					}
					input.value = input.value.slice(0, -1);
					input.cursorX--;
					_this.drawChar(input.cursorX, input.y, ' ');
					return;
				} else if (e.key.length != 1) {
					return;
				}
				let c = e.key.charAt(0);
				_this.drawChar(input.cursorX, input.y, c);
				input.value += c;
				input.cursorX++;
				if (e.key != 'Backspace') {
					input.onChange(input.value);
				}
			};

			document.addEventListener('keydown', input.onKeyDown);
			if (value) {
				value += ''; // convert to string
				// when creating the input, type the inital value
				for (let c of value) {
					input.onKeyDown({
						key: c
					});
				}
			}
			this.gpu.push(input);
			return input;
		}

		async alert(txt, x, y, w, h) {
			let pu = this.popup[this.level];
			if (!pu) pu = this.popup.default;
			x = x || pu.x;
			y = y || pu.y;
			w = w || pu.w;
			h = h || pu.h;

			let _this = this;
			return new Promise(async (resolve) => {
				if (typeof txt != 'string') txt += '';

				if (this.charAt(x, y) != ' ' || this.charAt(x + w - 1, y + h) != ' ') {
					await this.erase(x, y, w, h);
				}
				let th;
				if (this.level > 0) {
					th = await this.text(txt, x + 2, y + 1, w - 4);
					await this.rect(x, y, w, h + th);
				} else {
					th = await this.text(txt, x, y, w);
					await this.text("OKAY", 0, 1);
				}

				let erasing = false;
				let erase = async () => {
					erasing = true;
					if (this.level != 0) okayBtn.erase();
					document.removeEventListener('keydown', onKeyDown);
					await _this.erase(x, y, w, h + th);
				}

				async function onKeyDown(e) {
					// log(e.key);
					if (erasing) return;
					if (e.key == 'Enter') {
						await erase();
						resolve();
					}
				}
				document.addEventListener('keydown', onKeyDown);

				if (this.level == 0) return;

				let okayX = Math.floor(Math.min(x + w / 2, x + w - 4));
				let okayBtn = _this.button("OKAY", okayX, y + 2 + th, async () => {
					if (erasing) return;
					await erase();
					resolve();
				});
			});
		}

		async prompt(txt, x, y, w, h) {
			let pu = this.popup[this.level];
			if (!pu) pu = this.popup.default;
			x = x || pu.x;
			y = y || pu.y;
			w = w || pu.w;
			h = h || pu.h;
			let _this = this;
			return new Promise(async (resolve, reject) => {
				if (typeof txt != 'string') txt += '';

				if (this.charAt(x, y) != ' ' || this.charAt(x + w - 1, y + h) != ' ') {
					await this.erase(x, y, w, h);
				}
				let th;
				if (this.level > 0) {
					th = await this.text(txt, x + 2, y + 1, w - 4);
					await this.rect(x, y, w, h + th);
				} else {
					th = await this.text(txt, x, y, w);
				}
				let erasing = false;

				let erase = async () => {
					erasing = true;
					if (this.level > 0) {
						enterBtn.erase();
						cancelBtn.erase();
					}
					await _this.erase(x, y, w, h + th);
				}

				let inX = x + 2;
				let inY = y + 2 + th;
				if (this.level == 0) {
					inX = 0;
					inY = 1;
				}
				let inp = this.input('', inX, inY, async () => {
					if (erasing) return;
					await erase();
					resolve(inp.value);
				});
				if (this.level == 0) return;
				let ebX = x + w - ((this.level == 1) ? 16 : 18);
				let enterBtn = this.button("ENTER", ebX, y + 2 + th, async () => {
					if (erasing) return;
					await erase();
					resolve(inp.value);
				});

				let cbX = x + w - ((this.level == 1) ? 9 : 10);
				let cancelBtn = this.button("CANCEL", cbX, y + 2 + th, async () => {
					if (erasing) return;
					await erase();
					resolve(null);
				});
			});
		}

		loadJS(src) {
			const script = document.createElement('script');
			script.async = false;
			// script.onload = function() {
			// 	log('loaded ' + src);
			// };
			script.onerror = function() {
				this.error('Failed to load file ' + file + '\n\nCheck the Javascript console for more info.\n\nTo open the console use control+shift+i or command+option+i then click the Console tab.');
			};
			script.src = src;
			document.body.appendChild(script);
		}

		preloadData(game, dir) {
			dir = QuintOS.dir || dir || 'GAMES';
			let src = `${dir}/${game.slice(0, 1).toLowerCase() + game.slice(1)}-preload.js`;
			this.loadJS(src);
		}

		loadGame(game, dir) {
			dir = QuintOS.dir || dir || 'GAMES';
			let src = `${dir}/${game.slice(0, 1).toLowerCase() + game.slice(1)}.js`;
			this.loadJS(src);
			let title = '0' + this.level + '_' + game.slice(0, 1).toUpperCase() + game.slice(1);
			$('head title').text(title);
			if (this.level >= 5) {
				return;
			}
			if (this.level >= 2) {
				this.frame(0, 0, this.w, this.h);
			}
			if (this.level > 0) {
				this.text(title, 5, 0); // title
			}
		}

		async error(e) {
			console.error(e);
			if (e.stack) {
				let stack = e.stack.split('\n')[0].split('/').pop().split(':');
				stack = stack[0] + ' line ' + stack[1];
				await this.alert(null, null, 'ERROR: ' + e.message + '\n\n' + stack + '\n' + e.stack);
			} else {
				await this.alert(null, null, 'ERROR: ' + e);
			}
		}

		async exit() {
			await this.erase();
			if (this.level == 0) {
				this.loadGame('Calculator', 'PC/roms');
			} else {
				this.input('', 0, 0);
			}
		}
	}

	let calcuHTML = `
<div id="pc">
<div class="calculator" aria-hidden="true">
<div class="lcd">
  <p>F+</p><p>ARC</p><p>NYP</p><p>WRT</p><p>DEG</p><p>TRACE</p><p>PRT</p>
	<div id="screen0" class="screen"><row><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile><tile> </tile></row><row><tile> </tile><tile> </tile><tile> </tile><tile> </tile></row></div>
</div>
<div class="lcdBorder"></div>
<div class="onoff"></div>
<div class="onoffin"></div>
<div class="onoffinline1"></div>
<div class="onoffinline2"></div>
<div class="onoffinline3"></div>
<div class="onoffinline4"></div>
<div class="onoffinline5"></div>
<div class="horizmain"></div>
<div id="keys">
<div class="white"><p>F1</p></div>
<div class="white"><p>F2</p></div>
<div class="gray"><p>║</p></div>
<div class="gray"><p>#</p></div>
<div class="gray"><p>$</p></div>
<div class="gray"><p>:</p></div>
<div class="gray"><p>;</p></div>
<div class="gray"><p>A</p></div>
<div class="gray"><p>B</p></div>
<div class="gray"><p>C</p></div>
<div class="gray"><p>D</p></div>
<div class="gray"><p>E</p></div>
<div class="gray"><p>F</p></div>
<div class="gray"><p>G</p></div>
<div class="gray"><p>H</p></div>
<div class="gray"><p>I</p></div>
<div class="gray"><p>J</p></div>
<div class="gray"><p>K</p></div>
<div class="gray"><p>L</p></div>
<div class="gray"><p>M</p></div>
<div class="gray"><p>N</p></div>
<div class="gray"><p>O</p></div>
<div class="gray"><p>P</p></div>
<div class="gray"><p>Q</p></div>
<div class="gray"><p>R</p></div>
<div class="gray"><p>S</p></div>
<div class="gray"><p>T</p></div>
<div class="gray"><p>U</p></div>
<div class="gray"><p>V</p></div>
<div class="gray"><p>W</p></div>
<div class="gray"><p>X</p></div>
<div class="gray"><p>Y</p></div>
<div class="gray"><p>Z</p></div>
<div class="gray"><p>=</p></div>
<div class="gray"><p name=" ">SPC</p></div>
<div class="black"><p>MODE</p></div>
<div class="dark"><p>(</p></div>
<div class="dark"><p>)</p></div>
<div class="dark"><p name="Enter">⬆</p></div>
<div class="orange"><p name="Backspace">C</p></div>
<div class="orange"><p name="Clear">AC</p></div>
<div class="dark"><p>7</p></div>
<div class="dark"><p>8</p></div>
<div class="dark"><p>9</p></div>
<div class="dark"><p>/</p></div>
<div class="black"><p>STAT</p></div>
<div class="black"><p onclick="exit();">STOP</p></div>
<div class="dark"><p>4</p></div>
<div class="dark"><p>5</p></div>
<div class="dark"><p>6</p></div>
<div class="dark"><p>*</p></div>
<div class="black"><p name="Enter">ANS</p></div>
<div class="black"><p name="Enter">CONT</p></div>
<div class="dark"><p>1</p></div>
<div class="dark"><p>2</p></div>
<div class="dark"><p>3</p></div>
<div class="dark"><p>-</p></div>
<div class="dark"><p>,</p></div>
<div class="black"><p name="Backspace">⇦</p></div>
<div class="dark"><p>0</p></div>
<div class="dark"><p>.</p></div>
<div class="dark"><p name="Enter">E</p></div>
<div class="dark"><p>+</p></div>
<div class="dark"><p name="Enter">EXE</p></div>
<div class="black"><p name="Enter">⇨</p></div>
</div>
<div class="vertline"></div>
<div class="horzlinewhite1"></div>
<div class="horzlinewhite2"></div>
<div class="horzlinewhite3"></div>
<div class="horzlinewhite4"></div>
<div class="vertline"></div>
<div class="horzlineblack1"></div>
<div class="horzlineblack2"></div>
<div class="horzlineblack3"></div>
<div class="horzlineblack4"></div>
<div class="out" aria-hidden="true"></div>
  <div class="casio">
      <div class="speaker"></div>
      <H1><span><p class="logo">QuintOS</p>
            <p class="type">PROGRAMMABLE CALCULATOR</p>
            <p class="model">FX-702P</p>
      </span></H1>
  </div>
</div>
</div>`;

	let terminalHTML = `
<div id="pc" class="center">
	<div class="screenBox">
		<div class="frame">
			<div class="screenBox2">
				<div class="screenBox3">
					<div class="terminalScreen">
						<div id="screen0" class="screen"></div>
					</div>
				</div>
			</div>
			<div class="bottomFrame">
				<div class="fan">
				</div>
				<img class="logo" src="PC/logo.png" />
				<div class="powerButton">
					<div class="powerIcon">
					</div>
				</div>
				<div class="powerLight lightOff">
				</div>
			</div>
		</div>
	</div>
	<div class="screenFoot"></div>
	<div class="computer">
		<div class="computerFrame">
			<div class="computerFan1"></div>
			<div class="computerFan2"></div>
			<div class="screw1"></div>
			<div class="screw2"></div>
			<div class="computerFrame2">
				<div class="floppy">
					<div class="fingerGrip"></div>
					<div class="slot"></div>
				</div>
				<div class="socket1"></div>
				<div class="socket2"></div>
			</div>
			<div class="screw3"></div>
			<div class="screw4"></div>
			<div class="screw5"></div>
			<div class="powerButton">
				<div class="buttonSlide">
					<div class="computerButton computerButtonOff"></div>
				</div>
				<div class="offIndicator"></div>
				<div class="onIndicator"></div>
			</div>
			<div class="powerLight lightOff">
			</div>
		</div>
	</div>
</div>`;

	const c64HTML = `
<div id="pc" class="terminal">
	<div id="case">
		<div id="bezel">
			<div id="tube">
				<div id="screen0" class="screen"></div>
				<code id='bootScreen'></code>
			</div>
		</div>
		<div id="bottom-panel">
			<div id="badge">
				<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 212.57 27.72">
					<defs>
						<linearGradient id="chrome" x1="0" y1="-5%" x2="100%" y2="5%">
							<stop offset="0%" style="stop-color:#ccc;stop-opacity:1" />
							<stop offset="33%" style="stop-color:#999;stop-opacity:1" />
							<stop offset="33.5%" style="stop-color:#666;stop-opacity:1" />
							<stop offset="60%" style="stop-color:#ccc;stop-opacity:1" />
							<stop offset="60.5%" style="stop-color:#666;stop-opacity:1" />
							<stop offset="65%" style="stop-color:#999;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#ccc;stop-opacity:1" />
						</linearGradient>
					</defs>
					<path
					 d="M187.25 7.67h-3.96v11.36h4.13v-5.94c0-1.55.95-2.33 2.67-2.33s2.15.52 2.24 1.98h3.88c0-3.87-.52-5.34-4.65-5.34-2.5 0-3.36.52-4.31 2.41V7.67zM24.73 14.5h-6.65v5.45h11.96l-5.31-5.45zm5.31-6.58H18.08v5.45h6.58l5.38-5.45zm176.24 8.87c-3.96 0-4.56-.35-4.56-2.33h10.85c-.17-5.51-.17-6.8-7.49-6.8-6.2 0-7.58 1.12-7.58 6.03 0 4.56 1.81 5.68 6.8 5.77 5.6 0 8.27-.26 8.27-3.96h-4.05c-.17.87-.51 1.29-2.24 1.29zm-4.65-4.73c.17-1.21.52-1.64 3.27-1.64 3.02 0 3.45.17 3.62 1.64h-6.89zm-153.97.43h4.13c-.34-3.88-1.46-4.82-7.23-4.82-6.54 0-8.01 1.03-8.01 5.86 0 4.82 1.38 5.94 7.49 5.94 6.46 0 7.75-.86 7.75-4.91h-4.13c0 1.12-.43 1.64-3.62 1.64-2.76 0-3.36-.69-3.36-2.93 0-2.15.6-2.15 3.88-2.15 2.41-.01 2.84.25 3.1 1.37zm96.02.69c0-4.65-1.38-5.6-8.01-5.6-7.15 0-8.01 1.2-8.01 6.03 0 4.82 1.2 5.86 8.01 5.86 7.23 0 8.01-1.21 8.01-6.29zm-11.8.26c0-2.33.52-2.58 3.53-2.58 3.36 0 3.96.08 3.96 2.58 0 2.33-.43 2.76-3.62 2.76-3.44-.01-3.87-.35-3.87-2.76zm48.91-.26c0-4.65-1.29-5.6-7.92-5.6-7.06 0-7.92 1.12-7.92 5.94 0 4.91 1.2 5.94 7.92 5.94 7.23.01 7.92-1.2 7.92-6.28zm-11.71.26c0-2.33.52-2.58 3.53-2.58 3.36 0 3.96.08 3.96 2.58 0 2.33-.43 2.76-3.62 2.76-3.44-.01-3.87-.35-3.87-2.76zm-98.94-.26c0-4.65-1.29-5.6-7.92-5.6-7.15 0-8.01 1.12-8.01 5.94 0 4.91 1.21 5.94 8.01 5.94 7.23.01 7.92-1.2 7.92-6.28zm-11.63.26c0-2.33.52-2.58 3.45-2.58 3.36 0 3.96.08 3.96 2.58 0 2.33-.43 2.76-3.62 2.76-3.36-.01-3.79-.35-3.79-2.76zm99.55-10.6v6.63c-.95-1.29-1.81-1.98-5.25-1.98-5.51 0-6.54 1.46-6.54 5.94 0 4.57 1.46 5.85 6.8 5.85 3.36 0 4.39-.86 5.17-2.32v2.06h4.13V2.83l-4.31.01zm-3.02 7.93c2.32 0 3.1.34 3.1 2.15 0 2.76-.17 3.02-3.44 3.02s-4.13-.09-4.13-2.41c0-2.68 1.03-2.76 4.47-2.76zM17.71 7.55V.53C16.29.16 15.32.01 13.9.01 6.5.01 0 6.21 0 13.91c0 7.92 6.57 13.82 13.97 13.82 1.35 0 2.09-.15 3.74-.6v-7.17c-1.64.82-2.46 1.05-3.81 1.05-4.11 0-7.25-3.44-7.25-7.25 0-3.96 3.06-7.32 7.17-7.32 1.42-.01 2.62.36 3.89 1.11zm58.97.12h-3.87v11.36h4.13v-5.86c0-1.72.86-2.32 3.19-2.32 2.15 0 2.76.77 2.76 2.93v5.25h4.22V13c0-1.64 1.29-2.15 3.27-2.15 1.9 0 2.76.52 2.76 2.15v6.03h4.13v-6.72c0-3.36-2.07-4.91-5.85-4.91-3.27 0-4.48 1.21-4.91 2.5-.86-1.46-2.07-2.5-5.34-2.5-3.1 0-3.96 1.03-4.48 2.93l-.01-2.66zm27.82 0h-3.88v11.36h4.13v-5.86c0-1.72 1.03-2.32 3.1-2.32 2.15 0 2.76.69 2.76 2.93v5.25h4.22V13c0-1.64 1.21-2.15 3.19-2.15 1.89 0 2.84.6 2.84 2.15v6.03h4.13v-6.72c0-3.36-2.07-4.91-5.85-4.91-3.27 0-4.39 1.12-4.91 2.5-.86-1.46-2.07-2.5-5.34-2.5-3.01 0-3.79 1.03-4.39 2.93V7.67z"
					 fill="url(#chrome)" />
				</svg>
				<div id="power">POWER</div>
			</div>
			<div id="ident">
				<div>Video Monitor</div>
				<div>Model 1702</div>
			</div>
			<div id="power-btn"></div>
			<div id="door"></div>
			<div id="video"></div>
			<div id="audio"></div>
		</div>
	</div>
</div>`;

	let gameboiHTML = `
<div id="pc">
<div id="container">
	<div id="bitmapBG-container">
		<div id="bitmapBG" style="--grid-size:20; --grid-columns:28; --grid-rows:20;"></div>
		<div class="info-container">
		<div id="screen0" class="screen"></div>
		</div>
		<div class="shine-container">
			<div class="shine"></div>
		</div>
	</div>
	<div id="bitmap-container">
		<div id="bitmap" style="--grid-size:20; --grid-columns:28; --grid-rows:20;"></div>
  </div>
</div>
</div>`;

	if (typeof QuintOS.level != 'undefined') {
		let lvl = QuintOS.level.toString();
		if (lvl.length == 1) lvl = '0' + lvl;
		$('body').addClass('lvl' + lvl);
	}

	if (QuintOS.level == 0) {
		$('main').remove();
		$('body').append(calcuHTML);
		$('body').addClass('calcu');

		$('#keys div p').click(function() {
			let $this = $(this);
			let key = $this.attr('name') || $this.text();
			let count = 1;
			if (key == 'Clear') {
				count = 23;
				key = 'Backspace';
			}
			if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(key)) {
				key = key.toLowerCase();
			}
			for (let i = 0; i < count; i++) {
				document.dispatchEvent(new KeyboardEvent('keydown', {
					key: key
				}));
			}
		})
	} else if (QuintOS.level < 5) {
		// fetch('terminal.html')
		// 	.then(response => response.text())
		// 	.then(terminalHTML => {
		$('main').remove();
		$('body').append(terminalHTML);
		$('body').addClass('terminal');
		// });
	} else if (QuintOS.level == 5) {
		$('body').append(c64HTML);
		$('body').addClass('c64');
		$('main').css('display', 'none');

		let _palette = {
			" ": '',
			".": '',
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

		function color16(c, palette) {
			palette = palette || _palette;
			c = palette[c];
			if (!c) return color(0, 0, 0, 0);
			return color(c);
		}
		window.color16 = color16;

		function spriteArt(txt, scale, palette) {
			scale = scale || 2;
			palette = palette || _palette;
			let lines = txt; // accepts 2D arrays of characters
			if (txt.includes('\n')) {
				txt = txt.replace(/\t/g, '');
				lines = txt.split('\n');
			}
			if (lines[0] == '') lines.splice(0, 1);
			let x = 0;
			let y = 0;
			let w = 0;
			for (let line of lines) {
				if (line.length > w) w = line.length;
			}
			let h = lines.length;
			let img = createImage(w * scale, h * scale);
			img.loadPixels();

			for (let i = 0; i < lines.length; i++) {
				let line = lines[i];
				for (let j = 0; j < w; j++) {
					for (let sX = 0; sX < scale; sX++) {
						for (let sY = 0; sY < scale; sY++) {
							let c = '.';
							if (j < line.length) c = line[j];
							img.set(j * scale + sX, i * scale + sY, color16(c, palette));
						}
					}
				}
			}
			img.updatePixels();
			return img; // return the p5 graphics object
		}
		window.spriteArt = spriteArt;
	} else if (QuintOS.level == 7) {
		$('main').remove();
		$('body').append(gameboiHTML);
		$('body').addClass('gameboi');
	}

	window.PC = PC;
});
