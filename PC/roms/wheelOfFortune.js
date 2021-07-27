const log = console.log;

// the category is "Fun and Games"
let phrases = "Tourist-Friendly Destination|Skateboarding & Snowboarding|Underground Entertainment|Competitive Shuffleboard|Cookie-Decorating Contest|Grand-Opening Celebration|Multicultural Activities|Neighborhood Get-Together|Photography & Scrapbooking|Skateboards & Rollerblades|Snowball-Throwing Contest|Snowshoeing & Snowboarding|International Carnivals|Performing-Arts Festival|Skateboard & Rollerblades|Spur-Of-The-Moment Getaway|Unforgettable Carnivals|Wholesome Entertainment|Afterschool Activities|Arts-And-Crafts Festival|Disappearing-Coin Trick|Ice-Carving Competition|Mixologist Competition|Snowbiking & Airboarding|Big-Ticket Attractions|City-Center Horseraces|Halloween Festivities|Hamletscenen Festival|Helium-Filled Balloons|Lion-Dance Competition|Mountaineering & Skiing|Snowboarding & Sledding|Spontaneous Nightlife|Traditional Macaroons|Battleship Destroyer|Building Sandcastles|Carnival Attractions|Festive Celebrations|Fingerprint Drawings|Fingerprints Drawing|Gingerbread-House Kit|Going Paddleboarding|Handball & Racquetball|Helium-Filled Baloons|Hurling Championship|In-The-Kitchen Puzzles|Jack-O'-Lantern Carving|Model-Airplane Racing|Renaissance Festival|Alpine Snowboarding|Charades & Pictionary|Contestant Searches|Cross-Country Skiing|Festive Celebration|Five-Gallon Stockpot|Freestyle Wrestling|Frisbee Competition|Interactive Puzzles|Marshmallow Animals|Mini-Golf Tournament|Murder-Mystery Party|Playing Racquetball|Rhythmic Gymnastics|Roller-Coaster Rides|Sled-Pulling Contest|Sleight-Of-Hand Magic|Yuletide Activities|Back-Road Bicycling|Balance-Beam Tricks|Complicated Puzzle|Computer Solitaire|Fast-Pitch Softball|Festive Activities|Freshwater Fishing|Gymnastics Routine|Outdoor Recreation|Playful Activities|Playing Backgammon|Playing Horseshoes|Playing Pictionary|Ski Mountaineering|Slight-Of-Hand Magic|Table Shuffleboard|Water-Balloon Fight|Water-Balloon Throw|Weeklong Festivals|Baseball & Softball|Chess Competition|Collectible Dolls|Crossword Puzzles|Cultural Festival|Equestrian Sports|Filmmaking Genius|Football & Baseball|Football Practice|Going Parasailing|Goldfish Scooping|Halloween Hayride|Hot-Air Ballooning|Indoor Volleyball|Jovial Sing-Alongs|Juggling Beanbags|Late-Night Hayride|Medieval Festival|Miniature Golfing|Playing Asteroids|Playing Badminton|Playing Hopscotch|Playing Paintball|Playing Solitaire|Playing Tic-Tac-Toe|Pothole Exploring|Riverside Camping|Softball & Baseball|Tag-Team Wrestling|Two-Story Carousel|Water-Balloon Toss|Wheelbarrow Races|Writing Limericks|Adventure Racing|Alphabet Magnets|Ballroom Dancing|Barbeque Bonanza|Beach Volleyball|Biggie Boardings|Childhood Heroes|Chinese Checkers|Christmas Crafts|Crossword Puzzle|Demolition Derby|Disappearing Ink|Doing Handstands|Double-Coin Trick|Dungeons & Dragons|Fantasy Football|Fraternity Prank|Freestyle Skiing|Fun Brainteasers|Going Spelunking|Gorgeous Fishing|Gorgeous Golfing|Habanos Festival|Headband Antlers|Hula Competition|Hula-Hoop Contest|Indoor Go-Carting|Indoor Go-Karting|Inflatable Slide|Interactive Toys|Japanese Archery|Juggling Oranges|Knock-Knock Jokes|Masquerade Balls|Narrated Cruises|Paper Snowflakes|Ping-Pong Paddles|Playing Checkers|Playing Dominoes|Playing Jeopardy|Playing Jeopardy!|Playing Kickball|Playing Lacrosse|Playing Monopoly|Playing Peekaboo|Playing Ping-Pong|Playing Scrabble|Popcorn Garlands|Potato-Sack Races|Renaissance Fair|Riding Piggyback|Shooting Marbles|Spitting Contest|Sprint-Car Racing|Street Carnivals|Swim-Up Blackjack|Twenty Questions|Ultimate Frisbee|Urban Spelunking|Volleyball Match|Wheelbarrow Race|Winter Carnivals|Amazing History|Amusement Rides|Anderlecht Fair|Balloon Animals|Big-Wave Surfing|Board-Game Night|Boggle & Scrabble|Boogie Boarding|Burping Contest|Classic Yahtzee|Community Chest|Confetti Cannon|Country Dancing|Cricket & Croquet|Croquet Mallets|Deep-Sea Fishing|Downhill Skiing|Downhill Slalom|Dragon-Boat Race|Exciting Rounds|Family Cookouts|Finger Painting|Gaelic Football";

phrases = phrases.split('|');

// generate random number between 0 and the length of the the words array
let random = Math.floor(Math.random() * phrases.length);
// our chooosen word
let phrase = phrases[random];
phrase = phrase.split(' ');
log(phrase); // don't look! no cheating! jk ;P

// Example phrase: ['Community', 'Chest']
// boxes -> [
//   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' ']
// ]

let boxes = [];

// word.length is the number of letters in the word
for (let i = 0; i < phrase.length; i++) {
	let word = phrase[i];
	boxes.push([]);
	for (let j = 0; j < word.length; j++) {
		boxes[i].push(' '); // add something to array
	}
}

/* PART C: make a function to display the boxes */
function displayBoxes() {
	for (let i = 0; i < phrase.length; i++) {
		let word = phrase[i];
		for (let j = 0; j < word.length; j++) {
			pc.rect(3 + j * 3, 3 + i * 3, 3, 3);
			pc.text(boxes[i][j], 4 + j * 3, 4 + i * 3);
		}
	}
}

let bigBuzzer = `
 _
| |__  _   _ ___________ _ __
| '_ \\| | | |_  /_  / _ \\ '__|
| |_) | |_| |/ / / /  __/ |
|_.__/ \\__,_/___/___\\___|_|
                              `;
pc.button(bigBuzzer, 13, 17, async () => {
	buzzed = true;
	// guess is the letter the user entered
	// or a guess of the full word
	let guess = await pc.prompt('', 2, 24);

	// see if the guess matches the phrase

	buzzed = false;
	addLetter();
});

let buzzed = false;

/* PART C: add a letter to a random empty box */
async function addLetter() {
	let avail = [];
	for (let i = 0; i < phrase.length; i++) {
		for (let j = 0; j < phrase[i].length; j++) {
			if (boxes[i][j] == ' ') {
				avail.push([i, j]);
			}
		}
	}

	let rand = Math.floor(Math.random() * avail.length);
	let pick = avail[rand];
	let wordIdx = pick[0];
	let letterIdx = pick[1];
	let letter = phrase[wordIdx][letterIdx];
	boxes[wordIdx][letterIdx] = letter;
	log(letter);

	displayBoxes();

	await delay(1000);

	if (!buzzed) addLetter();
}

addLetter();
