
const DOMNodeCollection = require('./dom_node_collection.js')

window.$grab = (arg) => {
  if (typeof arg === 'string') {
    let htmlElements = document.querySelectorAll(arg)
    let htmlElementsArray = Array.from(htmlElements) //Array.from(arrayLikeObj) allow us to convert array like objects into an array
    return new DOMNodeCollection(htmlElementsArray)
  }
}
