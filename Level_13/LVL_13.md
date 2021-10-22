## Creating Objects

Objects have properties, aka key/value pairs. Everything in Javascript (Number, String, Array, etc.) is actually an Object too! You've already used some properties that these objects have such as `.length` for strings.

Let's take a look at how we could use an object to store attributes about Gumball, a character from the Cartoon Network show The Amazing World of Gumball.

```js
let gumball = {
	name: ['Gumball', 'Tristopher', 'Watterson'],
	species: 'cat',
	age: 12,
	grade: 7,
	studentID: '000029083',
	teacher: 'Ms. Simian'
};
```

Properties can be accessed using the dot syntax or with the `[]` square brackets.

```js
gumball.age; // -> 12
gumball['age']; // same thing

gumball.name[2]; // -> 'Watterson'

// editing the animal for property 'c'
gumball.grade = 8;
// adding new content to the object
gumball.brother = 'Darwin';
```

What does the `gumball` object look like after these changes?

```js
let gumball = {
	name: ['Gumball', 'Tristopher', 'Watterson'],
	species: 'cat',
	age: 12,
	grade: 8,
	studentID: '000029083',
	teacher: 'Ms. Simian',
	brother: 'Darwin'
};
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
