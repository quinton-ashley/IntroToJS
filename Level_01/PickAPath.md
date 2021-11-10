# PickAPath

Pick a Path stories, also known as [Choose your own Adventures](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)), are stories written from a second-person point of view, with the reader assuming the role of the protagonist and making choices that determine the main character's actions and the plot's outcome.

## Setup

Copy the `PickAPath` folder into your `GAMES` directory. Start coding in the `pickAPath.js` file.

## Instructions for PART A

Note that prompt will return `null` instead of what the user enters if they press cancel. That's why this game's `while` loop condition is `choice != null`.

Use formatting characters tab `\t` and newline `\n`

After you get your story started, read part B in the `LVL_01.md` lesson file.

## Instructions for PART B

Continue writing your story! Use boolean OR at least once to make two or more choices have the same result.

## Instructions for PART C

Reject invalid choices by the user! No skipping ahead!

Put the valid options for each decision branch in an array. Then check if the number the user inputs is included in the array. If it is change the `choice` variable to the user's input. Otherwise alert the user they've made an incorrect choice and keep the `choice` variable the same and prompt them to make a decision again.

Make an account, that should be linked to your GitHub, on [codepen.io](https://codepen.io/). Use your GitHub to sign up and sign in.

Locate the index.html file in your `quintos-games` project folder. Make a new pen on codepen. Copy and paste the contents of the index.html file into the HTML section on Codepen. Next copy and paste your load.js into the JS section, then below it paste your PickAPath game code. It should run!
