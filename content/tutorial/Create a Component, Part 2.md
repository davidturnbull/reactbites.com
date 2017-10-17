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

This component is now equivalent to the functional "App" component we created earlier, except that:

* Class components can do things that functional components can't do.
* There are some minor syntactical differences when working with class components.

But these differences are best understood in context, when learning about other aspects of React development, so we'll discuss the details in other tutorials.
