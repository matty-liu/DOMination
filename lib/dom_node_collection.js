
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

  append() {
    
  }



}

module.exports = DOMNodeCollection;
