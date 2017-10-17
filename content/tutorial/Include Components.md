---
title: "How To Include Components Inside Other Components"
slug: "include-component-inside-other-components-tutorial"
---

In this tutorial, we're going to learn how to include components inside other components. This is an essential aspect of using React, as it allows us to build components that can be used (and reused) in different contexts, significantly reducing the amount of code we have to write and maintain.

## Project Setup

To begin, create a new React project with `create-react-app`:

```bash
create-react-app including-components-demo
```

...and launch the local server:

```bash
cd including-components-demo
yarn start
```

You'll now be able to view the project at <http://localhost:3000>.

**Note:** It's possible to include components inside other components using a web-based playground, such as CodePen, but there's certain features we're about to explore that require the use of a module bundler, so it's convenient that `create-react-app` is built around Webpack.

Next, replace the contents of the "App.js" file with the following:

```javascript
import React from "react";

function App() {
  return (
    <ul>
      <li>Hello world</li>
    </ul>
  );
}

export default App;
```

This is an unremarkable component that outputs the words "Hello world" inside a `ul` element.

## Including Components

To include another component inside this component, first create another component inside the "App.js" file. (It doesn't specifically matter where you create this component. It could be above or below the "App" component.)

In this example, we're going to create a component named "Person" that, as you can probably guess, will represent a person:

```javascript
function Person() {
  return (
    <li>
      David
    </li>
  );
}
```

Here, we've hard-coded this value of "David" inside this component, but we'll see how to dynamically alter this value in another tutorial, allowing the component to be reused in different contexts.

To see how to include these components inside the "App" component, refer to the `ReactDOM.render` method inside the "index.js" file:

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

The syntax we see here for referring the "App" component -- the `<App />` syntax -- is the same syntax we can use from inside the "App" component to refer to the "Person" component.

Here's what this looks like:

```javascript
function App() {
  return (
    <ul>
      <Person />
    </ul>
  );
}
```

But since the "Person" component can be included as many times as we want, refer to it a few more times:

```javascript
function App() {
  return (
    <ul>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </ul>
  );
}
```

The same component will now appear six times within the "App" component.

## Importing Components

It's not practical to create and manage multiple components from inside a single file. The preferred way of working would be to have each component in a separate file. That way, they could be managed separately from the rest of the code.

To achieve this, create a "Person.js" file inside the project's `src` directory.

You'll notice that we've named the file after the name of teh component. This is not strictly necessary -- you could name the files and the components differently -- but keeping the names the same is a sensible convention that's worth following.

Next, cut and paste the code for the "Person" component into the "Person.js" file:

```javascript
function Person() {
  return (
    <li>
      David
    </li>
  );
}
```

For this component to work, it needs to have access to the React library, meaning we need to import React at the top of this file (and any other component file we create):

```javascript
import React from "react";

function Person() {
  return (
    <li>
      David
    </li>
  );
}
```

We also need to *export* this component:

```javascript
import React from "react";

function Person() {
  return (
    <li>
      David
    </li>
  );
}

export default Person;
```

The `export` keyword what makes the component available to other files, and the `default` keyword is used when a file exports a value (such as a function, a class, an object, or anything else).

To then import this component into the "App.js" file, add the following statement after the current `import` statement:

```javascript
import Person from "./Person.js"
```

Here, we're importing the "Person" component from the file named "Person.js". The use of the "./" tells Webpack that the "Person.js" file is in the same directory as the current file (meaning, the same directory as the "App.js" file).

The file extension, however, can be ommitted, as JavaScript is assumed by default:

```javascript
import Person from "./Person"
```

It's worth noting that React doesn't force us to structure our component files into any particular set of folders or hierarchy. Just dumping the component files into the `src` directory is fine. If you were to add more structure to the project though, perhaps by creating a "Person" directory that would store all person-related components, this folder would need to be referenced inside the `import` statement:

```javascript
import Person from "./Person/Person.js"
```

Fortunately, `create-react-app` provides clear errors when a file isn't found, so it shouldn't be difficult to realise when you're trying to import a component that doesn't exist.
