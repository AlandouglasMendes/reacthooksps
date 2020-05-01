(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnMouseOver.js&hotRouterUpdates=true!./":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnMouseOver.js&hotRouterUpdates=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ImageChangeOnMouseOver",
      function () {
        var mod = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js");
        if (true) {
          module.hot.accept(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js", function () {
            if (!next.router.components["/ImageChangeOnMouseOver"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js");
            next.router.update("/ImageChangeOnMouseOver", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageTogglerOnMouseOver */ "./src/ImageTogglerOnMouseOver.js");
var _this = undefined,
    _jsxFileName = "/home/alandouglas/Desktop/pluralsight/myapphooks/pages/ImageChangeOnMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(_src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/speakers/Speaker-187.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), "\xA0\xA0\xA0", __jsx(_src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/speakers/bw/Speaker-823.jpg",
    secondaryImg: "/speakers/Speaker-823.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageTogglerOnMouseOver.js":
/*!****************************************!*\
  !*** ./src/ImageTogglerOnMouseOver.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/alandouglas/Desktop/pluralsight/myapphooks/src/ImageTogglerOnMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageTogglerOnMouseOver = function ImageTogglerOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnMouseOver);

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnMouseOver.js&hotRouterUpdates=true ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnMouseOver.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnMouseOver.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnMouseOver.js.map