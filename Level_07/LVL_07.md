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

## Coding Philosophy: Part 3

Attempt to find a decent solution to a problem before concerning yourself with what the best solution could be. "Writing is rewriting", this is true for most people when writing essays, music, and often code too. No one can write code like the classical composer Mozart wrote music, by creating flawless first drafts that would sound exactly as he hoped. Start by thinking of the basic logic flow of complex problems, you might find it helpful to work things out on paper before you start coding. Then test and retest! Remember "Computer Science" is a science, it's all about experimentation, and lucky for us, unlike most research science, we can get pretty immediate results by running our programs! Getting things wrong is a big part of the process, having the program not do what you expect is an opportunity to learn. Often if you just keep trying and learning more you'll get it but if you get really stuck take a long break and come back to your code later. Taking a break to do something else can really help give you a new headspace and perspective on what you're trying to code.

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

## Google's Snake Game

Check out Google's online snake game:

https://www.google.com/fbx?fbx=snake_arcade

After losing a game the score window will show up, click on the settings icon in the bottom right corner. There are a few different game modes you can select between. Try all of them out and pick 3 that you'd like to implement yourself! :)

# Level 07 C

## Primtive Arrays

In Level 09 B you learned that Javascript arrays are stored as objects, the properties/keys of that object are just numbers instead of strings. Arrays in other languages are stored in a contiguous section of memory. When you use an index to retreive or edit data in an array, that index represents the distance in memory from the start of the array. This is why array indexes start at 0 in JS and many other programming languages, because the first item in an array is right at the start of the array, a distance of 0.

## Data Structures: Linked Lists

Linked Lists are a data structure for storing lists of objects. They are different from how arrays are stored in low level languages because they do not store items in the list in a contiguous section of memory. Instead they use variables to point at the next objects in the list, which can be anywhere in the computer's memory. Check out this website which has great visuals of Linked Lists:

https://javascript.plainenglish.io/linked-list-data-structure-in-javascript-daab76c6f6de

So what's the point? What are the benefits of using a Linked List instead of an Array? Linked Lists are useful if you have a HUGE list of data you need to store and if your program will often add objects to the beginning and middle of the list. Why is that? (hint: think of how arrays are stored vs linked lists and what adding objects to an array must entail)

Adding objects to an large array near the beginning or middle is slower than adding to a linked list. This is because arrays are stored in a contiguous chunk of memory so when a new item is added all the other items after it in the list must be moved back by one element wide chunk of memory so the
