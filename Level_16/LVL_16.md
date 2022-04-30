# Level 16 A

## Node.js and npm

Node.js is a Javascript runtime based on Chrome's V8 Javascript engine that lets you interact with your computer's file system, among other things that you can't do with Javascript inside a web browser due to the security risk these features pose.

npm is the node.js package manager, use it to download packages (versioned bundles of code) like p5.js. Javascript developers have posted 1.8 million Javascript packages on there!

## Creating your own QuintOS project!

Up until this point you've been remaking famous games to understand them on a deeper level and improve your coding skills. Now that you have reached the end of my Introduction to JavaScript course, I want to assist you in developing your own original game, program, or interactive art piece!

Your game doesn't need to be super complex or have a lot of artwork or a massive story, but it does need to be unique and fun!

# Level 16 B

There remains only a few more notable bits of Javascript syntax you should learn about this point.

## Switch statements

You will rarely need to use a switch statement instead of an if + else if chain, but in some cases they are useful.

Let's take a look at some different ways to make a chunk of code that will go inside a `buttonPressed` function. The `lbl` variable has the name of the button that was pressed. If the button was directional it will call the `move` function, else if the button should do an action it calls `doAction`, else say the button does nothing.

```js
if (lbl == 'up' || lbl == 'down' || lbl == 'left' || lbl == 'right') {
	await this.move(lbl);
} else if (
	lbl == 'a' ||
	lbl == 'b' ||
	lbl == 'x' ||
	lbl == 'y' ||
	lbl == 'l' ||
	lbl == 'r' ||
	lbl == 'lt' ||
	lbl == 'rt' ||
	lbl == 'select' ||
	lbl == 'start'
) {
	await this.doAction(lbl);
} else {
	log('cui: button does nothing');
	return;
}
```

This looks horrible! It's also a lot to type: 19 lines and 364 characters.

The example below will give the same results as the code above but uses a switch statement instead. Using a switch statement requires a few less characters: 333. However, in my opinion, they take up too much space vertically, a whooping 22 lines.

```js
switch (lbl) {
	case 'up':
	case 'down':
	case 'left':
	case 'right':
		await this.move(lbl);
		break;
	case 'a':
	case 'b':
	case 'x':
	case 'y':
	case 'l':
	case 'r':
	case 'lt':
	case 'rt':
	case 'select':
	case 'start':
		await this.doAction(lbl);
		break;
	default:
		log('cui: button does nothing');
}
```

The version below uses arrays instead of a switch statement, it is nice and compact at 7 lines, 262 characters!

```js
if (['up', 'down', 'left', 'right'].includes(lbl)) {
	await this.move(lbl);
} else if (['a', 'b', 'x', 'y', 'l', 'r', 'lt', 'rt', 'select', 'start'].includes(lbl)) {
	await this.doAction(lbl);
} else {
	log('cui: button does nothing');
}
```

You may think it would be nicer to make a variable for the longer array or even for both arrays so the boolean conditions aren't so long.

```js
let otherBtns = ['a', 'b', 'x', 'y', 'l', 'r', 'lt', 'rt', 'select', 'start'];

if (['up', 'down', 'left', 'right'].includes(lbl)) {
	await this.move(lbl);
} else if (otherBtns.includes(lbl)) {
	await this.doAction(lbl);
} else {
	log('cui: button does nothing');
}
```

This version uses regex. It is the most compact, using 222 characters.

```js
if (/^(up|down|left|right)$/.test(lbl)) {
	await this.move(lbl);
} else if (/^(a|b|x|y|l|r|lt|rt|select|start)$/.test(lbl)) {
	await this.doAction(lbl);
} else {
	log('cui: button does nothing');
	return;
}
```

The time difference in execution on a modern computer between all of these versions is so insignificant it is neglible in practice. In this particular situation using a switch statment is not a bad idea and you could reasonably use either the switch, array, or regex version depending on your personal preference.

However, this is a rare case in my opinion. Most of the time I don't use switch statements, they just take up too much space.

Consider this set of examples:

```js
// Version 0
if (QuintOS.language == 'js') {
	await QuintOS.runJS(src, file);
} else if (QuintOS.language == 'java' || QuintOS.language == 'pde') {
	await QuintOS.runJava(src, file);
}
```

```js
// Version 1
let ext = QuintOS.language;

if (ext == 'js') {
	await QuintOS.runJS(src, file);
} else if (ext == 'java' || ext == 'pde') {
	await QuintOS.runJava(src, file);
}
```

```js
// Version 2
if (QuintOS.language == 'js') {
	await QuintOS.runJS(src, file);
} else if (/(java|pde)/.test(QuintOS.language)) {
	await QuintOS.runJava(src, file);
}
```

```js
// Version 3
switch (QuintOS.language) {
	case 'js':
		await QuintOS.runJS(src, file);
		break;
	case 'java':
	case 'pde':
		await QuintOS.runJava(src, file);
		break;
}
```

The switch statement is overkill here, if/else is definitely preferable.

## Getters

Let's say you wanted to make a calculated property like area that could change if the box changes size.

```js
console.log('The area of box 0 is ' + box0.w * box0.h); // 20!
```

To get a calculated property like area, you can use a getter.

```js
class Rectangle {
	constructor(width, height) {
		this.x = 0;
		this.y = 0;
		this.w = width;
		this.h = height;
	}

	draw() {
		rect(this.x, this.y, this.w, this.h);
	}

	get area() {
		return this.w * this.h;
	}
}

let box0 = new Rectangle(5, 4);
console.log('The area is ' + box0.area); // 20
box0.w = 6; // change width to 6
console.log('Now the area is ' + box0.area); // 24
```

This example shows how the area will still be calculated correctly even after the width of the box changes.

## Javascript's memory

Let's take a look at how variables are stored in Javascript.

https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

# End of IntroToJS

Congratulations you've completed my IntroToJS course! You now have a good understanding of JavaScript now and programming in general.

## Google's zx

[zx](https://github.com/google/zx) which makes node.js scripting on your computer easier.

## Electron

Electron is a desktop app library that lets you create apps using HTML+CSS+JS!

## ReactJS

With ReactJS you can create mobile apps using HTML+CSS+JS.

## Other resources of potential interest

[Article: More about JavaScript](https://github.com/MarcoWorms/learn.js)  
[Video: How random number generators work](https://www.youtube.com/watch?v=Ks1pw1X22y4)  
[Video: How spritesheet animation works](https://www.youtube.com/watch?v=CY0HE277IBM)  
[Video: Aseprite Animation Beginner Tutorial](https://www.youtube.com/watch?v=N4Z4MdZ1KWY)  
[Tutorials: Make 3D games with Babylon](https://doc.babylonjs.com/start)  
[Video: History of node.js and Electron](https://www.youtube.com/watch?v=whwa7ua_RbA)  
[Course: freeCodeCamp](https://github.com/mcturner1995/freeCodeCamp)  
[Video: Explanation of what .exe files are and how computer processors execute assembly](https://www.youtube.com/watch?v=hhgxsrAFyz8)  
[Video: AI Sudoku solver in python](https://www.youtube.com/watch?v=G_UYXzGuqvM)

- [Level 16 A](#level-16-a)
	- [Node.js and npm](#nodejs-and-npm)
	- [Creating your own QuintOS project!](#creating-your-own-quintos-project)
- [Level 16 B](#level-16-b)
	- [Switch statements](#switch-statements)
	- [Getters](#getters)
	- [Javascript's memory](#javascripts-memory)
- [End of IntroToJS](#end-of-introtojs)
	- [Google's zx](#googles-zx)
	- [Electron](#electron)
	- [ReactJS](#reactjs)
	- [Other resources of potential interest](#other-resources-of-potential-interest)
