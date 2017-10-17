---
title: "How To Create a React Project with CodePen"
slug: "create-react-project-codepen-tutorial"
---

There's a number of different ways we can setup a React project, each offering different advantages in terms of simplicity and flexibility.

In this tutorial, we're going to talk about how to setup a React project with [CodePen](https://codepen.io), which is one of my favourite tools for teaching web development, as it allows students to quickly start writing code while also providing enough flexibility that they can actually make meaningful progress.

## What is CodePen?

CodePen is described as "a playground for the front end side of the web". It's a web-based interface for writing front-end code -- HTML, CSS, and JavaScript -- that allows developers to quickly write and test their code.

You might be wondering though:

"Why not just open up your text editor of choice and start writing code?"

But while you *could* do that, think about what's required if you want to make your life easier with any of the following additions to your workflow:

* Automatically reload your HTML pages as you write new code.
* Embed commonly used librarys such as React and jQuery.
* Process your JavaScript through a preprocessor such as Babel or TypeScript.

Quite quickly, you can find yourself tinkering with your tooling rather than actually writing the code to make the thing that you had originally planned to make.

And that's at least one reason why CodePen is so helpful: because it allows you to start writing code without any of the setup of typical development. The other advantage is that it can ensure that you and I both have the same exact development environment, which means no unnecessary surprises.

It's worth noting that there are other tools out there that are similar to CodePen, such as [JSFiddle](http://jsfiddle.net) and [JSBin](http://jsbin.com), but CodePen has the best combination of design and functionality.

## Step #1: Create a Pen

When using CodePen, a "Pen" is comparable to a single HTML file with CSS and JavaScript. You can also create a "Project", which will allow you to split code across multiple files and folders, but in these tutorials, we'll only be using Pens. For anything with more complexity, we'll use `create-react-app`.

To create a Pen:

1. Visit [codepen.io](https://codepen.io/).
2. Click on the "Create" button in the top, right-hand corner of the screen.
3. Select the "New Pen" option.

You'll be taken to a page with three columns for your HTML, CSS, and JavaScript code, along with a pane to preview the results of your code. This pane will automatically refresh as you write code.

<!-- IMAGE: The default view of a Pen -->

## Step #2: Embed the React Library

Click on the "Settings" button in the top, right-hand corner of the screen to open a modal for modifying a range of settings for this particular Pen.

<!-- IMAGE: The "Settings" modal -->

Then click on the "JavaScript" tab and paste the following URLs inside that text boxes, beneath the "Add External JavaScript" heading:

* https://unpkg.com/react@16/umd/react.development.js
* https://unpkg.com/react-dom@16/umd/react-dom.development.js

These are the URLS for the hosted version of the React library, found via the "[Installation](https://reactjs.org/docs/installation.html#using-a-cdn)" section of the official documentation.

<!-- IMAGE: "Add External JavaScript" -->

There is also a "Quick Add" option for adding external libraries without having to track down their URLs, but the options available via this dropdown can be outdated.

## Step #3: Enable the Babel Preprocessor

[Babel](https://babeljs.io/) is a tool that allows us to use non-standard features of JavaScript without having to worry about whether or not those features are supported by our browser.

During React development, we need to use Babel to:

1. Convert JSX markup into JavaScript. (If you're not familiar with JSX, don't worry. It's something we'll talk about in other tutorials. Just know that it's a critical part of React development.)
2. Gain access to a variety of highly useful (but experimental) features of JavaScript.

Fortunately, enabling Babel via CodePen is simple. Just select the "Babel" option from the "JavaScript Preprocessor" dropdown.

<!-- IMAGE: Selecting "Babel" -->

Any JavaScript inside the "JS" pane will now be run through the Babel compiler, meaning we instantly have access to many of the features we'll soon need.

## Step #4: Save Your Pen as a Template

Even though creating a Pen is simple enough, the process can start to feel tedious if you're creating dozens or hundreds of them as part of your learning process. But the good news is, we don't have to keep repeating this same process over and over again.

To make your life easier, first sign up for an account with CodePen. There is a "Pro" option available for a yearly fee, but the features we'll be using are available for free users.

Then, within the "Settings" modal for your Pen, define a name for the Pen -- I've called mine "React Project" -- and toggle the Pen from a "Regular Pen" to a "Template".

<!-- IMAGE: Regular Pen to Template -->

Based on this change, you can now create Pens by:

1. Visiting [codepen.io](https://codepen.io/).
2. Clicking on the "Create" button in the top, right-hand corner of the screen.
3. Selecting the "New Pen From Template" option.
4. Selecting the Pen that you defined as a template.

This will create a new Pen with the same settings as the Pen we've just defined, meaning it will be configured for React development right out of the box.

<!-- IMAGE: "New Pen From Template" -->

You can visit <https://codepen.io/pen?template=MEzrPX> to see the template I've created.

The usefulness of this template will become clear as we work our way through a variety of examples and tutorials.
