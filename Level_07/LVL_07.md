# Level 07 A

Complete the bonus game, QuickTyping, before continuing to level 7. Edit your `load.js` file:

```js
QuintOS.level = 5;
QuintOS.gameSelect = 'Sketchbook';
```

After that you can upgrade to level 7! 🥳

```js
QuintOS.level = 7;
```

## LCD

LCDs, liquid-crystal displays, were commonly found on early handheld videogame systems due to their energy efficiency. For the Snake game you will use an 28w x 20h LCD with three programmable blocks named `snake head`, `snake body`, and `snake tail`.

```js
pc.lcd(block, x, y, direction);
```

## Events

Take a look at the p5.js way of getting input from the user's keyboard.

https://p5js.org/reference/#/p5/keyCode

How does this work? Let's take a look at the pure JavaScript that p5.js is using behind the scenes.

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

# Level 07 B

# More about Arrays

Variables in JavaScript store the location in your computer's memory which holds the data assigned to that variable. Arrays are stored in a contiguous section of memory. When you use an index to retreive or edit data in an array, that index represents the distance in memory from the start of the array. This is why array indexes start at 0 in JS and many other programming languages, because the first item in an array is right at the start of the array, a distance of 0.

# Linked Lists

Linked Lists are a data structure for storing lists of objects. They are different from arrays because they do not store items in the list in a contiguous section of memory. Instead they use variables to point at the next objects in the list, which can be anywhere in the computer's memory. Check out this website which has great visuals of Linked Lists:

https://javascript.plainenglish.io/linked-list-data-structure-in-javascript-daab76c6f6de

So what's the point? What are the benefits of using a Linked List instead of an Array? Well for the Snake game you will make there is no benefit since the size of the list will be so small. Linked Lists are useful if you have a HUGE list of data you need to store and your code will often add objects to the beginning and middle of the list. Why is that?
