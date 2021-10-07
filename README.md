# ezJS

# A simple guide to JS basics

Copy and modify

## Table of contents

- [Installations](#installations)
- [Setup](#setup)
- [Commenting](#commenting)
- [Variables](#variables)

## Installations
(IDE etc.)

Examples: VSCode, Notepad++ or regular notepad

Web browser like Google Chrome or Mozilla Firefox

## Setup

### Create HTML file

In VSCode, you can just write `!` and it will autofill the setup for a html file.

If you don't use VSCode or it does not work, you can copy this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### Create javascript file

You can create a javascript file in many ways. You can for example create any type of file in your folder/working directory and end it with .js. This can easily be done in VSCode where you can clearly see the file extention (what the file ends with after .).

### Link javascript file

```html
<body>
   <script src="filename.js"> 
</body>
```

### View your code

Open the console by either pressing **f12** while in the browser or opening though right-clicking and choosing "show console".

## Commenting

For commenting on a single line:

`//`

Example:
```javascript
// hello
```
For commenting on multiple lines:

Start with:

`\*`

End with:

`*/`

Example:

```js
/* asf
hello
world
*/
```

## Variables

Create variable with `var` or `let` and the name of the variable.

```js
var a = 1;
```

Call upon the variable by just using its name.

```js
a
>>> 1 
```

Change the value of the variable by calling upon it and appointing it a new value with `=`

```js
a = 2;
```

Create constant with `const`:

```js
const pi = 3.14;
```

Some types: `number`, `string` and `bolean`:

```js
let numb = 0;

let str = 'abc';

let bool = false;
```