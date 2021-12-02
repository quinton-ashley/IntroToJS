# Level 13 A

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
