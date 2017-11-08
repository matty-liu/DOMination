# DOMination
## A DOM Manipulation Library.

Similar to jQuery, DOMination provides a way to easily grab and edit html elements in the DOM.

A overview of the methods are available below.

```
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">I am a caption</div>
  </div>
```

Given the following test code: To grab all html element, type the string of the element you are looking for.
```
  divs = $grab('div')

  // this will grab all div elements in the document
  // and store them as a DOMNodeCollection Object

  // we can now refer to all div elements using divs

  // #=> DOMNodeCollection {htmlElements: Array(2)}
```

#### 1) DOMNodeCollection.html(html)
If you'd like to add the string "hello" to the inner html of a selected element,
```
divs.html('hello')
```
The resulting changes would be made
```
  <div>hello
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">hello</div>
  </div>
```


#### 2) DOMNodeCollection.empty()
If you wanted to remove the innerHTML to the elements
```
divs.empty('')
```
This will transform the document to remove all innerHTML to the selected element
```
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption"></div>
  </div>
```


#### 3) DOMNodeCollection.append(arg)
To append/add on to the end of the innerHTML of the selected element
```
divs.append('hello')
```
This will transform the document and add HTML to the end of each element
```
  <div>hello
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption">I am a captionhello</div>
  </div>
```


#### 4) DOMNodeCollection.addClass(className)
If you'd like to add className to the selected element
```
divs.addClass('addedClass')
```
This will add the classname to each HTML div element.
```
  <div class="addedClass">
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class="subtitle1-caption addedClass"></div>
  </div>
```


#### 5) DOMNodeCollection.removeClass(className)
If you'd like to add className to the selected element
```
divs.removeClass('subtitle1-caption')
```
This will remove the classname to each HTML div element.
```
  <div>
    <h1>HELLO WORLD FOO BAR</h1>
    <h2 class="subtitle1">I am a subtitle1</h2>
    <div class=""></div>
  </div>
```


#### 6) DOMNodeCollection.children()
If you'd like to find all children element to a selected element,
```
divs.children()
```
This will return all children elements of div elements.
```

```


#### 7) DOMNodeCollection.parent()
If you'd like to find all parent elements to a selected element,
```
divs.parent()
```
This will return all parent elements of div elements.
```

```
