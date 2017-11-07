/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


const DOMNodeCollection = __webpack_require__(1)

window.$grab = (arg) => {
  if (typeof arg === 'string') {
    let htmlElements = document.querySelectorAll(arg)
    let htmlElementsArray = Array.from(htmlElements) //Array.from(arrayLikeObj) allow us to convert array like objects into an array
    return new DOMNodeCollection(htmlElementsArray)
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {


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


/***/ })
/******/ ]);