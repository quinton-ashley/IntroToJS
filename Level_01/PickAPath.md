# PickAPath

Pick a Path stories, also known as [Choose your own Adventures](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)), are stories written from a second-person point of view, with the reader assuming the role of the protagonist and making choices that determine the main character's actions and the plot's outcome.

## Setup

Copy the `PickAPath` folder into your `GAMES` directory. Start coding in the `pickAPath.js` file.

## Instructions for PART A

Take a look at the starter code for this game. Note that `prompt` will return `null` instead of what the user enters if they press cancel. That's why the game loop's `while` condition is `choice != null`.

Think of a story you'd like to tell in this game. It can be a mystery story in which the player investigates rooms in a building. It could be an adventure story in which a player explores an area to collect items. It could be a dialogue between a character and the player. If you want to do something simple that doesn't require as much creative writing, you could make a dialogue between a shop owner and the player.

Use the formatting characters tab `\t` and newline `\n` in your messages.

After you get your story started, read part B in the `LVL_01.md` lesson file.

## Instructions for PART B

Continue writing your story! Use boolean OR at least once to make two or more choices have the same result.

## Instructions for PART C

Reject invalid choices by the user! No skipping ahead!

Put the valid options for each decision branch in an array. Then check if the number the user inputs is included in the array. If it is change the `choice` variable to the user's input. Otherwise alert the user they've made an incorrect choice and keep the `choice` variable the same and prompt them to make a decision again.

At the end of the game, on paths where the user has no choices to make, show them the path's message in an alert window instead of a prompt window.
