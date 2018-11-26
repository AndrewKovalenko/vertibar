[![Build Status](https://travis-ci.org/AndrewKovalenko/vertibar.svg?branch=master)](https://travis-ci.org/AndrewKovalenko/vertibar)
[![Coverage Status](https://coveralls.io/repos/github/AndrewKovalenko/vertibar/badge.svg?branch=master)](https://coveralls.io/github/AndrewKovalenko/vertibar?branch=master)

<pre>
                          oooo$$$$$$$$$$$$oooo
                      oo$$$$$$$$$$$$$$$$$$$$$$$$o
                   oo$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o         o$   $$ o$
   o $ oo        o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o       $$ $$ $$o$
oo $ $ "$      o$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$o       $$$o$$o$
"$$$$$$o$     o$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$o    $$$$$$$$
  $$$$$$$    $$$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$$$$$$  """$$$
   "$$$""""$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     "$$$
    $$$   o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     "$$$o
   o$$"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$       $$$o
   $$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" "$$$$$$ooooo$$$$o
  o$$$oooo$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   o$$$$$$$$$$$$$$$$$
  $$$$$$$$"$$$$   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     $$$$""""""""
 """"       $$$$    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$"      o$$$
            "$$$o     """$$$$$$$$$$$$$$$$$$"$$"         $$$
              $$$o          "$$""$$$$$$""""           o$$$
               $$$$o                                o$$$"
                "$$$$o      o$$$$$$o"$$$$o        o$$$$
                  "$$$$$oo     ""$$$$o$$$$$o   o$$$$""
                     ""$$$$$oooo  "$$$o$$$$$$$$$"""
                        ""$$$$$$$oo $$$$$$$$$$
                                """"$$$$$$$$$$$
                                    $$$$$$$$$$$$
                                     $$$$$$$$$$"
                                      "$$$""""
</pre>

# vertibar
Minimalistic JavaScript utils library intended to replace *underscore* / *lodash*.

## Why?

Most methods people usually use from *underscore* or *lodash* already implemented natively in ES5 / ES6, but lots of developers keep pulling those monsters increasing size of their output bundles, polluting their code with purely readable `_` characters and slowing down their project starting time.

  As for those methods which are still missing in "native" JS API - *underscore* / *lodash* provides pretty ugly API. For example, which code does look better / more readable: `const lone = _.clone(obj)` or `const clone = obj.deepCopy()`?

So my intention is to extend "native" JS API with methods we often find missing.


## Documentation

### String

`<string>.isURI()` - returns Bool `true` if string is a valid URI
`<string>.capitalize()` - returns a *new* capitalized string ("hello world".capitalize() => "Hello world")

### Array
`<array>.first` - is a readonly property which returns first element of an array or `undefined` if array is empty

`<array>.last` - is a readonly property which returns last element of an array or `undefined` if array is empty

`<array>.empty()` - returns Bool `true` if array is empty, otherwise returns `false`

`<array>.deepCopy()` - returns a [deep copy](https://en.wikipedia.org/wiki/Object_copying) of an array

`<array>.flatten()` - flattens an array. **Example:** `[1, [2, 3, [4, 5] ] ].flatten(); // [1, 2, 3, 4, 5]`

`<array>.head` - is a readonly property implementing *head of collection concept* from functional programming. Returns the first element of an array

`<array>.tail` - is a readonly property implementing *tail of collection concept* from functional programming. Returns all but first elements from an array

`<array>.dedup([optionalCondition])` - returns array with no duplicated elements, if there where any.
  This function uses *strict equal* to compare elements by default. If custom *equal* condition needs to be used - a "condition" function may be passed as a parameter.

  This method expects optional condition function to have format:
  ```
  (element1, element2) => <return true for duplicated elements>
  ```

### Object
`<anyObject>.deepCopy()` - returns a [deep copy](https://en.wikipedia.org/wiki/Object_copying) of an object

`Object.isUndefined(instance)` - a "static" method. Returns Bool `true` if `instance` is `undefined`

### Math
`Math.roundTo(number, decimals)` - rounds float point number to specified decimals using common mathematical rounding rules

### Function
`<any function>.throttle(rate, [optionalContext])` - [throttles](https://en.wikipedia.org/wiki/Throttling_process_(computing)) function at `rate`. Other words, prevent function to be called more frequent then `rate` parameter specifies. `optionalContext` - may be used to pass `this` to throttled function.

`<any function>.debounce(wait, [optionalContext])` - "debounces" function call. Other words, it makes sure that actual call is made at least after `wait` milliseconds after last call attempt, preventing multiple frequent calls. `optionalContext` - may be used to pass `this` to debounced function.
