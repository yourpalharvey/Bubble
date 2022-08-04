/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/joinbubble/[bid]/[vid]";
exports.ids = ["pages/joinbubble/[bid]/[vid]"];
exports.modules = {

/***/ "./styles/Bid.module.css":
/*!*******************************!*\
  !*** ./styles/Bid.module.css ***!
  \*******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"mainContainer\": \"Bid_mainContainer__CCYhG\",\n\t\"videoContainer\": \"Bid_videoContainer__g4V_H\",\n\t\"recommendedContainer\": \"Bid_recommendedContainer__KBh3I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmlkLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWZyb250ZW5kLy4vc3R5bGVzL0JpZC5tb2R1bGUuY3NzPzY1NzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbkNvbnRhaW5lclwiOiBcIkJpZF9tYWluQ29udGFpbmVyX19DQ1loR1wiLFxuXHRcInZpZGVvQ29udGFpbmVyXCI6IFwiQmlkX3ZpZGVvQ29udGFpbmVyX19nNFZfSFwiLFxuXHRcInJlY29tbWVuZGVkQ29udGFpbmVyXCI6IFwiQmlkX3JlY29tbWVuZGVkQ29udGFpbmVyX19LQmgzSVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Bid.module.css\n");

/***/ }),

/***/ "./pages/joinbubble/[bid]/[vid].js":
/*!*****************************************!*\
  !*** ./pages/joinbubble/[bid]/[vid].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/Bid.module.css */ \"./styles/Bid.module.css\");\n/* harmony import */ var _styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst watchStream = ({ title , postedById , tags , bubble  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1___default().mainContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1___default().videoContainer),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/ben/Documents/MScSoftwareEng/2022Diss/Team-44A-Bubble/frontend/pages/joinbubble/[bid]/[vid].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bid_module_css__WEBPACK_IMPORTED_MODULE_1___default().recommendedContainer),\n                children: bubble\n            }, void 0, false, {\n                fileName: \"/Users/ben/Documents/MScSoftwareEng/2022Diss/Team-44A-Bubble/frontend/pages/joinbubble/[bid]/[vid].js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/Documents/MScSoftwareEng/2022Diss/Team-44A-Bubble/frontend/pages/joinbubble/[bid]/[vid].js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watchStream);\nconst getServerSideProps = async (context)=>{\n    // get videostream id\n    let id = 1;\n    let videoId = context.params.vid;\n    let bubbleId = context.params.bid;\n    // search backend for this stream, returning title, userId, and tags\n    let vidTitle = `testVideoTitle-${videoId}`;\n    let userId = `testPostedBy-${videoId}`;\n    let tagsRes = [\n        `tag-${videoId}-1`,\n        `tag-${videoId}-2`\n    ];\n    return {\n        props: {\n            title: vidTitle,\n            postedById: userId,\n            tags: tagsRes,\n            bubble: bubbleId\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qb2luYnViYmxlL1tiaWRdL1t2aWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBRXBELE1BQU1DLFdBQVcsR0FBRyxDQUFDLEVBQUNDLEtBQUssR0FBRUMsVUFBVSxHQUFFQyxJQUFJLEdBQUVDLE1BQU0sR0FBQyxHQUFLO0lBSXZELHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVAsNkVBQW9COzswQkFFaEMsOERBQUNNLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsOEVBQXFCOzBCQUNoQ0UsS0FBSzs7Ozs7eUJBQ0o7MEJBRU4sOERBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsb0ZBQTJCOzBCQUN0Q0ssTUFBTTs7Ozs7eUJBQ0w7Ozs7OztpQkFFSixDQUNUO0NBQ0o7QUFFRCxpRUFBZUosV0FBVyxFQUFDO0FBRXBCLE1BQU1VLGtCQUFrQixHQUFHLE9BQU9DLE9BQU8sR0FBSztJQUVqRCxxQkFBcUI7SUFDckIsSUFBSUMsRUFBRSxHQUFHLENBQUM7SUFDVixJQUFJQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csTUFBTSxDQUFDQyxHQUFHO0lBQ2hDLElBQUlDLFFBQVEsR0FBR0wsT0FBTyxDQUFDRyxNQUFNLENBQUNHLEdBQUc7SUFFakMsb0VBQW9FO0lBQ3BFLElBQUlDLFFBQVEsR0FBRyxDQUFDLGVBQWUsRUFBRUwsT0FBTyxDQUFDLENBQUM7SUFDMUMsSUFBSU0sTUFBTSxHQUFHLENBQUMsYUFBYSxFQUFFTixPQUFPLENBQUMsQ0FBQztJQUN0QyxJQUFJTyxPQUFPLEdBQUc7UUFBQyxDQUFDLElBQUksRUFBRVAsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUFFLENBQUMsSUFBSSxFQUFFQSxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQUM7SUFFdEQsT0FBTztRQUNIUSxLQUFLLEVBQUU7WUFDSHBCLEtBQUssRUFBRWlCLFFBQVE7WUFDZmhCLFVBQVUsRUFBRWlCLE1BQU07WUFDbEJoQixJQUFJLEVBQUVpQixPQUFPO1lBQ2JoQixNQUFNLEVBQUVZLFFBQVE7U0FDbkI7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWZyb250ZW5kLy4vcGFnZXMvam9pbmJ1YmJsZS9bYmlkXS9bdmlkXS5qcz9iMjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9CaWQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCB3YXRjaFN0cmVhbSA9ICh7dGl0bGUsIHBvc3RlZEJ5SWQsIHRhZ3MsIGJ1YmJsZX0pID0+IHtcblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21tZW5kZWRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtidWJibGV9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhdGNoU3RyZWFtO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAgIC8vIGdldCB2aWRlb3N0cmVhbSBpZFxuICAgIGxldCBpZCA9IDE7XG4gICAgbGV0IHZpZGVvSWQgPSBjb250ZXh0LnBhcmFtcy52aWQ7XG4gICAgbGV0IGJ1YmJsZUlkID0gY29udGV4dC5wYXJhbXMuYmlkO1xuXG4gICAgLy8gc2VhcmNoIGJhY2tlbmQgZm9yIHRoaXMgc3RyZWFtLCByZXR1cm5pbmcgdGl0bGUsIHVzZXJJZCwgYW5kIHRhZ3NcbiAgICBsZXQgdmlkVGl0bGUgPSBgdGVzdFZpZGVvVGl0bGUtJHt2aWRlb0lkfWA7XG4gICAgbGV0IHVzZXJJZCA9IGB0ZXN0UG9zdGVkQnktJHt2aWRlb0lkfWA7XG4gICAgbGV0IHRhZ3NSZXMgPSBbYHRhZy0ke3ZpZGVvSWR9LTFgLCBgdGFnLSR7dmlkZW9JZH0tMmBdXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHZpZFRpdGxlLFxuICAgICAgICAgICAgcG9zdGVkQnlJZDogdXNlcklkLFxuICAgICAgICAgICAgdGFnczogdGFnc1JlcyxcbiAgICAgICAgICAgIGJ1YmJsZTogYnViYmxlSWQsXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIndhdGNoU3RyZWFtIiwidGl0bGUiLCJwb3N0ZWRCeUlkIiwidGFncyIsImJ1YmJsZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5Db250YWluZXIiLCJ2aWRlb0NvbnRhaW5lciIsInJlY29tbWVuZGVkQ29udGFpbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwidmlkZW9JZCIsInBhcmFtcyIsInZpZCIsImJ1YmJsZUlkIiwiYmlkIiwidmlkVGl0bGUiLCJ1c2VySWQiLCJ0YWdzUmVzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/joinbubble/[bid]/[vid].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/joinbubble/[bid]/[vid].js"));
module.exports = __webpack_exports__;

})();