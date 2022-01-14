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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#philosophe/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#philosophe/#DevSource/scripts/main.js":
/*!*************************************************!*\
  !*** ../#philosophe/#DevSource/scripts/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar $slider = document.querySelector('.swiper');\nvar $sliderWrapper = $slider.querySelector('.swiper-wrapper');\nvar quoteCollection = $slider.querySelectorAll('.slide-card__figcaption .slide-card__quote');\n\n_toConsumableArray(quoteCollection).forEach(function (quote) {\n  return quote.innerHTML = quote.textContent.split(' ').map(function (str) {\n    return str.length ? str.innerHTML = \"<span>\".concat(str, \"</span>\") : '';\n  }).join(' ');\n});\n\nvar slider = new Swiper($slider, {\n  slidesPerView: 'auto',\n  speed: 2000,\n  spaceBetween: 0,\n  centeredSlides: true,\n  // centeredSlidesBounds: true,\n  passiveListeners: true,\n  loop: true,\n  autoplay: {\n    delay: 0\n  },\n  on: {\n    'afterInit': function afterInit(swiper) {\n      swiper.autoplay.stop(); // swiper.slideTo(Math.round(swiper.slides.length / 2), 0);\n\n      swiper.slides.forEach(function (slide, i, arr) {\n        if (i + 1 <= arr.length / 2) return;\n        slide.querySelector('.slide-card__figcaption').classList.add('invert-side');\n      });\n    }\n  }\n});\n$slider.addEventListener('mousemove', function (e) {\n  var targetSlide = slider.slides.indexOf(e.target.closest('.swiper-slide'));\n\n  if (e.target.closest('.swiper-slide') && targetSlide !== -1) {\n    slider.slideTo(targetSlide, 2000);\n\n    if (slider.isBeginning) {\n      slider.prependSlide(slider.slides);\n    }\n\n    var isEnd,\n        isBeginning = false;\n\n    if (slider.isEnd && !isEnd) {\n      isEnd = true;\n      slider.autoplay.start();\n      setTimeout(function () {\n        return slider.autoplay.stop();\n      }, 0);\n      setTimeout(function () {\n        return isEnd = false;\n      }, 1000);\n    }\n\n    if (slider.isBeginning && !isBeginning) {\n      isBeginning = true;\n      slider.autoplay.start();\n      setTimeout(function () {\n        return slider.autoplay.stop();\n      }, 0);\n      setTimeout(function () {\n        return isBeginning = false;\n      }, 1000);\n    }\n  }\n}, {\n  passive: true\n});\n\n//# sourceURL=webpack:///../#philosophe/#DevSource/scripts/main.js?");

/***/ })

/******/ });