# Level 07 A

In this section you'll learn more about the broader Javascript ecosystem.

## Web Development

Web development is primarily done with three languages HTML, CSS, and Javascript.

## HTML

Unlike Javascript, [HTML is not a programming language](https://ischool.syr.edu/why-html-is-not-a-programming-language/) since on its own it doesn't do anything dynamic. HTML (HyperText Markup Language) forms the skeleton of the website. HTML code is made up of tags. There are tags for headings, paragraphs, images, lists, links, quotes, videos, navigation bars, and more.

The syntax of HTML tags is actually quite clunky by today's standards. `<body>` for example is an opening tag for the start of the body element. Opening tags have the name of the element surrounded with greater than and less than symbols. Closing tags use a slash before the name of the element `</body>`, which represent the end of that element.

The elements inside the opening and closing tags of an element are called child elements. The elements that the child elements are inside are called parent elements.

Check out this example of an HTML form:

https://codepen.io/qashto/pen/LYxJzJv

The most important tag attribute is its `id`. The `id` attribute should be unique and can be used to find that specific tag in Javascript.

```js
let form = document.getElementById('signUpForm');
```

## CSS

CSS (Cascading Style Sheet) is primarily used to style web pages and [it is widely considered to be a programming language](https://css-tricks.com/is-css-a-programming-language/) since it has functions, variables, and its own kind of `if/else` statements.

```html
<h1 class="red-text">This heading is red!</h1>
<p class="green-text">This paragraph is green!</p>
<p class="blue-text">This paragraph is blue!</p>
<p class="green-text">This paragraph is also green!</p>
```

```css
.red-text {
	color: red;
}

.blue-text {
	color: blue;
}
```

Professional front end developers that have advanced knowledge of CSS3, the latest edition of CSS, have created many incredible showcases on [CODEPEN](https://codepen.io), [Behance](https://www.behance.net/), and [dribbble](https://dribbble.com/). Check these sites out if you are interested in web design!

## Aside

Most courses that teach web development actually start by teaching HTML and CSS, since they are the primary languages for creating the visuals of most websites. I don't do that because HTML is not a programming language and neither is basic level CSS. I teach Javascript first to give you an understanding of what programming is first!

- [Level 07 A](#level-07-a)
  - [Web Development](#web-development)
  - [HTML](#html)
  - [CSS](#css)
  - [Aside](#aside)
