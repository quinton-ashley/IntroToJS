# Level 08 A

## toUpperCase and toLowerCase String

```js
let str = 'Hello!';
let up = str.toUpperCase(); // up -> 'HELLO!'
let low = str.toLowerCase(); // low -> 'hello!'
```

These functions do not change the original value of the string.

## End of Level 08 A

What's the funny mistake this user made when testing their code? Remember to test your programs thoroughly!

![](../src/memes/08_1.jpeg)

# Level 08 B

## fetch a text file

```js
let filePath = QuintOS.dir + '/art.txt';
let data = await fetch(filePath);
let txt = await data.text();
```

`QuintOS.dir` represents the file path to your game directory.

`fetch` loads file data asynchronously, returns a `Response` object. If the response contains text then it can be converted to a string using the `.text()` function.

# Level 08 C

## Coding Philosophy: Using functions effectively

Try not to rewrite the same lines of code in different places, put that code in a function instead. If you have a chunk of code and you need to do something only slightly different at another point in your program, sometimes you should make a function with input parameters for the thing(s) that are different. Typically functions should only contain code that is related to the name/description you gave that function, move unrelated code into its own function.

## slice String

```js
let str = 'hello'.slice(1);
log(str); // -> 'ello'
```

`slice` returns a part of the original string which starts at the index provided as the first input parameter.

# End of Level 08

![](../src/memes/08_0.jpeg)
