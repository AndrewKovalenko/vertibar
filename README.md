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

Most methods *underscore* provide already implemented natively in ES5 / ES6. As for those methods which are still missing in "native" JS API - *underscore* / *lodash* still provides an ugly API. For example, which code does look better: `const clone = _.clone(obj)` or `const clone = obj.deepCopy()`?

So my intention is to extend "native" JS API with methods we often find missing. 


## API

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
