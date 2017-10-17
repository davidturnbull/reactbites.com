---
title: "React State By Example, Part 1: How To Create and Update the “state” Object"
slug: "react-state-tutorial-create-update-state-object"
---

This is Part #1 of [React State By Example](#), a detailed series of beginner-friendly tutorials for React developers who want to understand:

* what "state" is
* why state is important
* how to use state to create real-time interfaces on the web

In this tutorial, we’re going to create an interface that displays a button. This button will contain a number and, when this button is clicked, the number within the button will increment by a value of one.

This is a working example of the interface:

<!-- CODEPEN: Working example -->

It’s not the world’s most exciting interface, but we’re not trying to build anything remarkable yet. For the time being, we just want to get a basic idea of what state is without having to write much code.

## JavaScript & jQuery

Before we start working with React, let’s solve this problem with JavaScript and jQuery. **By seeing how things are done without React, the advantages of React — and the advantages of state — will become clear.**

To begin, paste the following code into a HTML file:

```html
<button id="increment">
  <span id="number">
    0
  </span>
</button>
```

Here, we have a button element with an id of “increment” and a span element with an id of “number”. When the “increment” button is clicked, the value inside the “number” element should increment by a value of one.

Next, create an “incrementNumber” function that:

1. Grabs the text from inside the “number” element.
2. Parses the value of the “number” element as an integer.
3. Increments the value of the integer by one.
4. Updates the value of the “number” element.

This is the function I’ve created:

```javascript
function incrementNumber(){
  var number = document.getElementById("number").textContent
  var integer = parseInt(number);
  document.getElementById("number").textContent = integer + 1;
}
```

Then use the `onclick` attribute to attach this function to the button element:

```html
<button id="increment" onclick="incrementNumber()">
  <span id="number">
    0
  </span>
</button>
```

You’ll now be able to click the button element to increment the number inside the button by a value of one.

Alternatively, we can replace the JavaScript with jQuery:

```javascript
$("#increment").click(function() {
  var number = $("#number").text();
  var integer = parseInt(number);
  $("#number").text(integer + 1);
});
```

This provides the same functionality as the standard JavaScript, but with the benefit of a cleaner syntax (and without the need for the `onclick` attribute).

But while these solutions are straight-forward, writing this kind of code for any non-trivial interface is far from ideal.

## Project Setup

To begin, create a React project with the `create-react-app` command:

```bash
create-react-app example-one
```

Then navigate into the project directory:

```bash
cd example-one
```

...and launch the local server for the project:

```bash
yarn start
```

Once the local server has finished launching, you’ll be able to view the project by visiting <http://localhost:3000>.

Next, open the “App.js” file, inside the project’s src directory, and delete everything inside this file. This allows us to start from a blank slate.

Import the React library at the top of the file:

```javascript
import React from “react”;
```

...and create a component named “App”:

```javascript
function App(){
  // code goes here
}
```

Then export this component so it’s available to the other files in the project:

```javascript
export default App;
```

At this point, the “App.js” file should resemble the following:

```javascript
import React from "react";

function App(){
  // code goes here
}

export default App;
```

With this code in place, we’re ready to start building the interface.

## Creating the Interface

Inside the “App” component, return a button element that contains a static value of “0”:

```javascript
function App(){
  return (
    <button>
      0
    </button>
   );
}
```

Then create a “handleClick” function inside the component that outputs a message via the JavaScript Console:

```javascript
function App(){
  functionhandleClick(){
    console.log("You clicked the button");
  }
  return (
    <button>
      0
    </button>
  );
}
```

...and attach an onClick attribute to the button element that references this “handleClick” function:

```javascript
function App(){
  function handleClick(){
    console.log("You clicked the button");
  }
  return (
    <button onClick={handleClick}>
      0
    </button>
  );
}
```

Here, it’s important to remember that we’re writing JSX and not HTML. This means the attribute is named onClick and not onclick. The capitalization of the C is essential, as React won’t recognise the attribute without it.

With this code in place, clicking the button will output the “You clicked the button” message to the JavaScript Console.
Next, we need the “handleClick” function to somehow modify the value of “0” that’s inside the button element.

Something we won’t do is reach directly into the DOM and manipulate the value of this element. In fact, this is one of React’s cardinal rules: don’t touch the DOM.

“Why?”

Because a lot of the “magic” that React performs relies on the fact that the library has complete control over how the interface renders. If we start to interact with the DOM directly though, we interfere with this process, resulting in unpredictable behaviour.

But if we can’t reach directly into the DOM, how do we modify the number inside the button element?

The answer is, “By using state.”

## Using State

To get your first taste of what state is and how it works, convert the “App” component into a class component:

```javascript
class App extends React.Component {
  handleClick = () => {
    console.log("You clicked the button");
  }
  render(){
    return (
      <button onClick={this.handleClick}>
        0
      </button>
    );
  }
}
```

Here, we’ve made the following changes:

1. Converted the “App” function into a class.
2. Converted the “handleClick” function into a class method.
3. Placed the return statement inside the render method.
4. Replaced “handleClick” with “this.handleClick”.

These changes are necessary because — and it’s important that you make a mental note of this — only class components can use state.

<!-- TK: Functional vs. Class “App” Component -->

Next, create an object named “state” at the top of the “App” component:

```javascript
class App extends React.Component {
  state = {
    // data goes here
  }
  handleClick = () => {
    console.log("You clicked the button");
  }
  render(){
    return (
      <button onClick={this.handleClick}>
        0
      </button>
    );
  }
}
```

(You don’t have to place this “state” object at the top of the component, but since state is such an integral part of how a component operates, it’s a good idea to place the “state” object somewhere obvious.)

Inside the “state” object, we can store any type of data that a regular JavaScript object can store, including:

* numbers
* strings
* booleans
* arrays
* objects

What’s signficant though is that, by calling this object “state”, React infuses  this data with “magical” powers that will make our lives a whole lot easier.

To see what I mean, create a property named “number” inside the “state” object, and set the value of this property to “0” (without quotes):

```javascript
state = {
  number: 0
}
```

Then, inside the render method, replace the “0” with “this.state.number”, which is how we can reference a property from the “state” object:

```javascript
render(){
  return (
    <button onClick={this.handleClick}>
      {this.state.number}
    </button>
  );
}
```

(Don’t forget to wrap the reference within a pair of curly braces, as that’s how the reference will be interpreted as a JavaScript expression.)

Based on this change, nothing will appear different. You’ll still see the “0” within the button element and clicking the button won’t do anything aside from output the message to the JavaScript Console.

Something significant, however, has changed.

Open the React DevTools and select the “App” component. You’ll see the component’s “state” object in the sidebar, and this object will display the “number” property we created a moment ago.

Then click the property’s current value and change it. (You’ll need to tap the “Return” key to save the change.)
You’ll notice that the number within the button element automatically updates to reflect whatever value you’ve defined via React DevTools.

This is what state allows us to achieve: the seamless refreshing of data within an interface without having to directly interact with the DOM. All we have to do is define what the data is — in this case, the data is the “number” property — and where that data should be displayed. When the data changes, either by user intervention or on some kind of schedule, React will update the interface to reflect those changes without us do any of the leg-work.

The power of this functionality will become clearer as we delve into more complex and interesting examples, but even in this simple example, we can see glimpses of the most notable benefits:

### Benefit #1: We don’t have to interact directly with the DOM.

This means we don’t need to select elements, parse their values, and replace their contents with a new value. This simplifies the code we have to write and reduces the amount of code we have to write.

### Benefit #2: When data inside the “state” object is changed, the interface is updated as efficiently as possible to reflect those changes.

There are times where you’ll have to get your hands dirty with optimisations, but since we’re not touching the DOM directly, React is able to take the reigns, making it significantly easier to create lightning-fast interactions.

### Benefit #3: We can output data from the “state” object in multiple places and keep everything in sync without any effort.

To see what I mean by this, add another reference to the “number” property from inside the render method:

```javascript
render(){
  return (
    <div>
      <button onClick={this.handleClick}>
        {this.state.number}
      </button>
      <p>
        The current number is {this.state.number}.
      </p>
    </div>
  );
}
```

Even though the “number” property now appears in two places, we don’t have to worry about keeping anything in sync. If you change the value via the React DevTools, the number will update in both places.

<!-- TK: Once again, this benefit might seem small in a simple example, but it’s easy to imagine its significance in a larger project. -->

## Updating State

Despite everything we’ve learned, we still haven’t created the core feature of this example, which is to allow users to click the button to increment the value it contains.

To implement this feature, you might expect that we can write code like this:

```javascript
handleClick = () => {
  this.state.number = this.state.number + 1;
}
```

Here, we’re directly setting the value of the “number” property to a number one higher than the current value.
This code won’t work as expected though, as another rule of working with the “state” object is that we can’t modify the “state” object directly.

“Why?”

For React to know when to update the interface, we need to tell React when the “state” object has changed. If we set the values of the “state” object directly though, React is never told, “Hey, the state of this component has changed, so I’d like you to update the interface to reflect these changes.” The values within the “state” object will change, but the values within the interface will remain the same, meaning the interface will appear unresponsive (and un-reactive).

To fix this, we need to use the `setState` method, which is provided to us by the React library:

```javascript
handleClick = () => {
  this.setState({
    number: this.state.number + 1
  });
}
```

This `setState` method allows us to update the “state” object in a way that also tells React that we want the interface to be updated. Just pass an object into the method to overwrite the values of the current “state” object.

With this code in place, clicking the button will increment the number by a value of one.

## Understanding prevState

Something important to understand is that the `setState` method does not always update the “state” object as soon as the method is called.

This might sound strange, but here’s how this detail is described in the official documentation:

> Think of `setState` as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

In other words, the `setState` method is asynchronous, and this can result in unpredictable behavior if you’re trying to update the “state” object with values that are calculated based on the most recent values from that object.

In this example, for instance, to calculate the new value of the “number” property, we need to refer to the latest value of the “number” property. This is why we refer to “this.state.number” from inside the `setState` method. But with the code in its current form, we may not have access to the latest value of the “number” property if the “state” object is changing frequently and React is compelled to combine multiple updates into a single request. Practically, this means that clicking the button could fail to increment the number.

To visualize this problem, add a console.log statement directly after the `setState` method and output the value of the “number” property:

```javascript
handleClick = () => {
  this.setState({
    number: this.state.number + 1
  });
  console.log(this.state.number);
}
```

You’ll notice that the number that’s output to the JavaScript Console always lags behind the updated value of the “state” object, meaning the number via the Console will be one lower than the number that’s diplayed in the button. This is because the console.log statement is executed before the `setState` method has finished executing. As a result, the console.log statement can’t help but output the outdated value.

With this in mind, we need to ensure that the `setState` method can access the most recent values when incrementing the “number” property.

To do this, pass a function into the `setState` method, rather than an object:

```javascript
this.setState(() => {
  // code goes here
});
```

Then, between the parentheses, define a parameter named “prevState”:

```javascript
this.setState((prevState) => {
  // code goes here
});
```

...and output the value of “prevState” to the JavaScript Console:

```javascript
this.setState((prevState) => {
  console.log(prevState);
});
```

By defining this “prevState” parameter, we can access a version of the “state” object that is guaranteed to be most the recent version — even if the `setState` method is put into a queue and executed in a single, asynchronous batch.

For instance, we can access the most recent version of the “number” property:

```javascript
this.setState((prevState) => {
  console.log(prevState.number);
});
```

But this code won’t actually change the contents of the “state” object, so we won’t see the full effect of this code.

To remedy this, define a variable named “value” and output this variable to the JavaScript Console:

```javascript
this.setState((prevState) => {
  const value = prevState.number + 1;
  console.log(value);
});
```

Then return an object from inside the function:

```javascript
this.setState((prevState) => {
  const value = prevState.number + 1;
  console.log(value);
  return {
    number: value
  }
});
```

This object is similar to the object we created inside the `setState` method, earlier in this example, except that it references “prevState.number” instead of “this.state.number”. The contents of this object will be merged with the component’s “state” object when this `setState` method is executed.

With this code in place, clicking the button will output a number that does match the most recent version of the “state” object.
We can, however, simplify this code by removing the variable, removing the console.log statement, and by using the short-hand syntax for incrementing an integer:

```javascript
this.setState((prevState) => {
  return {
    number: ++prevState.number
  }
});
```

This code is more verbose than what we wrote earlier, and it may not appear to operate any differently, but now the `setState` method is guaranteed to always operate in a completely predictable way. Even if our interface grows in complexity, the `setState` method will continue to have access to the most recent version of the “state” object and the “number” property.

If you’re struggling to wrap your head around when this “prevState” parameter is necessary though, here’s what you need to remember:

You only need to use the “prevState” parameter if the updated state needs to be calculated based on the most recent version of the state. If you’re just overwriting the “state” object, without considering the previous values of the “state” object, the “prevState” parameter is not necessary.

In practice, this means that, if you ever find yourself referencing “this.state” from inside the `setState` method:

```javascript
this.setState({
  number: this.state.number + 1
});
```

...then it’s time to use the “prevState” parameter.

## Alternative Syntax

Before we wrap things up, it’s worth mentioning that there is an alternative syntax for defining the “state” object within a component.

So far, we’ve been defining a “state” object with this syntax:

```javascript
state = {
  number: 0
}
```

But this is not actually the most common syntax for defining this object, as it relies upon an experimental feature of JavaScript that is not available in most development environments by default.

Instead, the most common syntax — and the standard syntax — requires that you define a constructor method at the top of the component:

```javascript
constructor(){
  super();
}
```

Then, after the super keyword, attach a “state” object to the component by referring to “this.state”:

```javascript
constructor(){
  super();
  this.state = {
    number: 0
  }
}
```

Personally, I think the syntax I’ve been demonstrating is much cleaner than the standard syntax, and there’s no reason not to use it if you have access to the feature. That said, either approach is fine. It’s just useful to know about both options so you’re never caught off-guard by other people’s code.
