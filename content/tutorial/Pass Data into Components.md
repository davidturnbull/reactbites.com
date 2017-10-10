---
title: "How To Pass Data into Components with Props"
slug: "pass-data-between-components-props-tutorial"
---

In this tutorial, we're going to talk about how to pass data between components by using a feature of React known as "props". This is a critical feature to understand as props allow us to create components that can be reused in different contexts.

Before continuing, it's important to understand:

* [How To Create a React Project with create-react-app](#)
* [How To Create Functional Components](#)
* [How To Create Class Components](#)
* [How To Include Components Inside Other Components](/include-component-inside-other-components-tutorial)

## Project Setup

To begin, create a new React project with `create-react-app`:

```bash
create-react-app passing-data-example
```

...and launch the local server:

```bash
cd passing-data-example
yarn start
```

You'll now be able to view the project at <http://localhost:3000>.

Then replace the contents of the "App.js" file with the following code:

```javascript
import React from "react";

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

function Person() {
  return (
    <li>David</li>
  );
}

export default App;
```

Here, we have an "App" component that displays a list of "Person" components that output the name of a person. Both components are inside a single file, and although you're welcome to split these components across two files, it's not important for this example.

It's also worth noting that both of our components are [functional components](/create-functional-component-tutorial). Working with class components is a little different when it comes to passing data between them and we'll discuss those differences later in this tutorial.

## Passing Props

The primary problem with the "Person" component is that the value of "David" is hard-coded into it, meaning each time we include the "Person" component, it outputs the exact same thing. Generally, this sort of component isn't useful. We want to create components that can display unique data.

To achieve this, define a "name" attribute (and value) for each of the "Person" components:

```javascript
function App() {
  return (
    <ul>
      <Person name="David" />
      <Person name="Bob" />
      <Person name="Mary" />
      <Person name="Bill" />
      <Person name="Tim" />
      <Person name="Warren" />
    </ul>
  );
}
```

Here, this "name" attribute is something we've defined. It's not inherent to React. We are choosing to pass these values into the "Person" component, but we could call this attribute anything else, such as "firstName":

```javascript
function App() {
  return (
    <ul>
      <Person firstName="David" />
      <Person firstName="Bob" />
      <Person firstName="Mary" />
      <Person firstName="Bill" />
      <Person firstName="Tim" />
      <Person firstName="Warren" />
    </ul>
  );
}
```

If an attribute name is constructed out of multiple words, as is the case with "firstName", then it's conventional to use the camel case syntax, with the first letter lowercase but the first letter of all subsequent words capitalized.

But while I've been using the word "attribute" to describe what we've created here, the official React terminology is "prop". We've created a prop called "name" for each of the "Person" components.

I'll use the word "prop" from here on out, but props are comparable to HTML attributes. They're pieces of metadata that we can pass into our components to affect how that component displays or operates. The main difference is that *we* define what that metadata is and how it's used.

## Receiving Props

To access the "name" prop that we've defined from inside the "Person" component, create a parameter named "props" between the parentheses of the "Person" function:

```javascript
function Person(props) {
  return (
    <li>David</li>
  );
}
```

This "props" parameter allows the "Person" component to receive props that are passed into it.

Then, inside the component itself, output the value of "props" via a `console.log` statement:

```javascript
function Person(props) {
  console.log(props);
  return (
    <li>David</li>
  );
}
```

You'll notice that, for each "Person" component that's embedded within the "App" component, an object is now output to the JavaScript Console. This object contains the props we've defined -- in this case, the "name" prop -- for that specific component.

Ultimately, this is all props is: an object containing the data that's passed into a component.

Another way to see a component's props is to open the React DevTools and select any of the "Person" components. You'll notice that the props appear in the sidebar, under a "Props" heading.

To display these names within the interface though, rather than inside the JavaScript Console, refer to "props.name" from inside the `return` statement:

```javascript
function Person(props) {
  return (
    <li>{props.name}</li>
  );
}
```

Here, we've wrapped "props.name" inside a pair of curly braces. This ensures that the reference is interpreted as a JavaScript expression, rather than directly output to the screen.

Based on these changes, our "Person" component is now reusable. We can pass a "name" prop into it and then dynamically render that data. The component itself, of course, is entirely unremarkable -- it's just an `li` element -- but we have laid the groundwork for more interesting functionality.

## One-Way Data Flow

Before we continue, it's important to clarify that React enforces what is known as "one-way data-flow". In practice, this means that it's only possible to pass data *down* into a component.

You cannot pass data:

* between sibling components
* into a parent component

For instance, the "Person" component cannot pass props into the "App" component.

On the surface, this might seem like a limitation, but as we dive into further examples, it'll become clear that it doesn't prevent us from accomplishing anything. All it does is make our interfaces easier to maintain as there is less to think about if data is only moving in one direction.

## Other Data Types

At the moment, we're just passing a string into each of the "Person" components. We're not limited to passing strings via props though. We can pass basically anything into a React component, including:

* strings
* numbers
* booleans
* functions
* arrays
* objects
* components

Passing some of these data types is better demonstrated in other examples and tutorials, but let's see how we can pass numbers into this "Person" prop that we've created.

To begin, define an "age" prop for each of the "Person" components:

```javascript
function App() {
  return (
    <ul>
      <Person name="David" age="27" />
      <Person name="Bob" age="58" />
      <Person name="Mary" age="23" />
      <Person name="Bill" age="36" />
      <Person name="Tim" age="51" />
      <Person name="Warren" age="11" />
    </ul>
  );
}
```

Then refer to this "age" prop within the "Person" component:

```javascript
function Person(props) {
  return (
    <li>{props.name} ({props.age})</li>
  );
}
```

The person's age will now appear alongside their name, within parentheses.

But when passing numbers into a component, it's best if we don't wrap that number in quotes, as that will cause the number to be passed as a string. Instead, we should wrap the number in curly braces:

```javascript
function App() {
  return (
    <ul>
      <Person name="David" age={27} />
      <Person name="Bob" age={58} />
      <Person name="Mary" age={23} />
      <Person name="Bill" age={36} />
      <Person name="Tim" age={51} />
      <Person name="Warren" age={11} />
    </ul>
  );
}
```

This ensures that the numbers are passed *as* numbers, meaning if were to perform any math on the numbers from within the "Person" component, we wouldn't have to parse the number from a string.

This logic applies to all other data types. If you're not passing a string into a component, make sure to wrap that data in curly braces and not quotes, otherwise it will be interpreted as a string.

## Children

So far, we've been passing data into a component via named props. There is, however, another way of passing data into a component.

To see this alternative approach, create a component named "People" that outputs the value of the "props" object:

```javascript
function People(props) {
  console.log(props);
  return (
    <ul>
    </ul>
  );
}
```

Here, I've placed an empty `ul` element inside the `return` statement, as the component needs to return something and the `ul` element will be relevant later.

Next, update the "App" component to resemble the following:

```javascript
function App() {
  return (
    <People>
      Hello World
    </People>
  );
}
```

Here, we're using this "People" component differently to how we used the "Person" component.

Instead of having a single, self-closing tag, we have an opening and a closing tag -- similar to how most HTML elements work -- and we're wrapping these tags *around* the data that we want to pass into the component. This means the "Hello World" text is being passed into the "People" component.

This data then becomes available to the "People" component via a prop named "children", which you can see proof of by observing the output in the JavaScript Console.

<!-- IMAGE: "children" prop in JavaScript Console -->

You might be wondering though:

*Why* pass data into a component without using named props?

It's never strictly necessary to pass data into a component without using a named prop. Sometimes though, it's more convenient, or at the very least, more readable than using named props.

For example, update the "People" component to replace the value of the "Hello World" text with the "children" prop, inside the `ul` element:

```javascript
function People(props) {
  console.log(props);
  return (
    <ul>
      {props.children}
    </ul>
  );
}
```

Then, back in the "App" component, replace the "Hello World" text with the list of "Person" components that we'd created earlier:

```javascript
function App() {
  return (
    <People>
      <Person name="David" age={27} />
      <Person name="Bob" age={58} />
      <Person name="Mary" age={23} />
      <Person name="Bill" age={36} />
      <Person name="Tim" age={51} />
      <Person name="Warren" age={11} />
    </People>
  );
}
```

Ultimately, this "People" component isn't doing a whole lot -- it just wraps the `ul` element around whatever is inside of it -- but already we can see how readable the "App" component has become now that it's entirely made of components of our own creation.

To see a more useful example of how this "children" prop can be used, I'd suggest checking out [the documentation for Semantic UI React](https://react.semantic-ui.com/elements/button#button-example-button). Semantic UI is a user interface library, similar to Bootstrap, and the React version uses the "children" prop to make it easy to build interfaces.

It's worth noting that, even if a component has a "children" prop, it can still receive named props:

```javascript
function App() {
  return (
    <People title="My Best Friends">
      <Person name="David" age={27} />
      <Person name="Bob" age={58} />
      <Person name="Mary" age={23} />
      <Person name="Bill" age={36} />
      <Person name="Tim" age={51} />
      <Person name="Warren" age={11} />
    </People>
  );
}
```

## Destructuring Props

Inside the "Person" component, we have a couple of references to the "props" object:

```javascript
function Person(props) {
  return (
    <li>{props.name} ({props.age})</li>
  );
}
```

This isn't necessarily a problem, but it's not hard to imagine that, if we pass more proprs into this component, constantly referring to the "props" object might make the code appear quite messy.

You might try to solve this problem by defining variables:

```javascript
function Person(props) {
  const name = props.name;
  const age = props.age;
  return (
    <li>{name} ({age})</li>
  );
}
```

But now we just have multiple lines of variable declarations.

Fortunately, there's a feature of ES6 known as "destructuring" that allows us to simplify and improve the readability of this code.

To see destructuring in action, replace the "props" argument with an object that lists the various props that you want to refer to from within the "Person" component:

```javascript
function Person({ name, age }) {
  return (
    <li>{props.name} ({props.age})</li>
  );
}
```

Here, we've replaced the "props" argument with an object that lists the "name" and "age" props.

Based on this change, we can now reference the "name" and "age" props as variables *without* needing to define them with typical variable declarations:

```javascript
function Person({ name, age }) {
  return (
    <li>{name} ({age})</li>
  );
}
```

You can also do the same thing inside the "People" component:

```javascript
function People({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}
```

It's worth noting, however, that because we no longer have "props" defined as the parameter, we can't refer to the "props" object from within these components. As a result, whatever prop you want to reference in the component needs to be listed as part of the destructuring.

## Working with Class Components

Props can be passed into class components in the exact same way they can be passed into functional components. When it comes to receiving the props though, the syntax is a little different.

To see the differences, convert the "Person" component into a class component:

```javascript
class Person extends React.Component {
  render(){
    return (
      <li></li>
    );
  }
}
```

Then, within the `return` statement, display data from the "props" object by referring to "this.props":

```javascript
class Person extends React.Component {
  render(){
    return (
      <li>{this.props.name} ({this.props.age})</li>
    );
  }
}
```

This reference to the `this` keyword is the primary difference between receiving props in a class component verses a functional component.

You'll also notice that there's no "props" parameter that we've had to define, which also means it's not immediately straight-forward how we might destructure these props into variables.

We can still destructure the props though.

Once again, the syntax is just a little different:

```javascript
class Person extends React.Component {
  render(){
    const { name, age } = this.props;
    return (
      <li>{name} ({age})</li>
    );
  }
}
```

You can probably see, however, why people typically use functional components when a class component isn't strictly necessary, as the syntax for the functional component is far less verbose.

## Typechecking Props

Something that's important to think about is what type of data you allow to be passed into your components.

For example, pass a boolean value into the "name" prop and a string into the "age" prop:

```javascript
<Person name={true} age="Bleeeeeh" />
```

Technically, the component will still work -- or at least, it won't spit out any errors -- but it won't appear correct. The interface will display nothing in place of the boolean and an age should never be represented by a string. We're misusing the component by passing in inappropriate data.

There's also the issue of us simply not passing in *any* data:

```javascript
<Person />
```

This will just render an empty `li` element.

In a small project managed by a single person, this might not seem like a big deal, as you can probably just use your components as intended because you were the one who created them.

But imagine the following scenarios:

* You're working on a team of developers.
* You're working on a project with hundreds of components.
* You're working on code that you haven't seen in months.

In all of these cases, it's a lot more difficult (or even impossible) to remember what type of data a component accepts. You'd have to dig into the code of each component to figure out exactly what it can handle.

To solve this problem though, we can use typechecking.

Typechecking allows us to define what type of data is required for specific props and whether or not that prop is required. Then, when inappropriate data is passed into a component, or when required data is not passed into a component, an extremely clear error can be output to the screen that tells us what exactly went wrong (and how to fix it).

This, as you can probably imagine, makes working with our components a whole lot easier as our codebases grow larger.

Two popular ways of implementing typechecking are by using either [Flow](https://flow.org/) or [Typescript](https://www.typescriptlang.org/). These tools add typechecking features on top of the JavaScript syntax and are not limited to use with React. They are, however, beyond the scope of this tutorial and more advanced than what we need right now.

Instead, the typechecking method we're going to use involves installing an NPM package known as "PropTypes". This package used to be included with the core React library, but since the adoption of Flow and Typescript, the package has been split off into its own project.

But don't assume that the PropTypes package isn't a good option just because it's no longer a default option. For many projects, the PropTypes package will be all you need.

To install the PropTypes package, run the following command:

```bash
yarn add prop-types
```

Then import the package by adding the following line to the top of the "App.js" file:

```javascript
import PropTypes from "prop-types";
```

Next, attach a "propTypes" object to the "Person" component by using the following syntax:

```javascript
Person.propTypes = {
  // typechecking rules go here
}
```

It's important to clarify that this syntax is placed above or below the "Person" component and not inside of it.

It's also worth noting that, since the "App" component doesn't receive any props, we don't need to perform any typechecking on it. We only need to typecheck components that receive props.

Within the "propTypes" object, define a "name" property to validate the "Person" component's "name" prop:

```javascript
Person.propTypes = {
  name:
}
```

...and set the value of this property to "PropTypes.string":

```javascript
Person.propTypes = {
  name: PropTypes.string
}
```

This is how we tell React that the "Person" prop should only acccept a string-based value for the "name" prop.

Next, try passing a non-string value into the "name" prop:

```javascript
<Person name={true} age={27} />
```

You'll notice that the following error appears in the JavaScript Console:

> Failed prop type: Invalid prop `name` of type `boolean` supplied to `Person`, expected `string`.

Pretty nifty, right?

The error tells us what we passed into the component (a boolean value for the "name" prop) and what we should have passed in (a string).

To typecheck the "age" prop, we can validate the prop as a number:

```javascript
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
```

Then test this by passing in a non-number into the "age" prop:

```javascript
<Person name="David" age="27" />
```

This will produce a similar error:

> Failed prop type: Invalid prop `age` of type `string` supplied to `Person`, expected `number`.

But it's still possible to use the "Person" component without passing in props and without seeing errors:

```javascript
<Person />
```

To fix this, add "isRequired" to the end of each typehecking rule:

```javascript
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
```

Now, if you fail to define values for these props, the following errors will appear in the JavaScript Console:

> Failed prop type: The prop `name` is marked as required in `Person`, but its value is `undefined`.
>
> Failed prop type: The prop `age` is marked as required in `Person`, but its value is `undefined`.

It is possible to perform much more precise validations than what we've done here, but even a little bit of typechecking goes a long way in terms of ensuring that our components are used correctly. To learn more about typechecking with the PropTypes package, [read the official documentation](https://www.npmjs.com/package/prop-types).

It's also worth noting that typechecking with PropTypes works the same for both functional components and class components. The syntax is the same.

You can, however, choose to use an alternative syntax for class components:

```javascript
class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };
  render() {
    const { name, age } = this.props;
    return (
      <li>
        {name} ({age})
      </li>
    );
  }
}
```

Here, we've defined a static property named "propTypes" within the "Person" component.

Either syntax is fine. It's just a matter of personal preference.
