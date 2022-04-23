# Level 07 A

# Welcome to the World Wide Web!

You're surfing the official electronic webpage of QuintOS.

Before the existence of MySpace, Facebook, Instagram, YouTube, Reddit, TikTok, and templating sites like Wix and SquareSpace, the only way to have an online prescence was to make your own website. When HTML was created in 1993, making a website was simple and people didn't have high expectations regarding what a website should look like or what it should do. People were just excited to be on the net!

These days a lot of websites all look the same but back in the 90s the World Wide Web was like the Wild Wild West. Every website had a different design. Even big brands published sites that were super experimental. You can take a look at web design from this era on this website: <https://www.webdesignmuseum.org/>

Pretty _rad_ am I right?

## Web Development

Web development is primarily done with three languages HTML, CSS, and Javascript.

## HTML

Unlike Javascript, [HTML is not a programming language](https://ischool.syr.edu/why-html-is-not-a-programming-language/) since on its own it doesn't do anything dynamic. HTML (HyperText Markup Language) forms the skeleton of the website. HTML code is made up of tags. There are tags for headings, paragraphs, images, lists, links, quotes, videos, navigation bars, and more.

`<body>` for example is an opening tag for the start of the body element. Opening tags have the name of the element surrounded with greater than and less than symbols. Closing tags use a slash before the name of the element `</body>`, which represent the end of that element.

The elements inside the opening and closing tags of an element are called child elements. The elements that the child elements are inside are called parent elements.

The latest version of HTML is HTML5.

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

Most courses that teach web development actually start by teaching HTML and CSS, since they are the primary languages for creating the visuals of most websites. Yet, I don't do that because HTML is not a programming language and neither is basic level CSS. I teach Javascript first to give you an understanding of what programming actually is!

## Common HTML tags

As you can see on the top of the example page there is a navigational bar, created using the `nav` tag. Next there is a header created using the `h1` tag, it is the largest header.

# Level 07 B

## HTML form tag

Check out this example of an HTML form:

https://codepen.io/qashto/pen/LYxJzJv

The most important attribute a tag can have is its `id`. The `id` attribute should be unique since ids are used to retreive tags in Javascript.

```js
let form = document.getElementById('signUpForm');
```

- [Level 07 A](#level-07-a)
- [Welcome to the World Wide Web!](#welcome-to-the-world-wide-web)
  - [Web Development](#web-development)
  - [HTML](#html)
  - [CSS](#css)
  - [Aside](#aside)
  - [Common HTML tags](#common-html-tags)
- [Level 07 B](#level-07-b)
  - [HTML form tag](#html-form-tag)
