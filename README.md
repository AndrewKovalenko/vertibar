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

Most methods people usually use from *underscore* or *lodash* already implemented natively in ES5 / ES6, but lots of developers keep pulling those monsters increasing size of their output bundles, polluting their code with purely readable `_` characters and slowing down their project srarting time. 

  As for those methods which are still missing in "native" JS API - *underscore* / *lodash* provides pretty ugly API. For example, which code does look better / more readable: `const lone = _.clone(obj)` or `const clone = obj.deepCopy()`?

So my intention is to extend "native" JS API with methods we often find missing. 


## Documentation

### String

`<string>.isURI()` - returns Bool `true` if string is a valid URI

### Array
`[].first()` - returns first element of an array of `undefined` if array is empty

`[].last()` - returns last element of an array of `undefined` if array is empty

`[].empty()` - returns Bool `true` if array is empty, otherwice returns `false`

`[].deepCopy()` - returns a [deep copy](https://en.wikipedia.org/wiki/Object_copying) of an array

`[].flatten()` - flattens an array. **Example:** `[1, [2, 3, [4, 5] ] ].flatten(); // [1, 2, 3, 4, 5]` 

`[].head` - is a property implementing *head of collection concept* from functional programming. Returns the first element of an array

`[].tail` - is a property implementing *tail of collection concept* from functional programming. Returns all but first elements from an array

### Object
`<anyObject>.deepCopy()` - returns a [deep copy](https://en.wikipedia.org/wiki/Object_copying) of an object.
