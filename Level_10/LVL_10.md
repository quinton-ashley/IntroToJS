# Level 10 A

## Creating Objects

Objects have properties, aka key/value pairs. Everything in Javascript (Number, String, Array, etc.) is actually an Object too! You've already used some properties that these objects have such as `.length` for Strings.

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

let prop = 'age';
gumball[prop]; // same thing

// accessing items in an array iniside an object
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

## for in loops

`for in` loop iterates through the indexes/keys of an array or object.

```js
let list = {
	apples: 2,
	bananas: 10,
	pears: 4
};
for (let item in list) {
	console.log('I need to get ' + list[item] + ' ' + item + '!');
}
```

Result:

```txt
I need to get 2 apples!
I need to get 10 bananas!
I need to get 4 pears!
```

## for of loops

`for of` loops iterate through the values of an array or object.

```js
let names = ['Jake', 'Ali', 'Max'];
for (let name of names) {
	console.log('Hello ' + name);
}
```

Result:

```txt
Hello Jake
Hello Ali
Hello Ben
```

## slice String

```js
let str = 'hello'.slice(1);
log(str); // -> 'ello'
```

`slice` returns a part of the original string which starts at the index provided as the first input parameter.
