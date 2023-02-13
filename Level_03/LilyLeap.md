# LilyLeap

In this simple two button game, the player controls a frog that can jump a distance of one lilypad or two. There are gaps between some lilypads that the frog must jump over. The goal is to jump over all the lilypads as quickly as possible without falling in the water!

## Instructions for Part A

The starter code for this game doesn't have any animations. The frog is represented by the big rectangle and a lilypad is represented by a small rectangle.

Use a while loop with a counter variable to make a bunch of lilypads without big gaps between them. Each lilypad should be 16 pixels from the previous lilypad.

Add an x velocity value to each of the jumps so that the frog moves one lilypad on little jumps and two lilypads on big jumps. You may notice it's hard to get the frog to exactly jump in the middle of the lilypads.
For now, just try getting the frog close enough to the center on each jump.

Don't let the frog jump if it's in the air!

When the frog is on a lilypad you can use rounding to snap the frog to the center of the lilypad.

```js
frog.x = round(frog.x / 16) * 16;
```

## Instructions for Part B

Use a for loop to make the lilypads instead of a while loop with a counter variable. Nothing should change visually.

Try making all the lilypads have a big gap of one lilypad between them. Then try making it random whether there is a big gap or not.

## Instructions for Part C

Add the `frog_jump.png` spritesheet animation to the frog.

Add the `lilypads.png` spritesheet animation to the lilypads. Make each lilypad start on a different frame and make their frames advance at different rates.

## Instructions for Part D

Listen to all the sounds in the LilyLeap/sounds folder.

Pick a sound for when the frog does big jumps and another sound for the small jumps. Pick another sound for when the frog falls in the water.

Load the sounds in the p5.js `preload` function.

Play the jumping sounds when the frog jumps and the falling sound for when it falls in the water.

**_You are now complete with Level 03 for now!_**

## Instructions for Part E

**_Come back to finish Part E after you complete Level 05._**

Make a countdown timer. If the player runs out of time, the frog gets back to the beginning: game over! Use the p5.js variable `frameCount`, which stores how many times the draw loop has run. Make the countdown decreases every 60 frames. HINT: Use the `%` modulo operator!

Make little bug images using the `spriteArt` function. Place them above lilypads. The GameBoi only has four color shades in its pallette: 0, 1, 2, 3. Use zeroes for the ant, the darkest shade available.

When the frog overlaps with a bug it should eat it and get more time added to the countdown timer. HINT: Use the p5play `overlaps` function.
