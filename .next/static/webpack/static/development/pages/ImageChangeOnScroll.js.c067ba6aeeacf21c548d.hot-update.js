webpackHotUpdate("static/development/pages/ImageChangeOnScroll.js",{

/***/ "./src/ImageTogglerOnScroll.js":
/*!*************************************!*\
  !*** ./src/ImageTogglerOnScroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/alandouglas/Desktop/pluralsight/myapphooks/src/ImageTogglerOnScroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageTogglerOnScroll = function ImageTogglerOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return __jsx("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnScroll);

/***/ })

})
//# sourceMappingURL=ImageChangeOnScroll.js.c067ba6aeeacf21c548d.hot-update.js.map