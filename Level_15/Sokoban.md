# Sokoban

Sokoban is a very popular Japanese puzzle game. The rules of this game are simple but solving some of the puzzles can be extremely difficult!

## Instructions for Part A

In the Sokoban folder you'll see an `img` folder and a `sounds` folder. The sounds and some images we will use to make this game are premium assets, I have bought them and/or got permission from the creators to use them in this IntroToJS course. If you would like to use them in your own games you must buy your own license to use them.

For this game I've added quite a lot of template code for loading player animations and the world tiles. I made a `idle` function for the `player` sprite that switches between idle animations. I also made a `walk` function that animates the player's movement up, down, left, and right.

For starters, make a 10x10 area of wall tile sprites.

Add a box sprite on the floor of this area. Animate the character pushing the box up, down, left, and right. Don't let the player or the box move past the walled area.

Display the number of moves the player has made.

## Instructions for Part B

Read about the Sokoban level format standardization:

http://sokobano.de/wiki/index.php?title=Level_format

You'll need to edit this text file to make it into a JSON with all the levels in an array that we can use in JavaScript, but how?

http://leehaywood.org/games/crossoban/p/sokevo.txt

Edit the text file using find replace in VSCode using ctrl+f (cmd+f on macOS). You'll need to learn about regular expressions first!

Try displaying a simple level of your own design.

Next try making that level a String
