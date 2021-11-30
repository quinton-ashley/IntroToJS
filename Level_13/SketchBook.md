# SketchBook

_This is a BONUS program, the main game for this level is Snake_

The pixel art sketchbook program will let users create and save pixel art images.

## Instructions

There's a color palette on the left side of the screen. It was created by using `spriteArt()` with an array of the palette's keys. Each String in the array is a line.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Each of the 16 color squares is 25 pixels tall, the screen is 640x400 pixels. When the user selects a color, the tip of their paintbrush should change to be that color. Use the `mouseClicked()` p5.js function. Use `mouseY` and do some math to find which color the user clicked.

https://p5js.org/reference/#/p5/mouseClicked

Start by making a 20x10 grid of gray squares with a black border. The squares will represent a pixel in the user's image but should be displayed much larger. Use p5.js functions `rect`, `stroke` and `fill`. Use a class to store the position data, side length, and color letter of these squares. Place them using a for loop.

When the user clicks on a square the color should change to the color on the user's brush. Convert mouseX and mouseY to their equivalent (i, j) coordinates in the `pixels` 2D array. You will need `Math.floor()` (which always rounds down).

When the program starts, use `prompt()` to ask the user how big the image should be in this format: `widthxheight` (example: `20x10`)

Next ask the user to pick a background color using `text()`, after they choose a color use `await erase()`

Make a "Save Image" button, when the user presses it, your program should create their image using `spriteArt()` and use the `save()` function of that p5 Image object to save it.

https://p5js.org/reference/#/p5.Image/save

Allow the user to zoom out and in on their drawing using the p5.js `mouseWheel` function. First just change the scale and see what happens! You'll also need to change the position values of all the pixels to get the desired effect. Start by having it zoom around the top left corner.

The user should be able to zoom onto the pixel they're hovering over. This will require some math! Think about it logically and break the problem down to simple steps. Try making the canvas move to `mouseX` and `mouseY` when zooming. Then try zooming around the middle of the pixel art. Finally try zooming around any pixel.

If you like working on this SketchBook program you can also add some advanced things, if not move onto Snake!

You could add undo and redo buttons.

You may also notice when drawing while holding the mouse button that it can skip pixels, to fix this you could have it interpolate the line being drawn.

Also your zoom algorithm might be improved so it can zoom outside the boundary of the pixel art by calculating what pixel the mouse pointer would be at.
