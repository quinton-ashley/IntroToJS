# ClickAPath

Upgrade your PickAPath game by using illustrated buttons in addition to the prompt!

## Setup

In your `GAMES` directory make a new folder `ClickAPath` and new file `clickAPath.js` in that folder. Copy/paste from your `pickAPath.js` file into `clickAPath.js`.

## Instructions for PART A

For the "ClickAPath" upgrade to your "PickAPath" game you will make at least the first "page" of the story illustrated and interactive using mouse clicks.

Before finding the ASCII art you want to use, convert the first page of your program so that it uses buttons instead of using `prompt` to ask the user to make choices. Make a button for each option. Use the `text` function to show the story message/dialogue. HINT: Be careful! Remember that buttons do not wait for the user to click on them like `prompt` waits for the user's response. You will have to restructure your program to make use of button click callbacks instead of the while loop.

The other "pages" of the story should still use the prompt.

## Instructions for PART B

Search the internet for "ASCII art" (text based art) to illustrate your story!

Save the ASCII art you find in separate text files inside the ClickAPath folder.

Load the text from those files into your JavaScript program using the `fetch` function.

Display all the ASCII art by adding it to the text of your buttons for the options. You can also display art using the `text` function.
