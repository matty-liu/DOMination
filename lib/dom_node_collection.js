
class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements
  }

  html(html) {
    if (typeof html === 'string') {
      this.htmlElements.forEach( (element) => {
        return element.innerHTML = html
      })
    } else if (this.htmlElements.length > 0) {
      return this.htmlElements[0].innerHTML
    }
  }

  empty() {
    return this.html('');
  }

  append(arg) {
    if (this.htmlElements.length === 0) {
      return
    }

    if (typeof arg === 'string') { //if append is a string, append that to the inner html
      this.htmlElements.forEach( (htmlElement) => {
        return htmlElement.innerHTML += arg
      })
    }

  }

  addClass(className) {
    this.htmlElements.forEach( (htmlElement) => {
      return htmlElement.classList.add(className) //element.classList.add() is vanilla js
    })
  };

  removeClass(className) {
    this.htmlElements.forEach( (htmlElement) => {
      return htmlElement.classList.remove(className)
    })
  };

  children() {
    let childElements = [];
    this.htmlElements.forEach( (htmlElement) => {
      console.log(htmlElement)
    })
    return new DOMNodeCollection(childElements)
  }

  parent() {
    let parentElements = [];
    this.htmlElements.forEach( (parentElement) => {
      if (!parentElement.seen) {
        parentElements.push(parentElement)
        parentNode.seen = true;
      }
    })
  }




}

module.exports = DOMNodeCollection;
