# GuessTheNumber

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen0.jpg)

Make a new file in the `GAMES` folder, with the same name as the template file `_guessTheNumber.js` without the \_ (underscore) in the beginning. Copy the code from the template file `_guessTheNumber.js` into your new `guessTheNumber.js` file.

I want you to create a simple guess the number type game! It should choose a random number between 1 and 100, then challenge the player to guess the number.

## Instructions for PART A

When you start writing this program don't make the number random yet. Choose the number yourself for testing purposes.

After each turn the player should be told if they are right or wrong. If they are wrong, the player should be told whether their guess was too high or too low. They should also be told when they guess the number correctly.

At this point you should also know about the global object [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), which has many useful functions. You will use `.random()` and `.ceil()` to make this game.

```js
// returns a random value between 0 and 1 (not including 1)
let x = Math.random();
// x could be .2364 or .928279 or 0.45398, it's random!

let y = 25.2;
y = Math.ceil(y);
// returns y rounded up to a whole integer (ceil for ceiling)
// y -> 26 (y is now 26)
```

Use these `Math` functions to have the computer pick a random whole number between 1 and 100.

After you write the code for one turn of the game look at the tips section below and make the number random, then go back to the `README.md` in the `IntroToJS` folder and read [Level 00 B](https://github.com/quinton-ashley/IntroToJS#level-00-b).

## Instructions for PART B

_Read all of `LVL_00.md` before doing PART B_

Make the game loop by using a while loop.

## Instructions for PART C

_Complete PickAPath (A and B) first!_

If you haven't already, figure out the best way to play this game. Then calculate the maximum amount of guesses that would ever be required to guess the number using that method. Limit the number of guesses a player can make to that amount.

Use a `for` loop to count the turns but keep the same condition: `guess != num`. Tell the user when they run out of attempts to guess the number. Use `break;` to exit the `for` loop.

If the user enters a number outside the range of 1 to 100, tell them "Invalid guess" but don't count it against them. They should still have the same amount of valid guess attempts no matter how many invalid guess attempts they make.

When you're done move on to Level 03!

## Hints for PART C

In this game the best strategy for the player is to perform a binary search. If the number was between 1 to 7 it should only take a maximum of 3 attempts to guess the number.

Using the binary search method, on attempt 1 the player should always guess 4, the midpoint of 1 to 7. Then if the number was higher they should guess 6, the midpoint between 4 and 7. Then if the number was lower they'd guess 5.

If you make a diagram of all the possible guesses and decision branches using this binary search method, you would create a binary search tree. Each branch of the tree is a choice the player takes if the number they guessed was too low or too high. Each number is a node.

```txt
guess 1:     4      2^0 = 1 node (root of the tree)
            / \     branches
guess 2:   2   6    2^1 = 2 nodes
          / \ / \   branches
guess 3:  1 3 5 7   2^2 = 4 nodes (leaves of the tree)
```

2^3 = 8 which is higher than 7 possible values the number could be, so only 3 attempts are required to guess the number in the range of 1 to 7 if the player uses the binary search method. All the numbers 1 to 7, are contained in the tree.

If the player had to guess between 1 to 10, sometimes it would take more than 3 attempts to guess it correctly. 2^4 is 16, so no more than 4 attempts are needed to guess a number between 1 to 10.

Now that you know how the binary search method works it should be easy to figure out how many guesses are required to guess any number between 1 to 100.
