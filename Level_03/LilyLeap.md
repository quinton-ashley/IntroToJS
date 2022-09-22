# LilyLeap

In this simple two button game, the player controls a frog that can jump a distance of one lilypad or two. There are gaps between some lilypads that the frog must jump over. The goal is to jump over all the lilypads as quickly as possible without falling in the water!

## Instructions for Part A

The starter code for this game doesn't have any animations. The frog is represented by the big rectangle and a lilypad is represented by a small rectangle.

Use a while loop with a counter variable to make a bunch of lilypads without big gaps between them. Each lilypad should be 16 pixels from the previous lilypad.

Add an x velocity value to each of the jumps so that the frog moves one lilypad on little jumps and two lilypads on big jumps. You may notice it's hard to get the frog to exactly jump in the middle of the lilypads. Try getting the frog close enough to the center first. Then you can use rounding to snap the frog to the center of the lilypad.

```js
frog.x = round(frog.x / 16) * 16;
```

Don't let the frog jump if it's in the air!

## Instructions for Part B

Use a for loop to make the lilypads. Nothing should change visually.

Try making all the lilypads have a big gap of one lilypad between them. Then try making it random whether there is a big gap or not.
