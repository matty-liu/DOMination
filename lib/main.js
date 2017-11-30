//DOMINATION

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
      return readyCallbacks.push(arg)
    } else {
      return arg()
    }
  }
}


$grab.merge = (object, ...moreObjects) => {
  moreObjects.forEach((obj) => {
    for (const key in obj) {
      object[key] = obj[key]
    }
  })
  return object
}


$grab.ajax = (options) => {
  const request = new XMLHttpRequest();
  const defaultSetting = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    method: "GET",
    url: "",
    success: () => {},
    error: () => {},
    data: {},
  }

  options = $grab.merge(defaultSetting, options)
  if (options.method === "GET") {
    const queryString = "?${}"
    for (const prop in options.data) {
      if (Object.prototype.hasOwnProperty(prop, options.data)) {
        queryString += `${prop}=${options.data[prop]}&`;
      }
    options.url += queryString
    }
  }


  request.open(options.method, options.url);
  request.onload = (event) => {
    if (request.status === 200) {
      options.success(request.response)
    } else {
      options.error(request.response)
    }
  }

  const makeJSON = JSON.stringify(options.data)
  
  request.send(makeJSON)
}
