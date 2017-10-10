---
title: "How To Create React Components, Part 2: Class Components"
slug: "create-class-component-tutorial"
---

In this tutorial, we're going to talk about class components, which are the more flexible type of React component. Ultimately, they achieve the same thing as a functional component, in that they render a piece of an interface, but they also provide us with some additional features.

## Project Setup

To begin, create a new React project with `create-react-app`:

```bash
create-react-app class-component-example
```

...and launch the local server:

```bash
cd class-component-example
yarn start
```

You'll now be able to view the project at <http://localhost:3000>.

Then replace the contents of the "App.js" file with the following code:

```javascript
import React from "react";

function App() {
  return (
    <h1>
      Hello World
    </h1>
  );
}

export default App;
```

Here, we have a component named "App" that returns a `h1` element. This component is a functional component, but we're going to convert it into a class component and then explore some of the nuances that separate functional components from class components.

## Creating a Component

To re-create the "App" component as a class component, delete the "App" function and replace it with a class named "App":

```javascript
class App {
  // code goes here
}
```

For this class to be considered a React component though, we need to inherit functionality from the React library.

To achieve this, we can use the `extends` keyword:

```javascript
class App extends React.Component {
  // code goes here
}
```

Here, we're telling React that this class is a React component.

If we don't use the `extends` keyword, the "App" class will be treated as a regular class and we won't have access to the React-specific functionality.

For this component to do something though, it needs a `render` method:

```javascript
class App extends React.Component {
  render(){
    // code goes here
  }
}
```

This `render` method is the only required feature of a class component and it's purpose is to tell the component what it should render.

To use the `render` method, return some JSX from inside of it:

```javascript
class App extends React.Component {
  render(){
    return (
      <h1>
        Hello World
      </h1>
    );
  }
}
```

This component is now equivalent to the functional "App" component we created earlier, except for the fact that it can do things that the functional component can't do.

Let's talk about some of those things.

<!-- To learn about the most compelling features of class components, read the following tutorials:

* [How To Create and Manage State](#)
* [How To Use Lifecycle Methods](#)

For the remainder of this tutorial though, we're going to focus on the smaller, nuanced differences that separate functional components and class components, as there are a number of details that are easy to forget and overlook. -->

## State

"State" is the central feature of React that allows us to create real-time interfaces, and it's a feature that can only be used within a class component. It's for this reason that class components are also called "stateful" components, while functional components are called "stateless" components.

To see what state allows us to do, create an object named "state" inside the "App" component, above the `render` method:

```javascript
class App extends React.Component {
  state = {
    // data goes here
  }
  render(){
    return (
      <h1>
        Hello World
      </h1>
    );
  }
}
```

Then, within this "state" object, define a "number" property with a value of "0" (without quotes):

```javascript
state = {
  number: 0
}
```

...and display this value within the `h1` element by referring to "this.state.number":

```javascript
render(){
  return (
    <h1>
      {this.state.number}
    </h1>
  );
}
```

You should see the number "0" appear within the interface.

<!-- IMAGE: The number "0" -->

Next, open the React DevTools and select the "App" component. You'll see that the "number" property appears in the sidebar under a "State" heading.

<!-- IMAGE: State in React DevTools -->

Within the sidebar, click on the "0" value and change it to something else. You could change it to a number or a string or whatever else.

<!-- IMAGE: Changing the state in React DevTools -->

After making the change, the new value should appear within the interface.

<!-- IMAGE: New value in the interface -->

Here's what's happening:

As data inside the "state" object is changed, React is able to seamlessly update the interface to reflect those changes. As a result, we can create real-time interfaces without having to write code that does any of the dirty work. By using the "state" object, React just handles it for us.

To learn more about the "state" object, read: [How To Create and Manage State in React](#).

## Lifecycle Methods

Lifecycle methods allow us to execute code at different points in a component's lifecycle, such as when the component is first created or once it's removed from the interface.

There are a number of lifecycle methods available to us from inside class componentset, including:

* componentWillMount
* componentDidMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* componentWillUnmount

Some of these methods have scary names, but fear not: most of the time, you won't need to use most (or even any) of them. Lifecycle methods can be convenient, but you shouldn't look for excuses to use them. It's best to learn about them in context, when you're trying to solve a specific problem.

As an example though, try adding the `componentWillMount` and `componentDidMount` methods into the "App" component:

```javascript
class App extends React.Component {
  componentWillMount(){
    console.log("Component will mount");
  }
  componentDidMount(){
    console.log("Component did mount");
  }
  render(){
    return (
      <h1>
        Hello World
      </h1>
    );
  }
}
```

After the interface refreshes, the "Component will mount" message will appear in the JavaScript Console *before* the "Component did mount" message. This will always be case, which is what makes them useful. You can execute code that always runs in a certain order, at a certain point in time.

It's also worth noting the existence of the `constructor` method, which runs as soon as a component is created. This method isn't specific to React -- every JavaScript class can have a `constructor` method -- but it is commonly used during React development:

```javascript
constructor(){
  super();
  console.log("Component created")
}
```

This "Component created" message will appear in the JavaScript Console before any of the other `console.log` statements insid a component.

"But what is this `super` keyword inside the `constructor` method?"

This keyword ensures that, when the `constructor` method runs, it doesn't overwrite the `constructor` method of the "React.Component" class that our "App" component is inheriting from. If we don't use this `super` keyword, the component will break, so it's always essential to include it.

To learn more about lifecycle methods, read: [How (and Why) To Use Lifecycle Methods](#).

## Destructuring

Sometimes, a class component will resemble the following:

```javascript
class App extends Component {
  render(){
    return (
      <h1>
        Hello World
      </h1>
    );
  }
}
```

Here, we can see that the "App" component extends "Component" rather than "React.Component", which some people prefer as the syntax does look a little cleaner.

Your ability to use this syntax depends on how the React library is imported into that specific file.

Generally, I'll use this syntax to import React:

```javascript
import React from "react";
```

...and this requires that our components extend "React.Component".

You can, however, also import React like this:

```javascript
import React, { Component } from "react";
```

Here, we're using a feature of ES6 known as [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), and in this context, destructuring means we can now extend "Component" instead of "React.Component".

Ultimately, it doesn't matter which syntax you prefer. It is worth knowing about both options though, as you'll see them used in different libraries, projects, and tutorials.

## Receiving Props

Passing props into a class component is identical to passing props into a functional component, but receiving those props is a little different.

This, for instance, is how we receive props in a functional component:

```javascript
function App(props) {
  console.log(props);
  return (
    <h1>
      Hello World
    </h1>
  );
}
```

Here, we've defined a parameter named "props" and output the value of "props" to the JavaScript Console.

Inside a class component though, we don't need to define a parameter named "props", and we refer to the "props" object by referring to "this.props":

```javascript
class App extends React.Component {
  render(){
    console.log(this.props);
    return (
      <h1>
        Hello World
      </h1>
    );
  }
}
```

To learn more about props, read: [How To Pass Data into Components with Props](/pass-data-between-components-props-tutorial).

## Custom Methods

```javascript
function App() {
  function handleClick(){
    console.log("You clicked the button");
  }
  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
```
