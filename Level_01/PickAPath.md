# PickAPath

Make a new file, in the same folder as this one, with the same name as the template file `_pickAPath.js` this file without the \_ (underscore). Copy the code from the template file into your `pickAPath.js` file.

## Instructions for PART A

Pick a Path stories, also known as [Choose your own Adventures](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)), are stories written from a second-person point of view, with the reader assuming the role of the protagonist and making choices that determine the main character's actions and the plot's outcome.

Note that prompt will return `null` instead of what the user enters if they press cancel. That's why this game's `while` loop condition is `choice != null`.

Use formatting characters tab `\t` and newline `\n`

## Instructions for PART B

Reject invalid choices by the user! No skipping ahead!

Put the valid options for each decision branch in an array. Then check if the number the user inputs is included in the array. If it is change the `choice` variable to the user's input. Otherwise alert the user they've made an incorrect choice and keep the `choice` variable the same and prompt them to make a decision again.

Make an account, that should be linked to your GitHub, on [codepen.io](https://codepen.io/). Use your GitHub to sign up and sign in.

Locate the index.html file in your `quintos-games` project folder. Make a new pen on codepen. Copy and paste the contents of the index.html file into the HTML section on Codepen. Next copy and paste your load.js into the JS section, then below it paste your PickAPath game code. It should run!

## Instructions for PART C

_Complete QuickClicks (A and B) first!_

Make at least the first "page" of the story illustrated and interactive using the mouse cursor. Instead of using `pc.prompt` to ask the user to make choices, use `pc.text`. Instead of getting player's choices via the string returned from `pc.prompt`, make buttons using `pc.button`. Use text based art (ascii art) from <https://www.asciiart.eu/> to illustrate your story! Use at least three different text artworks.

This challenge section requires you to make a lot of changes to your existing `pickAPath.js` file. Save a copy of it `pickAPath_v1.js` in case you need to look at the original version again once you start making changes!

To use the text based art in your code you will store the text art as strings. Use a backtick character (the key to the left of the number 1 key on your keyboard) to store the art. Note that if the art includes a backtick character it must be "escaped" using a backslash in front of it. "escaped" in this context means that the backtick will not be interpreted as the end of the string if their is a backslash in front of it. Because backslash is a special character also used for newlines `\n` and tabs `\t`, if you want to include an actual backslash in your text art string you must escape it as well with a backslash. This means to have one backslash show up in your text art you have to use two. You saw an example of this in the hangman text art.

Copy the text art from a website and put it into a new file in your `GAMES` folder. You can call it `art.txt` the `.txt` is the file extension used for plain text files. Use ctrl+f (command+f on macOS) to find backslashes in your text art. Enter a backslash in the find input then click find. Enter two backslashes in the replace input, then click replace all. This will replace all of the single slashes with two backslashes! Do the same for backticks, replace with backslash backtick.

The other "pages" of the story can still use the prompt but if you'd like to make them all illustrated go for it! If not move on to Level 04.
