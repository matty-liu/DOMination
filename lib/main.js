
const DOMNodeCollection = require('./dom_node_collection.js')


const docReadyCallbacks = []
let docReady = false

document.addEventListener('DOMContentLoaded', () => {
  docReady = true;
  docReadyCallbacks.forEach(func => func());
  console.log("doc ready!")
})

window.$grab = (arg) => {
  if (typeof arg === 'string') {
    let htmlElements = document.querySelectorAll(arg)
    let htmlElementsArray = Array.from(htmlElements) //Array.from(arrayLikeObj) allow us to convert array like objects into an array
    return new DOMNodeCollection(htmlElementsArray)
  } else if (typeof arg === 'function') {
    if (!docReady) {
      readyCallbacks.push(arg)
    } else {
      arg()
    }
  }
}

window.hi = function hi() {
  console.log('hi')
}
