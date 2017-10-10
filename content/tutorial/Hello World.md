---
title: 'How To Create a "Hello World" Example in React'
slug: "hello-world-tutorial"
---

In this tutorial, we're going to create a "Hello World" example with React. This will be the simplest possible interface that can be created with React.

The goal is to render the words "Hello World" onto a page, with those words being wrapped between a pair of `h1` tags. That probably doesn't sound like the world's fanciest interface, and it won't be, but it will give us a chance to explore a couple of important details about developing with React.

To begin, create a HTML file with the following markup:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
  </body>
</html>
```

Then embed the React library into the page with the following `script` tags:

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

You can learn other methods of using React by reading the "[How To Install React](#)" tutorial.

Next, create a `script` element before the closing `body` tag:

```html
<script type="text/javascript">
  // code goes here
</script>
```

Then, within this element, refer to a `render` method that is available to us via the ReactDOM library:

```javascript
ReactDOM.render();
```

This method accepts three arguments:

The first argument is *what* we want to render. This is where can pass React-specific code into the method.

The second argument is *where* we want to render the code that's passed through as the first argument. This argument allows us to render the code inside whatever element we define, meaning our React code can take over an entire page or just a portion of it.

The third argument is a callback that allows us to execute code after we've rendered something to the page. We won't be using a third argument in this example.

<!-- TODO: Pass through a string -->

To see these arguments in action, pass through a pair of `h1` tags with the words "Hello World" between them as the first argument:

```javascript
ReactDOM.render(<h1>Hello World</h1>);
```

Here, it appears that we're passing HTML code into a JavaScript method, which is not something you typically see. Something that's critical to understand though is that this is *not* HTML. Instead, this syntax is known as JSX, and although it's almost identical to HTML, there are some key differences that we'll explore in other tutorials. For the time being, just remember two things:

1. This is JSX, not HTML, despite how similar it is to HTML.
2. JSX allows us to easily define markup within our JavaScript code, and the convenience of this detail will become apparent later on.

Next, we need to pass through an argument to choose where to render this code we've defined as the first argument.

For the time being, pass through a reference to `document.body`:

```javascript
ReactDOM.render(<h1>Hello World</h1>, document.body);
```

This code renders the "Hello World" heading within the `body` element, meaning the words should now appear on the page.

There is, however, a problem with this code.

If you open the JavaScript Console though, you'll see the following error:

> Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.

This error appears because we're using the `render` method to take control of the page's `body` element, which can lead to unpredictable behaviour. For this reason, it's considered a best practice to create a container element, such as a `div` element, that we can attach our interface to.

To fix this, define a `div` element with an `id` attribute of "root" between the page's `body` tags:

```html
<body>
  <div id="root"></div>
</body>
```

You don't have to define the `id` attribute as "root", and it doesn't even have to be a `div` element, but these are the conventions and I can't think of a good reason for breaking them.

Next, replace the second argument of the `render` method with a `document.getElementById` method that references this "root" element:

```javascript
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
```

On the surface, nothing will change. The interface will look the same. But the error will disappear from the JavaScript Console and the code will now follow best practices, so progress has been made.

Perhaps the most important thing to understand about this `render` method though is that, most of the time, there will only be one of these methods in an entire React project. You probably won't be using multiple `render` methods to render different chunks of React code to different parts of a page.

But, you might be wondering, how can we create a large, complex interface if we have to pass that entire interface into a single `render` method as the first argument?

The answer is, "By using components."

Continue Reading: [How To Create a Functional Component](#)
