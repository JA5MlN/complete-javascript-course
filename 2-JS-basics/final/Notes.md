# Notes to Chapter 2: JS Basics
## Variables and data types

A variable is anything that can vary.
JS uses variable to hold data which can be changed at any time.
JS uses the reserved keyword 'var' to declare a variable.
You use an equal sign to assign a vaue to a variable.

* `var number = 42;`
* `var number = 'forty-two';`
* `var number;` (means it is unassigned)

Variables can be:

* a number (42)
* a string ('forty-two')
* a booleen (true or false)
* undefined (undeclared or ...)


### Variable mutation and type coercion

JS can recognise that the number 28 and the string 'twenty-eight' are the same thing (clever)

You can change the value of a variable at anytime, just by reassigning it.
For example 

`var colour = 'white';`
wait, no it isn't...
`var colour = 'black';`
ok

## Basic operators

### Usual suspects

* minus = '-'
* plus = '+'
* divide = '/'
* multiply = '*'
* increment = '++'
* decrement = '--'

### Logical operators

* comparisons = '<' and '>'
* typeof = tells you what type of data type
    eg. `console.log(typeof 42);`
    expected output: 'number'

### Operator precedence

Some assignments are right to left and others left to right! YOU NEED TO KNOW
eg. 3 + 4 * 5 // returns 23

## If else

`if (' ' === ' ') {
} else if ( ' ' === ' ') {
} else {
};`

## Booleen Logic (true and false)

* AND (&&) A AND B muct be true
* OR (||) ONLY A OR B need to be true
* NOT (!) inverts true/false variable



