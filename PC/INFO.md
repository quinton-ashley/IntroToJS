# QuintOS PC documentation

## alert

```js
async alert(txt, x, y, w, h, speed)
```

## prompt

```js
async prompt(txt, x, y, w, h, speed)
```

returns a string with the user's input or `null` if the user pressed cancel

## text

```js
async text(txt, x, y, w, h, speed)
```

returns the height of the text

## button

```js
button(txt, x, y, action);
```

returns the `Button` object created

`action` is a function that will run if the user presses the button

## erase

```js
async erase(x, y, w, h);
```

## rect

```js
async rect(x, y, w, h, speed, c)
```

## input

```js
input(value, x, y, onSubmit, onChange);
```

returns the `Input` object created

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` called when the user presses the enter key
- `onChange` called when the user types any key that changes the input's value
