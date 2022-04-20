# Level 13 A

## image

p5.js function for displaying an image at an x, y coordinate.

```js
image(img, x, y);
```

## Classes

Classes in JavaScript are blueprints for objects. They're useful for creating multiple objects that have the same variables (properties) and behaviors (functions). To declare a class, you use the class keyword with the name of the class ("Rectangle" here). The class blueprint goes inside the `{}` squiggly brackets. All classes must have a `constructor` function which is used to create the object.

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
}

let box0 = new Rectangle(2, 4);
let box1 = new Rectangle(3, 2);
let box2 = new Rectangle(5, 6);
```

This kind of programming is called object-oriented programming. Since this mode of thinking is similar to how us humans perceive objects in real life it makes it easier to use them when coding.

Note that you shouldn't use the keyword `function` when defining functions in a class.

## Object.keys(obj)

The `Object.keys()` method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

```js
const object1 = {
	a: 'somestring',
	b: 42,
	c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

## truthy or falsy?

Any value that is not falsy is truthy. Variables are falsy if they are:

```js
undefined;
null;
0; // the number 0
(''); // an empty String
```

In this example code the while loop will repeat until `username` is defined by the user (truthy).

```js
let username;

while (!username) {
	username = await prompt('What do you want your username to be?');

	if (!username) {
		await alert('ERROR: You are required to enter a username!');
	}
}

await alert('Hello ' + username + '!');
```

Remember that the prompt function will return a String with the text the user entered or `null` if the user cancelled out of the prompt.

If `username` is set to any String of text it will be considered truthy. If `username` is undefined, `null`, or an empty String it will be considered falsy.
