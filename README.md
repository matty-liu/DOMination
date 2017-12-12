# DOMination
## A DOM Manipulation Library.

Similar to jQuery, DOMination provides a way to easily grab and edit html elements in the DOM. This is designed for beginning programmers using a semantic naming system to help understand what the methods do.

An overview of the methods are available below.

Given the following test code:
```js
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">I am a caption</div>
  </div>
```

We can grab specific elements, by calling the `$grab("htmlElement")``

```js
  divs = $grab('div')
  // #=> DOMNodeCollection {htmlElements: Array(2)}
```
This will grab all div elements in the document
and store them as a DOMNodeCollection Object.
We can now refer to all div elements using divs


#### 1) `DOMNodeCollection.html(html)`
If you'd like to add the string "hello" to the inner html of a selected element,
```js
divs.html('hello')
```
The resulting changes would be made
```js
  <div>hello // result of divs.html('hello')
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">hello</div>
  </div>
```


#### 2) `DOMNodeCollection.empty()`
If you wanted to remove the innerHTML to the elements
```js
divs.empty('')
```
This will transform the document to remove all innerHTML to the selected element
```js
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption"></div>
  </div>
```


#### 3) `DOMNodeCollection.append(arg)`
To append/add on to the end of the innerHTML of the selected element
```js
divs.append('hello')
```
This will transform the document and add HTML to the end of each element
```js
  <div>hello
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">I am a captionhello</div>
  </div>
```


#### 4) `DOMNodeCollection.addClass(className)`
If you'd like to add className to the selected element
```js
let = divs.addClass('addedClass')
```
This will add the classname to each HTML div element.
```js
  <div class="addedClass">
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption addedClass"></div>
  </div>
```


#### 5) `DOMNodeCollection.removeClass(className)`
If you'd like to add className to the selected element
```js
divs.removeClass('subtitle1-caption')
```
This will remove the classname to each HTML div element.
```js
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class=""></div>
  </div>
```


#### 6) `DOMNodeCollection.children()`
If you'd like to find all children element to a selected element,
```js
divs.children()
// #=> DOMNodeCollection {htmlElements: Array(3)}
```
This will return all children elements of div elements.

#### 7) `DOMNodeCollection.parent()`
If you'd like to find a parent element to a selected element,
```js
divs.parent()
// #-> DOMNodeCollection {htmlElements: Array(2)}
```
This will return the parent elements to the div elements.

---

Adding/removing event listeners

#### 7) `DOMNodeCollection.on(event, callback)`
We can add event listeners to our target by,
```js
divs.on('click',()=>console.log('hi'))
// #-> prints hi in console whenever a div element is clicked
```

#### 8) `DOMNodeCollection.on(event, callback)`
We can remove event listeners to our target by,
```js
divs.off('click')
// #-> prints hi will no longer show in console when div element is clicked
```

---

#### 9) `DOMNodeCollection.ajax(options)`
We can lastly make AJAX calls with DOMination. We do this by
```js
$make.ajax()
// #-> will make a GET request
```































<!--  -->
