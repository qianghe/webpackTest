webpackJsonp([3],{

/***/ "4OkO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("Yarq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("AA3o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("xSur");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("UzKs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("Y7Ml");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("2144");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var Content = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Content, _Component);

  function Content() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Content.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Content)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log('did mount');
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        "div",
        { className: "contaner" },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          "p",
          null,
          "from the earth . you know that?"
        )
      );
    }
  }]);

  return Content;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "C/TW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("2144");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Loading = function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'loading...'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "CvP0":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("T7uO");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("9JuJ")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js??ref--1-2!./index.css", function() {
		var newContent = require("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js??ref--1-2!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "T7uO":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(true);
// imports


// module
exports.push([module.i, "body {\n  padding: 0;\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/Users/heqiang/webpackTest/src/components/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;CACX","file":"index.css","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Z2Vp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("2144");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("3vYS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable__ = __webpack_require__("mNzP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_Content__ = __webpack_require__("4OkO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Common_Loading__ = __webpack_require__("C/TW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_css__ = __webpack_require__("CvP0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_css__);







var LoadableNextPage = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "X3rf"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_4__src_components_Common_Loading__["a" /* default */]
});
var LoadablePrePage = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "5x3M"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_4__src_components_Common_Loading__["a" /* default */]
});

var menus = [{
  name: 'content',
  component: __WEBPACK_IMPORTED_MODULE_3__src_components_Content__["a" /* default */]
}, {
  name: 'pre',
  component: LoadablePrePage
}, {
  name: 'next',
  component: LoadableNextPage
}];

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'React Components'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          menus.map(function (_ref, index) {
            var name = _ref.name;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: 'link_' + name },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                index + 1,
                '.\xA0'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                { to: '/' + name },
                name
              )
            );
          })
        ),
        menus.map(function (_ref2, index) {
          var name = _ref2.name,
              component = _ref2.component;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { key: 'route_' + name, path: '/' + name, component: component });
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "aDMf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("2144");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("hoja");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_jsx__ = __webpack_require__("Z2Vp");




Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Home_jsx__["a" /* default */], null), document.getElementById('app'));

/***/ })

},["aDMf"]);