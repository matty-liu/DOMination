
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
      if (htmlElement.children.length >= 1) {
        for (let i = 0; i < htmlElement.children.length; i++) {
          childElements.push(htmlElement.children[i])
        }
      }
    })
    return new DOMNodeCollection(childElements)
  }

  parent() {
    let parentElement = [];
    this.htmlElements.forEach( (htmlElement) => {
      parentElement.push(htmlElement.parentNode)
    })
    return new DOMNodeCollection(parentElement)
  }




  on(event, callback) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].addEventListener(event, callback)
      this.htmlElements[i][event] = event
    }
  }

  off(event, callback) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].removeEventListener(event, callback)
    }
  }







}

module.exports = DOMNodeCollection;
