// words that are easier to spell
let words =
	'I cool know over these about down large please they after drink learn put think again each little red this ago everything live right those all face location run three also far make same to always fast man sea together am father many seven try an find may shop turn and first meaning sit under any five men six until are fly mother sleep us as foot much small use from must smile want ask give never some we at go no sorry well away green not star what because has now stay when bed here ocean stop where black his of store which blue how old strong why bring in on tell will call into one thank with clean is only that yellow cold it or the yes color just our you come kind out there'.split(
		' '
	);

// words that are harder to spell
let longWords =
	"above coming hoof pleasure sugar abscess correct hooves plunger summers already corsage houses plural sure ancient couldn't inch poem surgeon angel county's inches poems swap another couple insects poets talk answer courage instead police ten anything cousin iron ponies terror armies danger jealous pony thief's army diamond journey potato thieves' ax diamonds lady's potatoes three axes discover language poultry to baby's does laugh priest today beach dollar laughter priests tomorrow beaches dollars learn promise touch beauty dungeon leisure pull treasure beige early lettuce puppies trouble believe earnest life puppy trucks bench earth lilies quiet two benches echo lily quotient typists blood eight linger rabbis uncles boss elf lives range union bosses elves loss ranger valley brother enough losses ready valleys built extra machine reindeer view bullet farmers man's relief village bureau feather measure remove villages bushel finger men's rhythm warm butcher five mercies rural was calf flood mercy says wash camel floor mice's scarf watch camels for minute scarves water canaries four mirror schedule welcome canary freight mother school wife candies front mouse's scissors winters candy glass navy's search witches canoe glasses niece serious wives canoes glories nine seven wolf's caravan glory ocean shield wolves carry greater oceans should woman's chalk guard once shoulder woman cheese guess one shovel women's cheeses guide other six wonder child gypsies outdoor ski word chimney half oven someone workman chimneys harbors ox's source worth chorus haste oxen's squad wrong choruses health period squat yacht circuit healthy pierce statue yield cities heaven pint stomach zero comfort heavy plague stranger".split(
		' '
	);

/* Part B1: Load all the word sounds */

let speech = [
	'as_in',
	'here_is_your_score',
	'i_win',
	'is',
	'now_spell',
	'perfect_score',
	'plural_possessive',
	'say_it',
	'singular_possessive',
	'spell',
	'that_is_correct_now_spell',
	'that_is_incorrect_the_correct_spelling_of',
	'that_is_right_now_try',
	'the_number',
	'wrong_try_again',
	'you_are_correct',
	'you_are_correct_next_spell',
	'you_are_right_try',
	'you_win'
];

/* Part B0: Load all the speech sounds */

/* Part A0: Load all the letter sounds and apostrophe */

// example loading the letter A sound
let letterSoundA = loadSound(QuintOS.dir + '/sounds/letters/A.mp3');
letterSoundA.setVolume(0.3);
