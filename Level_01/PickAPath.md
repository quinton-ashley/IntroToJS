# PickAPath

Pick a Path stories, also known as ["Choose your own Adventure"](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure), are stories written from a second-person point of view, with the reader assuming the role of the protagonist and making choices that determine the main character's actions and the plot's outcome. These types of games are also called Role Playing Games (RPGs).

## Setup

Copy the `PickAPath` folder into your `GAMES` directory. Start coding in the `pickAPath.js` file.

## Instructions for Part A

Take a look at the starter code for this game. Note that `prompt` will return `null` instead of what the user enters if they press cancel. That's why the game loop's `while` condition is `path != null`.

Here are some ideas for the kind of PickAPath game you could make:

- a mystery story in which the player investigates rooms in a building to find clues
- an adventure story in which the player explores an area to collect items
- a scary/horror story in which the player tries to escape from or defeat a villain
- a trivia game show
- a dramatic dialogue between the player and an interesting character
- a simple dialogue with a shop owner that allows the player to buy and sell items

Use the formatting characters tab `\t` and newline `\n` in your messages. After you get your story started, read part B in the `LVL_01.md` lesson file.

## Instructions for Part B

Continue writing your story! Use boolean OR at least once to make two or more choices have the same result.

Add some complexity to your game, try implementing one of these ideas:

- a clue the player has to find before they can continue their investigation
- an area that the player can't enter without a key
- a weapon the player has to find before they have a chance at escaping from or defeating the villain
- a bonus round the player only gets to play if they earned enough points
- additional dialogue options that only become available after the character has told the player about something
- an item or items that a shop owner will only let the player buy if they already purchased a certain item or items

You can make a boolean variable for whether a player has an item: `let foundTheFirstClue = true`.

You could make a number variable to store how many of that item the player has: `let goldKeys = 3`.

You could also make a String variable to store what kind of item the player is holding: `let primaryWeapon = 'knife'`.

## Instructions for Part C

Reject invalid choices by the user, don't let them skip ahead!

Make an `options` array and in each decision branch assign it to the valid options for that choice.

If the number the user enters is a valid option change the value of `path` to the user's choice. Otherwise alert the user they've made an invalid choice. HINT: Use `await alert()`

At the end of the game, on paths where the player has no choices to make, give them the option to play again.
