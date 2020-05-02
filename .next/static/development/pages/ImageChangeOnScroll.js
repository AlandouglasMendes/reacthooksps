(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnScroll.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnScroll.js&hotRouterUpdates=true!./":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnScroll.js&hotRouterUpdates=true ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ImageChangeOnScroll",
      function () {
        var mod = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js");
        if (true) {
          module.hot.accept(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js", function () {
            if (!next.router.components["/ImageChangeOnScroll"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js");
            next.router.update("/ImageChangeOnScroll", updatedPage);
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

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageTogglerOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageTogglerOnScroll */ "./src/ImageTogglerOnScroll.js");
var _this = undefined,
    _jsxFileName = "/home/alandouglas/Desktop/pluralsight/myapphooks/pages/ImageChangeOnScroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnScroll = function ImageChangeOnScroll() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, [1124, 187, 823, 1269, 1530].map(function (speakerId) {
    return __jsx("div", {
      key: speakerId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 25
      }
    }, __jsx(_src_ImageTogglerOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: "/speakers/bw/Speaker-".concat(speakerId, ".jpg"),
      secondaryImg: "/speakers/Speaker-".concat(speakerId, ".jpg"),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState2[0],
      setInView = _useState2[1];

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

  return isLoading ? null : __jsx("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    height: "200",
    width: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnScroll);

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnScroll.js&hotRouterUpdates=true ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnScroll.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2Fhome%2Falandouglas%2FDesktop%2Fpluralsight%2Fmyapphooks%2Fpages%2FImageChangeOnScroll.js&hotRouterUpdates=true!./");


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
//# sourceMappingURL=ImageChangeOnScroll.js.map