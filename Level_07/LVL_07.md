---
# Level 07 A
---

## sine and cosine waves

Watch this video that shows how the sine and cosine functions work.

<https://www.youtube.com/watch?v=7JcmpBUx4ag>

```js
let x = cos(angle);
let y = sin(angle);
```

---

## stroke

Shapes in p5.js can be drawn with an outline, also called a "stroke". Change the color of strokes using the `stroke` function. This will also affect the color of lines.

```js
stroke('w');
```

---

## stroke size

```js
strokeWeight(1);
```

---

## point

```js
point(x, y);
```

---

## translate

Translates the origin of the canvas to a new point. This is useful for centering drawings.

```js
translate(canvas.w * 0.5, canvas.h * 0.5);
```

---

# End of Level 07 A

Remember to save your work!

![](../src/memes/07_0.png)

---

# Level 07 B

---

## Return variables from a function

functions can return a variable (only one). What will the value of `upHigh` be?

```js
function gimmeFive() {
	return 5;
}

let upHigh = gimmeFive() + gimmeFive();
```

---

## Creating functions with input parameters

function with input parameters x and y, returns the value of `x^2 * y^2`

```js
function doMyMathHomework(x, y) {
	return x * x * y * y;
}

let result0 = doMyMathHomework(1, 3); // returns 9
let result1 = doMyMathHomework(2, 5); // what does this return?
```

---

# Level 07 C

---

## color

Color can be given in many different ways to the p5.js color function. You can use a color letter or color name to use the default colors. But you can also specify RGB values or a hexadecimal code. These formats can be used with the p5.js `stroke`, `fill`, and `background` functions too!

```js
color('red'); // simple color name
color(255, 16, 32); // RGB value
color('#ff1020'); // hex code
```

RGB stands for Red, Green, and Blue. Each value is a number between 0 and 255. The color of the pixel is determined by the combination of these three values.

---

## Hexadecimal numbers

In the previous lesson you learned about binary (base 2) numbers but hypotethically a number system could be created with any base amount. The second most common number system in Computer Science is hexadecimal (base 16). Hexadecimal numbers are written with the digits 0-9 and the letters A-F. Letters are used because each place stores 16 different values. The number 10 in hexadecimal is written as A, 11 is B, 12 is C, and so on.

---

## Hex color code

What is a hex color code? It's a way of representing a color using 6 characters. The first two characters represent the red value, the second two characters represent the green value, and the last two characters represent the blue value.

```js
color('#ff1020');
// Hexadecimal: red: ff, green: 10, blue: 20
// Decimal:    red: 255, green: 16, blue: 32
```

The hexadecimal number 20 is equal to the decimal number 32. That's because the 2 is in the 16s place and `2 * 16 = 32`.

The hexadecimal number ff is equal to the decimal number 255. Because `15 * 16 + 15 = 255`.

---

## alpha

The alpha value is a number between 0 and 255 that determines how transparent a color is. 0 is completely transparent and 255 is completely opaque.

```js
color(255, 16, 32, 128); // RGB value with alpha
color('#ff1020', 128); // hex code with alpha
```

---

# Level 07 D

---

## lines

Draws a line between two points.

```js
line(x1, y1, x2, y2);
```

---

## Computer History: IBM 2250

From Wikipedia:

The IBM 2250 Graphics Display Unit was a vector graphics display system. The 2250s CRT measured 21" diagonal, but the useful display area was 12 inch by 12 inch. A light pen was provided as a pointing device, serving the function of the modern computer mouse.

<https://en.wikipedia.org/wiki/IBM_2250>

The IBM 2250 was used by John Whitney, the father of computer animation, to make incredible generative art.

<https://en.wikipedia.org/wiki/John_Whitney_(animator)>

---
