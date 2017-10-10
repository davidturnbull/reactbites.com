---
title: "How To Create React Components, Part 1: Functional Components"
slug: "create-functional-component-tutorial"
---

In this tutorial, we're going to create our first React component. There's a lot to learn about how components work and are created, and we're not going to cover all of the details right away, but we are going to lay strong foundations for further learning.

## Component Types

The first thing to understand is that, in React, there are two types of components:

* functional components
* class components

Ultimately, both of these types of components serve the same purpose, in that they're designed to render a part of an interface. The difference is that class components inherit additional functionality from the React library, meaning they can do more than functional component -- exactly *what* they can do is something we'll explore later on.

With this in mind, it's possible to create a fully-featured React interface out of nothing but class components. The only reason you wouldn't do this is that functional components have a simpler syntax, so if a component doesn't need the additional functionality of a class component, then a functional component is typically the preferred choice.

**Note:** You can also create an entire interface out of nothing but functional components, but since this would significantly limit the interactivity of the interface, it's not a common practice.

For our first component, we're going to create a functional component, because even though they can't do as much as a class component, they still allow us explore a lot React's functionality.

## Project Setup

To begin, copy the following code into a HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
    </script>
  </body>
</html>
```

This is the final code from [the "Hello World" tutorial](/hello-world-tutorial), and it's what we'll use as our starting point for this example.

## Creating a Component

Within the `script` element, create a function named "App":

```javascript
function App(){
  // code goes here
}
```

This functio is our first React component. It doesn't do anything yet, but something you'll come to see is just how familiar working with React tends to be. Most of the time, we're not even writing React-specific code. We're just writing regular JavaScript that is then given "magical powers" by React.

It's worth noting that we don't have to call this component "App". Any name can be used. It is, however, expected that names are written in Pascal Case. This means all the words in the name should be capitalized.

For this function to do something, it needs to return something.

"What should it return?"

As we've already discussed, the purpose of a React component is to render something onto the screen, so it makes sense that it would return something that can be rendered. In fact, that's actually a requirement for all React components: they *need* to render something to the screen.

In this case, for instance, let's return a `h1` element with the words "My Cool Component" between the tags:

```javascript
function App(){
  return <h1>My Cool Component</h1>;
}
```

Here, we're once again seeing the JSX syntax in action, rather than HTML. This is what allows us to write a HTML-like syntax directly in our JavaScript.

Based on this change, our "App" component now does something, but for this component to appear within the interface, we need to tell the `ReactDOM.render` method to render the "App" component, rather than the "Hello World" text.

To do this, replace the `h1` element inside the `render` method with a reference to the "App" component:

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

Here, we're using a syntax that makes it seem like we're referencing to a HTML element named "App". This is the JSX syntax we use to reference a React component. In fact, that's how I like to conceptualize React components. They're basically our own, custom HTML elements.

Based on this change, the contents of the "App" component should now appear within the interface.

<!-- IMAGE: Displaying the "App" component -->

Before continuing, it's worth noting that JSX is commonly wrapped in a pair of parentheses:

```javascript
function App(){
  return (<h1>My Cool Component</h1>);
}
```

This allows the JSX to be spread across separate lines:

```javascript
function App(){
  return (
    <h1>My Cool Component</h1>
  );
}
```

You don't have to do this, but once we start creating more complex components, using the parentheses will improve readability.

## Adjacent Elements

As we've discussed briefly, JSX has a number of quirks that distinguish it from HTML.

To see one of these quirks, try adding another element inside the "App" component's `return` statement:

```javascript
function App(){
  return (
    <h1>My Cool Component</h1>
    <p>This is some text.</p>
  );
}
```

You'll notice that the added element doesn't appear in the interface and the following error appears within the JavaScript Console:

> Adjacent JSX elements must be wrapped in an enclosing tag.

To understand what's wrong, realise that the JSX in its current form is transpiled into the following JavaScript:

```javascript
function App() {
  return React.createElement(
    "h1",
    null,
    "My Cool Component"
  );
  return React.createElement(
    "p",
    null,
    "This is some text."
  );
}
```

Here, we can see that the JSX is transpiled into two `createElement` methods, both of which are being returned inside the "App" function.

This is a problem because a JavaScript function cannot return more than one value.

To fix this problem, we have to wrap the `h1` and `p` elements inside a parent element, such as a `div`:

```javascript
function App(){
  return (
    <div>
      <h1>My Cool Component</h1>
      <p>This is some text.</p>
    </div>
  );
}
```

Based on this change, the transpiled JSX will look like this:

```javascript
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "My Cool Component"
    ),
    React.createElement(
      "p",
      null,
      "This is some text."
    )
  );
}
```

Here, we can see that now there's only a single `return` statement, as the `h1` and `p` elements are nested within the `div` element. This means the component will now appear within the interface.

It's worth noting that there is a way to return multiple elements without a parent element surrounding them, but that's a feature we'll explore in a later tutorial.
