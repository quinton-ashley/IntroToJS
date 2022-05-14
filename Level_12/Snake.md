# Snake

Move your snake over food pellets to eat them and get bigger but don't run into yourself or the walls!

## Instructions for Part A

Note the Tiles object in the preload file called `world` and the loading of the apple image. The tile size is 8x8. First load all the grass tiles with a for loop in the preload file. You will use them to make a rectangular game world within the part of the GameBoi screen that does not contain text. Randomize the placement of grass tiles on the world grid so it looks nice.

Create an apple sprite (or you could also use a different food item), place it in the middle of the screen on layer 1.

Create a sprite for the head of the snake, don't make the rest of the snake yet. The snake head should be on layer 2. Create the snake head sprite from the `world` tiles grid object without using an image, then use the `snakes.png` image for the sprite's SpriteSheet. Load the head image and change the snake head's image using the `ani` function.

## Instructions for Part B

Make the snake head move upwards using the `move` function and `"up"` as the first input parameter. Without any user input, the snake should move up continuously. HINT: Make a recursive async function for the snake's movement.

Allow the player to change the direction the snake moves using the arrow keys. For now just move the head of the snake. Limit movement so that the snake can't go in the opposite direction that it's currently headed. HINT: Use the `keyPressed` p5.js function.

## Instructions for Part C

Create a wall of pipes around the whole grass rectangle. If the snake hits the pipes it should stop moving and the game should end. HINT: use the `collide` p5.js play function

When the snake gets close to a food item, it should start doing the eating animation. When the snake head eats a food item, make a new food item appear somewhere else within the pipe walls.

## Instructions for Part D

Create the body and tail of the snake using the other snake tiles. All the tiles in the snake should be in a group called `snake`. When the snake head moves the rest of the snake should follow it.

Everytime the snake eats a food item the snake should grow one new body part.

Each time the snake eats a pellet, make it move a bit faster. The snake should still move one block at a time, don't change that amount, just change the speed at which it moves. Its speed should increase at a higher rate in the beginning and more gradually when the snake starts going fast.

If the snake runs into a pipe wall, the whole snake should stop moving and blink to show it is dead. The player has lost, display a game over message. HINT: Before moving the snake check if the head would move into a wall based on the current input direction.

If the snake runs into itself, the player should also lose. HINT: Check if the snake head will move onto a tile that will have a snake part on it.

When the player loses give them an opportunity to try playing the game again.

## Instructions for Part E

Check out Google's online snake game:

https://www.google.com/fbx?fbx=snake_arcade

After losing a game the score window will show up, click on the settings icon in the bottom right corner. There are a few different game modes you can select between. Try all of them out!

Pick one of these special Snake modes that you'd like to implement in your snake game. Use the icons in the `icons.png` file to make a game mode menu.
