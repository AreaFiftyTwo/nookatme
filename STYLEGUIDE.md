Style Guidelines
================

## Table Of Contents

[Folder structure](#folder-structure)  
[Class Name guidelines](#class-name-guidelines)  
[Sass variable guidelines](#sass-variable-guidelines)  


- - -

## Folder structure

In the `src` folder:

    ├── __tests__   // unit and integration tests
    ├── components  // all React components
    │   └── pages
    │       ├── Nav
    │       ├── Home
    │       └── List     // etc
    ├── hooks       // custom hooks
    ├── pages       // i.e. nav, body, etc
    ├── scss        // sass
    ├── store       // redux
    ├── utils       // globally used functions etc

All reusable components (button, select, etc) are within `src/components` itself for easy VS Code importing.

In the `src/scss` folder:

    ├── abstracts
    │   ├── _breakpoints
    │   ├── _functions
    │   └── _vars            // colors, fonts, etc
    ├── base
    │   ├── _reset
    │   └── _typography      // base font sizes
    ├── components
    │   ├── _Button
    │   └── _Select
    ├── layout
    │   ├── display          // flex combinations
    │   ├── nav
    │   └──
    ├── pages
    │   ├── Home
    │   └── List
    ├── themes
    └── vendors

**Always grab fonts and colors from the _vars file.**

- - -

## Class Name Guidelines

We'll be using [modified BEVM (Block-Element-Variant-Modifier)](https://www.easternstandard.com/blog/2016/01/going-little-further-bevm-css-syntax-creating-css-profiles) for all class names.

In this example (screenshot to come, but of the list block):

.list  
.list__header  
.list__table  
.list__table--variations  

Per separation of concerns, the parent block component should contain all of the business logic and load display components within, i.e. the List component holds the fetch/post logic, and loads visuals like ListTable, etc.

Modifiers shouldn't be too common. Usually anything you make will be an element within the block.

We also have sass variations [according to this method](https://www.viget.com/articles/bem-sass-modifiers/) in some of the scss files:

    <button class="button -green -rounded -large">

    .button {
      &.-green {...}
      &.-rounded {...}
      &.-large {...}
    }

For commonly recurring combinations, we'll combine them in our sass files instead:

    %button {
      border: none;
      padding: 1em 2em;
      font size: 1rem;

      &:hover {
        cursor: pointer;
      }
    }

    %button--red {
      background-color: red;
      font-color: white;
    }

So to make a delete button, for example:

    .button--delete {
      @extend %button;
      @extend %button--red;
    }


- - -

## Sass Variable Guidelines

Declare all colors, fonts, and sizes in the _vars file so that if any large changes need to be made, we can simply change the variable rather than every single time that value has been used.

To use any variables declared in nested $() combinations:

The "family" in $font:

    font-family: _font(family);

The "med" in $color:

    color: _color(med);

