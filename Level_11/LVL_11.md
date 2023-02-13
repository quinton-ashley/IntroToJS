---
# Level 11 A
---

## Welcome to the World Wide Web!

Before the existence of MySpace, Facebook, Instagram, YouTube, Reddit, TikTok, and templating sites like Wix and SquareSpace, the only way to have an online presence was to make your own website. When HTML was created in 1993, making a website was simple and people didn't have high expectations regarding what a website should look like or what it should do. People were just excited to be on the net!

These days a lot of websites all look the same but back in the 90s the World Wide Web was like the Wild Wild West. Every website had a different design. Even big brands published sites that were super experimental. You can take a look at web design from this era on [webdesignmuseum.org](https://www.webdesignmuseum.org/)

Pretty _rad_ am I right?

---

## Web Development

Web development is primarily done with three languages HTML, CSS, and Javascript.

---

## HTML

HTML (HyperText Markup Language) forms the skeleton of the website. The latest version is HTML5. Unlike Javascript, [HTML is not a programming language](https://ischool.syr.edu/why-html-is-not-a-programming-language/) since on its own it doesn't do anything dynamic. HTML code is made up of tags. There are tags for headings, paragraphs, images, lists, links, videos, navigation bars, and more.

---

## CSS

CSS (Cascading Style Sheet) is primarily used to style web pages and [it is widely considered to be a programming language](https://css-tricks.com/is-css-a-programming-language/) since it has functions, variables, and its own kind of `if/else` statements.

Professional front end developers have created incredible showcases of what is possible using CSS3, the latest edition of CSS. If you're interested in web design you can find inspiration on [CODEPEN](https://codepen.io), [Behance](https://www.behance.net/), and [dribbble](https://dribbble.com/).

---

## Aside

Most courses that teach web development actually start by teaching HTML and CSS, since they are the primary languages for creating the visuals of most websites. Yet, I don't do that because HTML is not a programming language and neither is basic level CSS. I teach Javascript first to give you an understanding of what programming actually is!

Also you might've gotten into some trouble if you told everyone you could build websites after just one lesson on HTML and CSS!

![](../src/memes/11_0.jpeg)

---

## How HTML tags work

`<html>` is the opening tag for the start of the html file. Opening tags have the name of the element surrounded with greater than and less than symbols. Closing tags use a slash before the name of the element, like this `</html>`. They represent the end of that element. "Self-closing" tags, which can not contain text or html contents inside them, such as `<img>` tags (for images), do not have a closing tag.

The elements inside the opening and closing tags of an element are called child elements. The element that a child element is inside is called the parent element, relative to the child.

---

## Common HTML tags

Learn more about common HTML tags by referencing this table I made:

<https://quintos.org/reference.html?language=html>

---

# Level 11 B

---

## How CSS styling works

Take a look at the MDN guide "What is CSS?":

<https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax>

---

## CSS FlexBox

Here is an excellent guide from css-tricks.com on how to use FlexBox:

<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
<https://i.redd.it/rofzm44oka091.png>

---

# Level 11 C

---

## HTML form tag

Check out this example of an HTML form:

<https://codepen.io/qashto/pen/LYxJzJv>

The most important attribute a tag can have is its `id`. The `id` attribute should be unique since ids are used to retrieve tags in Javascript.

```js
let form = document.getElementById('signUpForm');
```

## The easy way to get data from a form

You could go through every tag to get it's data but there is a new class in JS you can use called FormData that extracts all the data from a form for you. It stores the data in a 2D array of entries, [key, value] pairs. These can be put into an object for easier access.

```js
function getFormData(formID) {
	let fd = new FormData(document.getElementById(formID));
	let data = {};
	for (let entry of fd.entries()) {
		data[entry[0]] = entry[1];
	}
	return data;
}
```

The `getFormData` function returns an object with all the data from the specified form. You can use it in your own code.

Be sure to set the form target to blank so the page doesn't reload.

```html
<form target="_blank"></form>
```

# End of Introduction to JavaScript

You've made it to the end of the Introduction to JavaScript course!

You also have probably realized that you've only just begun to scratch the surface of what programming is.

![](../src/memes/11_1.jpeg)

But you should also be really proud of the progress you've made in this course! There will always be more to learn and so many more things you can do with programming. That's what makes programming so great!

Programming is just like any skill. You can only get better by practicing. So keep practicing and keep learning! I hope you continue to learn and grow as a programmer.

What you do now with your JavaScript programming skills is up to you! Here are some ideas:

- make generative artwork with [p5.js](p5js.org)
- make games with [p5play](p5play.org)
- make a static website with GitHub Pages
- make a dynamic website with a backend that uses node.js and Express
- make mobile apps with React Native
- make a desktop app with Electron

---
