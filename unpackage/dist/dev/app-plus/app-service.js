(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/main.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 41));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 44));\n__webpack_require__(/*! ./uni.promisify.adaptor */ 45);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFHbkI7QUFDQTtBQUFnQztBQUFBO0FBQ2hDQSxZQUFHLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUcsbUJBQ2RHLFlBQUcsRUFDTjtBQUNGRSxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgJy4vdW5pLnByb21pc2lmeS5hZGFwdG9yJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!*****************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/pages.json ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!****************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/pages/index/index.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dMO0FBQ2hMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniRow: __webpack_require__(/*! @/uni_modules/uni-row/components/uni-row/uni-row.vue */ 10)
      .default,
    uniCol: __webpack_require__(/*! @/uni_modules/uni-row/components/uni-col/uni-col.vue */ 16)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("a", { attrs: { id: "recordDownload", _i: 1 } }),
      _vm._$s(2, "i", _vm.showPrompt)
        ? _c(
            "div",
            { staticClass: _vm._$s(2, "sc", "prompt"), attrs: { _i: 2 } },
            [
              _c("div", [
                _c("div"),
                _c("div"),
                _c("br"),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.passwd,
                        expression: "passwd",
                      },
                    ],
                    attrs: { id: "passwd", _i: 8 },
                    domProps: { value: _vm._$s(8, "v-model", _vm.passwd) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.passwd = $event.target.value
                      },
                    },
                  }),
                ]),
                _c("br"),
                _c("div", [
                  _c("a", {
                    attrs: { _i: 11 },
                    on: {
                      click: function ($event) {
                        return _vm.enter()
                      },
                    },
                  }),
                ]),
              ]),
            ]
          )
        : _vm._e(),
      _vm._$s(12, "i", !_vm.showPrompt)
        ? _c("div", { attrs: { id: "main-content", _i: 12 } }, [
            _c("div", [
              _c("video", {
                ref: "screenShare",
                staticClass: _vm._$s(14, "sc", "screen-share-video"),
                attrs: { id: "screenShare", _i: 14 },
              }),
              _c("video", { attrs: { id: "mediaServerRecord", _i: 15 } }),
            ]),
            _c("div", { attrs: { id: "meeting", _i: 16 } }, [
              _c("div", { attrs: { id: "selfWindow", _i: 17 } }, [
                _c("span", {
                  staticClass: _vm._$s(18, "sc", "badge-self"),
                  attrs: { id: "videoName_'+i.toString()+'", _i: 18 },
                }),
                _c("span", {
                  staticClass: _vm._$s(19, "sc", "control-self-a"),
                  attrs: { id: "toggleAudio", _i: 19 },
                }),
                _c("span", {
                  staticClass: _vm._$s(20, "sc", "control-self-v"),
                  attrs: { id: "toggleVideo", _i: 20 },
                }),
                _c("video", {
                  ref: "selfVideo",
                  staticClass: _vm._$s(21, "sc", "self-video"),
                  attrs: { id: "selfVideo", _i: 21 },
                }),
              ]),
            ]),
            _c(
              "div",
              {
                staticClass: _vm._$s(22, "sc", "user-options"),
                attrs: { _i: 22 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(23, "sc", "uni-form-item uni-column"),
                    attrs: { _i: 23 },
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(24, "sc", "title"),
                      attrs: { _i: 24 },
                    }),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.stream,
                          expression: "stream",
                        },
                      ],
                      staticClass: _vm._$s(25, "sc", "uni-input"),
                      attrs: { _i: 25 },
                      domProps: { value: _vm._$s(25, "v-model", _vm.stream) },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.stream = $event.target.value
                        },
                      },
                    }),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: _vm._$s(26, "sc", "camera-share"),
                    attrs: { _i: 26 },
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(27, "sc", "uni-list"),
                        attrs: { _i: 27 },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(28, "sc", "uni-list-cell"),
                            attrs: { _i: 28 },
                          },
                          [
                            _c("view", {
                              staticClass: _vm._$s(
                                29,
                                "sc",
                                "uni-list-cell-left"
                              ),
                              attrs: { _i: 29 },
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  30,
                                  "sc",
                                  "uni-list-cell-db"
                                ),
                                attrs: { _i: 30 },
                              },
                              [
                                _c(
                                  "picker",
                                  {
                                    attrs: {
                                      value: _vm._$s(
                                        31,
                                        "a-value",
                                        _vm.selectedCameraIndex
                                      ),
                                      range: _vm._$s(
                                        31,
                                        "a-range",
                                        _vm.cameraList
                                      ),
                                      _i: 31,
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.changeCamera(
                                          _vm.cameraList[
                                            _vm.selectedCameraIndex
                                          ]
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          32,
                                          "sc",
                                          "uni-input"
                                        ),
                                        attrs: { _i: 32 },
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            32,
                                            "t0-0",
                                            _vm._s(
                                              _vm.cameraList[
                                                _vm.selectedCameraIndex
                                              ]
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(33, "sc", "uni-list"),
                        attrs: { _i: 33 },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(34, "sc", "uni-list-cell"),
                            attrs: { _i: 34 },
                          },
                          [
                            _c("view", {
                              staticClass: _vm._$s(
                                35,
                                "sc",
                                "uni-list-cell-left"
                              ),
                              attrs: { _i: 35 },
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  36,
                                  "sc",
                                  "uni-list-cell-db"
                                ),
                                attrs: { _i: 36 },
                              },
                              [
                                _c(
                                  "picker",
                                  {
                                    attrs: {
                                      value: _vm._$s(
                                        37,
                                        "a-value",
                                        _vm.selectedMicIndex
                                      ),
                                      range: _vm._$s(
                                        37,
                                        "a-range",
                                        _vm.micList
                                      ),
                                      _i: 37,
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.changeMic(
                                          _vm.micList[_vm.selectedMicIndex]
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          38,
                                          "sc",
                                          "uni-input"
                                        ),
                                        attrs: { _i: 38 },
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            38,
                                            "t0-0",
                                            _vm._s(
                                              _vm.micList[_vm.selectedMicIndex]
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    _c(
                      "uni-row",
                      {
                        staticClass: _vm._$s(39, "sc", "demo-uni-row"),
                        attrs: { _i: 39 },
                      },
                      [
                        _c("uni-col", { attrs: { span: 12, _i: 40 } }, [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                41,
                                "sc",
                                "uni-list-cell uni-list-cell-db"
                              ),
                              attrs: { _i: 41 },
                            },
                            [
                              _c("view", {
                                staticClass: _vm._$s(
                                  42,
                                  "sc",
                                  "uni-list-cell-db"
                                ),
                                attrs: { _i: 42 },
                              }),
                              _c("switch", {
                                attrs: { _i: 43 },
                                model: {
                                  value: _vm._$s(
                                    43,
                                    "v-model",
                                    _vm.enableVideo
                                  ),
                                  callback: function ($$v) {
                                    _vm.enableVideo = $$v
                                  },
                                  expression: "enableVideo",
                                },
                              }),
                            ]
                          ),
                        ]),
                        _c("uni-col", { attrs: { span: 12, _i: 44 } }, [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                45,
                                "sc",
                                "uni-list-cell uni-list-cell-db"
                              ),
                              attrs: { _i: 45 },
                            },
                            [
                              _c("view", {
                                staticClass: _vm._$s(
                                  46,
                                  "sc",
                                  "uni-list-cell-db"
                                ),
                                attrs: { _i: 46 },
                              }),
                              _c("switch", {
                                attrs: { _i: 47 },
                                model: {
                                  value: _vm._$s(
                                    47,
                                    "v-model",
                                    _vm.enableAudio
                                  ),
                                  callback: function ($$v) {
                                    _vm.enableAudio = $$v
                                  },
                                  expression: "enableAudio",
                                },
                              }),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                    _c(
                      "uni-row",
                      {
                        staticClass: _vm._$s(48, "sc", "demo-uni-row"),
                        attrs: { _i: 48 },
                      },
                      [
                        _c("button", {
                          attrs: { _i: 49 },
                          on: {
                            click: function ($event) {
                              return _vm.start_camera()
                            },
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._$s(50, "i", this.host)
                  ? _c(
                      "div",
                      {
                        staticClass: _vm._$s(50, "sc", "screen-share"),
                        attrs: { id: "screenShareBox", _i: 50 },
                      },
                      [
                        _c("span", [
                          _c("button", {}),
                          _c("button", {}),
                          _c("button", {
                            attrs: { id: "startRecord", _i: 54 },
                          }),
                          _c("button", {}),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
          ])
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-row/uni-row.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-row.vue?vue&type=template&id=1d993189& */ 11);\n/* harmony import */ var _uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-row.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-row/components/uni-row/uni-row.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ3NMO0FBQ3RMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1yb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkOTkzMTg5JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktcm93L2NvbXBvbmVudHMvdW5pLXJvdy91bmktcm93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-row/uni-row.vue?vue&type=template&id=1d993189& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-row.vue?vue&type=template&id=1d993189& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_template_id_1d993189___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-row/uni-row.vue?vue&type=template&id=1d993189& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: _vm._$s(0, "c", [
        "uni-row",
        _vm.typeClass,
        _vm.justifyClass,
        _vm.alignClass,
      ]),
      style: _vm._$s(0, "s", {
        marginLeft: Number(_vm.marginValue) + "rpx",
        marginRight: Number(_vm.marginValue) + "rpx",
      }),
      attrs: { _i: 0 },
    },
    [_vm._t("default", null, { _i: 1 })],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-row/uni-row.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-row.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_row_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSttQixDQUFnQixxbUJBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-row/uni-row.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar ComponentClass = 'uni-row';\nvar modifierSeparator = '--';\n/**\n * Row\t布局-行\n * @description\t流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。\n * @tutorial\thttps://ext.dcloud.net.cn/plugin?id=3958\n *\n * @property\t{gutter} type = Number 栅格间隔\n * @property\t{justify} type = String flex 布局下的水平排列方式\n * \t\t\t\t\t\t可选\tstart/end/center/space-around/space-between\tstart\n * \t\t\t\t\t\t默认值\tstart\n * @property\t{align} type = String flex 布局下的垂直排列方式\n * \t\t\t\t\t\t可选\ttop/middle/bottom\n * \t\t\t\t\t\t默认值\ttop\n * @property\t{width} type = String|Number nvue下需要自行配置宽度用于计算\n * \t\t\t\t\t\t默认值 750\n */\nvar _default = {\n  name: 'uniRow',\n  componentName: 'uniRow',\n  props: {\n    type: String,\n    gutter: Number,\n    justify: {\n      type: String,\n      default: 'start'\n    },\n    align: {\n      type: String,\n      default: 'top'\n    },\n    // nvue如果使用span等属性，需要配置宽度\n    width: {\n      type: [String, Number],\n      default: 750\n    }\n  },\n  created: function created() {},\n  computed: {\n    marginValue: function marginValue() {\n      if (this.gutter) {\n        return -(this.gutter / 2);\n      }\n      return 0;\n    },\n    typeClass: function typeClass() {\n      return this.type === 'flex' ? \"\".concat(ComponentClass + modifierSeparator, \"flex\") : '';\n    },\n    justifyClass: function justifyClass() {\n      return this.justify !== 'start' ? \"\".concat(ComponentClass + modifierSeparator, \"flex-justify-\").concat(this.justify) : '';\n    },\n    alignClass: function alignClass() {\n      return this.align !== 'top' ? \"\".concat(ComponentClass + modifierSeparator, \"flex-align-\").concat(this.align) : '';\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXJvdy9jb21wb25lbnRzL3VuaS1yb3cvdW5pLXJvdy52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9wcyIsInR5cGUiLCJndXR0ZXIiLCJqdXN0aWZ5IiwiZGVmYXVsdCIsImFsaWduIiwid2lkdGgiLCJjcmVhdGVkIiwiY29tcHV0ZWQiLCJtYXJnaW5WYWx1ZSIsInR5cGVDbGFzcyIsImp1c3RpZnlDbGFzcyIsImFsaWduQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsZUFpQkE7RUFDQUE7RUFDQUM7RUFNQUM7SUFDQUM7SUFDQUM7SUFDQUM7TUFDQUY7TUFDQUc7SUFDQTtJQUNBQztNQUNBSjtNQUNBRztJQUNBO0lBQ0E7SUFDQUU7TUFDQUw7TUFDQUc7SUFDQTtFQUNBO0VBQ0FHLDZCQUlBO0VBQ0FDO0lBQ0FDO01BRUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyA6Y2xhc3M9XCJbICd1bmktcm93JywgdHlwZUNsYXNzICwganVzdGlmeUNsYXNzLCBhbGlnbkNsYXNzLCBdXCIgOnN0eWxlPVwie1xyXG5cdFx0bWFyZ2luTGVmdDpgJHtOdW1iZXIobWFyZ2luVmFsdWUpfXJweGAsXHJcblx0XHRtYXJnaW5SaWdodDpgJHtOdW1iZXIobWFyZ2luVmFsdWUpfXJweGAsXHJcblx0fVwiPlxyXG5cdFx0PHNsb3Q+PC9zbG90PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgQ29tcG9uZW50Q2xhc3MgPSAndW5pLXJvdyc7XHJcblx0Y29uc3QgbW9kaWZpZXJTZXBhcmF0b3IgPSAnLS0nO1xyXG5cdC8qKlxyXG5cdCAqIFJvd1x05biD5bGALeihjFxyXG5cdCAqIEBkZXNjcmlwdGlvblx05rWB5byP5qCF5qC857O757uf77yM6ZqP552A5bGP5bmV5oiW6KeG5Y+j5YiG5Li6IDI0IOS7ve+8jOWPr+S7pei/hemAn+eugOS+v+WcsOWIm+W7uuW4g+WxgOOAglxyXG5cdCAqIEB0dXRvcmlhbFx0aHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9Mzk1OFxyXG5cdCAqXHJcblx0ICogQHByb3BlcnR5XHR7Z3V0dGVyfSB0eXBlID0gTnVtYmVyIOagheagvOmXtOmalFxyXG5cdCAqIEBwcm9wZXJ0eVx0e2p1c3RpZnl9IHR5cGUgPSBTdHJpbmcgZmxleCDluIPlsYDkuIvnmoTmsLTlubPmjpLliJfmlrnlvI9cclxuXHQgKiBcdFx0XHRcdFx0XHTlj6/pgIlcdHN0YXJ0L2VuZC9jZW50ZXIvc3BhY2UtYXJvdW5kL3NwYWNlLWJldHdlZW5cdHN0YXJ0XHJcblx0ICogXHRcdFx0XHRcdFx06buY6K6k5YC8XHRzdGFydFxyXG5cdCAqIEBwcm9wZXJ0eVx0e2FsaWdufSB0eXBlID0gU3RyaW5nIGZsZXgg5biD5bGA5LiL55qE5Z6C55u05o6S5YiX5pa55byPXHJcblx0ICogXHRcdFx0XHRcdFx05Y+v6YCJXHR0b3AvbWlkZGxlL2JvdHRvbVxyXG5cdCAqIFx0XHRcdFx0XHRcdOm7mOiupOWAvFx0dG9wXHJcblx0ICogQHByb3BlcnR5XHR7d2lkdGh9IHR5cGUgPSBTdHJpbmd8TnVtYmVyIG52dWXkuIvpnIDopoHoh6rooYzphY3nva7lrr3luqbnlKjkuo7orqHnrpdcclxuXHQgKiBcdFx0XHRcdFx0XHTpu5jorqTlgLwgNzUwXHJcblx0ICovXHJcblxyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndW5pUm93JyxcclxuXHRcdGNvbXBvbmVudE5hbWU6ICd1bmlSb3cnLFxyXG5cdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHR2aXJ0dWFsSG9zdDogdHJ1ZSAvLyDlnKjlvq7kv6HlsI/nqIvluo/kuK3lsIbnu4Tku7boioLngrnmuLLmn5PkuLromZrmi5/oioLngrnvvIzmm7TliqDmjqXov5FWdWXnu4Tku7bnmoTooajnjrDvvIzlj6/kvb/nlKhmbGV45biD5bGAXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGd1dHRlcjogTnVtYmVyLFxyXG5cdFx0XHRqdXN0aWZ5OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdzdGFydCdcclxuXHRcdFx0fSxcclxuXHRcdFx0YWxpZ246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ3RvcCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbnZ1ZeWmguaenOS9v+eUqHNwYW7nrYnlsZ7mgKfvvIzpnIDopoHphY3nva7lrr3luqZcclxuXHRcdFx0d2lkdGg6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDc1MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdHRoaXMudHlwZSA9ICdmbGV4JztcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0bWFyZ2luVmFsdWUoKSB7XHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdGlmICh0aGlzLmd1dHRlcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH0sXHJcblx0XHRcdHR5cGVDbGFzcygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50eXBlID09PSAnZmxleCcgPyBgJHtDb21wb25lbnRDbGFzcyArIG1vZGlmaWVyU2VwYXJhdG9yfWZsZXhgIDogJyc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGp1c3RpZnlDbGFzcygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5qdXN0aWZ5ICE9PSAnc3RhcnQnID8gYCR7Q29tcG9uZW50Q2xhc3MgKyBtb2RpZmllclNlcGFyYXRvcn1mbGV4LWp1c3RpZnktJHt0aGlzLmp1c3RpZnl9YCA6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGFsaWduQ2xhc3MoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWxpZ24gIT09ICd0b3AnID8gYCR7Q29tcG9uZW50Q2xhc3MgKyBtb2RpZmllclNlcGFyYXRvcn1mbGV4LWFsaWduLSR7dGhpcy5hbGlnbn1gIDogJydcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0JGxheW91dC1uYW1lc3BhY2U6IFwiLnVuaS1cIjtcclxuXHQkcm93OiRsYXlvdXQtbmFtZXNwYWNlK1wicm93XCI7XHJcblx0JG1vZGlmaWVyLXNlcGFyYXRvcjogXCItLVwiO1xyXG5cclxuXHRAbWl4aW4gdXRpbHMtY2xlYXJmaXgge1xyXG5cdFx0JHNlbGVjdG9yOiAmO1xyXG5cclxuXHRcdEBhdC1yb290IHtcclxuXHJcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0I3skc2VsZWN0b3J9OjpiZWZvcmUsXHJcblx0XHRcdCN7JHNlbGVjdG9yfTo6YWZ0ZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCN7JHNlbGVjdG9yfTo6YWZ0ZXIge1xyXG5cdFx0XHRcdGNsZWFyOiBib3RoO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWl4aW4gdXRpbHMtZmxleCAoJGRpcmVjdGlvbjogcm93KSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdEBtaXhpbiBzZXQtZmxleCgkc3RhdGUpIHtcclxuXHRcdEBhdC1yb290ICYtI3skc3RhdGV9IHtcclxuXHRcdFx0QGNvbnRlbnRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCN7JHJvd30ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblxyXG5cdFx0Ly8g6Z2ebnZ1ZeS9v+eUqGZsb2F05biD5bGAXHJcblx0XHRAaW5jbHVkZSB1dGlscy1jbGVhcmZpeDtcclxuXHJcblx0XHQvLyDlnKhRUeOAgeWtl+iKguOAgeeZvuW6puWwj+eoi+W6j+W5s+WPsO+8jOe8luivkeWQjuS9v+eUqHNoYWRvdyBkb23vvIzkuI3lj6/kvb/nlKhmbGV45biD5bGA77yM5L2/55SoZmxvYXRcclxuXHRcdEBhdC1yb290IHtcclxuXHJcblx0XHRcdC8qICNpZm5kZWYgTVAtUVEgfHwgTVAtVE9VVElBTyB8fCBNUC1CQUlEVSAqL1xyXG5cdFx0XHQmI3skbW9kaWZpZXItc2VwYXJhdG9yfWZsZXgge1xyXG5cdFx0XHRcdEBpbmNsdWRlIHV0aWxzLWZsZXg7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblxyXG5cdFx0XHRcdCY6YmVmb3JlLFxyXG5cdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QGluY2x1ZGUgc2V0LWZsZXgoanVzdGlmeS1jZW50ZXIpIHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QGluY2x1ZGUgc2V0LWZsZXgoanVzdGlmeS1lbmQpIHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRAaW5jbHVkZSBzZXQtZmxleChqdXN0aWZ5LXNwYWNlLWJldHdlZW4pIHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBpbmNsdWRlIHNldC1mbGV4KGp1c3RpZnktc3BhY2UtYXJvdW5kKSB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBpbmNsdWRlIHNldC1mbGV4KGFsaWduLW1pZGRsZSkge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBpbmNsdWRlIHNldC1mbGV4KGFsaWduLWJvdHRvbSkge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g5a2X6IqC44CBUVHphY3nva7lkI7kuI3nlJ/mlYhcclxuXHQvLyDmraTlpITnlKjms5Xml6Dms5Xkvb/nlKhzY29wZWRcclxuXHQvKiAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLVRPVVRJQU8gfHwgTVAtUVEgKi9cclxuXHQ6aG9zdCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-col/uni-col.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-col.vue?vue&type=template&id=fff79656&scoped=true& */ 17);\n/* harmony import */ var _uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-col.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"fff79656\",\n  null,\n  false,\n  _uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-row/components/uni-col/uni-col.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ3NMO0FBQ3RMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZmZjc5NjU2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWNvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZmZjc5NjU2XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1yb3cvY29tcG9uZW50cy91bmktY29sL3VuaS1jb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-col/uni-col.vue?vue&type=template&id=fff79656&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-col.vue?vue&type=template&id=fff79656&scoped=true& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_template_id_fff79656_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 18 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-col/uni-col.vue?vue&type=template&id=fff79656&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: _vm._$s(0, "c", ["uni-col", _vm.sizeClass, _vm.pointClassList]),
      style: _vm._$s(0, "s", {
        paddingLeft: Number(_vm.gutter) + "rpx",
        paddingRight: Number(_vm.gutter) + "rpx",
      }),
      attrs: { _i: 0 },
    },
    [_vm._t("default", null, { _i: 1 })],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-col/uni-col.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-col.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_col_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSttQixDQUFnQixxbUJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/uni_modules/uni-row/components/uni-col/uni-col.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\n * Col\t布局-列\n * @description\t搭配uni-row使用，构建布局。\n * @tutorial\thttps://ext.dcloud.net.cn/plugin?id=3958\n *\n * @property\t{span} type = Number 栅格占据的列数\n * \t\t\t\t\t\t默认 24\n * @property\t{offset} type = Number 栅格左侧的间隔格数\n * @property\t{push} type = Number 栅格向右移动格数\n * @property\t{pull} type = Number 栅格向左移动格数\n * @property\t{xs} type = [Number, Object] <768px 响应式栅格数或者栅格属性对象\n * \t\t\t\t\t\t@description\tNumber时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}\n * @property\t{sm} type = [Number, Object] ≥768px 响应式栅格数或者栅格属性对象\n * \t\t\t\t\t\t@description\tNumber时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}\n * @property\t{md} type = [Number, Object] ≥992px 响应式栅格数或者栅格属性对象\n * \t\t\t\t\t\t@description\tNumber时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}\n * @property\t{lg} type = [Number, Object] ≥1200px 响应式栅格数或者栅格属性对象\n * \t\t\t\t\t\t@description\tNumber时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}\n * @property\t{xl} type = [Number, Object] ≥1920px 响应式栅格数或者栅格属性对象\n * \t\t\t\t\t\t@description\tNumber时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}\n */\nvar ComponentClass = 'uni-col';\n\n// -1 默认值，因为在微信小程序端只给Number会有默认值0\nvar _default = {\n  name: 'uniCol',\n  props: {\n    span: {\n      type: Number,\n      default: 24\n    },\n    offset: {\n      type: Number,\n      default: -1\n    },\n    pull: {\n      type: Number,\n      default: -1\n    },\n    push: {\n      type: Number,\n      default: -1\n    },\n    xs: [Number, Object],\n    sm: [Number, Object],\n    md: [Number, Object],\n    lg: [Number, Object],\n    xl: [Number, Object]\n  },\n  data: function data() {\n    return {\n      gutter: 0,\n      sizeClass: '',\n      parentWidth: 0,\n      nvueWidth: 0,\n      marginLeft: 0,\n      right: 0,\n      left: 0\n    };\n  },\n  created: function created() {\n    var _this = this;\n    // 字节小程序中，在computed中读取$parent为undefined\n    var parent = this.$parent;\n    while (parent && parent.$options.componentName !== 'uniRow') {\n      parent = parent.$parent;\n    }\n    this.updateGutter(parent.gutter);\n    parent.$watch('gutter', function (gutter) {\n      _this.updateGutter(gutter);\n    });\n  },\n  computed: {\n    sizeList: function sizeList() {\n      var span = this.span,\n        offset = this.offset,\n        pull = this.pull,\n        push = this.push;\n      return {\n        span: span,\n        offset: offset,\n        pull: pull,\n        push: push\n      };\n    },\n    pointClassList: function pointClassList() {\n      var _this2 = this;\n      var classList = [];\n      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (point) {\n        var props = _this2[point];\n        if (typeof props === 'number') {\n          classList.push(\"\".concat(ComponentClass, \"-\").concat(point, \"-\").concat(props));\n        } else if ((0, _typeof2.default)(props) === 'object' && props) {\n          Object.keys(props).forEach(function (pointProp) {\n            classList.push(pointProp === 'span' ? \"\".concat(ComponentClass, \"-\").concat(point, \"-\").concat(props[pointProp]) : \"\".concat(ComponentClass, \"-\").concat(point, \"-\").concat(pointProp, \"-\").concat(props[pointProp]));\n          });\n        }\n      });\n\n      // 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误\n      return classList.join(' ');\n    }\n  },\n  methods: {\n    updateGutter: function updateGutter(parentGutter) {\n      parentGutter = Number(parentGutter);\n      if (!isNaN(parentGutter)) {\n        this.gutter = parentGutter / 2;\n      }\n    }\n  },\n  watch: {\n    sizeList: {\n      immediate: true,\n      handler: function handler(newVal) {\n        var classList = [];\n        for (var size in newVal) {\n          var curSize = newVal[size];\n          if ((curSize || curSize === 0) && curSize !== -1) {\n            classList.push(size === 'span' ? \"\".concat(ComponentClass, \"-\").concat(curSize) : \"\".concat(ComponentClass, \"-\").concat(size, \"-\").concat(curSize));\n          }\n        }\n        // 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误\n        this.sizeClass = classList.join(' ');\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXJvdy9jb21wb25lbnRzL3VuaS1jb2wvdW5pLWNvbC52dWUiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwic3BhbiIsInR5cGUiLCJkZWZhdWx0Iiwib2Zmc2V0IiwicHVsbCIsInB1c2giLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiZGF0YSIsImd1dHRlciIsInNpemVDbGFzcyIsInBhcmVudFdpZHRoIiwibnZ1ZVdpZHRoIiwibWFyZ2luTGVmdCIsInJpZ2h0IiwibGVmdCIsImNyZWF0ZWQiLCJwYXJlbnQiLCJjb21wdXRlZCIsInNpemVMaXN0IiwicG9pbnRDbGFzc0xpc3QiLCJjbGFzc0xpc3QiLCJPYmplY3QiLCJwb2ludFByb3AiLCJDb21wb25lbnRDbGFzcyIsIm1ldGhvZHMiLCJ1cGRhdGVHdXR0ZXIiLCJwYXJlbnRHdXR0ZXIiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUEsZUFDQTtFQUNBQTtFQU1BQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0lBQ0FJO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO0lBQ0E7SUFFQTtNQUNBQztJQUNBO0lBRUE7SUFDQUE7TUFDQTtJQUNBO0VBUUE7RUFDQUM7SUFDQUM7TUFDQSxJQUNBdEIsT0FJQSxLQUpBQTtRQUNBRyxTQUdBLEtBSEFBO1FBQ0FDLE9BRUEsS0FGQUE7UUFDQUMsT0FDQSxLQURBQTtNQUdBO1FBQ0FMO1FBQ0FHO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtJQUVBa0I7TUFBQTtNQUNBO01BRUE7UUFDQTtRQUNBO1VBQ0FDO1FBQ0E7VUFDQUM7WUFDQUQsZUFDQUUsaUNBQ0FDLDZFQUNBQSx3RkFDQTtVQUNBO1FBQ0E7TUFDQTs7TUFFQTtNQUNBO0lBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBQztNQUNBO1FBQ0E7TUFDQTtJQUNBO0VBNEJBO0VBQ0FDO0lBQ0FUO01BQ0FVO01BQ0FDO1FBRUE7UUFDQTtVQUNBO1VBQ0E7WUFDQVQsZUFDQVUsNEJBQ0FQLGlEQUNBQSx1REFDQTtVQUNBO1FBQ0E7UUFDQTtRQUNBO01BS0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XHJcblx0PHZpZXcgOmNsYXNzPVwiWyd1bmktY29sJywgc2l6ZUNsYXNzLCBwb2ludENsYXNzTGlzdF1cIiA6c3R5bGU9XCJ7XHJcblx0XHRwYWRkaW5nTGVmdDpgJHtOdW1iZXIoZ3V0dGVyKX1ycHhgLFxyXG5cdFx0cGFkZGluZ1JpZ2h0OmAke051bWJlcihndXR0ZXIpfXJweGAsXHJcblx0fVwiPlxyXG5cdFx0PHNsb3Q+PC9zbG90PlxyXG5cdDwvdmlldz5cclxuXHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cclxuXHQ8IS0tIOWcqG52dWXkuIrvvIznsbvlkI3moLflvI/kuI3nlJ/mlYjvvIzmjaLkuLpzdHlsZSAtLT5cclxuXHQ8IS0tIOiuvue9rnJpZ2h05q2j5YC85aSx5pWI77yM6K6+572uIGxlZnQg6LSf5YC8IC0tPlxyXG5cdDx2aWV3IDpjbGFzcz1cIlsndW5pLWNvbCddXCIgOnN0eWxlPVwie1xyXG5cdFx0cGFkZGluZ0xlZnQ6YCR7TnVtYmVyKGd1dHRlcil9cnB4YCxcclxuXHRcdHBhZGRpbmdSaWdodDpgJHtOdW1iZXIoZ3V0dGVyKX1ycHhgLFxyXG5cdFx0d2lkdGg6YCR7bnZ1ZVdpZHRofXJweGAsXHJcblx0XHRwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG5cdFx0bWFyZ2luTGVmdDpgJHttYXJnaW5MZWZ0fXJweGAsXHJcblx0XHRsZWZ0OmAke3JpZ2h0ID09PSAwID8gbGVmdCA6IC1yaWdodH1ycHhgXHJcblx0fVwiPlxyXG5cdFx0PHNsb3Q+PC9zbG90PlxyXG5cdDwvdmlldz5cclxuXHQ8IS0tICNlbmRpZiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogQ29sXHTluIPlsYAt5YiXXHJcblx0ICogQGRlc2NyaXB0aW9uXHTmkK3phY11bmktcm935L2/55So77yM5p6E5bu65biD5bGA44CCXHJcblx0ICogQHR1dG9yaWFsXHRodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zOTU4XHJcblx0ICpcclxuXHQgKiBAcHJvcGVydHlcdHtzcGFufSB0eXBlID0gTnVtYmVyIOagheagvOWNoOaNrueahOWIl+aVsFxyXG5cdCAqIFx0XHRcdFx0XHRcdOm7mOiupCAyNFxyXG5cdCAqIEBwcm9wZXJ0eVx0e29mZnNldH0gdHlwZSA9IE51bWJlciDmoIXmoLzlt6bkvqfnmoTpl7TpmpTmoLzmlbBcclxuXHQgKiBAcHJvcGVydHlcdHtwdXNofSB0eXBlID0gTnVtYmVyIOagheagvOWQkeWPs+enu+WKqOagvOaVsFxyXG5cdCAqIEBwcm9wZXJ0eVx0e3B1bGx9IHR5cGUgPSBOdW1iZXIg5qCF5qC85ZCR5bem56e75Yqo5qC85pWwXHJcblx0ICogQHByb3BlcnR5XHR7eHN9IHR5cGUgPSBbTnVtYmVyLCBPYmplY3RdIDw3NjhweCDlk43lupTlvI/moIXmoLzmlbDmiJbogIXmoIXmoLzlsZ7mgKflr7nosaFcclxuXHQgKiBcdFx0XHRcdFx0XHRAZGVzY3JpcHRpb25cdE51bWJlcuaXtuihqOekuuWcqOatpOWxj+W5leWuveW6puS4i++8jOagheagvOWNoOaNrueahOWIl+aVsOOAgk9iamVjdOaXtuWPr+mFjee9ruWkmuS4quaPj+i/sHtzcGFuOiA0LCBvZmZzZXQ6IDR9XHJcblx0ICogQHByb3BlcnR5XHR7c219IHR5cGUgPSBbTnVtYmVyLCBPYmplY3RdIOKJpTc2OHB4IOWTjeW6lOW8j+agheagvOaVsOaIluiAheagheagvOWxnuaAp+WvueixoVxyXG5cdCAqIFx0XHRcdFx0XHRcdEBkZXNjcmlwdGlvblx0TnVtYmVy5pe26KGo56S65Zyo5q2k5bGP5bmV5a695bqm5LiL77yM5qCF5qC85Y2g5o2u55qE5YiX5pWw44CCT2JqZWN05pe25Y+v6YWN572u5aSa5Liq5o+P6L+we3NwYW46IDQsIG9mZnNldDogNH1cclxuXHQgKiBAcHJvcGVydHlcdHttZH0gdHlwZSA9IFtOdW1iZXIsIE9iamVjdF0g4omlOTkycHgg5ZON5bqU5byP5qCF5qC85pWw5oiW6ICF5qCF5qC85bGe5oCn5a+56LGhXHJcblx0ICogXHRcdFx0XHRcdFx0QGRlc2NyaXB0aW9uXHROdW1iZXLml7booajnpLrlnKjmraTlsY/luZXlrr3luqbkuIvvvIzmoIXmoLzljaDmja7nmoTliJfmlbDjgIJPYmplY3Tml7blj6/phY3nva7lpJrkuKrmj4/ov7B7c3BhbjogNCwgb2Zmc2V0OiA0fVxyXG5cdCAqIEBwcm9wZXJ0eVx0e2xnfSB0eXBlID0gW051bWJlciwgT2JqZWN0XSDiiaUxMjAwcHgg5ZON5bqU5byP5qCF5qC85pWw5oiW6ICF5qCF5qC85bGe5oCn5a+56LGhXHJcblx0ICogXHRcdFx0XHRcdFx0QGRlc2NyaXB0aW9uXHROdW1iZXLml7booajnpLrlnKjmraTlsY/luZXlrr3luqbkuIvvvIzmoIXmoLzljaDmja7nmoTliJfmlbDjgIJPYmplY3Tml7blj6/phY3nva7lpJrkuKrmj4/ov7B7c3BhbjogNCwgb2Zmc2V0OiA0fVxyXG5cdCAqIEBwcm9wZXJ0eVx0e3hsfSB0eXBlID0gW051bWJlciwgT2JqZWN0XSDiiaUxOTIwcHgg5ZON5bqU5byP5qCF5qC85pWw5oiW6ICF5qCF5qC85bGe5oCn5a+56LGhXHJcblx0ICogXHRcdFx0XHRcdFx0QGRlc2NyaXB0aW9uXHROdW1iZXLml7booajnpLrlnKjmraTlsY/luZXlrr3luqbkuIvvvIzmoIXmoLzljaDmja7nmoTliJfmlbDjgIJPYmplY3Tml7blj6/phY3nva7lpJrkuKrmj4/ov7B7c3BhbjogNCwgb2Zmc2V0OiA0fVxyXG5cdCAqL1xyXG5cdGNvbnN0IENvbXBvbmVudENsYXNzID0gJ3VuaS1jb2wnO1xyXG5cclxuXHQvLyAtMSDpu5jorqTlgLzvvIzlm6DkuLrlnKjlvq7kv6HlsI/nqIvluo/nq6/lj6rnu5lOdW1iZXLkvJrmnInpu5jorqTlgLwwXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3VuaUNvbCcsXHJcblx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHZpcnR1YWxIb3N0OiB0cnVlIC8vIOWcqOW+ruS/oeWwj+eoi+W6j+S4reWwhue7hOS7tuiKgueCuea4suafk+S4uuiZmuaLn+iKgueCue+8jOabtOWKoOaOpei/kVZ1Zee7hOS7tueahOihqOeOsFxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c3Bhbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAyNFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvZmZzZXQ6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogLTFcclxuXHRcdFx0fSxcclxuXHRcdFx0cHVsbDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAtMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IC0xXHJcblx0XHRcdH0sXHJcblx0XHRcdHhzOiBbTnVtYmVyLCBPYmplY3RdLFxyXG5cdFx0XHRzbTogW051bWJlciwgT2JqZWN0XSxcclxuXHRcdFx0bWQ6IFtOdW1iZXIsIE9iamVjdF0sXHJcblx0XHRcdGxnOiBbTnVtYmVyLCBPYmplY3RdLFxyXG5cdFx0XHR4bDogW051bWJlciwgT2JqZWN0XVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Z3V0dGVyOiAwLFxyXG5cdFx0XHRcdHNpemVDbGFzczogJycsXHJcblx0XHRcdFx0cGFyZW50V2lkdGg6IDAsXHJcblx0XHRcdFx0bnZ1ZVdpZHRoOiAwLFxyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IDAsXHJcblx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8g5a2X6IqC5bCP56iL5bqP5Lit77yM5ZyoY29tcHV0ZWTkuK3or7vlj5YkcGFyZW505Li6dW5kZWZpbmVkXHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XHJcblxyXG5cdFx0XHR3aGlsZSAocGFyZW50ICYmIHBhcmVudC4kb3B0aW9ucy5jb21wb25lbnROYW1lICE9PSAndW5pUm93Jykge1xyXG5cdFx0XHRcdHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZUd1dHRlcihwYXJlbnQuZ3V0dGVyKVxyXG5cdFx0XHRwYXJlbnQuJHdhdGNoKCdndXR0ZXInLCAoZ3V0dGVyKSA9PiB7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVHdXR0ZXIoZ3V0dGVyKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdHRoaXMudXBkYXRlTnZ1ZVdpZHRoKHBhcmVudC53aWR0aClcclxuXHRcdFx0cGFyZW50LiR3YXRjaCgnd2lkdGgnLCAod2lkdGgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU52dWVXaWR0aCh3aWR0aClcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0c2l6ZUxpc3QoKSB7XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdHNwYW4sXHJcblx0XHRcdFx0XHRvZmZzZXQsXHJcblx0XHRcdFx0XHRwdWxsLFxyXG5cdFx0XHRcdFx0cHVzaFxyXG5cdFx0XHRcdH0gPSB0aGlzO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0c3BhbixcclxuXHRcdFx0XHRcdG9mZnNldCxcclxuXHRcdFx0XHRcdHB1bGwsXHJcblx0XHRcdFx0XHRwdXNoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdHBvaW50Q2xhc3NMaXN0KCkge1xyXG5cdFx0XHRcdGxldCBjbGFzc0xpc3QgPSBbXTtcclxuXHJcblx0XHRcdFx0Wyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddLmZvckVhY2gocG9pbnQgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgcHJvcHMgPSB0aGlzW3BvaW50XTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcHJvcHMgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHRcdGNsYXNzTGlzdC5wdXNoKGAke0NvbXBvbmVudENsYXNzfS0ke3BvaW50fS0ke3Byb3BzfWApXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ29iamVjdCcgJiYgcHJvcHMpIHtcclxuXHRcdFx0XHRcdFx0T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocG9pbnRQcm9wID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjbGFzc0xpc3QucHVzaChcclxuXHRcdFx0XHRcdFx0XHRcdHBvaW50UHJvcCA9PT0gJ3NwYW4nID9cclxuXHRcdFx0XHRcdFx0XHRcdGAke0NvbXBvbmVudENsYXNzfS0ke3BvaW50fS0ke3Byb3BzW3BvaW50UHJvcF19YCA6XHJcblx0XHRcdFx0XHRcdFx0XHRgJHtDb21wb25lbnRDbGFzc30tJHtwb2ludH0tJHtwb2ludFByb3B9LSR7cHJvcHNbcG9pbnRQcm9wXX1gXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/kvb/nlKggOmNsYXNzPVsgWydhJywnYiddIF3vvIzmuLLmn5PplJnor69cclxuXHRcdFx0XHRyZXR1cm4gY2xhc3NMaXN0LmpvaW4oJyAnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHVwZGF0ZUd1dHRlcihwYXJlbnRHdXR0ZXIpIHtcclxuXHRcdFx0XHRwYXJlbnRHdXR0ZXIgPSBOdW1iZXIocGFyZW50R3V0dGVyKTtcclxuXHRcdFx0XHRpZiAoIWlzTmFOKHBhcmVudEd1dHRlcikpIHtcclxuXHRcdFx0XHRcdHRoaXMuZ3V0dGVyID0gcGFyZW50R3V0dGVyIC8gMlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdHVwZGF0ZU52dWVXaWR0aCh3aWR0aCkge1xyXG5cdFx0XHRcdC8vIOeUqOS6juWcqG52dWXnq6/vvIxzcGFu77yMb2Zmc2V077yMcHVsbO+8jHB1c2jnmoTorqHnrpdcclxuXHRcdFx0XHR0aGlzLnBhcmVudFdpZHRoID0gd2lkdGg7XHJcblx0XHRcdFx0WydzcGFuJywgJ29mZnNldCcsICdwdWxsJywgJ3B1c2gnXS5mb3JFYWNoKHNpemUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgY3VyU2l6ZSA9IHRoaXNbc2l6ZV07XHJcblx0XHRcdFx0XHRpZiAoKGN1clNpemUgfHwgY3VyU2l6ZSA9PT0gMCkgJiYgY3VyU2l6ZSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0bGV0IFJQWCA9IDEgLyAyNCAqIGN1clNpemUgKiB3aWR0aFxyXG5cdFx0XHRcdFx0XHRSUFggPSBOdW1iZXIoUlBYKTtcclxuXHRcdFx0XHRcdFx0c3dpdGNoIChzaXplKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnc3Bhbic6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm52dWVXaWR0aCA9IFJQWFxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnb2Zmc2V0JzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFyZ2luTGVmdCA9IFJQWFxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAncHVsbCc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJpZ2h0ID0gUlBYXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdwdXNoJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IFJQWFxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRzaXplTGlzdDoge1xyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdFx0bGV0IGNsYXNzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgc2l6ZSBpbiBuZXdWYWwpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgY3VyU2l6ZSA9IG5ld1ZhbFtzaXplXTtcclxuXHRcdFx0XHRcdFx0aWYgKChjdXJTaXplIHx8IGN1clNpemUgPT09IDApICYmIGN1clNpemUgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0LnB1c2goXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplID09PSAnc3BhbicgP1xyXG5cdFx0XHRcdFx0XHRcdFx0YCR7Q29tcG9uZW50Q2xhc3N9LSR7Y3VyU2l6ZX1gIDpcclxuXHRcdFx0XHRcdFx0XHRcdGAke0NvbXBvbmVudENsYXNzfS0ke3NpemV9LSR7Y3VyU2l6ZX1gXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/kvb/nlKggOmNsYXNzPVsgWydhJywnYiddIF3vvIzmuLLmn5PplJnor69cclxuXHRcdFx0XHRcdHRoaXMuc2l6ZUNsYXNzID0gY2xhc3NMaXN0LmpvaW4oJyAnKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZU52dWVXaWR0aCh0aGlzLnBhcmVudFdpZHRoKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz0nc2Nzcycgc2NvcGVkPlxyXG5cdC8qIGJyZWFrcG9pbnRzICovXHJcblx0JC0tc206IDc2OHB4ICFkZWZhdWx0O1xyXG5cdCQtLW1kOiA5OTJweCAhZGVmYXVsdDtcclxuXHQkLS1sZzogMTIwMHB4ICFkZWZhdWx0O1xyXG5cdCQtLXhsOiAxOTIwcHggIWRlZmF1bHQ7XHJcblxyXG5cdCRicmVha3BvaW50czogKCd4cycgOiAobWF4LXdpZHRoOiAkLS1zbSAtIDEpLFxyXG5cdCdzbScgOiAobWluLXdpZHRoOiAkLS1zbSksXHJcblx0J21kJyA6IChtaW4td2lkdGg6ICQtLW1kKSxcclxuXHQnbGcnIDogKG1pbi13aWR0aDogJC0tbGcpLFxyXG5cdCd4bCcgOiAobWluLXdpZHRoOiAkLS14bCkpO1xyXG5cclxuXHQkbGF5b3V0LW5hbWVzcGFjZTogXCIudW5pLVwiO1xyXG5cdCRjb2w6ICRsYXlvdXQtbmFtZXNwYWNlK1wiY29sXCI7XHJcblxyXG5cdEBmdW5jdGlvbiBnZXRTaXplKCRzaXplKSB7XHJcblx0XHQvKiBUT0RPIDEvMjQgKiAkc2l6ZSAqIDEwMCAqIDElOyDkvb/nlKjorqHnrpflkI7nmoTlgLzvvIzkuLrkuobop6PlhrMgdnVlMyDmjqfliLblj7DmiqXplJkgKi9cclxuXHRcdEByZXR1cm4gMC4wNDE2NjY2NjY2NiAqICRzaXplICogMTAwICogMSU7XHJcblx0fVxyXG5cclxuXHRAbWl4aW4gcmVzKCRrZXksICRtYXA6JGJyZWFrcG9pbnRzKSB7XHJcblx0XHRAaWYgbWFwLWhhcy1rZXkoJG1hcCwgJGtleSkge1xyXG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAje2luc3BlY3QobWFwLWdldCgkbWFwLCRrZXkpKX0ge1xyXG5cdFx0XHRcdEBjb250ZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0QGVsc2Uge1xyXG5cdFx0XHRAd2FybiBcIlVuZGVpbmZlZCBwb2ludDogYCN7JGtleX1gXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0I3skY29sfSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQjeyRjb2x9LTAge1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHR3aWR0aDogMDtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMjQge1xyXG5cdFx0I3skY29sfS0jeyRpfSB7XHJcblx0XHRcdHdpZHRoOiBnZXRTaXplKCRpKTtcclxuXHRcdH1cclxuXHJcblx0XHQjeyRjb2x9LW9mZnNldC0jeyRpfSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiBnZXRTaXplKCRpKTtcclxuXHRcdH1cclxuXHJcblx0XHQjeyRjb2x9LXB1bGwtI3skaX0ge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHJpZ2h0OiBnZXRTaXplKCRpKTtcclxuXHRcdH1cclxuXHJcblx0XHQjeyRjb2x9LXB1c2gtI3skaX0ge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGxlZnQ6IGdldFNpemUoJGkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QGVhY2ggJHBvaW50IGluIG1hcC1rZXlzKCRicmVha3BvaW50cykge1xyXG5cdFx0QGluY2x1ZGUgcmVzKCRwb2ludCkge1xyXG5cdFx0XHQjeyRjb2x9LSN7JHBvaW50fS0wIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRAZm9yICRpIGZyb20gMCB0aHJvdWdoIDI0IHtcclxuXHRcdFx0XHQjeyRjb2x9LSN7JHBvaW50fS0jeyRpfSB7XHJcblx0XHRcdFx0XHR3aWR0aDogZ2V0U2l6ZSgkaSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjeyRjb2x9LSN7JHBvaW50fS1vZmZzZXQtI3skaX0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IGdldFNpemUoJGkpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I3skY29sfS0jeyRwb2ludH0tcHVsbC0jeyRpfSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRyaWdodDogZ2V0U2l6ZSgkaSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjeyRjb2x9LSN7JHBvaW50fS1wdXNoLSN7JGl9IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdGxlZnQ6IGdldFNpemUoJGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdtQixDQUFnQiw4bUJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _browserDeviceManager = __webpack_require__(/*! @/js/browserDeviceManager.js */ 24);\nvar _ZLMRTCClient = __webpack_require__(/*! @/js/ZLMRTCClient.js */ 26);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      // 屏幕分享流地址后缀\n      SCREEN_SHARE_SUFFIX: \"_screenshare\",\n      SUB_STREAM_SUFIX: \"_sub\",\n      MEDIA_SERVER_RECORD_SUFIX: \"_record\",\n      MEDIA_SERVER_URL: 'https://49.7.210.27:50443',\n      // 会议室名称，在url地址中添加 ?room=会议室名称\n      app: 'live',\n      // 是否host，host才能共享屏幕，在url地址中添加 &host=1\n      host: 1,\n      resArr: [],\n      selfplayer: null,\n      selfplayer_sub: null,\n      screenSharePlayer: null,\n      mediaServerRecordPlayer: null,\n      recordStream: null,\n      mediaRecorder: null,\n      recordChunks: [],\n      mainContentHtml: '',\n      devicemanager: null,\n      cameraSelect: null,\n      micSelect: null,\n      // 上次拉到的stream列表，用来对比谁下线了\n      latestStreamSet: new Set(),\n      // 设备上摄像头支持的最大分辨率\n      cameraResolutions: {},\n      showPrompt: false,\n      passwd: '',\n      stream: '',\n      selectedCameraIndex: 0,\n      selectedCameraId: '',\n      cameraList: [],\n      selectedMicIndex: 0,\n      selectedMicId: '',\n      micList: [],\n      enableVideo: true,\n      enableAudio: true,\n      streaming: false\n    };\n  },\n  onLoad: function onLoad() {\n    this.devicemanager = new _browserDeviceManager.BrowserDeviceManager();\n    if (!this.showPrompt) {\n      this.initCameraAndMicList();\n    }\n  },\n  methods: {\n    changeCamera: function changeCamera(camera) {\n      this.selectedCameraId = camera.deviceId;\n    },\n    changeMic: function changeMic(mic) {\n      this.selectedMicId = mic.deviceId;\n    },\n    enter: function enter() {\n      if (this.passwd === 'hxkj2023') {\n        this.showPrompt = false;\n\n        // 初始化摄像头设备列表\n        this.initCameraAndMicList();\n\n        // 初始化麦克风设备列表\n        // this.start_play_other()\n      } else {\n        alert(\"密码错误\");\n        return;\n      }\n    },\n    // 初始化摄像头列表和麦克风列表\n    initCameraAndMicList: function initCameraAndMicList() {\n      var _this = this;\n      // 获取摄像头列表\n      this.devicemanager.getCameraList().then(function (list) {\n        _this.selectedCameraId = list[0].deviceId;\n        for (var i = 0; i < list.length; ++i) {\n          _this.cameraList.push(list[i].label);\n          // 获取摄像头参数（分辨率、帧数等）\n          var capabilities = list[i].getCapabilities();\n          _this.cameraResolutions[list[i].deviceId] = {\n            w: capabilities.width.max,\n            h: capabilities.height.max\n          };\n        }\n      }).catch(function (err) {\n        __f__(\"log\", err, \" at pages/index/index.vue:207\");\n      });\n\n      // 获取麦克风列表\n      this.devicemanager.getMicList().then(function (list) {\n        _this.selectedMicId = list[0].deviceId;\n        for (var i = 0; i < list.length; ++i) {\n          _this.micList.push(list[i].label);\n        }\n      }).catch(function (err) {\n        __f__(\"log\", err, \" at pages/index/index.vue:221\");\n      });\n    },\n    // 启动转码服务器录像(推流到zlm接口录像)\n    startMediaServerRecord: function startMediaServerRecord() {\n      /**\n      var stream = await navigator.mediaDevices.getDisplayMedia({\n      \taudio: true,\n      \tvideo: { displaySurface: \"monitor\" },\n      \tselfBrowserSurface: \"exclude\",\n      \tsystemAudio: \"include\",\n      \tsurfaceSwitching: \"exclude\"\n      })\n      **/\n      mediaServerRecordPlayer = new _ZLMRTCClient.Endpoint({\n        element: document.getElementById(\"mediaServerRecord\"),\n        // video 标签\n        debug: true,\n        // 是否打印日志\n        zlmsdpUrl: getMediaServerRecordPushUrl(),\n        simulcast: false,\n        useCamera: false,\n        audioEnable: true,\n        videoEnable: true,\n        recvOnly: false,\n        resolution: {\n          w: 3840,\n          h: 2160\n        },\n        usedatachannel: false,\n        displaySurface: 'monitor'\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function (e) {\n        // ICE 协商出错\n        __f__(\"log\", \"ICE 协商出错\", \" at pages/index/index.vue:257\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {\n        //获取到了远端流，可以播放\n        __f__(\"log\", \"播放成功\", e.streams, \" at pages/index/index.vue:265\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {\n        // offer anwser 交换失败\n        __f__(\"log\", \"offer anwser 交换失败\", e, \" at pages/index/index.vue:274\");\n        stop_screenshare();\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {\n        //console.log('offer anwser 交换失败',e)\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {\n        // 获取本地流失败\n        __f__(\"log\", \"获取本地流失败\", \" at pages/index/index.vue:290\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {\n        // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState\n        __f__(\"log\", \"当前状态==>\", state, \" at pages/index/index.vue:298\");\n        // 如果状态是已连接，通知mediaServer开始录像\n        // https://github.com/zlmediakit/ZLMediaKit/wiki/MediaServer%E6%94%AF%E6%8C%81%E7%9A%84HTTP-API  /index/api/startRecord\n        if (state == 'connected') {\n          setTimeout(function () {\n            var stream = app + MEDIA_SERVER_RECORD_SUFIX;\n            $.ajax({\n              dataType: \"json\",\n              url: \"/index/api/startRecord?type=1&vhost=__defaultVhost__&app=\" + app + \"&stream=\" + stream + \"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc\",\n              type: \"GET\",\n              timeout: 1000,\n              headers: {\n                Accept: \"application/json; charset=utf-8\"\n              },\n              success: function success(data) {\n                if (data.result) {\n                  $(\"#startRecord\").attr('disabled', true);\n                } else {\n                  alert(\"通知服务器录像失败，请重试\");\n                }\n              },\n              error: function error(xhr, textStatus, errorThrow) {\n                __f__(\"log\", \"error:\" + xhr.readyState, \" at pages/index/index.vue:322\");\n              }\n            });\n          }, 1000);\n        }\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {\n        __f__(\"log\", \"rtc datachannel 打开 :\", event, \" at pages/index/index.vue:333\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {\n        __f__(\"log\", \"rtc datachannel 消息 :\", event.data, \" at pages/index/index.vue:340\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {\n        __f__(\"log\", \"rtc datachannel 错误 :\", event, \" at pages/index/index.vue:346\");\n      });\n      mediaServerRecordPlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {\n        __f__(\"log\", \"rtc datachannel 关闭 :\", event, \" at pages/index/index.vue:352\");\n      });\n    },\n    stopMediaServerRecord: function stopMediaServerRecord() {\n      var stream = this.app + this.MEDIA_SERVER_RECORD_SUFIX;\n      $.ajax({\n        dataType: \"json\",\n        url: \"/index/api/stopRecord?type=1&vhost=__defaultVhost__&app=\" + this.app + \"&stream=\" + stream + \"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc\",\n        type: \"GET\",\n        timeout: 1000,\n        headers: {\n          Accept: \"application/json; charset=utf-8\"\n        },\n        success: function success(data) {\n          $(\"#startRecord\").attr('disabled', false);\n        },\n        error: function error(xhr, textStatus, errorThrow) {\n          __f__(\"log\", \"error:\" + xhr.readyState, \" at pages/index/index.vue:372\");\n          $(\"#startRecord\").attr('disabled', false);\n        }\n      });\n      // 关屏幕分享流\n      if (mediaServerRecordPlayer != null) {\n        mediaServerRecordPlayer.close();\n        mediaServerRecordPlayer = null;\n        var record = document.getElementById(\"mediaServerRecord\");\n        if (record.srcObject) {\n          record.srcObject.getTracks().forEach(function (element) {\n            element.stop();\n          });\n          record.srcObject = null;\n          record.load();\n          $(\"#startRecord\").attr('disabled', false);\n        }\n      }\n    },\n    // 静音、取消静音\n    toggleAudio: function toggleAudio() {\n      this.selfplayer_sub.localStream.getAudioTracks()[0].enabled = !this.selfplayer.localStream.getAudioTracks()[0].enabled;\n      this.selfplayer.localStream.getAudioTracks()[0].enabled = !this.selfplayer.localStream.getAudioTracks()[0].enabled;\n      $(\"#toggleAudio\").text(this.selfplayer.localStream.getAudioTracks()[0].enabled ? '设为静音' : '取消静音');\n      $(\"#toggleAudio\").css(\"background\", this.selfplayer.localStream.getAudioTracks()[0].enabled ? \"rgb(45, 126, 233)\" : \"rgba(233, 101, 45, 1)\");\n    },\n    // 开启视频、关闭视频\n    toggleVideo: function toggleVideo() {\n      this.selfplayer_sub.localStream.getVideoTracks()[0].enabled = !this.selfplayer.localStream.getVideoTracks()[0].enabled;\n      this.selfplayer.localStream.getVideoTracks()[0].enabled = !this.selfplayer.localStream.getVideoTracks()[0].enabled;\n      $(\"#toggleVideo\").text(this.selfplayer.localStream.getVideoTracks()[0].enabled ? '设为黑屏' : '显示画面');\n      $(\"#toggleVideo\").css(\"background\", this.selfplayer.localStream.getVideoTracks()[0].enabled ? \"rgb(45, 126, 233)\" : \"rgba(233, 101, 45, 1)\");\n    },\n    setLocalStorage: function setLocalStorage(key) {\n      localStorage.setItem(key, $(\"#\" + key).val());\n    },\n    // 获取其他人摄像头分享的播放地址\n    // app: 房间号  stream: 入会人员名字  isSub: 是否播放子码流\n    getPlayUrl: function getPlayUrl(app, stream, isSub) {\n      if (isSub) {\n        stream = this.stream + this.SUB_STREAM_SUFIX;\n      }\n      var playUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + stream + \"&type=play\";\n      return playUrl;\n    },\n    // 获取摄像头分享的推流地址\n    getPushUrl: function getPushUrl() {\n      var pushUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + this.stream + \"&type=push\";\n      return pushUrl;\n    },\n    // 获取屏幕分享的推流地址\n    getScreenSharePushUrl: function getScreenSharePushUrl() {\n      // 屏幕分享的推流stream是 房间名_screenshare\n      var stream = this.app + this.SCREEN_SHARE_SUFFIX;\n      var pushUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + stream + \"&type=push\";\n      return pushUrl;\n    },\n    // 获取屏幕分享的播放地址\n    getScreenShareUrl: function getScreenShareUrl() {\n      // 屏幕分享的推流stream是 房间名_screenshare\n      var stream = this.app + this.SCREEN_SHARE_SUFFIX;\n      var playUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + stream + \"&type=play\";\n      return playUrl;\n    },\n    // 获取推送摄像头辅码流的url\n    getPushSubUrl: function getPushSubUrl() {\n      var stream = this.stream + this.SUB_STREAM_SUFIX;\n      var pushUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + stream + \"&type=push\";\n      return pushUrl;\n    },\n    // 获取屏幕录制的推流地址\n    getMediaServerRecordPushUrl: function getMediaServerRecordPushUrl() {\n      // 屏幕分享的推流stream是 房间名_screenshare\n      var stream = this.app + this.MEDIA_SERVER_RECORD_SUFIX;\n      var pushUrl = this.MEDIA_SERVER_URL + \"/index/api/webrtc?app=\" + this.app + \"&stream=\" + stream + \"&type=push\";\n      return pushUrl;\n    },\n    // 开始屏幕分享\n    start_screenshare: function start_screenshare() {\n      stop_screenshare();\n      screenSharePlayer = new _ZLMRTCClient.Endpoint({\n        element: this.$refs['screenShare'],\n        // video 标签\n        debug: true,\n        // 是否打印日志\n        zlmsdpUrl: getScreenSharePushUrl(),\n        simulcast: false,\n        useCamera: false,\n        audioEnable: true,\n        videoEnable: true,\n        recvOnly: false,\n        resolution: {\n          w: 3840,\n          h: 2160\n        },\n        usedatachannel: false\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function (e) {\n        // ICE 协商出错\n        __f__(\"log\", \"ICE 协商出错\", \" at pages/index/index.vue:524\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {\n        //获取到了远端流，可以播放\n        __f__(\"log\", \"播放成功\", e.streams, \" at pages/index/index.vue:532\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {\n        // offer anwser 交换失败\n        __f__(\"log\", \"offer anwser 交换失败\", e, \" at pages/index/index.vue:540\");\n        stop_screenshare();\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {\n        // 获取到了本地流\n        this.$refs['screenShare'].srcObject = s;\n        this.$refs['screenShare'].muted = true;\n        //console.log('offer anwser 交换失败',e)\n      });\n\n      screenSharePlayer.on(_ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {\n        // 获取本地流失败\n\n        __f__(\"log\", \"获取本地流失败\", \" at pages/index/index.vue:560\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {\n        // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState\n        __f__(\"log\", \"当前状态==>\", state, \" at pages/index/index.vue:568\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {\n        __f__(\"log\", \"rtc datachannel 打开 :\", event, \" at pages/index/index.vue:575\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {\n        __f__(\"log\", \"rtc datachannel 消息 :\", event.data, \" at pages/index/index.vue:582\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {\n        __f__(\"log\", \"rtc datachannel 错误 :\", event, \" at pages/index/index.vue:588\");\n      });\n      screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {\n        __f__(\"log\", \"rtc datachannel 关闭 :\", event, \" at pages/index/index.vue:594\");\n      });\n    },\n    // 开始分享摄像头或者麦克风\n    // useCamera: 布尔类型，播放时是否使用摄像头，如果不使用会共享屏幕或者窗口\n    start_play: function start_play() {\n      var res = this.cameraResolutions[this.selectedCameraId];\n      var h = parseInt(res.h);\n      var w = parseInt(res.w);\n      //当前选中的摄像头\n      var cameraId = this.selectedCameraId;\n      //当前选中的麦克风\n      var micId = this.selectedMicId;\n      var selfVideoElement = this.$refs['selfVideo'];\n\n      // 主码流\n      this.selfplayer = new _ZLMRTCClient.Endpoint({\n        element: selfVideoElement,\n        // video 标签\n        debug: true,\n        // 是否打印日志\n        zlmsdpUrl: this.getPushUrl(),\n        //simulcast: document.getElementById(\"simulcast\").checked,\n        simulcast: false,\n        // useCamera:document.getElementById('useCamera').checked,\n        useCamera: true,\n        audioEnable: this.enableAudio,\n        videoEnable: this.enableVideo,\n        recvOnly: false,\n        resolution: {\n          w: w,\n          h: h\n        },\n        usedatachannel: false,\n        deviceId: cameraId,\n        micId: micId\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function (e) {\n        // ICE 协商出错\n        __f__(\"log\", \"ICE 协商出错\", \" at pages/index/index.vue:637\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {\n        //获取到了远端流，可以播放\n        __f__(\"log\", \"播放成功\", e.streams, \" at pages/index/index.vue:645\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {\n        // offer anwser 交换失败\n        __f__(\"log\", \"offer anwser 交换失败\", e, \" at pages/index/index.vue:653\");\n        this.stop_camera();\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {\n        // 获取到了本地流\n        selfVideoElement.srcObject = s;\n        debugger;\n        // document.getElementById(\"selfVideo\").muted = true;\n        //console.log('offer anwser 交换失败',e)\n      });\n\n      this.selfplayer.on(_ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {\n        // 获取本地流失败\n        __f__(\"log\", \"获取本地流失败\", \" at pages/index/index.vue:668\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {\n        // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState\n        __f__(\"log\", \"当前状态==>\", state, \" at pages/index/index.vue:675\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {\n        __f__(\"log\", \"rtc datachannel 打开 :\", event, \" at pages/index/index.vue:682\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {\n        __f__(\"log\", \"rtc datachannel 消息 :\", event.data, \" at pages/index/index.vue:689\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {\n        __f__(\"log\", \"rtc datachannel 错误 :\", event, \" at pages/index/index.vue:695\");\n      });\n      this.selfplayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {\n        __f__(\"log\", \"rtc datachannel 关闭 :\", event, \" at pages/index/index.vue:701\");\n      });\n\n      // 再推一路子码流。\n      this.selfplayer_sub = new _ZLMRTCClient.Endpoint({\n        element: selfVideoElement,\n        // video 标签\n        debug: true,\n        // 是否打印日志\n        zlmsdpUrl: this.getPushSubUrl(),\n        //simulcast: document.getElementById(\"simulcast\").checked,\n        simulcast: false,\n        //useCamera:document.getElementById('useCamera').checked,\n        useCamera: true,\n        audioEnable: this.enableAudio,\n        videoEnable: this.enableVideo,\n        recvOnly: false,\n        resolution: {\n          w: 320,\n          h: 180\n        },\n        usedatachannel: false,\n        deviceId: cameraId\n      });\n    },\n    start_play_other: function start_play_other() {\n      var _this2 = this;\n      setInterval(function () {\n        _this2.syncVideoWindowAndLivestream();\n      }, 5000);\n    },\n    // 播放屏幕分享视频\n    startScreenShareLivestream: function startScreenShareLivestream(data) {\n      if (this.host != 1) {\n        var screenShareLivestream = [];\n        //过滤查询到的流\n        screenShareLivestream = data.filter(function (d) {\n          return d.app == app &&\n          // 同一个会议室（app相同）\n          d.originTypeStr == \"rtc_push\" &&\n          // rtc推流的\n          d.schema == \"rtmp\" &&\n          // rtmp格式\n          d.stream == app + SCREEN_SHARE_SUFFIX &&\n          //是屏幕分享流\n          d.bytesSpeed != 0;\n        } //码率不为0，说明是有效的流\n        );\n\n        // 如果存在屏幕分享的视频流, 且没有在播放, 开个新流，否则说明在播放了，不做动作\n        if (screenShareLivestream.length > 0) {\n          if (screenSharePlayer == null) {\n            screenSharePlayer = new _ZLMRTCClient.Endpoint({\n              element: this.$refs['screenShare'],\n              // video 标签\n              debug: true,\n              // 是否打印日志\n              zlmsdpUrl: getScreenShareUrl(),\n              simulcast: false,\n              useCamera: false,\n              audioEnable: true,\n              videoEnable: true,\n              recvOnly: true,\n              resolution: {\n                w: 3840,\n                h: 2160\n              },\n              usedatachannel: false\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function (e) {\n              // ICE 协商出错\n              __f__(\"log\", \"ICE 协商出错\", \" at pages/index/index.vue:769\");\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {\n              //获取到了远端流，可以播放\n              __f__(\"log\", \"播放成功\", e.streams, \" at pages/index/index.vue:777\");\n              this.$refs['screenShare'].play();\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {\n              // offer anwser 交换失败\n              __f__(\"log\", \"offer anwser 交换失败\", e, \" at pages/index/index.vue:786\");\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {\n              // 获取到了本地流\n              //console.log('offer anwser 交换失败',e)\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {\n              // 获取本地流失败\n\n              __f__(\"log\", \"获取本地流失败\", \" at pages/index/index.vue:803\");\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {\n              // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState\n              __f__(\"log\", \"当前状态==>\", state, \" at pages/index/index.vue:811\");\n              if (state == 'disconnected') {\n                // 如果没有屏幕共享的流，关闭画面\n                stop_screenshare();\n              }\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {\n              __f__(\"log\", \"rtc datachannel 打开 :\", event, \" at pages/index/index.vue:822\");\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {});\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {\n              __f__(\"log\", \"rtc datachannel 错误 :\", event, \" at pages/index/index.vue:833\");\n            });\n            screenSharePlayer.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {\n              __f__(\"log\", \"rtc datachannel 关闭 :\", event, \" at pages/index/index.vue:839\");\n            });\n          }\n        }\n      }\n    },\n    // 同步其他参会人员的摄像头视频\n    // 默认是小图标，播放辅码流\n    syncVideoWindowAndLivestream: function syncVideoWindowAndLivestream() {\n      var elr = document.getElementById(\"resolution\");\n      var res = elr.options[elr.selectedIndex].text.match(/\\d+/g);\n      var h = parseInt(res.pop());\n      var w = parseInt(res.pop());\n\n      // 获取同一个会议室（app相同）其他人的直播流\n      $.ajax({\n        dataType: \"json\",\n        url: \"/index/api/getMediaList?app=\" + app + \"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc\",\n        type: \"GET\",\n        timeout: 1000,\n        headers: {\n          Accept: \"application/json; charset=utf-8\"\n        },\n        success: function success(data) {\n          var currentStreams = [];\n          // 过滤查询到的流\n          if (data.data) {\n            currentStreams = data.data.filter(\n            /** 过滤用户摄像头主码流的逻辑\n            (d) =>\n            \td.app == app && // 同一个会议室（app相同）\n            \td.originTypeStr == \"rtc_push\" && // rtc推流的\n            \td.schema == \"rtmp\" && // rtmp格式\n            \td.stream != $(\"#stream\").val() && // 不是推流者自己的流，也就是其他人的\n            \td.stream.indexOf(SUB_STREAM_SUFIX) == -1 && //不是辅码流\n            \td.stream.indexOf(SCREEN_SHARE_SUFFIX) == -1 && //不是屏幕分享流\n            \td.stream.indexOf(MEDIA_SERVER_RECORD_SUFIX) == -1 && //不是录像推流\n            \td.bytesSpeed != 0 //码率不为0，说明是有效的流\n            **/\n            // 过滤用户摄像头子码流的逻辑\n            function (d) {\n              return d.app == app &&\n              // 同一个会议室（app相同）\n              d.originTypeStr == \"rtc_push\" &&\n              // rtc推流的\n              d.schema == \"rtmp\" &&\n              // rtmp格式\n              d.stream != $(\"#stream\").val() + SUB_STREAM_SUFIX &&\n              // 不是推流者自己的子码流，也就是其他人的\n              d.stream.indexOf(SUB_STREAM_SUFIX) != -1 &&\n              //是辅码流\n              d.stream.indexOf(SCREEN_SHARE_SUFFIX) == -1 &&\n              //不是屏幕分享流\n              d.stream.indexOf(MEDIA_SERVER_RECORD_SUFIX) == -1 &&\n              //不是录像推流\n              d.bytesSpeed != 0;\n            } //码率不为0，说明是有效的流\n            );\n\n            // 看是否需要播放分享桌面的视频\n            startScreenShareLivestream(data.data);\n          }\n          __f__(\"log\", currentStreams, \" at pages/index/index.vue:897\");\n          // stream（新获取到的流列表）塞到set里面 (因为默认是拉子码流，显示的时候不显示_sub字样所以给截掉)\n          var currentStreamSet = new Set(currentStreams.map(function (s) {\n            return s.stream.slice(0, -SUB_STREAM_SUFIX.length);\n          }));\n\n          // 新加入会议的流（原视频流列表中没有，新的里面有）\n          var newStreams = Array.from(currentStreamSet).filter(function (s) {\n            return !latestStreamSet.has(s);\n          });\n          // 下线的视频流（新视频流列表里面没有，原视频列表里面有）\n          var offlineStreams = Array.from(latestStreamSet).filter(function (s) {\n            return !currentStreamSet.has(s);\n          });\n\n          // 删除下线的视频\n          for (var i = 0; i < offlineStreams.length; i++) {\n            latestStreamSet.delete(offlineStreams[i]);\n            $(\"#video\" + offlineStreams[i]).parent(\"div\").remove();\n          }\n\n          // 新加入的加入\n          for (var _i = 0; _i < newStreams.length; _i++) {\n            var stream = newStreams[_i];\n            var tag = \"video\" + stream;\n            latestStreamSet.add(stream);\n\n            // 如果视频存在，不添加\n            if ($(\"#video\" + stream).length == 0) {\n              $(\"#videoName_\" + stream).text(stream);\n              videodom = '<div style=\"display:inline-block\"><span id=\"videoName_' + stream + '\" class=\"badge\">' + stream + \"</span>\" + '<video id=\"' + tag + '\"  autoplay class=\"other-video\">' + \"</video></div>\";\n              $(\"#meeting\").append($(videodom));\n              var player = new _ZLMRTCClient.Endpoint({\n                element: document.getElementById(tag),\n                // video 标签\n                debug: true,\n                // 是否打印日志\n                // 播放子码流，isSub设置为true\n                zlmsdpUrl: getPlayUrl(app, stream, true),\n                simulcast: false,\n                useCamera: false,\n                audioEnable: true,\n                videoEnable: true,\n                recvOnly: true,\n                resolution: {\n                  w: w,\n                  h: h\n                },\n                usedatachannel: false\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function (e) {\n                // ICE 协商出错\n                __f__(\"log\", \"ICE 协商出错\", \" at pages/index/index.vue:963\");\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {\n                //获取到了远端流，可以播放\n                __f__(\"log\", \"播放成功\", e.streams, \" at pages/index/index.vue:971\");\n                document.getElementById(tag).muted = false;\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {\n                // offer anwser 交换失败\n                __f__(\"log\", \"offer anwser 交换失败\", e, \" at pages/index/index.vue:980\");\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {\n                // 获取到了本地流\n                //console.log('offer anwser 交换失败',e)\n              });\n              player.on(_ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {\n                // 获取本地流失败\n\n                __f__(\"log\", \"获取本地流失败\", \" at pages/index/index.vue:997\");\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {\n                // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState\n                __f__(\"log\", \"当前状态==>\", state, \" at pages/index/index.vue:1005\");\n                // 流断开的时候删除对应的播放窗口\n                if (state == 'disconnected') {\n                  latestStreamSet.delete(stream);\n                  $(\"#video\" + stream).parent(\"div\").remove();\n                }\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {\n                __f__(\"log\", \"rtc datachannel 打开 :\", event, \" at pages/index/index.vue:1019\");\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {});\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {\n                __f__(\"log\", \"rtc datachannel 错误 :\", event, \" at pages/index/index.vue:1030\");\n              });\n              player.on(_ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {\n                __f__(\"log\", \"rtc datachannel 关闭 :\", event, \" at pages/index/index.vue:1036\");\n              });\n            }\n          }\n        },\n        error: function error(xhr, textStatus, errorThrow) {\n          __f__(\"log\", \"error:\" + xhr.readyState, \" at pages/index/index.vue:1043\");\n        }\n      });\n    },\n    start_camera: function start_camera() {\n      this.stop_camera();\n      this.start_play();\n    },\n    stop_camera: function stop_camera() {\n      // 关主码流\n      if (this.selfplayer != null) {\n        this.selfplayer.close();\n        this.selfplayer = null;\n\n        // 关辅码流\n        if (this.selfplayer_sub != null) {\n          this.selfplayer_sub.close();\n          this.selfplayer_sub = null;\n        }\n        var local = document.getElementById(\"selfVideo\");\n        if (local.srcObject) {\n          local.srcObject.getTracks().forEach(function (element) {\n            element.stop();\n          });\n          local.srcObject = null;\n          local.load();\n          // document.location.reload()\n        }\n      }\n    },\n    stop_screenshare: function stop_screenshare() {\n      // 关屏幕分享流\n      if (screenSharePlayer != null) {\n        screenSharePlayer.close();\n        screenSharePlayer = null;\n        var share = this.$refs['screenShare'];\n        if (share.srcObject) {\n          share.srcObject.getTracks().forEach(function (element) {\n            element.stop();\n          });\n          share.srcObject = null;\n          share.load();\n        }\n      }\n    },\n    close: function close() {\n      if (this.selfplayer_sub != null) {\n        this.selfplayer_sub.closeDataChannel();\n      }\n      if (this.selfplayer != null) {\n        this.selfplayer.closeDataChannel();\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJTQ1JFRU5fU0hBUkVfU1VGRklYIiwiU1VCX1NUUkVBTV9TVUZJWCIsIk1FRElBX1NFUlZFUl9SRUNPUkRfU1VGSVgiLCJNRURJQV9TRVJWRVJfVVJMIiwiYXBwIiwiaG9zdCIsInJlc0FyciIsInNlbGZwbGF5ZXIiLCJzZWxmcGxheWVyX3N1YiIsInNjcmVlblNoYXJlUGxheWVyIiwibWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIiLCJyZWNvcmRTdHJlYW0iLCJtZWRpYVJlY29yZGVyIiwicmVjb3JkQ2h1bmtzIiwibWFpbkNvbnRlbnRIdG1sIiwiZGV2aWNlbWFuYWdlciIsImNhbWVyYVNlbGVjdCIsIm1pY1NlbGVjdCIsImxhdGVzdFN0cmVhbVNldCIsImNhbWVyYVJlc29sdXRpb25zIiwic2hvd1Byb21wdCIsInBhc3N3ZCIsInN0cmVhbSIsInNlbGVjdGVkQ2FtZXJhSW5kZXgiLCJzZWxlY3RlZENhbWVyYUlkIiwiY2FtZXJhTGlzdCIsInNlbGVjdGVkTWljSW5kZXgiLCJzZWxlY3RlZE1pY0lkIiwibWljTGlzdCIsImVuYWJsZVZpZGVvIiwiZW5hYmxlQXVkaW8iLCJzdHJlYW1pbmciLCJvbkxvYWQiLCJtZXRob2RzIiwiY2hhbmdlQ2FtZXJhIiwiY2hhbmdlTWljIiwiZW50ZXIiLCJhbGVydCIsImluaXRDYW1lcmFBbmRNaWNMaXN0IiwiZ2V0Q2FtZXJhTGlzdCIsInRoZW4iLCJ3IiwiaCIsImNhdGNoIiwiZ2V0TWljTGlzdCIsInN0YXJ0TWVkaWFTZXJ2ZXJSZWNvcmQiLCJlbGVtZW50IiwiZGVidWciLCJ6bG1zZHBVcmwiLCJzaW11bGNhc3QiLCJ1c2VDYW1lcmEiLCJhdWRpb0VuYWJsZSIsInZpZGVvRW5hYmxlIiwicmVjdk9ubHkiLCJyZXNvbHV0aW9uIiwidXNlZGF0YWNoYW5uZWwiLCJkaXNwbGF5U3VyZmFjZSIsIkV2ZW50cyIsInN0b3Bfc2NyZWVuc2hhcmUiLCJzZXRUaW1lb3V0IiwiJCIsImRhdGFUeXBlIiwidXJsIiwidHlwZSIsInRpbWVvdXQiLCJoZWFkZXJzIiwiQWNjZXB0Iiwic3VjY2VzcyIsImVycm9yIiwic3RvcE1lZGlhU2VydmVyUmVjb3JkIiwicmVjb3JkIiwidG9nZ2xlQXVkaW8iLCJlbmFibGVkIiwidG9nZ2xlVmlkZW8iLCJzZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRQbGF5VXJsIiwiZ2V0UHVzaFVybCIsImdldFNjcmVlblNoYXJlUHVzaFVybCIsImdldFNjcmVlblNoYXJlVXJsIiwiZ2V0UHVzaFN1YlVybCIsImdldE1lZGlhU2VydmVyUmVjb3JkUHVzaFVybCIsInN0YXJ0X3NjcmVlbnNoYXJlIiwic3RhcnRfcGxheSIsImRldmljZUlkIiwibWljSWQiLCJzZWxmVmlkZW9FbGVtZW50Iiwic3RhcnRfcGxheV9vdGhlciIsInNldEludGVydmFsIiwic3RhcnRTY3JlZW5TaGFyZUxpdmVzdHJlYW0iLCJzY3JlZW5TaGFyZUxpdmVzdHJlYW0iLCJkIiwic3luY1ZpZGVvV2luZG93QW5kTGl2ZXN0cmVhbSIsImN1cnJlbnRTdHJlYW1zIiwicGFyZW50IiwicmVtb3ZlIiwidmlkZW9kb20iLCJ0YWciLCJwbGF5ZXIiLCJkb2N1bWVudCIsInN0YXJ0X2NhbWVyYSIsInN0b3BfY2FtZXJhIiwibG9jYWwiLCJzaGFyZSIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUErR0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUE7RUFDQUE7SUFDQTtNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0E7TUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztN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QUNBekMsK0NBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0EwQztjQUNBLEVBQ0E7Y0FFQUQsVUFDQXpDLDBEQUNBO2dCQUNBO2dCQUNBO2NBQ0EsRUFDQTtjQUVBeUMsVUFDQXpDLDZDQUNBO2dCQUNBO2dCQUNBO2NBQUEsQ0FDQSxDQUNBO2NBRUF5QyxVQUNBekMsNENBQ0E7Z0JBQ0E7O2dCQUVBO2NBQ0EsRUFDQTtjQUVBeUMsVUFDQXpDLHdEQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2tCQUNBdkM7a0JBQ0EwQyxxQkFDQWtDLGNBQ0FDO2dCQUNBO2NBQ0EsRUFDQTtjQUVBRyxVQUNBekMsa0RBQ0E7Z0JBQ0E7Y0FDQSxFQUNBO2NBRUF5QyxVQUNBekMsaURBQ0Esb0JBQ0E7Y0FDQXlDLFVBQ0F6QyxpREFDQTtnQkFDQTtjQUNBLEVBQ0E7Y0FDQXlDLFVBQ0F6QyxtREFDQTtnQkFDQTtjQUNBLEVBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFDQVc7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBZ0M7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFFQTtNQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1FBRUE7UUFDQTtVQUNBQztZQUNBeEQ7VUFDQTtVQUNBd0Q7VUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBNUM7TUFDQTtNQUNBO1FBQ0FqRDtRQUNBQTtRQUVBO1FBQ0E7VUFDQThGO1lBQ0F6RDtVQUNBO1VBQ0F5RDtVQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PGEgaWQ9XCJyZWNvcmREb3dubG9hZFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9hPlxyXG5cdFx0PGRpdiBjbGFzcz1cInByb21wdFwiIHYtaWY9XCJzaG93UHJvbXB0XCI+XHJcblx0XHRcdDxkaXYgc3R5bGU9J3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDo0MCUnPlxyXG5cdFx0XHRcdDxkaXY+5oKo5aW977yM5qyi6L+O5p2l5Yiw6KeG6aKR5Lya6K6u5a6kPC9kaXY+XHJcblx0XHRcdFx0PGRpdj7liIbkuqvmkYTlg4/lpLTkuYvliY3or7forrDlvpfkv67mlLnoh6rlt7HnmoTlkI3lrZd+PC9kaXY+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGRpdj48aW5wdXQgaWQ9J3Bhc3N3ZCcgdi1tb2RlbD1cInBhc3N3ZFwiIHBsYWNlaG9sZGVyPVwi6L6T5YWl5a+G56CBXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9J2hlaWdodDozMHB4O2JvcmRlcjpzb2xpZCAxcHg7bWFyZ2luOjAgNDAlOycgLz48L2Rpdj5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8ZGl2PjxhIGhyZWY9J2phdmFzY3JpcHQ6dm9pZCgwKScgQGNsaWNrPSdlbnRlcigpJz7ngrnlh7vmiJHov5vlhaXkvJrorq48L2E+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiIGlkPVwibWFpbi1jb250ZW50XCIgdi1pZj1cIiFzaG93UHJvbXB0XCI+XHJcblx0XHRcdDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuXHRcdFx0XHQ8dmlkZW8gaWQ9XCJzY3JlZW5TaGFyZVwiIHJlZj1cInNjcmVlblNoYXJlXCIgYXV0b3BsYXkgY2xhc3M9XCJzY3JlZW4tc2hhcmUtdmlkZW9cIj48L3ZpZGVvPlxyXG5cdFx0XHRcdDx2aWRlbyBpZD1cIm1lZGlhU2VydmVyUmVjb3JkXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L3ZpZGVvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgaWQ9XCJtZWV0aW5nXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0XCI+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiIGlkPVwic2VsZldpbmRvd1wiPlxyXG5cdFx0XHRcdFx0PHNwYW4gaWQ9XCJ2aWRlb05hbWVfJytpLnRvU3RyaW5nKCkrJ1wiIGNsYXNzPVwiYmFkZ2Utc2VsZlwiPlxyXG5cdFx0XHRcdFx0XHTmiJFcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGlkPVwidG9nZ2xlQXVkaW9cIiBvbmNsaWNrPVwidG9nZ2xlQXVkaW8oKVwiIGNsYXNzPVwiY29udHJvbC1zZWxmLWFcIj7orr7kuLrpnZnpn7M8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBpZD1cInRvZ2dsZVZpZGVvXCIgb25jbGljaz1cInRvZ2dsZVZpZGVvKClcIiBjbGFzcz1cImNvbnRyb2wtc2VsZi12XCI+6K6+5Li66buR5bGPPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHZpZGVvIGlkPVwic2VsZlZpZGVvXCIgcmVmPVwic2VsZlZpZGVvXCIgYXV0b3BsYXkgY2xhc3M9XCJzZWxmLXZpZGVvXCI+PC92aWRlbz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidXNlci1vcHRpb25zXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktZm9ybS1pdGVtIHVuaS1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj7miJHnmoTlkI3lrZc8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ1bmktaW5wdXRcIiB2LW1vZGVsPVwic3RyZWFtXCIgZm9jdXMgcGxhY2Vob2xkZXI9XCLloavlhpnlkI3lrZdcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhbWVyYS1zaGFyZVwiPlxyXG5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOaRhOWDj+WktFxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwaWNrZXIgOnZhbHVlPVwic2VsZWN0ZWRDYW1lcmFJbmRleFwiIDpyYW5nZT1cImNhbWVyYUxpc3RcIiBAY2hhbmdlPVwiY2hhbmdlQ2FtZXJhKGNhbWVyYUxpc3Rbc2VsZWN0ZWRDYW1lcmFJbmRleF0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWlucHV0XCI+e3tjYW1lcmFMaXN0W3NlbGVjdGVkQ2FtZXJhSW5kZXhdfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOm6puWFi+mjjlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwaWNrZXIgOnZhbHVlPVwic2VsZWN0ZWRNaWNJbmRleFwiIDpyYW5nZT1cIm1pY0xpc3RcIiBAY2hhbmdlPVwiY2hhbmdlTWljKG1pY0xpc3Rbc2VsZWN0ZWRNaWNJbmRleF0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWlucHV0XCI+e3ttaWNMaXN0W3NlbGVjdGVkTWljSW5kZXhdfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHVuaS1yb3cgY2xhc3M9XCJkZW1vLXVuaS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0PHVuaS1jb2wgOnNwYW49XCIxMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbCB1bmktbGlzdC1jZWxsLWRiXCIgc3R5bGU9XCJ0cmFuc2Zvcm06c2NhbGUoMC43KTtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPuW8gOWQr+inhumikTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzd2l0Y2ggY2hlY2tlZCB2LW1vZGVsPVwiZW5hYmxlVmlkZW9cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC91bmktY29sPlxyXG5cdFx0XHRcdFx0XHQ8dW5pLWNvbCA6c3Bhbj1cIjEyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsIHVuaS1saXN0LWNlbGwtZGJcIiBzdHlsZT1cInRyYW5zZm9ybTpzY2FsZSgwLjcpO1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWRiXCI+5byA5ZCv5aOw6Z+zPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN3aXRjaCBjaGVja2VkIHYtbW9kZWw9XCJlbmFibGVBdWRpb1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3VuaS1jb2w+XHJcblx0XHRcdFx0XHQ8L3VuaS1yb3c+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx1bmktcm93IGNsYXNzPVwiZGVtby11bmktcm93XCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzdGFydF9jYW1lcmEoKVwiPuW8gOWQr+aRhOWDj+WktDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC91bmktcm93PlxyXG5cclxuXHRcdFx0XHRcdDwhLS0gPHNwYW4gY2xhc3M9XCJvcHRpb24taXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidmlkZW9FbmFibGVcIj7lvIDlkK/op4bpopE8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aWRlb0VuYWJsZVwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwib3B0aW9uLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImF1ZGlvRW5hYmxlXCI+5byA5ZCv5aOw6Z+zPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYXVkaW9FbmFibGVcIiBjaGVja2VkPVwiY2hlY2tlZFwiIC8+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbmNsaWNrPVwic3RhcnRfY2FtZXJhKClcIj7mjqXlhaXmkYTlg4/lpLQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbmNsaWNrPVwic3RvcF9jYW1lcmEoKVwiPuWBnOatouaRhOWDj+WktDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zcGFuPiAtLT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInNjcmVlbi1zaGFyZVwiIGlkPVwic2NyZWVuU2hhcmVCb3hcIiB2LWlmPVwidGhpcy5ob3N0XCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbmNsaWNrPVwic3RhcnRfc2NyZWVuc2hhcmUoKVwiPuW8gOWni+Wxj+W5leWIhuS6qzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uY2xpY2s9XCJzdG9wX3NjcmVlbnNoYXJlKClcIj7lgZzmraLlsY/luZXliIbkuqs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cInN0YXJ0UmVjb3JkXCIgb25jbGljaz1cInN0YXJ0TWVkaWFTZXJ2ZXJSZWNvcmQoKVwiPuW8gOWni+W9leWItuWxj+W5lTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uY2xpY2s9XCJzdG9wTWVkaWFTZXJ2ZXJSZWNvcmQoKVwiPuWBnOatouW9leWItuWxj+W5lTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdEJyb3dzZXJEZXZpY2VNYW5hZ2VyXHJcblx0fSBmcm9tICdAL2pzL2Jyb3dzZXJEZXZpY2VNYW5hZ2VyLmpzJ1xyXG5cdGltcG9ydCB7IEVuZHBvaW50LCBFdmVudHMgfSBmcm9tICdAL2pzL1pMTVJUQ0NsaWVudC5qcydcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDlsY/luZXliIbkuqvmtYHlnLDlnYDlkI7nvIBcclxuXHRcdFx0XHRTQ1JFRU5fU0hBUkVfU1VGRklYOiBcIl9zY3JlZW5zaGFyZVwiLFxyXG5cdFx0XHRcdFNVQl9TVFJFQU1fU1VGSVg6IFwiX3N1YlwiLFxyXG5cdFx0XHRcdE1FRElBX1NFUlZFUl9SRUNPUkRfU1VGSVg6IFwiX3JlY29yZFwiLFxyXG5cdFx0XHRcdE1FRElBX1NFUlZFUl9VUkw6ICdodHRwczovLzQ5LjcuMjEwLjI3OjUwNDQzJyxcclxuXHRcdFx0XHQvLyDkvJrorq7lrqTlkI3np7DvvIzlnKh1cmzlnLDlnYDkuK3mt7vliqAgP3Jvb2095Lya6K6u5a6k5ZCN56ewXHJcblx0XHRcdFx0YXBwOiAnbGl2ZScsXHJcblx0XHRcdFx0Ly8g5piv5ZCmaG9zdO+8jGhvc3TmiY3og73lhbHkuqvlsY/luZXvvIzlnKh1cmzlnLDlnYDkuK3mt7vliqAgJmhvc3Q9MVxyXG5cdFx0XHRcdGhvc3Q6IDEsXHJcblx0XHRcdFx0cmVzQXJyOiBbXSxcclxuXHRcdFx0XHRzZWxmcGxheWVyOiBudWxsLFxyXG5cdFx0XHRcdHNlbGZwbGF5ZXJfc3ViOiBudWxsLFxyXG5cdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyOiBudWxsLFxyXG5cdFx0XHRcdG1lZGlhU2VydmVyUmVjb3JkUGxheWVyOiBudWxsLFxyXG5cdFx0XHRcdHJlY29yZFN0cmVhbTogbnVsbCxcclxuXHRcdFx0XHRtZWRpYVJlY29yZGVyOiBudWxsLFxyXG5cdFx0XHRcdHJlY29yZENodW5rczogW10sXHJcblx0XHRcdFx0bWFpbkNvbnRlbnRIdG1sOiAnJyxcclxuXHRcdFx0XHRkZXZpY2VtYW5hZ2VyOiBudWxsLFxyXG5cdFx0XHRcdGNhbWVyYVNlbGVjdDogbnVsbCxcclxuXHRcdFx0XHRtaWNTZWxlY3Q6IG51bGwsXHJcblx0XHRcdFx0Ly8g5LiK5qyh5ouJ5Yiw55qEc3RyZWFt5YiX6KGo77yM55So5p2l5a+55q+U6LCB5LiL57q/5LqGXHJcblx0XHRcdFx0bGF0ZXN0U3RyZWFtU2V0OiBuZXcgU2V0KCksXHJcblx0XHRcdFx0Ly8g6K6+5aSH5LiK5pGE5YOP5aS05pSv5oyB55qE5pyA5aSn5YiG6L6o546HXHJcblx0XHRcdFx0Y2FtZXJhUmVzb2x1dGlvbnM6IHt9LFxyXG5cdFx0XHRcdHNob3dQcm9tcHQ6IGZhbHNlLFxyXG5cdFx0XHRcdHBhc3N3ZDogJycsXHJcblx0XHRcdFx0c3RyZWFtOiAnJyxcclxuXHRcdFx0XHRzZWxlY3RlZENhbWVyYUluZGV4OiAwLFxyXG5cdFx0XHRcdHNlbGVjdGVkQ2FtZXJhSWQ6ICcnLFxyXG5cdFx0XHRcdGNhbWVyYUxpc3Q6IFtdLFxyXG5cdFx0XHRcdHNlbGVjdGVkTWljSW5kZXg6IDAsXHJcblx0XHRcdFx0c2VsZWN0ZWRNaWNJZDogJycsXHJcblx0XHRcdFx0bWljTGlzdDogW10sXHJcblx0XHRcdFx0ZW5hYmxlVmlkZW86IHRydWUsXHJcblx0XHRcdFx0ZW5hYmxlQXVkaW86IHRydWUsXHJcblx0XHRcdFx0c3RyZWFtaW5nOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmRldmljZW1hbmFnZXIgPSBuZXcgQnJvd3NlckRldmljZU1hbmFnZXIoKVxyXG5cdFx0XHRpZiAoIXRoaXMuc2hvd1Byb21wdCkge1xyXG5cdFx0XHRcdHRoaXMuaW5pdENhbWVyYUFuZE1pY0xpc3QoKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ2VDYW1lcmEoY2FtZXJhKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZENhbWVyYUlkID0gY2FtZXJhLmRldmljZUlkXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRjaGFuZ2VNaWMobWljKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZE1pY0lkID0gbWljLmRldmljZUlkXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRlbnRlcigpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wYXNzd2QgPT09ICdoeGtqMjAyMycpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1Byb21wdCA9IGZhbHNlXHJcblxyXG5cdFx0XHRcdFx0Ly8g5Yid5aeL5YyW5pGE5YOP5aS06K6+5aSH5YiX6KGoXHJcblx0XHRcdFx0XHR0aGlzLmluaXRDYW1lcmFBbmRNaWNMaXN0KClcclxuXHJcblx0XHRcdFx0XHQvLyDliJ3lp4vljJbpuqblhYvpo47orr7lpIfliJfooahcclxuXHRcdFx0XHRcdC8vIHRoaXMuc3RhcnRfcGxheV9vdGhlcigpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0KFwi5a+G56CB6ZSZ6K+vXCIpXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDliJ3lp4vljJbmkYTlg4/lpLTliJfooajlkozpuqblhYvpo47liJfooahcclxuXHRcdFx0aW5pdENhbWVyYUFuZE1pY0xpc3QoKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+W5pGE5YOP5aS05YiX6KGoXHJcblx0XHRcdFx0dGhpcy5kZXZpY2VtYW5hZ2VyXHJcblx0XHRcdFx0XHQuZ2V0Q2FtZXJhTGlzdCgpXHJcblx0XHRcdFx0XHQudGhlbigobGlzdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkQ2FtZXJhSWQgPSBsaXN0WzBdLmRldmljZUlkXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhTGlzdC5wdXNoKGxpc3RbaV0ubGFiZWwpXHJcblx0XHRcdFx0XHRcdFx0Ly8g6I635Y+W5pGE5YOP5aS05Y+C5pWw77yI5YiG6L6o546H44CB5bin5pWw562J77yJXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwYWJpbGl0aWVzID0gbGlzdFtpXS5nZXRDYXBhYmlsaXRpZXMoKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FtZXJhUmVzb2x1dGlvbnNbbGlzdFtpXS5kZXZpY2VJZF0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHR3OiBjYXBhYmlsaXRpZXMud2lkdGgubWF4LFxyXG5cdFx0XHRcdFx0XHRcdFx0aDogY2FwYWJpbGl0aWVzLmhlaWdodC5tYXgsXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRcdC8vIOiOt+WPlum6puWFi+mjjuWIl+ihqFxyXG5cdFx0XHRcdHRoaXMuZGV2aWNlbWFuYWdlclxyXG5cdFx0XHRcdFx0LmdldE1pY0xpc3QoKVxyXG5cdFx0XHRcdFx0LnRoZW4oKGxpc3QpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE1pY0lkID0gbGlzdFswXS5kZXZpY2VJZFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1pY0xpc3QucHVzaChsaXN0W2ldLmxhYmVsKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g5ZCv5Yqo6L2s56CB5pyN5Yqh5Zmo5b2V5YOPKOaOqOa1geWIsHpsbeaOpeWPo+W9leWDjylcclxuXHRcdFx0c3RhcnRNZWRpYVNlcnZlclJlY29yZCgpIHtcclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHR2YXIgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoe1xyXG5cdFx0XHRcdFx0YXVkaW86IHRydWUsXHJcblx0XHRcdFx0XHR2aWRlbzogeyBkaXNwbGF5U3VyZmFjZTogXCJtb25pdG9yXCIgfSxcclxuXHRcdFx0XHRcdHNlbGZCcm93c2VyU3VyZmFjZTogXCJleGNsdWRlXCIsXHJcblx0XHRcdFx0XHRzeXN0ZW1BdWRpbzogXCJpbmNsdWRlXCIsXHJcblx0XHRcdFx0XHRzdXJmYWNlU3dpdGNoaW5nOiBcImV4Y2x1ZGVcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0KiovXHJcblx0XHRcdFx0bWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIgPSBuZXcgRW5kcG9pbnQoe1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWRpYVNlcnZlclJlY29yZFwiKSwgLy8gdmlkZW8g5qCH562+XHJcblx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSwgLy8g5piv5ZCm5omT5Y2w5pel5b+XXHJcblx0XHRcdFx0XHR6bG1zZHBVcmw6IGdldE1lZGlhU2VydmVyUmVjb3JkUHVzaFVybCgpLFxyXG5cdFx0XHRcdFx0c2ltdWxjYXN0OiBmYWxzZSxcclxuXHRcdFx0XHRcdHVzZUNhbWVyYTogZmFsc2UsXHJcblx0XHRcdFx0XHRhdWRpb0VuYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHZpZGVvRW5hYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0cmVjdk9ubHk6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cmVzb2x1dGlvbjoge1xyXG5cdFx0XHRcdFx0XHR3OiAzODQwLFxyXG5cdFx0XHRcdFx0XHRoOiAyMTYwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dXNlZGF0YWNoYW5uZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZGlzcGxheVN1cmZhY2U6ICdtb25pdG9yJ1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRtZWRpYVNlcnZlclJlY29yZFBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfSUNFX0NBTkRJREFURV9FUlJPUixcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0Ly8gSUNFIOWNj+WVhuWHuumUmVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIklDRSDljY/llYblh7rplJlcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0bWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX1JFTU9URV9TVFJFQU1TLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHQvL+iOt+WPluWIsOS6hui/nOerr+a1ge+8jOWPr+S7peaSreaUvlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuaSreaUvuaIkOWKn1wiLCBlLnN0cmVhbXMpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRtZWRpYVNlcnZlclJlY29yZFBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT0ZGRVJfQU5XU0VSX0VYQ0hBTkdFX0ZBSUxFRCxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0Ly8gb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm9mZmVyIGFud3NlciDkuqTmjaLlpLHotKVcIiwgZSk7XHJcblx0XHRcdFx0XHRcdHN0b3Bfc2NyZWVuc2hhcmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRtZWRpYVNlcnZlclJlY29yZFBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fTE9DQUxfU1RSRUFNLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24ocykge1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdvZmZlciBhbndzZXIg5Lqk5o2i5aSx6LSlJyxlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdG1lZGlhU2VydmVyUmVjb3JkUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLkNBUFRVUkVfU1RSRUFNX0ZBSUxFRCxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0XHRcdFx0Ly8g6I635Y+W5pys5Zyw5rWB5aSx6LSlXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6I635Y+W5pys5Zyw5rWB5aSx6LSlXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdG1lZGlhU2VydmVyUmVjb3JkUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9DT05ORUNUSU9OX1NUQVRFX0NIQU5HRSxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKHN0YXRlKSB7XHJcblx0XHRcdFx0XHRcdC8vIFJUQyDnirbmgIHlj5jljJYgLOivpuaDheWPguiAgyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUlRDUGVlckNvbm5lY3Rpb24vY29ubmVjdGlvblN0YXRlXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5YmN54q25oCBPT0+XCIsIHN0YXRlKTtcclxuXHRcdFx0XHRcdFx0Ly8g5aaC5p6c54q25oCB5piv5bey6L+e5o6l77yM6YCa55+lbWVkaWFTZXJ2ZXLlvIDlp4vlvZXlg49cclxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psbWVkaWFraXQvWkxNZWRpYUtpdC93aWtpL01lZGlhU2VydmVyJUU2JTk0JUFGJUU2JThDJTgxJUU3JTlBJTg0SFRUUC1BUEkgIC9pbmRleC9hcGkvc3RhcnRSZWNvcmRcclxuXHRcdFx0XHRcdFx0aWYgKHN0YXRlID09ICdjb25uZWN0ZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgc3RyZWFtID0gYXBwICsgTUVESUFfU0VSVkVSX1JFQ09SRF9TVUZJWFxyXG5cdFx0XHRcdFx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL2luZGV4L2FwaS9zdGFydFJlY29yZD90eXBlPTEmdmhvc3Q9X19kZWZhdWx0Vmhvc3RfXyZhcHA9XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFwcCArIFwiJnN0cmVhbT1cIiArIHN0cmVhbSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCImc2VjcmV0PTAzNWM3M2Y3LWJiNmItNDg4OS1hNzE1LWQ5ZWIyZDE5MjVjY1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aW1lb3V0OiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhLnJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JChcIiNzdGFydFJlY29yZFwiKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0KFwi6YCa55+l5pyN5Yqh5Zmo5b2V5YOP5aSx6LSl77yM6K+36YeN6K+VXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlcnJvcjpcIiArIHhoci5yZWFkeVN0YXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cclxuXHRcdFx0XHRtZWRpYVNlcnZlclJlY29yZFBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX09QRU4sXHJcblx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDmiZPlvIAgOlwiLCBldmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0bWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9NU0csXHJcblx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDmtojmga8gOlwiLCBldmVudC5kYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdG1lZGlhU2VydmVyUmVjb3JkUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9EQVRBX0NIQU5ORUxfRVJSLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJydGMgZGF0YWNoYW5uZWwg6ZSZ6K+vIDpcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0bWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9DTE9TRSxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOWFs+mXrSA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c3RvcE1lZGlhU2VydmVyUmVjb3JkKCkge1xyXG5cdFx0XHRcdGNvbnN0IHN0cmVhbSA9IHRoaXMuYXBwICsgdGhpcy5NRURJQV9TRVJWRVJfUkVDT1JEX1NVRklYXHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdFx0XHRcdHVybDogXCIvaW5kZXgvYXBpL3N0b3BSZWNvcmQ/dHlwZT0xJnZob3N0PV9fZGVmYXVsdFZob3N0X18mYXBwPVwiICsgdGhpcy5hcHAgKyBcIiZzdHJlYW09XCIgKyBzdHJlYW0gK1xyXG5cdFx0XHRcdFx0XHRcIiZzZWNyZXQ9MDM1YzczZjctYmI2Yi00ODg5LWE3MTUtZDllYjJkMTkyNWNjXCIsXHJcblx0XHRcdFx0XHR0eXBlOiBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0dGltZW91dDogMTAwMCxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdCQoXCIjc3RhcnRSZWNvcmRcIikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3I6XCIgKyB4aHIucmVhZHlTdGF0ZSk7XHJcblx0XHRcdFx0XHRcdCQoXCIjc3RhcnRSZWNvcmRcIikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIOWFs+Wxj+W5leWIhuS6q+a1gVxyXG5cdFx0XHRcdGlmIChtZWRpYVNlcnZlclJlY29yZFBsYXllciAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRtZWRpYVNlcnZlclJlY29yZFBsYXllci5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0bWVkaWFTZXJ2ZXJSZWNvcmRQbGF5ZXIgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaWFTZXJ2ZXJSZWNvcmRcIik7XHJcblx0XHRcdFx0XHRpZiAocmVjb3JkLnNyY09iamVjdCkge1xyXG5cdFx0XHRcdFx0XHRyZWNvcmQuc3JjT2JqZWN0LmdldFRyYWNrcygpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnN0b3AoKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHJlY29yZC5zcmNPYmplY3QgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRyZWNvcmQubG9hZCgpO1xyXG5cdFx0XHRcdFx0XHQkKFwiI3N0YXJ0UmVjb3JkXCIpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHJcblx0XHRcdC8vIOmdmemfs+OAgeWPlua2iOmdmemfs1xyXG5cdFx0XHR0b2dnbGVBdWRpbygpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXJfc3ViLmxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0uZW5hYmxlZCA9ICF0aGlzLnNlbGZwbGF5ZXIubG9jYWxTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXVxyXG5cdFx0XHRcdFx0LmVuYWJsZWRcclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIubG9jYWxTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXS5lbmFibGVkID0gIXRoaXMuc2VsZnBsYXllci5sb2NhbFN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWRcclxuXHRcdFx0XHQkKFwiI3RvZ2dsZUF1ZGlvXCIpLnRleHQodGhpcy5zZWxmcGxheWVyLmxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0uZW5hYmxlZCA/ICforr7kuLrpnZnpn7MnIDogJ+WPlua2iOmdmemfsycpXHJcblx0XHRcdFx0JChcIiN0b2dnbGVBdWRpb1wiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIHRoaXMuc2VsZnBsYXllci5sb2NhbFN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWQgP1xyXG5cdFx0XHRcdFx0XCJyZ2IoNDUsIDEyNiwgMjMzKVwiIDogXCJyZ2JhKDIzMywgMTAxLCA0NSwgMSlcIilcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOW8gOWQr+inhumikeOAgeWFs+mXreinhumikVxyXG5cdFx0XHR0b2dnbGVWaWRlbygpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXJfc3ViLmxvY2FsU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZCA9ICF0aGlzLnNlbGZwbGF5ZXIubG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxyXG5cdFx0XHRcdFx0LmVuYWJsZWRcclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIubG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5lbmFibGVkID0gIXRoaXMuc2VsZnBsYXllci5sb2NhbFN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmVuYWJsZWRcclxuXHRcdFx0XHQkKFwiI3RvZ2dsZVZpZGVvXCIpLnRleHQodGhpcy5zZWxmcGxheWVyLmxvY2FsU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZCA/ICforr7kuLrpu5HlsY8nIDogJ+aYvuekuueUu+mdoicpXHJcblx0XHRcdFx0JChcIiN0b2dnbGVWaWRlb1wiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIHRoaXMuc2VsZnBsYXllci5sb2NhbFN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLmVuYWJsZWQgP1xyXG5cdFx0XHRcdFx0XCJyZ2IoNDUsIDEyNiwgMjMzKVwiIDogXCJyZ2JhKDIzMywgMTAxLCA0NSwgMSlcIilcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNldExvY2FsU3RvcmFnZShrZXkpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICQoXCIjXCIgKyBrZXkpLnZhbCgpKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOiOt+WPluWFtuS7luS6uuaRhOWDj+WktOWIhuS6q+eahOaSreaUvuWcsOWdgFxyXG5cdFx0XHQvLyBhcHA6IOaIv+mXtOWPtyAgc3RyZWFtOiDlhaXkvJrkurrlkZjlkI3lrZcgIGlzU3ViOiDmmK/lkKbmkq3mlL7lrZDnoIHmtYFcclxuXHRcdFx0Z2V0UGxheVVybChhcHAsIHN0cmVhbSwgaXNTdWIpIHtcclxuXHRcdFx0XHRpZiAoaXNTdWIpIHtcclxuXHRcdFx0XHRcdHN0cmVhbSA9IHRoaXMuc3RyZWFtICsgdGhpcy5TVUJfU1RSRUFNX1NVRklYXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHBsYXlVcmwgPVxyXG5cdFx0XHRcdFx0dGhpcy5NRURJQV9TRVJWRVJfVVJMICtcclxuXHRcdFx0XHRcdFwiL2luZGV4L2FwaS93ZWJydGM/YXBwPVwiICtcclxuXHRcdFx0XHRcdHRoaXMuYXBwICtcclxuXHRcdFx0XHRcdFwiJnN0cmVhbT1cIiArXHJcblx0XHRcdFx0XHRzdHJlYW0gK1xyXG5cdFx0XHRcdFx0XCImdHlwZT1wbGF5XCI7XHJcblx0XHRcdFx0cmV0dXJuIHBsYXlVcmw7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDojrflj5bmkYTlg4/lpLTliIbkuqvnmoTmjqjmtYHlnLDlnYBcclxuXHRcdFx0Z2V0UHVzaFVybCgpIHtcclxuXHRcdFx0XHRjb25zdCBwdXNoVXJsID1cclxuXHRcdFx0XHRcdHRoaXMuTUVESUFfU0VSVkVSX1VSTCArXHJcblx0XHRcdFx0XHRcIi9pbmRleC9hcGkvd2VicnRjP2FwcD1cIiArXHJcblx0XHRcdFx0XHR0aGlzLmFwcCArXHJcblx0XHRcdFx0XHRcIiZzdHJlYW09XCIgK1xyXG5cdFx0XHRcdFx0dGhpcy5zdHJlYW0gK1xyXG5cdFx0XHRcdFx0XCImdHlwZT1wdXNoXCI7XHJcblx0XHRcdFx0cmV0dXJuIHB1c2hVcmw7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDojrflj5blsY/luZXliIbkuqvnmoTmjqjmtYHlnLDlnYBcclxuXHRcdFx0Z2V0U2NyZWVuU2hhcmVQdXNoVXJsKCkge1xyXG5cdFx0XHRcdC8vIOWxj+W5leWIhuS6q+eahOaOqOa1gXN0cmVhbeaYryDmiL/pl7TlkI1fc2NyZWVuc2hhcmVcclxuXHRcdFx0XHRjb25zdCBzdHJlYW0gPSB0aGlzLmFwcCArIHRoaXMuU0NSRUVOX1NIQVJFX1NVRkZJWDtcclxuXHRcdFx0XHRjb25zdCBwdXNoVXJsID1cclxuXHRcdFx0XHRcdHRoaXMuTUVESUFfU0VSVkVSX1VSTCArXHJcblx0XHRcdFx0XHRcIi9pbmRleC9hcGkvd2VicnRjP2FwcD1cIiArXHJcblx0XHRcdFx0XHR0aGlzLmFwcCArXHJcblx0XHRcdFx0XHRcIiZzdHJlYW09XCIgK1xyXG5cdFx0XHRcdFx0c3RyZWFtICtcclxuXHRcdFx0XHRcdFwiJnR5cGU9cHVzaFwiO1xyXG5cdFx0XHRcdHJldHVybiBwdXNoVXJsO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6I635Y+W5bGP5bmV5YiG5Lqr55qE5pKt5pS+5Zyw5Z2AXHJcblx0XHRcdGdldFNjcmVlblNoYXJlVXJsKCkge1xyXG5cdFx0XHRcdC8vIOWxj+W5leWIhuS6q+eahOaOqOa1gXN0cmVhbeaYryDmiL/pl7TlkI1fc2NyZWVuc2hhcmVcclxuXHRcdFx0XHR2YXIgc3RyZWFtID0gdGhpcy5hcHAgKyB0aGlzLlNDUkVFTl9TSEFSRV9TVUZGSVg7XHJcblx0XHRcdFx0dmFyIHBsYXlVcmwgPVxyXG5cdFx0XHRcdFx0dGhpcy5NRURJQV9TRVJWRVJfVVJMICtcclxuXHRcdFx0XHRcdFwiL2luZGV4L2FwaS93ZWJydGM/YXBwPVwiICtcclxuXHRcdFx0XHRcdHRoaXMuYXBwICtcclxuXHRcdFx0XHRcdFwiJnN0cmVhbT1cIiArXHJcblx0XHRcdFx0XHRzdHJlYW0gK1xyXG5cdFx0XHRcdFx0XCImdHlwZT1wbGF5XCI7XHJcblx0XHRcdFx0cmV0dXJuIHBsYXlVcmw7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDojrflj5bmjqjpgIHmkYTlg4/lpLTovoXnoIHmtYHnmoR1cmxcclxuXHRcdFx0Z2V0UHVzaFN1YlVybCgpIHtcclxuXHRcdFx0XHRjb25zdCBzdHJlYW0gPSB0aGlzLnN0cmVhbSArIHRoaXMuU1VCX1NUUkVBTV9TVUZJWDtcclxuXHRcdFx0XHRjb25zdCBwdXNoVXJsID1cclxuXHRcdFx0XHRcdHRoaXMuTUVESUFfU0VSVkVSX1VSTCArXHJcblx0XHRcdFx0XHRcIi9pbmRleC9hcGkvd2VicnRjP2FwcD1cIiArXHJcblx0XHRcdFx0XHR0aGlzLmFwcCArXHJcblx0XHRcdFx0XHRcIiZzdHJlYW09XCIgK1xyXG5cdFx0XHRcdFx0c3RyZWFtICtcclxuXHRcdFx0XHRcdFwiJnR5cGU9cHVzaFwiO1xyXG5cdFx0XHRcdHJldHVybiBwdXNoVXJsO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6I635Y+W5bGP5bmV5b2V5Yi255qE5o6o5rWB5Zyw5Z2AXHJcblx0XHRcdGdldE1lZGlhU2VydmVyUmVjb3JkUHVzaFVybCgpIHtcclxuXHRcdFx0XHQvLyDlsY/luZXliIbkuqvnmoTmjqjmtYFzdHJlYW3mmK8g5oi/6Ze05ZCNX3NjcmVlbnNoYXJlXHJcblx0XHRcdFx0Y29uc3Qgc3RyZWFtID0gdGhpcy5hcHAgKyB0aGlzLk1FRElBX1NFUlZFUl9SRUNPUkRfU1VGSVg7XHJcblx0XHRcdFx0Y29uc3QgcHVzaFVybCA9XHJcblx0XHRcdFx0XHR0aGlzLk1FRElBX1NFUlZFUl9VUkwgK1xyXG5cdFx0XHRcdFx0XCIvaW5kZXgvYXBpL3dlYnJ0Yz9hcHA9XCIgK1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAgK1xyXG5cdFx0XHRcdFx0XCImc3RyZWFtPVwiICtcclxuXHRcdFx0XHRcdHN0cmVhbSArXHJcblx0XHRcdFx0XHRcIiZ0eXBlPXB1c2hcIjtcclxuXHRcdFx0XHRyZXR1cm4gcHVzaFVybDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOW8gOWni+Wxj+W5leWIhuS6q1xyXG5cdFx0XHRzdGFydF9zY3JlZW5zaGFyZSgpIHtcclxuXHRcdFx0XHRzdG9wX3NjcmVlbnNoYXJlKClcclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllciA9IG5ldyBFbmRwb2ludCh7XHJcblx0XHRcdFx0XHRlbGVtZW50OiB0aGlzLiRyZWZzWydzY3JlZW5TaGFyZSddLCAvLyB2aWRlbyDmoIfnrb5cclxuXHRcdFx0XHRcdGRlYnVnOiB0cnVlLCAvLyDmmK/lkKbmiZPljbDml6Xlv5dcclxuXHRcdFx0XHRcdHpsbXNkcFVybDogZ2V0U2NyZWVuU2hhcmVQdXNoVXJsKCksXHJcblx0XHRcdFx0XHRzaW11bGNhc3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0dXNlQ2FtZXJhOiBmYWxzZSxcclxuXHRcdFx0XHRcdGF1ZGlvRW5hYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0dmlkZW9FbmFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRyZWN2T25seTogZmFsc2UsXHJcblx0XHRcdFx0XHRyZXNvbHV0aW9uOiB7XHJcblx0XHRcdFx0XHRcdHc6IDM4NDAsXHJcblx0XHRcdFx0XHRcdGg6IDIxNjBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR1c2VkYXRhY2hhbm5lbDogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2NyZWVuU2hhcmVQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX0lDRV9DQU5ESURBVEVfRVJST1IsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdC8vIElDRSDljY/llYblh7rplJlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJJQ0Ug5Y2P5ZWG5Ye66ZSZXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9SRU1PVEVfU1RSRUFNUyxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0Ly/ojrflj5bliLDkuobov5znq6/mtYHvvIzlj6/ku6Xmkq3mlL5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmkq3mlL7miJDlip9cIiwgZS5zdHJlYW1zKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT0ZGRVJfQU5XU0VSX0VYQ0hBTkdFX0ZBSUxFRCxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0Ly8gb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm9mZmVyIGFud3NlciDkuqTmjaLlpLHotKVcIiwgZSk7XHJcblx0XHRcdFx0XHRcdHN0b3Bfc2NyZWVuc2hhcmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fTE9DQUxfU1RSRUFNLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24ocykge1xyXG5cdFx0XHRcdFx0XHQvLyDojrflj5bliLDkuobmnKzlnLDmtYFcclxuXHRcdFx0XHRcdFx0dGhpcy4kcmVmc1snc2NyZWVuU2hhcmUnXS5zcmNPYmplY3QgPSBzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRyZWZzWydzY3JlZW5TaGFyZSddLm11dGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pScsZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5DQVBUVVJFX1NUUkVBTV9GQUlMRUQsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihzKSB7XHJcblx0XHRcdFx0XHRcdC8vIOiOt+WPluacrOWcsOa1geWksei0pVxyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bmnKzlnLDmtYHlpLHotKVcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0c2NyZWVuU2hhcmVQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0NPTk5FQ1RJT05fU1RBVEVfQ0hBTkdFLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oc3RhdGUpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUlRDIOeKtuaAgeWPmOWMliAs6K+m5oOF5Y+C6ICDIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SVENQZWVyQ29ubmVjdGlvbi9jb25uZWN0aW9uU3RhdGVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlvZPliY3nirbmgIE9PT5cIiwgc3RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9EQVRBX0NIQU5ORUxfT1BFTixcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOaJk+W8gCA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX01TRyxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOa2iOaBryA6XCIsIGV2ZW50LmRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0c2NyZWVuU2hhcmVQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9FUlIsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDplJnor68gOlwiLCBldmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX0NMT1NFLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJydGMgZGF0YWNoYW5uZWwg5YWz6ZetIDpcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDlvIDlp4vliIbkuqvmkYTlg4/lpLTmiJbogIXpuqblhYvpo45cclxuXHRcdFx0Ly8gdXNlQ2FtZXJhOiDluIPlsJTnsbvlnovvvIzmkq3mlL7ml7bmmK/lkKbkvb/nlKjmkYTlg4/lpLTvvIzlpoLmnpzkuI3kvb/nlKjkvJrlhbHkuqvlsY/luZXmiJbogIXnqpflj6NcclxuXHRcdFx0c3RhcnRfcGxheSgpIHtcclxuXHRcdFx0XHRjb25zdCByZXMgPSB0aGlzLmNhbWVyYVJlc29sdXRpb25zW3RoaXMuc2VsZWN0ZWRDYW1lcmFJZF1cclxuXHRcdFx0XHRjb25zdCBoID0gcGFyc2VJbnQocmVzLmgpO1xyXG5cdFx0XHRcdGNvbnN0IHcgPSBwYXJzZUludChyZXMudyk7XHJcblx0XHRcdFx0Ly/lvZPliY3pgInkuK3nmoTmkYTlg4/lpLRcclxuXHRcdFx0XHRjb25zdCBjYW1lcmFJZCA9IHRoaXMuc2VsZWN0ZWRDYW1lcmFJZFxyXG5cdFx0XHRcdC8v5b2T5YmN6YCJ5Lit55qE6bqm5YWL6aOOXHJcblx0XHRcdFx0Y29uc3QgbWljSWQgPSB0aGlzLnNlbGVjdGVkTWljSWRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCBzZWxmVmlkZW9FbGVtZW50ID0gdGhpcy4kcmVmc1snc2VsZlZpZGVvJ11cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDkuLvnoIHmtYFcclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIgPSBuZXcgRW5kcG9pbnQoe1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogc2VsZlZpZGVvRWxlbWVudCwgLy8gdmlkZW8g5qCH562+XHJcblx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSwgLy8g5piv5ZCm5omT5Y2w5pel5b+XXHJcblx0XHRcdFx0XHR6bG1zZHBVcmw6IHRoaXMuZ2V0UHVzaFVybCgpLFxyXG5cdFx0XHRcdFx0Ly9zaW11bGNhc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltdWxjYXN0XCIpLmNoZWNrZWQsXHJcblx0XHRcdFx0XHRzaW11bGNhc3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Ly8gdXNlQ2FtZXJhOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VDYW1lcmEnKS5jaGVja2VkLFxyXG5cdFx0XHRcdFx0dXNlQ2FtZXJhOiB0cnVlLFxyXG5cdFx0XHRcdFx0YXVkaW9FbmFibGU6IHRoaXMuZW5hYmxlQXVkaW8sXHJcblx0XHRcdFx0XHR2aWRlb0VuYWJsZTogdGhpcy5lbmFibGVWaWRlbyxcclxuXHRcdFx0XHRcdHJlY3ZPbmx5OiBmYWxzZSxcclxuXHRcdFx0XHRcdHJlc29sdXRpb246IHtcclxuXHRcdFx0XHRcdFx0dzogdyxcclxuXHRcdFx0XHRcdFx0aDogaFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHVzZWRhdGFjaGFubmVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdGRldmljZUlkOiBjYW1lcmFJZCxcclxuXHRcdFx0XHRcdG1pY0lkOiBtaWNJZFxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX0lDRV9DQU5ESURBVEVfRVJST1IsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdC8vIElDRSDljY/llYblh7rplJlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJJQ0Ug5Y2P5ZWG5Ye66ZSZXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fUkVNT1RFX1NUUkVBTVMsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdC8v6I635Y+W5Yiw5LqG6L+c56uv5rWB77yM5Y+v5Lul5pKt5pS+XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5oiQ5YqfXCIsIGUuc3RyZWFtcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zZWxmcGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PRkZFUl9BTldTRVJfRVhDSEFOR0VfRkFJTEVELFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHQvLyBvZmZlciBhbndzZXIg5Lqk5o2i5aSx6LSlXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwib2ZmZXIgYW53c2VyIOS6pOaNouWksei0pVwiLCBlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9wX2NhbWVyYSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllci5vbihFdmVudHMuV0VCUlRDX09OX0xPQ0FMX1NUUkVBTSwgZnVuY3Rpb24ocykge1xyXG5cdFx0XHRcdFx0Ly8g6I635Y+W5Yiw5LqG5pys5Zyw5rWBXHJcblx0XHRcdFx0XHRzZWxmVmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHM7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlclxyXG5cdFx0XHRcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxmVmlkZW9cIikubXV0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pScsZSlcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zZWxmcGxheWVyLm9uKEV2ZW50cy5DQVBUVVJFX1NUUkVBTV9GQUlMRUQsIGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0XHRcdC8vIOiOt+WPluacrOWcsOa1geWksei0pVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bmnKzlnLDmtYHlpLHotKVcIik7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fQ09OTkVDVElPTl9TVEFURV9DSEFOR0UsXHJcblx0XHRcdFx0XHRmdW5jdGlvbihzdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHQvLyBSVEMg54q25oCB5Y+Y5YyWICzor6bmg4Xlj4LogIMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JUQ1BlZXJDb25uZWN0aW9uL2Nvbm5lY3Rpb25TdGF0ZVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW9k+WJjeeKtuaAgT09PlwiLCBzdGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zZWxmcGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9EQVRBX0NIQU5ORUxfT1BFTixcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOaJk+W8gCA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9NU0csXHJcblx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDmtojmga8gOlwiLCBldmVudC5kYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX0VSUixcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOmUmeivryA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllci5vbihcclxuXHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX0NMT1NFLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJydGMgZGF0YWNoYW5uZWwg5YWz6ZetIDpcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdC8vIOWGjeaOqOS4gOi3r+WtkOeggea1geOAglxyXG5cdFx0XHRcdHRoaXMuc2VsZnBsYXllcl9zdWIgPSBuZXcgRW5kcG9pbnQoe1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogc2VsZlZpZGVvRWxlbWVudCwgLy8gdmlkZW8g5qCH562+XHJcblx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSwgLy8g5piv5ZCm5omT5Y2w5pel5b+XXHJcblx0XHRcdFx0XHR6bG1zZHBVcmw6IHRoaXMuZ2V0UHVzaFN1YlVybCgpLFxyXG5cdFx0XHRcdFx0Ly9zaW11bGNhc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltdWxjYXN0XCIpLmNoZWNrZWQsXHJcblx0XHRcdFx0XHRzaW11bGNhc3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Ly91c2VDYW1lcmE6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZUNhbWVyYScpLmNoZWNrZWQsXHJcblx0XHRcdFx0XHR1c2VDYW1lcmE6IHRydWUsXHJcblx0XHRcdFx0XHRhdWRpb0VuYWJsZTogdGhpcy5lbmFibGVBdWRpbyxcclxuXHRcdFx0XHRcdHZpZGVvRW5hYmxlOiB0aGlzLmVuYWJsZVZpZGVvLFxyXG5cdFx0XHRcdFx0cmVjdk9ubHk6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cmVzb2x1dGlvbjoge1xyXG5cdFx0XHRcdFx0XHR3OiAzMjAsXHJcblx0XHRcdFx0XHRcdGg6IDE4MFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHVzZWRhdGFjaGFubmVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdGRldmljZUlkOiBjYW1lcmFJZCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHN0YXJ0X3BsYXlfb3RoZXIoKSB7XHJcblx0XHRcdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zeW5jVmlkZW9XaW5kb3dBbmRMaXZlc3RyZWFtKCk7XHJcblx0XHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDmkq3mlL7lsY/luZXliIbkuqvop4bpopFcclxuXHRcdFx0c3RhcnRTY3JlZW5TaGFyZUxpdmVzdHJlYW0oZGF0YSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmhvc3QgIT0gMSkge1xyXG5cdFx0XHRcdFx0dmFyIHNjcmVlblNoYXJlTGl2ZXN0cmVhbSA9IFtdO1xyXG5cdFx0XHRcdFx0Ly/ov4fmu6Tmn6Xor6LliLDnmoTmtYFcclxuXHRcdFx0XHRcdHNjcmVlblNoYXJlTGl2ZXN0cmVhbSA9IGRhdGEuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHQoZCkgPT5cclxuXHRcdFx0XHRcdFx0ZC5hcHAgPT0gYXBwICYmIC8vIOWQjOS4gOS4quS8muiuruWupO+8iGFwcOebuOWQjO+8iVxyXG5cdFx0XHRcdFx0XHRkLm9yaWdpblR5cGVTdHIgPT0gXCJydGNfcHVzaFwiICYmIC8vIHJ0Y+aOqOa1geeahFxyXG5cdFx0XHRcdFx0XHRkLnNjaGVtYSA9PSBcInJ0bXBcIiAmJiAvLyBydG1w5qC85byPXHJcblx0XHRcdFx0XHRcdGQuc3RyZWFtID09IGFwcCArIFNDUkVFTl9TSEFSRV9TVUZGSVggJiYgLy/mmK/lsY/luZXliIbkuqvmtYFcclxuXHRcdFx0XHRcdFx0ZC5ieXRlc1NwZWVkICE9IDAgLy/noIHnjofkuI3kuLow77yM6K+05piO5piv5pyJ5pWI55qE5rWBXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIOWmguaenOWtmOWcqOWxj+W5leWIhuS6q+eahOinhumikea1gSwg5LiU5rKh5pyJ5Zyo5pKt5pS+LCDlvIDkuKrmlrDmtYHvvIzlkKbliJnor7TmmI7lnKjmkq3mlL7kuobvvIzkuI3lgZrliqjkvZxcclxuXHRcdFx0XHRcdGlmIChzY3JlZW5TaGFyZUxpdmVzdHJlYW0ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2NyZWVuU2hhcmVQbGF5ZXIgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyID0gbmV3IEVuZHBvaW50KHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IHRoaXMuJHJlZnNbJ3NjcmVlblNoYXJlJ10sIC8vIHZpZGVvIOagh+etvlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVidWc6IHRydWUsIC8vIOaYr+WQpuaJk+WNsOaXpeW/l1xyXG5cdFx0XHRcdFx0XHRcdFx0emxtc2RwVXJsOiBnZXRTY3JlZW5TaGFyZVVybCgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2ltdWxjYXN0OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdHVzZUNhbWVyYTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRhdWRpb0VuYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvRW5hYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVjdk9ubHk6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHV0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHc6IDM4NDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGg6IDIxNjBcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR1c2VkYXRhY2hhbm5lbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19JQ0VfQ0FORElEQVRFX0VSUk9SLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJQ0Ug5Y2P5ZWG5Ye66ZSZXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiSUNFIOWNj+WVhuWHuumUmVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fUkVNT1RFX1NUUkVBTVMsXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8v6I635Y+W5Yiw5LqG6L+c56uv5rWB77yM5Y+v5Lul5pKt5pS+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5oiQ5YqfXCIsIGUuc3RyZWFtcyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJlZnNbJ3NjcmVlblNoYXJlJ10ucGxheSgpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2NyZWVuU2hhcmVQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09GRkVSX0FOV1NFUl9FWENIQU5HRV9GQUlMRUQsXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9mZmVyIGFud3NlciDkuqTmjaLlpLHotKVcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJvZmZlciBhbndzZXIg5Lqk5o2i5aSx6LSlXCIsIGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9MT0NBTF9TVFJFQU0sXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIOiOt+WPluWIsOS6huacrOWcsOa1gVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdvZmZlciBhbndzZXIg5Lqk5o2i5aSx6LSlJyxlKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0RXZlbnRzLkNBUFRVUkVfU1RSRUFNX0ZBSUxFRCxcclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g6I635Y+W5pys5Zyw5rWB5aSx6LSlXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuiOt+WPluacrOWcsOa1geWksei0pVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fQ09OTkVDVElPTl9TVEFURV9DSEFOR0UsXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihzdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBSVEMg54q25oCB5Y+Y5YyWICzor6bmg4Xlj4LogIMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JUQ1BlZXJDb25uZWN0aW9uL2Nvbm5lY3Rpb25TdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW9k+WJjeeKtuaAgT09PlwiLCBzdGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PSAnZGlzY29ubmVjdGVkJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOWmguaenOayoeacieWxj+W5leWFseS6q+eahOa1ge+8jOWFs+mXreeUu+mdolxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3Bfc2NyZWVuc2hhcmUoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2NyZWVuU2hhcmVQbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9PUEVOLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJydGMgZGF0YWNoYW5uZWwg5omT5byAIDpcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9EQVRBX0NIQU5ORUxfTVNHLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHt9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllci5vbihcclxuXHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX0VSUixcclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOmUmeivryA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PTl9EQVRBX0NIQU5ORUxfQ0xPU0UsXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDlhbPpl60gOlwiLCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOWQjOatpeWFtuS7luWPguS8muS6uuWRmOeahOaRhOWDj+WktOinhumikVxyXG5cdFx0XHQvLyDpu5jorqTmmK/lsI/lm77moIfvvIzmkq3mlL7ovoXnoIHmtYFcclxuXHRcdFx0c3luY1ZpZGVvV2luZG93QW5kTGl2ZXN0cmVhbSgpIHtcclxuXHRcdFx0XHRsZXQgZWxyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNvbHV0aW9uXCIpO1xyXG5cdFx0XHRcdGxldCByZXMgPSBlbHIub3B0aW9uc1tlbHIuc2VsZWN0ZWRJbmRleF0udGV4dC5tYXRjaCgvXFxkKy9nKTtcclxuXHRcdFx0XHRsZXQgaCA9IHBhcnNlSW50KHJlcy5wb3AoKSk7XHJcblx0XHRcdFx0bGV0IHcgPSBwYXJzZUludChyZXMucG9wKCkpO1xyXG5cclxuXHRcdFx0XHQvLyDojrflj5blkIzkuIDkuKrkvJrorq7lrqTvvIhhcHDnm7jlkIzvvInlhbbku5bkurrnmoTnm7Tmkq3mtYFcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcIi9pbmRleC9hcGkvZ2V0TWVkaWFMaXN0P2FwcD1cIiArIGFwcCArIFwiJnNlY3JldD0wMzVjNzNmNy1iYjZiLTQ4ODktYTcxNS1kOWViMmQxOTI1Y2NcIixcclxuXHRcdFx0XHRcdHR5cGU6IFwiR0VUXCIsXHJcblx0XHRcdFx0XHR0aW1lb3V0OiAxMDAwLFxyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRTdHJlYW1zID0gW107XHJcblx0XHRcdFx0XHRcdC8vIOi/h+a7pOafpeivouWIsOeahOa1gVxyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5kYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFN0cmVhbXMgPSBkYXRhLmRhdGEuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0LyoqIOi/h+a7pOeUqOaIt+aRhOWDj+WktOS4u+eggea1geeahOmAu+i+kVxyXG5cdFx0XHRcdFx0XHRcdFx0KGQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGQuYXBwID09IGFwcCAmJiAvLyDlkIzkuIDkuKrkvJrorq7lrqTvvIhhcHDnm7jlkIzvvIlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZC5vcmlnaW5UeXBlU3RyID09IFwicnRjX3B1c2hcIiAmJiAvLyBydGPmjqjmtYHnmoRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZC5zY2hlbWEgPT0gXCJydG1wXCIgJiYgLy8gcnRtcOagvOW8j1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkLnN0cmVhbSAhPSAkKFwiI3N0cmVhbVwiKS52YWwoKSAmJiAvLyDkuI3mmK/mjqjmtYHogIXoh6rlt7HnmoTmtYHvvIzkuZ/lsLHmmK/lhbbku5bkurrnmoRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZC5zdHJlYW0uaW5kZXhPZihTVUJfU1RSRUFNX1NVRklYKSA9PSAtMSAmJiAvL+S4jeaYr+i+heeggea1gVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkLnN0cmVhbS5pbmRleE9mKFNDUkVFTl9TSEFSRV9TVUZGSVgpID09IC0xICYmIC8v5LiN5piv5bGP5bmV5YiG5Lqr5rWBXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQuc3RyZWFtLmluZGV4T2YoTUVESUFfU0VSVkVSX1JFQ09SRF9TVUZJWCkgPT0gLTEgJiYgLy/kuI3mmK/lvZXlg4/mjqjmtYFcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZC5ieXRlc1NwZWVkICE9IDAgLy/noIHnjofkuI3kuLow77yM6K+05piO5piv5pyJ5pWI55qE5rWBXHJcblx0XHRcdFx0XHRcdFx0XHQqKi9cclxuXHRcdFx0XHRcdFx0XHRcdC8vIOi/h+a7pOeUqOaIt+aRhOWDj+WktOWtkOeggea1geeahOmAu+i+kVxyXG5cdFx0XHRcdFx0XHRcdFx0KGQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRkLmFwcCA9PSBhcHAgJiYgLy8g5ZCM5LiA5Liq5Lya6K6u5a6k77yIYXBw55u45ZCM77yJXHJcblx0XHRcdFx0XHRcdFx0XHRkLm9yaWdpblR5cGVTdHIgPT0gXCJydGNfcHVzaFwiICYmIC8vIHJ0Y+aOqOa1geeahFxyXG5cdFx0XHRcdFx0XHRcdFx0ZC5zY2hlbWEgPT0gXCJydG1wXCIgJiYgLy8gcnRtcOagvOW8j1xyXG5cdFx0XHRcdFx0XHRcdFx0ZC5zdHJlYW0gIT0gJChcIiNzdHJlYW1cIikudmFsKCkgKyBTVUJfU1RSRUFNX1NVRklYICYmIC8vIOS4jeaYr+aOqOa1geiAheiHquW3seeahOWtkOeggea1ge+8jOS5n+WwseaYr+WFtuS7luS6uueahFxyXG5cdFx0XHRcdFx0XHRcdFx0ZC5zdHJlYW0uaW5kZXhPZihTVUJfU1RSRUFNX1NVRklYKSAhPSAtMSAmJiAvL+aYr+i+heeggea1gVxyXG5cdFx0XHRcdFx0XHRcdFx0ZC5zdHJlYW0uaW5kZXhPZihTQ1JFRU5fU0hBUkVfU1VGRklYKSA9PSAtMSAmJiAvL+S4jeaYr+Wxj+W5leWIhuS6q+a1gVxyXG5cdFx0XHRcdFx0XHRcdFx0ZC5zdHJlYW0uaW5kZXhPZihNRURJQV9TRVJWRVJfUkVDT1JEX1NVRklYKSA9PSAtMSAmJiAvL+S4jeaYr+W9leWDj+aOqOa1gVxyXG5cdFx0XHRcdFx0XHRcdFx0ZC5ieXRlc1NwZWVkICE9IDAgLy/noIHnjofkuI3kuLow77yM6K+05piO5piv5pyJ5pWI55qE5rWBXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIOeci+aYr+WQpumcgOimgeaSreaUvuWIhuS6q+ahjOmdoueahOinhumikVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0U2NyZWVuU2hhcmVMaXZlc3RyZWFtKGRhdGEuZGF0YSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudFN0cmVhbXMpXHJcblx0XHRcdFx0XHRcdC8vIHN0cmVhbe+8iOaWsOiOt+WPluWIsOeahOa1geWIl+ihqO+8ieWhnuWIsHNldOmHjOmdoiAo5Zug5Li66buY6K6k5piv5ouJ5a2Q56CB5rWB77yM5pi+56S655qE5pe25YCZ5LiN5pi+56S6X3N1YuWtl+agt+aJgOS7pee7meaIquaOiSlcclxuXHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRTdHJlYW1TZXQgPSBuZXcgU2V0KGN1cnJlbnRTdHJlYW1zLm1hcCgocykgPT4gcy5zdHJlYW0uc2xpY2UoMCwgLVxyXG5cdFx0XHRcdFx0XHRcdFNVQl9TVFJFQU1fU1VGSVgubGVuZ3RoKSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g5paw5Yqg5YWl5Lya6K6u55qE5rWB77yI5Y6f6KeG6aKR5rWB5YiX6KGo5Lit5rKh5pyJ77yM5paw55qE6YeM6Z2i5pyJ77yJXHJcblx0XHRcdFx0XHRcdHZhciBuZXdTdHJlYW1zID0gQXJyYXkuZnJvbShjdXJyZW50U3RyZWFtU2V0KS5maWx0ZXIoXHJcblx0XHRcdFx0XHRcdFx0KHMpID0+ICFsYXRlc3RTdHJlYW1TZXQuaGFzKHMpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdC8vIOS4i+e6v+eahOinhumikea1ge+8iOaWsOinhumikea1geWIl+ihqOmHjOmdouayoeacie+8jOWOn+inhumikeWIl+ihqOmHjOmdouacie+8iVxyXG5cdFx0XHRcdFx0XHR2YXIgb2ZmbGluZVN0cmVhbXMgPSBBcnJheS5mcm9tKGxhdGVzdFN0cmVhbVNldCkuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRcdChzKSA9PiAhY3VycmVudFN0cmVhbVNldC5oYXMocylcclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIOWIoOmZpOS4i+e6v+eahOinhumikVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9mZmxpbmVTdHJlYW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGF0ZXN0U3RyZWFtU2V0LmRlbGV0ZShvZmZsaW5lU3RyZWFtc1tpXSk7XHJcblx0XHRcdFx0XHRcdFx0JChcIiN2aWRlb1wiICsgb2ZmbGluZVN0cmVhbXNbaV0pXHJcblx0XHRcdFx0XHRcdFx0XHQucGFyZW50KFwiZGl2XCIpXHJcblx0XHRcdFx0XHRcdFx0XHQucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIOaWsOWKoOWFpeeahOWKoOWFpVxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3RyZWFtID0gbmV3U3RyZWFtc1tpXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdGFnID0gXCJ2aWRlb1wiICsgc3RyZWFtO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRsYXRlc3RTdHJlYW1TZXQuYWRkKHN0cmVhbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIOWmguaenOinhumikeWtmOWcqO+8jOS4jea3u+WKoFxyXG5cdFx0XHRcdFx0XHRcdGlmICgkKFwiI3ZpZGVvXCIgKyBzdHJlYW0pLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKFwiI3ZpZGVvTmFtZV9cIiArIHN0cmVhbSkudGV4dChzdHJlYW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvZG9tID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPjxzcGFuIGlkPVwidmlkZW9OYW1lXycgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJlYW0gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnXCIgY2xhc3M9XCJiYWRnZVwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJlYW0gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcIjwvc3Bhbj5cIiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdCc8dmlkZW8gaWQ9XCInICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0J1wiICBhdXRvcGxheSBjbGFzcz1cIm90aGVyLXZpZGVvXCI+JyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiPC92aWRlbz48L2Rpdj5cIjtcclxuXHRcdFx0XHRcdFx0XHRcdCQoXCIjbWVldGluZ1wiKS5hcHBlbmQoJCh2aWRlb2RvbSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBsYXllciA9IG5ldyBFbmRwb2ludCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZyksIC8vIHZpZGVvIOagh+etvlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSwgLy8g5piv5ZCm5omT5Y2w5pel5b+XXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIOaSreaUvuWtkOeggea1ge+8jGlzU3Vi6K6+572u5Li6dHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR6bG1zZHBVcmw6IGdldFBsYXlVcmwoYXBwLCBzdHJlYW0sIHRydWUpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaW11bGNhc3Q6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VDYW1lcmE6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdWRpb0VuYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmlkZW9FbmFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY3ZPbmx5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHV0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dzogdyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoOiBoXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVzZWRhdGFjaGFubmVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHBsYXllci5vbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19JQ0VfQ0FORElEQVRFX0VSUk9SLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSUNFIOWNj+WVhuWHuumUmVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiSUNFIOWNj+WVhuWHuumUmVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fUkVNT1RFX1NUUkVBTVMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvL+iOt+WPluWIsOS6hui/nOerr+a1ge+8jOWPr+S7peaSreaUvlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5oiQ5YqfXCIsIGUuc3RyZWFtcyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnKS5tdXRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHBsYXllci5vbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0RXZlbnRzLldFQlJUQ19PRkZFUl9BTldTRVJfRVhDSEFOR0VfRkFJTEVELFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwib2ZmZXIgYW53c2VyIOS6pOaNouWksei0pVwiLCBlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fTE9DQUxfU1RSRUFNLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g6I635Y+W5Yiw5LqG5pys5Zyw5rWBXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnb2ZmZXIgYW53c2VyIOS6pOaNouWksei0pScsZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5DQVBUVVJFX1NUUkVBTV9GQUlMRUQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDojrflj5bmnKzlnLDmtYHlpLHotKVcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bmnKzlnLDmtYHlpLHotKVcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0NPTk5FQ1RJT05fU1RBVEVfQ0hBTkdFLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihzdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFJUQyDnirbmgIHlj5jljJYgLOivpuaDheWPguiAgyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUlRDUGVlckNvbm5lY3Rpb24vY29ubmVjdGlvblN0YXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlvZPliY3nirbmgIE9PT5cIiwgc3RhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOa1geaWreW8gOeahOaXtuWAmeWIoOmZpOWvueW6lOeahOaSreaUvueql+WPo1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PSAnZGlzY29ubmVjdGVkJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF0ZXN0U3RyZWFtU2V0LmRlbGV0ZShzdHJlYW0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JChcIiN2aWRlb1wiICsgc3RyZWFtKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucGFyZW50KFwiZGl2XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9PUEVOLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicnRjIGRhdGFjaGFubmVsIOaJk+W8gCA6XCIsIGV2ZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIub24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdEV2ZW50cy5XRUJSVENfT05fREFUQV9DSEFOTkVMX01TRyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9FUlIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJydGMgZGF0YWNoYW5uZWwg6ZSZ6K+vIDpcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLm9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFdmVudHMuV0VCUlRDX09OX0RBVEFfQ0hBTk5FTF9DTE9TRSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInJ0YyBkYXRhY2hhbm5lbCDlhbPpl60gOlwiLCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvdykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImVycm9yOlwiICsgeGhyLnJlYWR5U3RhdGUpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHN0YXJ0X2NhbWVyYSgpIHtcclxuXHRcdFx0XHR0aGlzLnN0b3BfY2FtZXJhKClcclxuXHRcdFx0XHR0aGlzLnN0YXJ0X3BsYXkoKVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c3RvcF9jYW1lcmEoKSB7XHJcblxyXG5cdFx0XHRcdC8vIOWFs+S4u+eggea1gVxyXG5cdFx0XHRcdGlmICh0aGlzLnNlbGZwbGF5ZXIgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxmcGxheWVyLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXIgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdC8vIOWFs+i+heeggea1gVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2VsZnBsYXllcl9zdWIgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGZwbGF5ZXJfc3ViLmNsb3NlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VsZnBsYXllcl9zdWIgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBsb2NhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZlZpZGVvXCIpO1xyXG5cdFx0XHRcdFx0aWYgKGxvY2FsLnNyY09iamVjdCkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbC5zcmNPYmplY3QuZ2V0VHJhY2tzKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3RvcCgpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0bG9jYWwuc3JjT2JqZWN0ID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0bG9jYWwubG9hZCgpO1xyXG5cdFx0XHRcdFx0XHQvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHN0b3Bfc2NyZWVuc2hhcmUoKSB7XHJcblx0XHRcdFx0Ly8g5YWz5bGP5bmV5YiG5Lqr5rWBXHJcblx0XHRcdFx0aWYgKHNjcmVlblNoYXJlUGxheWVyICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdHNjcmVlblNoYXJlUGxheWVyLmNsb3NlKCk7XHJcblx0XHRcdFx0XHRzY3JlZW5TaGFyZVBsYXllciA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qgc2hhcmUgPSB0aGlzLiRyZWZzWydzY3JlZW5TaGFyZSddXHJcblx0XHRcdFx0XHRpZiAoc2hhcmUuc3JjT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRcdHNoYXJlLnNyY09iamVjdC5nZXRUcmFja3MoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zdG9wKCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRzaGFyZS5zcmNPYmplY3QgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRzaGFyZS5sb2FkKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZnBsYXllcl9zdWIgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxmcGxheWVyX3N1Yi5jbG9zZURhdGFDaGFubmVsKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnNlbGZwbGF5ZXIgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxmcGxheWVyLmNsb3NlRGF0YUNoYW5uZWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5iYWRnZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0cGFkZGluZzogMnB4O1xyXG5cdFx0bWFyZ2luOiA2cHg7XHJcblx0fVxyXG5cclxuXHQuYmFkZ2Utc2VsZiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMTAxLCA0NSwgMSk7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRwYWRkaW5nOiAycHg7XHJcblx0XHRtYXJnaW46IDZweDtcclxuXHR9XHJcblxyXG5cdC5jb250cm9sLXNlbGYtYSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2IoNDUsIDEyNiwgMjMzKTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0ei1pbmRleDogOTtcclxuXHRcdHBhZGRpbmc6IDJweDtcclxuXHRcdG1hcmdpbjogNnB4O1xyXG5cdFx0dG9wOiAzMHB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHJcblx0LmNvbnRyb2wtc2VsZi12IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJhY2tncm91bmQ6IHJnYig0NSwgMTI2LCAyMzMpO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0cGFkZGluZzogMnB4O1xyXG5cdFx0bWFyZ2luOiA2cHg7XHJcblx0XHR0b3A6IDU2cHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VsZi12aWRlbyB7XHJcblx0XHRtYXJnaW46IDJweDtcclxuXHRcdGJhY2tncm91bmQ6ICMzMzM7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRoZWlnaHQ6IDg1cHg7XHJcblx0XHRib3JkZXI6IHNvbGlkIDJweCByZ2IoNDUsIDEyNiwgMjMzKTtcclxuXHR9XHJcblxyXG5cdC5vdGhlci12aWRlbyB7XHJcblx0XHRtYXJnaW46IDJweDtcclxuXHRcdGJhY2tncm91bmQ6ICMzMzM7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRoZWlnaHQ6IDg1cHg7XHJcblx0XHRib3JkZXI6IHNvbGlkIDJweCByZ2IoNDUsIDEyNiwgMjMzKTtcclxuXHR9XHJcblxyXG5cdC5zY3JlZW4tc2hhcmUtdmlkZW8ge1xyXG5cdFx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA4NiU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0ei1pbmRleDogLTE7XHJcblx0fVxyXG5cclxuXHQudXNlci1vcHRpb25zIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMiU7XHJcblx0XHRib3R0b206IDEwcHg7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuY2FtZXJhLXNoYXJlIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wcm9tcHQge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcblxyXG5cdC5vcHRpb24taXRlbSB7XHJcblx0XHRib3JkZXI6IHNvbGlkIDJweCAjODg4O1xyXG5cdFx0bWFyZ2luOiA0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 24 */
/*!*********************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/js/browserDeviceManager.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\n/*! browserdevicemanager - ver 1.1.7 created:2021/3/8 下午7:07:53 */\n!function (e, r) {\n  if (\"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module))) module.exports = r();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var o, t; }\n}(self, function () {\n  return function () {\n    \"use strict\";\n\n    var e = {\n        304: function _(e, r, t) {\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.BrowserDeviceManager = void 0;\n          var o = t(101),\n            i = t(853),\n            n = t(62),\n            E = t(913),\n            c = t(331),\n            a = t(1),\n            s = t(935),\n            R = function () {\n              function e() {\n                this.systemUtil = new o.SystemUtil(), this.deviceManager = this.createDeviceManager();\n              }\n              return e.prototype.getCameraList = function () {\n                return this.deviceManager.getCameraList();\n              }, e.prototype.getMicList = function () {\n                return this.deviceManager.getMicList();\n              }, e.prototype.getAudioTrack = function (e) {\n                return this.deviceManager.getAudioTrack(e);\n              }, e.prototype.getVideoTrack = function (e) {\n                return this.deviceManager.getVideoTrack(e);\n              }, e.prototype.getScreenTrack = function (e) {\n                return this.deviceManager.getScreenTrack(e);\n              }, e.prototype.checkSupportScreenShare = function () {\n                return this.deviceManager.checkSupportScreenShare();\n              }, e.prototype.createDeviceManager = function () {\n                return this.systemUtil.isWindows ? new s.WindowsDeviceManager() : this.systemUtil.isAndroid ? new i.AndroidDeviceManager() : this.systemUtil.isIos ? new E.IosDeviceManager() : this.systemUtil.isMacOS ? new a.MacDeviceManager() : this.systemUtil.isLinux ? new c.LinuxDeviceManager() : new n.BaseDeviceManager();\n              }, e;\n            }();\n          r.BrowserDeviceManager = R;\n        },\n        603: function _(e, r) {\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.DeviceError = r.DeviceErrorDescription = r.DeviceErrorCode = void 0, function (e) {\n            e[e.ERROR_DEVICE_UNKNOWNERROR = 1e4] = \"ERROR_DEVICE_UNKNOWNERROR\", e[e.ERROR_DEVICE_AUDIODEVICE_NOTFOUND = 10001] = \"ERROR_DEVICE_AUDIODEVICE_NOTFOUND\", e[e.ERROR_DEVICE_VIDEODEVICE_NOTFOUND = 10002] = \"ERROR_DEVICE_VIDEODEVICE_NOTFOUND\", e[e.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED = 10003] = \"ERROR_DEVICE_AUDIODEVICE_NOTALLOWED\", e[e.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED = 10004] = \"ERROR_DEVICE_VIDEODEVICE_NOTALLOWED\", e[e.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE = 10005] = \"ERROR_DEVICE_AUDIODEVICE_NOTREADABLE\", e[e.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE = 10006] = \"ERROR_DEVICE_VIDEODEVICE_NOTREADABLE\", e[e.ERROR_DEIVCE_CONSTRAINEDERROR = 10007] = \"ERROR_DEIVCE_CONSTRAINEDERROR\", e[e.ERROR_SCREENSHARE_UNKNOWNERRO = 10010] = \"ERROR_SCREENSHARE_UNKNOWNERRO\", e[e.ERROR_SCREENSHARE_NOTALLOWED = 10011] = \"ERROR_SCREENSHARE_NOTALLOWED\", e[e.ERROR_SCREENSHARE_ENDED = 10012] = \"ERROR_SCREENSHARE_ENDED\", e[e.ERROR_SCREENSHARE_NOPERMISSION = 10013] = \"ERROR_SCREENSHARE_NOPERMISSION\", e[e.ERROR_SCREENSHARE_INVALIDACCESS = 10014] = \"ERROR_SCREENSHARE_INVALIDACCESS\", e[e.ERROR_SCREENSHARE_NOTSUPPORT = 10018] = \"ERROR_SCREENSHARE_NOTSUPPORT\", e[e.ERROR_DEVICE_NOTSUPPORT = 10019] = \"ERROR_DEVICE_NOTSUPPORT\";\n          }(r.DeviceErrorCode || (r.DeviceErrorCode = {})), function (e) {\n            e.ERRORMESSAGE_DEVICENOTFOUND = \"Requested device not found\", e.ERRORMESSAGE_DEVICENOTALLOWED = \"Permission denied\", e.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE = \"Permission denied by system\", e.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED = \"The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.\", e.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED = \"video device not allowed\", e.ERRORMESSAGE_AUDIODEVICENOTREADABLE = \"Could not start audio source\", e.ERRORMESSAGE_VIDEODEVICENOTREADABLE = \"Could not start video source\", e.ERRORNAME_DEVICENOTFOUND = \"NotFoundError\", e.ERRORNAME_DEVICENOTALLOWED = \"NotAllowedError\", e.ERRORNAME_DEVICENOTREADABLE = \"NotReadableError\", e.ERRORNAME_DEVICEOVERCONSTRAINED = \"OverconstrainedError\", e.ERRORNAME_INVALID_ACCESS = \"InvalidAccessError\";\n          }(r.DeviceErrorDescription || (r.DeviceErrorDescription = {}));\n          var t = function t(e, r) {\n            this.code = e, this.reason = r;\n          };\n          r.DeviceError = t;\n        },\n        873: function _(e, r) {\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.FacingMode = r.DeviceType = r.MobileCameraType = void 0, function (e) {\n            e[e.USER = 0] = \"USER\", e[e.ENV = 1] = \"ENV\";\n          }(r.MobileCameraType || (r.MobileCameraType = {})), function (e) {\n            e.Camera = \"videoinput\", e.Mic = \"audioinput\", e.Screen = \"screen\";\n          }(r.DeviceType || (r.DeviceType = {})), function (e) {\n            e.USER = \"user\", e.ENVIRONMENT = \"environment\";\n          }(r.FacingMode || (r.FacingMode = {}));\n        },\n        853: function _(e, r, t) {\n          var _o,\n            i = this && this.__extends || (_o = function o(e, r) {\n              return (_o = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.AndroidDeviceManager = void 0;\n          var n = function (e) {\n            function r() {\n              return e.call(this) || this;\n            }\n            return i(r, e), r;\n          }(t(583).MobileDeviceManager);\n          r.AndroidDeviceManager = n;\n        },\n        62: function _(e, r, t) {\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.BaseDeviceManager = void 0;\n          var o = t(603),\n            i = t(873),\n            n = function () {\n              function e() {}\n              return e.prototype.checkSupportScreenShare = function () {\n                if (navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && navigator.mediaDevices.getDisplayMedia) return !0;\n                return !1;\n              }, e.prototype.getCameraList = function () {\n                var e = this;\n                return new Promise(function (r, t) {\n                  e.checkSupport() ? e.getDeviceRight(i.DeviceType.Camera).then(function () {\n                    e.getDeviceList(i.DeviceType.Camera).then(function (e) {\n                      r(e);\n                    }).catch(function (r) {\n                      t(e.parseError(i.DeviceType.Camera, r));\n                    });\n                  }).catch(function (r) {\n                    t(e.parseError(i.DeviceType.Camera, r));\n                  }) : t(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, \"not support navigator.mediaDevices\"));\n                });\n              }, e.prototype.getMicList = function () {\n                var e = this;\n                return new Promise(function (r, t) {\n                  e.checkSupport() ? e.getDeviceRight(i.DeviceType.Mic).then(function () {\n                    e.getDeviceList(i.DeviceType.Mic).then(function (e) {\n                      r(e);\n                    }).catch(function (r) {\n                      t(e.parseError(i.DeviceType.Mic, r));\n                    });\n                  }).catch(function (r) {\n                    t(e.parseError(i.DeviceType.Mic, r));\n                  }) : t(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, \"not support navigator.mediaDevices\"));\n                });\n              }, e.prototype.getAudioTrack = function (e) {\n                var r = this;\n                return new Promise(function (t, n) {\n                  if (r.checkSupport()) {\n                    var E = void 0;\n                    E = e && e.deviceId ? {\n                      audio: {\n                        deviceId: e.deviceId\n                      }\n                    } : {\n                      audio: !0\n                    }, navigator.mediaDevices.getUserMedia(E).then(function (e) {\n                      t(e.getAudioTracks()[0]);\n                    }).catch(function (e) {\n                      n(r.parseError(i.DeviceType.Mic, e));\n                    });\n                  } else n(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, \"not support navigator.mediaDevices\"));\n                });\n              }, e.prototype.getVideoTrack = function (e) {\n                var r = this;\n                return new Promise(function (t, n) {\n                  if (r.checkSupport()) {\n                    var E = r.createVideoConstraints(e);\n                    navigator.mediaDevices.getUserMedia(E).then(function (e) {\n                      t(e.getVideoTracks()[0]);\n                    }).catch(function (e) {\n                      n(r.parseError(i.DeviceType.Camera, e));\n                    });\n                  } else n(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, \"not support navigator.mediaDevices\"));\n                });\n              }, e.prototype.getScreenTrack = function (e) {\n                var r = this;\n                return new Promise(function (t, n) {\n                  r.checkSupportScreenShare() ? navigator.mediaDevices.getDisplayMedia(e).then(function (e) {\n                    t(e);\n                  }).catch(function (e) {\n                    n(r.parseError(i.DeviceType.Screen, e));\n                  }) : n(new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT, \"browser not support screenshare\"));\n                });\n              }, e.prototype.checkSupport = function () {\n                return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia);\n              }, e.prototype.getDeviceList = function (e) {\n                return new Promise(function (r, t) {\n                  navigator.mediaDevices.enumerateDevices().then(function (t) {\n                    var o = [];\n                    t.forEach(function (r) {\n                      r.kind === e && o.push(r);\n                    }), r(o);\n                  }).catch(function (e) {\n                    t(e);\n                  });\n                });\n              }, e.prototype.getDeviceRight = function (e) {\n                return new Promise(function (r, t) {\n                  var o;\n                  i.DeviceType.Camera === e ? o = {\n                    video: !0\n                  } : i.DeviceType.Mic === e && (o = {\n                    audio: !0\n                  }), navigator.mediaDevices.getUserMedia(o).then(function (e) {\n                    e.getVideoTracks().forEach(function (e) {\n                      e.stop();\n                    }), r(void 0);\n                  }).catch(function (e) {\n                    t(e);\n                  });\n                });\n              }, e.prototype.parseError = function (e, r) {\n                var t = null;\n                return i.DeviceType.Mic === e ? t = this.parseAudioError(r) : i.DeviceType.Camera === e ? t = this.parseVideoError(r) : i.DeviceType.Screen === e && (t = this.parseScreenError(r)), null === t ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_UNKNOWNERROR, \"\") : t;\n              }, e.prototype.parseAudioError = function (e) {\n                return e.message === o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND || e.name === o.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTFOUND, \"audio device not found\") : e.message === o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED || e.message === o.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED, \"audio device not allowed\") : e.message === o.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE || e.message === o.DeviceErrorDescription.ERRORMESSAGE_AUDIODEVICENOTREADABLE || e.message === o.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE, \"audio device not readable\") : null;\n              }, e.prototype.parseVideoError = function (e) {\n                return e.message === o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND || e.name === o.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTFOUND, \"video device not found\") : e.message === o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED || e.message === o.DeviceErrorDescription.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED || e.message === o.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED, \"video device not allowed\") : e.message === o.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE || e.message === o.DeviceErrorDescription.ERRORMESSAGE_VIDEODEVICENOTREADABLE || e.name === o.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE ? new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE, \"video device not readable\") : null;\n              }, e.prototype.parseScreenError = function (e) {\n                return e.name === o.DeviceErrorDescription.ERRORNAME_DEVICENOTALLOWED ? e.message === o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED ? new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOTALLOWED, e.message) : new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOPERMISSION, e.message) : e.name === o.DeviceErrorDescription.ERRORNAME_INVALID_ACCESS ? new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_INVALIDACCESS, e.message) : null;\n              }, e.prototype.createVideoConstraints = function (e) {\n                return e.deviceId || e.width || e.height || e.frameRate ? {\n                  video: {\n                    deviceId: e.deviceId,\n                    width: e.width,\n                    height: e.height,\n                    frameRate: e.frameRate\n                  }\n                } : {\n                  video: !0\n                };\n              }, e;\n            }();\n          r.BaseDeviceManager = n;\n        },\n        913: function _(e, r, t) {\n          var _o2,\n            i = this && this.__extends || (_o2 = function o(e, r) {\n              return (_o2 = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o2(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.IosDeviceManager = void 0;\n          var n = function (e) {\n            function r() {\n              return e.call(this) || this;\n            }\n            return i(r, e), r;\n          }(t(583).MobileDeviceManager);\n          r.IosDeviceManager = n;\n        },\n        331: function _(e, r, t) {\n          var _o3,\n            i = this && this.__extends || (_o3 = function o(e, r) {\n              return (_o3 = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o3(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.LinuxDeviceManager = void 0;\n          var n = function (e) {\n            function r() {\n              return e.call(this) || this;\n            }\n            return i(r, e), r;\n          }(t(62).BaseDeviceManager);\n          r.LinuxDeviceManager = n;\n        },\n        1: function _(e, r, t) {\n          var _o4,\n            i = this && this.__extends || (_o4 = function o(e, r) {\n              return (_o4 = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o4(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.MacDeviceManager = void 0;\n          var n = function (e) {\n            function r() {\n              return e.call(this) || this;\n            }\n            return i(r, e), r;\n          }(t(62).BaseDeviceManager);\n          r.MacDeviceManager = n;\n        },\n        583: function _(e, r, t) {\n          var _o5,\n            i = this && this.__extends || (_o5 = function o(e, r) {\n              return (_o5 = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o5(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.MobileDeviceManager = void 0;\n          var n = t(603),\n            E = function (e) {\n              function r() {\n                return e.call(this) || this;\n              }\n              return i(r, e), r.prototype.checkSupportScreenShare = function () {\n                return !1;\n              }, r.prototype.getScreenTrack = function (e) {\n                return new Promise(function (e, r) {\n                  r(new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT, \"mobile not support screenshare\"));\n                });\n              }, r.prototype.createVideoConstraints = function (e) {\n                return e.deviceId || e.facingMode || e.width || e.height ? {\n                  video: {\n                    deviceId: e.facingMode ? e.facingMode : e.deviceId,\n                    width: e.width,\n                    height: e.height\n                  }\n                } : {\n                  video: !0\n                };\n              }, r;\n            }(t(62).BaseDeviceManager);\n          r.MobileDeviceManager = E;\n        },\n        935: function _(e, r, t) {\n          var _o6,\n            i = this && this.__extends || (_o6 = function o(e, r) {\n              return (_o6 = Object.setPrototypeOf || {\n                __proto__: []\n              } instanceof Array && function (e, r) {\n                e.__proto__ = r;\n              } || function (e, r) {\n                for (var t in r) {\n                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);\n                }\n              })(e, r);\n            }, function (e, r) {\n              function t() {\n                this.constructor = e;\n              }\n              _o6(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());\n            });\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.WindowsDeviceManager = void 0;\n          var n = function (e) {\n            function r() {\n              return e.call(this) || this;\n            }\n            return i(r, e), r;\n          }(t(62).BaseDeviceManager);\n          r.WindowsDeviceManager = n;\n        },\n        607: function _(e, r, t) {\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.BrowserDeviceManager = void 0;\n          var o = t(304);\n          Object.defineProperty(r, \"BrowserDeviceManager\", {\n            enumerable: !0,\n            get: function get() {\n              return o.BrowserDeviceManager;\n            }\n          }), window && (window.BrowserDeviceManager = o.BrowserDeviceManager);\n        },\n        101: function _(e, r) {\n          var t;\n          Object.defineProperty(r, \"__esModule\", {\n            value: !0\n          }), r.SystemUtil = void 0, function (e) {\n            e[e.Unknown = 0] = \"Unknown\", e[e.MacOS = 1] = \"MacOS\", e[e.Windows = 2] = \"Windows\", e[e.Android = 3] = \"Android\", e[e.Iphone = 4] = \"Iphone\", e[e.Ipad = 5] = \"Ipad\", e[e.Linux = 6] = \"Linux\";\n          }(t || (t = {}));\n          var o = function () {\n            function e() {\n              this.systemType = t.Unknown, this.getSystemInfo();\n            }\n            return Object.defineProperty(e.prototype, \"isIos\", {\n              get: function get() {\n                return this.systemType === t.Ipad || this.systemType === t.Iphone;\n              },\n              enumerable: !1,\n              configurable: !0\n            }), Object.defineProperty(e.prototype, \"isAndroid\", {\n              get: function get() {\n                return this.systemType === t.Android;\n              },\n              enumerable: !1,\n              configurable: !0\n            }), Object.defineProperty(e.prototype, \"isMacOS\", {\n              get: function get() {\n                return this.systemType === t.MacOS;\n              },\n              enumerable: !1,\n              configurable: !0\n            }), Object.defineProperty(e.prototype, \"isWindows\", {\n              get: function get() {\n                return this.systemType === t.Windows;\n              },\n              enumerable: !1,\n              configurable: !0\n            }), Object.defineProperty(e.prototype, \"isLinux\", {\n              get: function get() {\n                return this.systemType === t.Linux;\n              },\n              enumerable: !1,\n              configurable: !0\n            }), e.prototype.getSystemInfo = function () {\n              if (navigator && navigator.userAgent) {\n                var e = navigator.userAgent.toLocaleLowerCase();\n                e.indexOf(\"ipad\") > -1 ? this.systemType = t.Ipad : e.indexOf(\"iphone\") > -1 ? this.systemType = t.Iphone : e.indexOf(\"android\") > -1 ? this.systemType = t.Android : e.indexOf(\"win\") > -1 ? this.systemType = t.Windows : e.indexOf(\"mac\") > -1 ? this.systemType = t.MacOS : e.indexOf(\"linux\") > -1 ? this.systemType = t.Linux : e.indexOf(\"\") > -1 && (this.systemType = t.Unknown);\n              }\n            }, e;\n          }();\n          r.SystemUtil = o;\n        }\n      },\n      r = {};\n    return function t(o) {\n      if (r[o]) return r[o].exports;\n      var i = r[o] = {\n        exports: {}\n      };\n      return e[o].call(i.exports, i, i.exports, t), i.exports;\n    }(607);\n  }();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 25)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanMvYnJvd3NlckRldmljZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiZSIsInIiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwic2VsZiIsInQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQnJvd3NlckRldmljZU1hbmFnZXIiLCJvIiwiaSIsIm4iLCJFIiwiYyIsImEiLCJzIiwiUiIsInN5c3RlbVV0aWwiLCJTeXN0ZW1VdGlsIiwiZGV2aWNlTWFuYWdlciIsImNyZWF0ZURldmljZU1hbmFnZXIiLCJwcm90b3R5cGUiLCJnZXRDYW1lcmFMaXN0IiwiZ2V0TWljTGlzdCIsImdldEF1ZGlvVHJhY2siLCJnZXRWaWRlb1RyYWNrIiwiZ2V0U2NyZWVuVHJhY2siLCJjaGVja1N1cHBvcnRTY3JlZW5TaGFyZSIsImlzV2luZG93cyIsIldpbmRvd3NEZXZpY2VNYW5hZ2VyIiwiaXNBbmRyb2lkIiwiQW5kcm9pZERldmljZU1hbmFnZXIiLCJpc0lvcyIsIklvc0RldmljZU1hbmFnZXIiLCJpc01hY09TIiwiTWFjRGV2aWNlTWFuYWdlciIsImlzTGludXgiLCJMaW51eERldmljZU1hbmFnZXIiLCJCYXNlRGV2aWNlTWFuYWdlciIsIkRldmljZUVycm9yIiwiRGV2aWNlRXJyb3JEZXNjcmlwdGlvbiIsIkRldmljZUVycm9yQ29kZSIsIkVSUk9SX0RFVklDRV9VTktOT1dORVJST1IiLCJFUlJPUl9ERVZJQ0VfQVVESU9ERVZJQ0VfTk9URk9VTkQiLCJFUlJPUl9ERVZJQ0VfVklERU9ERVZJQ0VfTk9URk9VTkQiLCJFUlJPUl9ERVZJQ0VfQVVESU9ERVZJQ0VfTk9UQUxMT1dFRCIsIkVSUk9SX0RFVklDRV9WSURFT0RFVklDRV9OT1RBTExPV0VEIiwiRVJST1JfREVWSUNFX0FVRElPREVWSUNFX05PVFJFQURBQkxFIiwiRVJST1JfREVWSUNFX1ZJREVPREVWSUNFX05PVFJFQURBQkxFIiwiRVJST1JfREVJVkNFX0NPTlNUUkFJTkVERVJST1IiLCJFUlJPUl9TQ1JFRU5TSEFSRV9VTktOT1dORVJSTyIsIkVSUk9SX1NDUkVFTlNIQVJFX05PVEFMTE9XRUQiLCJFUlJPUl9TQ1JFRU5TSEFSRV9FTkRFRCIsIkVSUk9SX1NDUkVFTlNIQVJFX05PUEVSTUlTU0lPTiIsIkVSUk9SX1NDUkVFTlNIQVJFX0lOVkFMSURBQ0NFU1MiLCJFUlJPUl9TQ1JFRU5TSEFSRV9OT1RTVVBQT1JUIiwiRVJST1JfREVWSUNFX05PVFNVUFBPUlQiLCJFUlJPUk1FU1NBR0VfREVWSUNFTk9URk9VTkQiLCJFUlJPUk1FU1NBR0VfREVWSUNFTk9UQUxMT1dFRCIsIkVSUk9STUVTU0FHRV9NQUNDSFJPTUVfREVWSUNFTk9UUkVBREFCTEUiLCJFUlJPUk1FU1NBR0VfTUFDU0FGQVJJX0RFVklDRU5PVEFMTE9XRUQiLCJFUlJPUk1FU1NBR0VfTU9CSUxFREVWSUNFX05PVEFMTE9XRUQiLCJFUlJPUk1FU1NBR0VfQVVESU9ERVZJQ0VOT1RSRUFEQUJMRSIsIkVSUk9STUVTU0FHRV9WSURFT0RFVklDRU5PVFJFQURBQkxFIiwiRVJST1JOQU1FX0RFVklDRU5PVEZPVU5EIiwiRVJST1JOQU1FX0RFVklDRU5PVEFMTE9XRUQiLCJFUlJPUk5BTUVfREVWSUNFTk9UUkVBREFCTEUiLCJFUlJPUk5BTUVfREVWSUNFT1ZFUkNPTlNUUkFJTkVEIiwiRVJST1JOQU1FX0lOVkFMSURfQUNDRVNTIiwiY29kZSIsInJlYXNvbiIsIkZhY2luZ01vZGUiLCJEZXZpY2VUeXBlIiwiTW9iaWxlQ2FtZXJhVHlwZSIsIlVTRVIiLCJFTlYiLCJDYW1lcmEiLCJNaWMiLCJTY3JlZW4iLCJFTlZJUk9OTUVOVCIsIl9fZXh0ZW5kcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIk1vYmlsZURldmljZU1hbmFnZXIiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXREaXNwbGF5TWVkaWEiLCJQcm9taXNlIiwiY2hlY2tTdXBwb3J0IiwiZ2V0RGV2aWNlUmlnaHQiLCJ0aGVuIiwiZ2V0RGV2aWNlTGlzdCIsImNhdGNoIiwicGFyc2VFcnJvciIsImRldmljZUlkIiwiYXVkaW8iLCJnZXRVc2VyTWVkaWEiLCJnZXRBdWRpb1RyYWNrcyIsImNyZWF0ZVZpZGVvQ29uc3RyYWludHMiLCJnZXRWaWRlb1RyYWNrcyIsImVudW1lcmF0ZURldmljZXMiLCJmb3JFYWNoIiwia2luZCIsInB1c2giLCJ2aWRlbyIsInN0b3AiLCJwYXJzZUF1ZGlvRXJyb3IiLCJwYXJzZVZpZGVvRXJyb3IiLCJwYXJzZVNjcmVlbkVycm9yIiwibWVzc2FnZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lUmF0ZSIsImZhY2luZ01vZGUiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwid2luZG93IiwiVW5rbm93biIsIk1hY09TIiwiV2luZG93cyIsIkFuZHJvaWQiLCJJcGhvbmUiLCJJcGFkIiwiTGludXgiLCJzeXN0ZW1UeXBlIiwiZ2V0U3lzdGVtSW5mbyIsImNvbmZpZ3VyYWJsZSIsInVzZXJBZ2VudCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFDLEVBQUNDLENBQUMsRUFBQztFQUFDLElBQUcsUUFBUSxXQUFnQix1QkFBUEMsT0FBTyxNQUFFLFFBQVEsV0FBZSx1QkFBTkMsTUFBTSxJQUFDQSxNQUFNLENBQUNELE9BQU8sR0FBQ0QsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFHLElBQXFDLEVBQUNHLGlDQUFPLEVBQUUsb0NBQUNILENBQUM7QUFBQTtBQUFBO0FBQUEsb0dBQUMsQ0FBQyxLQUFJLGFBQXVFO0FBQUEsQ0FBQyxDQUFDSSxJQUFJLEVBQUUsWUFBVTtFQUFDLE9BQU8sWUFBSTtJQUFDLFlBQVk7O0lBQUMsSUFBSUwsQ0FBQyxHQUFDO1FBQUMsR0FBRyxFQUFDLFdBQUNBLENBQUMsRUFBQ0MsQ0FBQyxFQUFDSyxDQUFD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Q0EsQ0FBQyxDQUFDVixPQUFPLEVBQUNJLENBQUMsQ0FBQyxFQUFDTSxDQUFDLENBQUNWLE9BQU87SUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQUEsQ0FBQyxFQUFHO0FBQUEsQ0FBQyxDQUFFLEMiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgYnJvd3NlcmRldmljZW1hbmFnZXIgLSB2ZXIgMS4xLjcgY3JlYXRlZDoyMDIxLzMvOCDkuIvljYg3OjA3OjUzICovXHJcbiFmdW5jdGlvbihlLHIpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXIoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10scik7ZWxzZXt2YXIgdD1yKCk7Zm9yKHZhciBvIGluIHQpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109dFtvXX19KHNlbGYsKGZ1bmN0aW9uKCl7cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezMwNDooZSxyLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5Ccm93c2VyRGV2aWNlTWFuYWdlcj12b2lkIDA7dmFyIG89dCgxMDEpLGk9dCg4NTMpLG49dCg2MiksRT10KDkxMyksYz10KDMzMSksYT10KDEpLHM9dCg5MzUpLFI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5zeXN0ZW1VdGlsPW5ldyBvLlN5c3RlbVV0aWwsdGhpcy5kZXZpY2VNYW5hZ2VyPXRoaXMuY3JlYXRlRGV2aWNlTWFuYWdlcigpfXJldHVybiBlLnByb3RvdHlwZS5nZXRDYW1lcmFMaXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGV2aWNlTWFuYWdlci5nZXRDYW1lcmFMaXN0KCl9LGUucHJvdG90eXBlLmdldE1pY0xpc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZXZpY2VNYW5hZ2VyLmdldE1pY0xpc3QoKX0sZS5wcm90b3R5cGUuZ2V0QXVkaW9UcmFjaz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kZXZpY2VNYW5hZ2VyLmdldEF1ZGlvVHJhY2soZSl9LGUucHJvdG90eXBlLmdldFZpZGVvVHJhY2s9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZGV2aWNlTWFuYWdlci5nZXRWaWRlb1RyYWNrKGUpfSxlLnByb3RvdHlwZS5nZXRTY3JlZW5UcmFjaz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kZXZpY2VNYW5hZ2VyLmdldFNjcmVlblRyYWNrKGUpfSxlLnByb3RvdHlwZS5jaGVja1N1cHBvcnRTY3JlZW5TaGFyZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRldmljZU1hbmFnZXIuY2hlY2tTdXBwb3J0U2NyZWVuU2hhcmUoKX0sZS5wcm90b3R5cGUuY3JlYXRlRGV2aWNlTWFuYWdlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN5c3RlbVV0aWwuaXNXaW5kb3dzP25ldyBzLldpbmRvd3NEZXZpY2VNYW5hZ2VyOnRoaXMuc3lzdGVtVXRpbC5pc0FuZHJvaWQ/bmV3IGkuQW5kcm9pZERldmljZU1hbmFnZXI6dGhpcy5zeXN0ZW1VdGlsLmlzSW9zP25ldyBFLklvc0RldmljZU1hbmFnZXI6dGhpcy5zeXN0ZW1VdGlsLmlzTWFjT1M/bmV3IGEuTWFjRGV2aWNlTWFuYWdlcjp0aGlzLnN5c3RlbVV0aWwuaXNMaW51eD9uZXcgYy5MaW51eERldmljZU1hbmFnZXI6bmV3IG4uQmFzZURldmljZU1hbmFnZXJ9LGV9KCk7ci5Ccm93c2VyRGV2aWNlTWFuYWdlcj1SfSw2MDM6KGUscik9PntPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLkRldmljZUVycm9yPXIuRGV2aWNlRXJyb3JEZXNjcmlwdGlvbj1yLkRldmljZUVycm9yQ29kZT12b2lkIDAsZnVuY3Rpb24oZSl7ZVtlLkVSUk9SX0RFVklDRV9VTktOT1dORVJST1I9MWU0XT1cIkVSUk9SX0RFVklDRV9VTktOT1dORVJST1JcIixlW2UuRVJST1JfREVWSUNFX0FVRElPREVWSUNFX05PVEZPVU5EPTEwMDAxXT1cIkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RGT1VORFwiLGVbZS5FUlJPUl9ERVZJQ0VfVklERU9ERVZJQ0VfTk9URk9VTkQ9MTAwMDJdPVwiRVJST1JfREVWSUNFX1ZJREVPREVWSUNFX05PVEZPVU5EXCIsZVtlLkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RBTExPV0VEPTEwMDAzXT1cIkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RBTExPV0VEXCIsZVtlLkVSUk9SX0RFVklDRV9WSURFT0RFVklDRV9OT1RBTExPV0VEPTEwMDA0XT1cIkVSUk9SX0RFVklDRV9WSURFT0RFVklDRV9OT1RBTExPV0VEXCIsZVtlLkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RSRUFEQUJMRT0xMDAwNV09XCJFUlJPUl9ERVZJQ0VfQVVESU9ERVZJQ0VfTk9UUkVBREFCTEVcIixlW2UuRVJST1JfREVWSUNFX1ZJREVPREVWSUNFX05PVFJFQURBQkxFPTEwMDA2XT1cIkVSUk9SX0RFVklDRV9WSURFT0RFVklDRV9OT1RSRUFEQUJMRVwiLGVbZS5FUlJPUl9ERUlWQ0VfQ09OU1RSQUlORURFUlJPUj0xMDAwN109XCJFUlJPUl9ERUlWQ0VfQ09OU1RSQUlORURFUlJPUlwiLGVbZS5FUlJPUl9TQ1JFRU5TSEFSRV9VTktOT1dORVJSTz0xMDAxMF09XCJFUlJPUl9TQ1JFRU5TSEFSRV9VTktOT1dORVJST1wiLGVbZS5FUlJPUl9TQ1JFRU5TSEFSRV9OT1RBTExPV0VEPTEwMDExXT1cIkVSUk9SX1NDUkVFTlNIQVJFX05PVEFMTE9XRURcIixlW2UuRVJST1JfU0NSRUVOU0hBUkVfRU5ERUQ9MTAwMTJdPVwiRVJST1JfU0NSRUVOU0hBUkVfRU5ERURcIixlW2UuRVJST1JfU0NSRUVOU0hBUkVfTk9QRVJNSVNTSU9OPTEwMDEzXT1cIkVSUk9SX1NDUkVFTlNIQVJFX05PUEVSTUlTU0lPTlwiLGVbZS5FUlJPUl9TQ1JFRU5TSEFSRV9JTlZBTElEQUNDRVNTPTEwMDE0XT1cIkVSUk9SX1NDUkVFTlNIQVJFX0lOVkFMSURBQ0NFU1NcIixlW2UuRVJST1JfU0NSRUVOU0hBUkVfTk9UU1VQUE9SVD0xMDAxOF09XCJFUlJPUl9TQ1JFRU5TSEFSRV9OT1RTVVBQT1JUXCIsZVtlLkVSUk9SX0RFVklDRV9OT1RTVVBQT1JUPTEwMDE5XT1cIkVSUk9SX0RFVklDRV9OT1RTVVBQT1JUXCJ9KHIuRGV2aWNlRXJyb3JDb2RlfHwoci5EZXZpY2VFcnJvckNvZGU9e30pKSxmdW5jdGlvbihlKXtlLkVSUk9STUVTU0FHRV9ERVZJQ0VOT1RGT1VORD1cIlJlcXVlc3RlZCBkZXZpY2Ugbm90IGZvdW5kXCIsZS5FUlJPUk1FU1NBR0VfREVWSUNFTk9UQUxMT1dFRD1cIlBlcm1pc3Npb24gZGVuaWVkXCIsZS5FUlJPUk1FU1NBR0VfTUFDQ0hST01FX0RFVklDRU5PVFJFQURBQkxFPVwiUGVybWlzc2lvbiBkZW5pZWQgYnkgc3lzdGVtXCIsZS5FUlJPUk1FU1NBR0VfTUFDU0FGQVJJX0RFVklDRU5PVEFMTE9XRUQ9XCJUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCBieSB0aGUgdXNlciBhZ2VudCBvciB0aGUgcGxhdGZvcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dCwgcG9zc2libHkgYmVjYXVzZSB0aGUgdXNlciBkZW5pZWQgcGVybWlzc2lvbi5cIixlLkVSUk9STUVTU0FHRV9NT0JJTEVERVZJQ0VfTk9UQUxMT1dFRD1cInZpZGVvIGRldmljZSBub3QgYWxsb3dlZFwiLGUuRVJST1JNRVNTQUdFX0FVRElPREVWSUNFTk9UUkVBREFCTEU9XCJDb3VsZCBub3Qgc3RhcnQgYXVkaW8gc291cmNlXCIsZS5FUlJPUk1FU1NBR0VfVklERU9ERVZJQ0VOT1RSRUFEQUJMRT1cIkNvdWxkIG5vdCBzdGFydCB2aWRlbyBzb3VyY2VcIixlLkVSUk9STkFNRV9ERVZJQ0VOT1RGT1VORD1cIk5vdEZvdW5kRXJyb3JcIixlLkVSUk9STkFNRV9ERVZJQ0VOT1RBTExPV0VEPVwiTm90QWxsb3dlZEVycm9yXCIsZS5FUlJPUk5BTUVfREVWSUNFTk9UUkVBREFCTEU9XCJOb3RSZWFkYWJsZUVycm9yXCIsZS5FUlJPUk5BTUVfREVWSUNFT1ZFUkNPTlNUUkFJTkVEPVwiT3ZlcmNvbnN0cmFpbmVkRXJyb3JcIixlLkVSUk9STkFNRV9JTlZBTElEX0FDQ0VTUz1cIkludmFsaWRBY2Nlc3NFcnJvclwifShyLkRldmljZUVycm9yRGVzY3JpcHRpb258fChyLkRldmljZUVycm9yRGVzY3JpcHRpb249e30pKTt2YXIgdD1mdW5jdGlvbihlLHIpe3RoaXMuY29kZT1lLHRoaXMucmVhc29uPXJ9O3IuRGV2aWNlRXJyb3I9dH0sODczOihlLHIpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5GYWNpbmdNb2RlPXIuRGV2aWNlVHlwZT1yLk1vYmlsZUNhbWVyYVR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2VbZS5VU0VSPTBdPVwiVVNFUlwiLGVbZS5FTlY9MV09XCJFTlZcIn0oci5Nb2JpbGVDYW1lcmFUeXBlfHwoci5Nb2JpbGVDYW1lcmFUeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5DYW1lcmE9XCJ2aWRlb2lucHV0XCIsZS5NaWM9XCJhdWRpb2lucHV0XCIsZS5TY3JlZW49XCJzY3JlZW5cIn0oci5EZXZpY2VUeXBlfHwoci5EZXZpY2VUeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5VU0VSPVwidXNlclwiLGUuRU5WSVJPTk1FTlQ9XCJlbnZpcm9ubWVudFwifShyLkZhY2luZ01vZGV8fChyLkZhY2luZ01vZGU9e30pKX0sODUzOmZ1bmN0aW9uKGUscix0KXt2YXIgbyxpPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobz1mdW5jdGlvbihlLHIpe3JldHVybihvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHIpe2UuX19wcm90b19fPXJ9fHxmdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLHQpJiYoZVt0XT1yW3RdKX0pKGUscil9LGZ1bmN0aW9uKGUscil7ZnVuY3Rpb24gdCgpe3RoaXMuY29uc3RydWN0b3I9ZX1vKGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToodC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5BbmRyb2lkRGV2aWNlTWFuYWdlcj12b2lkIDA7dmFyIG49ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcigpe3JldHVybiBlLmNhbGwodGhpcyl8fHRoaXN9cmV0dXJuIGkocixlKSxyfSh0KDU4MykuTW9iaWxlRGV2aWNlTWFuYWdlcik7ci5BbmRyb2lkRGV2aWNlTWFuYWdlcj1ufSw2MjooZSxyLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5CYXNlRGV2aWNlTWFuYWdlcj12b2lkIDA7dmFyIG89dCg2MDMpLGk9dCg4NzMpLG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5jaGVja1N1cHBvcnRTY3JlZW5TaGFyZT1mdW5jdGlvbigpe2lmKG5hdmlnYXRvciYmbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyYmbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEmJm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKXJldHVybiEwO3JldHVybiExfSxlLnByb3RvdHlwZS5nZXRDYW1lcmFMaXN0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsdCl7ZS5jaGVja1N1cHBvcnQoKT9lLmdldERldmljZVJpZ2h0KGkuRGV2aWNlVHlwZS5DYW1lcmEpLnRoZW4oKGZ1bmN0aW9uKCl7ZS5nZXREZXZpY2VMaXN0KGkuRGV2aWNlVHlwZS5DYW1lcmEpLnRoZW4oKGZ1bmN0aW9uKGUpe3IoZSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHIpe3QoZS5wYXJzZUVycm9yKGkuRGV2aWNlVHlwZS5DYW1lcmEscikpfSkpfSkpLmNhdGNoKChmdW5jdGlvbihyKXt0KGUucGFyc2VFcnJvcihpLkRldmljZVR5cGUuQ2FtZXJhLHIpKX0pKTp0KG5ldyBvLkRldmljZUVycm9yKG8uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX0RFVklDRV9OT1RTVVBQT1JULFwibm90IHN1cHBvcnQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1wiKSl9KSl9LGUucHJvdG90eXBlLmdldE1pY0xpc3Q9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24ocix0KXtlLmNoZWNrU3VwcG9ydCgpP2UuZ2V0RGV2aWNlUmlnaHQoaS5EZXZpY2VUeXBlLk1pYykudGhlbigoZnVuY3Rpb24oKXtlLmdldERldmljZUxpc3QoaS5EZXZpY2VUeXBlLk1pYykudGhlbigoZnVuY3Rpb24oZSl7cihlKX0pKS5jYXRjaCgoZnVuY3Rpb24ocil7dChlLnBhcnNlRXJyb3IoaS5EZXZpY2VUeXBlLk1pYyxyKSl9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHIpe3QoZS5wYXJzZUVycm9yKGkuRGV2aWNlVHlwZS5NaWMscikpfSkpOnQobmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX05PVFNVUFBPUlQsXCJub3Qgc3VwcG9ydCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXCIpKX0pKX0sZS5wcm90b3R5cGUuZ2V0QXVkaW9UcmFjaz1mdW5jdGlvbihlKXt2YXIgcj10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxuKXtpZihyLmNoZWNrU3VwcG9ydCgpKXt2YXIgRT12b2lkIDA7RT1lJiZlLmRldmljZUlkP3thdWRpbzp7ZGV2aWNlSWQ6ZS5kZXZpY2VJZH19OnthdWRpbzohMH0sbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoRSkudGhlbigoZnVuY3Rpb24oZSl7dChlLmdldEF1ZGlvVHJhY2tzKClbMF0pfSkpLmNhdGNoKChmdW5jdGlvbihlKXtuKHIucGFyc2VFcnJvcihpLkRldmljZVR5cGUuTWljLGUpKX0pKX1lbHNlIG4obmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX05PVFNVUFBPUlQsXCJub3Qgc3VwcG9ydCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXCIpKX0pKX0sZS5wcm90b3R5cGUuZ2V0VmlkZW9UcmFjaz1mdW5jdGlvbihlKXt2YXIgcj10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxuKXtpZihyLmNoZWNrU3VwcG9ydCgpKXt2YXIgRT1yLmNyZWF0ZVZpZGVvQ29uc3RyYWludHMoZSk7bmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoRSkudGhlbigoZnVuY3Rpb24oZSl7dChlLmdldFZpZGVvVHJhY2tzKClbMF0pfSkpLmNhdGNoKChmdW5jdGlvbihlKXtuKHIucGFyc2VFcnJvcihpLkRldmljZVR5cGUuQ2FtZXJhLGUpKX0pKX1lbHNlIG4obmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX05PVFNVUFBPUlQsXCJub3Qgc3VwcG9ydCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXCIpKX0pKX0sZS5wcm90b3R5cGUuZ2V0U2NyZWVuVHJhY2s9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsbil7ci5jaGVja1N1cHBvcnRTY3JlZW5TaGFyZSgpP25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKGUpLnRoZW4oKGZ1bmN0aW9uKGUpe3QoZSl9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe24oci5wYXJzZUVycm9yKGkuRGV2aWNlVHlwZS5TY3JlZW4sZSkpfSkpOm4obmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfU0NSRUVOU0hBUkVfTk9UU1VQUE9SVCxcImJyb3dzZXIgbm90IHN1cHBvcnQgc2NyZWVuc2hhcmVcIikpfSkpfSxlLnByb3RvdHlwZS5jaGVja1N1cHBvcnQ9ZnVuY3Rpb24oKXtyZXR1cm4hIShuYXZpZ2F0b3ImJm5hdmlnYXRvci5tZWRpYURldmljZXMmJm5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyYmbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpfSxlLnByb3RvdHlwZS5nZXREZXZpY2VMaXN0PWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24ocix0KXtuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChmdW5jdGlvbih0KXt2YXIgbz1bXTt0LmZvckVhY2goKGZ1bmN0aW9uKHIpe3Iua2luZD09PWUmJm8ucHVzaChyKX0pKSxyKG8pfSkpLmNhdGNoKChmdW5jdGlvbihlKXt0KGUpfSkpfSkpfSxlLnByb3RvdHlwZS5nZXREZXZpY2VSaWdodD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsdCl7dmFyIG87aS5EZXZpY2VUeXBlLkNhbWVyYT09PWU/bz17dmlkZW86ITB9OmkuRGV2aWNlVHlwZS5NaWM9PT1lJiYobz17YXVkaW86ITB9KSxuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShvKS50aGVuKChmdW5jdGlvbihlKXtlLmdldFZpZGVvVHJhY2tzKCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5zdG9wKCl9KSkscih2b2lkIDApfSkpLmNhdGNoKChmdW5jdGlvbihlKXt0KGUpfSkpfSkpfSxlLnByb3RvdHlwZS5wYXJzZUVycm9yPWZ1bmN0aW9uKGUscil7dmFyIHQ9bnVsbDtyZXR1cm4gaS5EZXZpY2VUeXBlLk1pYz09PWU/dD10aGlzLnBhcnNlQXVkaW9FcnJvcihyKTppLkRldmljZVR5cGUuQ2FtZXJhPT09ZT90PXRoaXMucGFyc2VWaWRlb0Vycm9yKHIpOmkuRGV2aWNlVHlwZS5TY3JlZW49PT1lJiYodD10aGlzLnBhcnNlU2NyZWVuRXJyb3IocikpLG51bGw9PT10P25ldyBvLkRldmljZUVycm9yKG8uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX0RFVklDRV9VTktOT1dORVJST1IsXCJcIik6dH0sZS5wcm90b3R5cGUucGFyc2VBdWRpb0Vycm9yPWZ1bmN0aW9uKGUpe3JldHVybiBlLm1lc3NhZ2U9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JNRVNTQUdFX0RFVklDRU5PVEZPVU5EfHxlLm5hbWU9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JOQU1FX0RFVklDRU5PVEZPVU5EP25ldyBvLkRldmljZUVycm9yKG8uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RGT1VORCxcImF1ZGlvIGRldmljZSBub3QgZm91bmRcIik6ZS5tZXNzYWdlPT09by5EZXZpY2VFcnJvckRlc2NyaXB0aW9uLkVSUk9STUVTU0FHRV9ERVZJQ0VOT1RBTExPV0VEfHxlLm1lc3NhZ2U9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JNRVNTQUdFX01BQ1NBRkFSSV9ERVZJQ0VOT1RBTExPV0VEP25ldyBvLkRldmljZUVycm9yKG8uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX0RFVklDRV9BVURJT0RFVklDRV9OT1RBTExPV0VELFwiYXVkaW8gZGV2aWNlIG5vdCBhbGxvd2VkXCIpOmUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk1FU1NBR0VfTUFDQ0hST01FX0RFVklDRU5PVFJFQURBQkxFfHxlLm1lc3NhZ2U9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JNRVNTQUdFX0FVRElPREVWSUNFTk9UUkVBREFCTEV8fGUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk5BTUVfREVWSUNFTk9UUkVBREFCTEU/bmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX0FVRElPREVWSUNFX05PVFJFQURBQkxFLFwiYXVkaW8gZGV2aWNlIG5vdCByZWFkYWJsZVwiKTpudWxsfSxlLnByb3RvdHlwZS5wYXJzZVZpZGVvRXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk1FU1NBR0VfREVWSUNFTk9URk9VTkR8fGUubmFtZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk5BTUVfREVWSUNFTk9URk9VTkQ/bmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX1ZJREVPREVWSUNFX05PVEZPVU5ELFwidmlkZW8gZGV2aWNlIG5vdCBmb3VuZFwiKTplLm1lc3NhZ2U9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JNRVNTQUdFX0RFVklDRU5PVEFMTE9XRUR8fGUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk1FU1NBR0VfTU9CSUxFREVWSUNFX05PVEFMTE9XRUR8fGUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk1FU1NBR0VfTUFDU0FGQVJJX0RFVklDRU5PVEFMTE9XRUQ/bmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfREVWSUNFX1ZJREVPREVWSUNFX05PVEFMTE9XRUQsXCJ2aWRlbyBkZXZpY2Ugbm90IGFsbG93ZWRcIik6ZS5tZXNzYWdlPT09by5EZXZpY2VFcnJvckRlc2NyaXB0aW9uLkVSUk9STUVTU0FHRV9NQUNDSFJPTUVfREVWSUNFTk9UUkVBREFCTEV8fGUubWVzc2FnZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk1FU1NBR0VfVklERU9ERVZJQ0VOT1RSRUFEQUJMRXx8ZS5uYW1lPT09by5EZXZpY2VFcnJvckRlc2NyaXB0aW9uLkVSUk9STkFNRV9ERVZJQ0VOT1RSRUFEQUJMRT9uZXcgby5EZXZpY2VFcnJvcihvLkRldmljZUVycm9yQ29kZS5FUlJPUl9ERVZJQ0VfVklERU9ERVZJQ0VfTk9UUkVBREFCTEUsXCJ2aWRlbyBkZXZpY2Ugbm90IHJlYWRhYmxlXCIpOm51bGx9LGUucHJvdG90eXBlLnBhcnNlU2NyZWVuRXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGUubmFtZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk5BTUVfREVWSUNFTk9UQUxMT1dFRD9lLm1lc3NhZ2U9PT1vLkRldmljZUVycm9yRGVzY3JpcHRpb24uRVJST1JNRVNTQUdFX0RFVklDRU5PVEFMTE9XRUQ/bmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfU0NSRUVOU0hBUkVfTk9UQUxMT1dFRCxlLm1lc3NhZ2UpOm5ldyBvLkRldmljZUVycm9yKG8uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX1NDUkVFTlNIQVJFX05PUEVSTUlTU0lPTixlLm1lc3NhZ2UpOmUubmFtZT09PW8uRGV2aWNlRXJyb3JEZXNjcmlwdGlvbi5FUlJPUk5BTUVfSU5WQUxJRF9BQ0NFU1M/bmV3IG8uRGV2aWNlRXJyb3Ioby5EZXZpY2VFcnJvckNvZGUuRVJST1JfU0NSRUVOU0hBUkVfSU5WQUxJREFDQ0VTUyxlLm1lc3NhZ2UpOm51bGx9LGUucHJvdG90eXBlLmNyZWF0ZVZpZGVvQ29uc3RyYWludHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGV2aWNlSWR8fGUud2lkdGh8fGUuaGVpZ2h0fHxlLmZyYW1lUmF0ZT97dmlkZW86e2RldmljZUlkOmUuZGV2aWNlSWQsd2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHQsZnJhbWVSYXRlOmUuZnJhbWVSYXRlfX06e3ZpZGVvOiEwfX0sZX0oKTtyLkJhc2VEZXZpY2VNYW5hZ2VyPW59LDkxMzpmdW5jdGlvbihlLHIsdCl7dmFyIG8saT10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG89ZnVuY3Rpb24oZSxyKXtyZXR1cm4obz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSxyKXtlLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24oZSxyKXtmb3IodmFyIHQgaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocix0KSYmKGVbdF09clt0XSl9KShlLHIpfSxmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIHQoKXt0aGlzLmNvbnN0cnVjdG9yPWV9byhlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KHQucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyB0KX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuSW9zRGV2aWNlTWFuYWdlcj12b2lkIDA7dmFyIG49ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcigpe3JldHVybiBlLmNhbGwodGhpcyl8fHRoaXN9cmV0dXJuIGkocixlKSxyfSh0KDU4MykuTW9iaWxlRGV2aWNlTWFuYWdlcik7ci5Jb3NEZXZpY2VNYW5hZ2VyPW59LDMzMTpmdW5jdGlvbihlLHIsdCl7dmFyIG8saT10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG89ZnVuY3Rpb24oZSxyKXtyZXR1cm4obz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSxyKXtlLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24oZSxyKXtmb3IodmFyIHQgaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocix0KSYmKGVbdF09clt0XSl9KShlLHIpfSxmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIHQoKXt0aGlzLmNvbnN0cnVjdG9yPWV9byhlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KHQucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyB0KX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuTGludXhEZXZpY2VNYW5hZ2VyPXZvaWQgMDt2YXIgbj1mdW5jdGlvbihlKXtmdW5jdGlvbiByKCl7cmV0dXJuIGUuY2FsbCh0aGlzKXx8dGhpc31yZXR1cm4gaShyLGUpLHJ9KHQoNjIpLkJhc2VEZXZpY2VNYW5hZ2VyKTtyLkxpbnV4RGV2aWNlTWFuYWdlcj1ufSwxOmZ1bmN0aW9uKGUscix0KXt2YXIgbyxpPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobz1mdW5jdGlvbihlLHIpe3JldHVybihvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHIpe2UuX19wcm90b19fPXJ9fHxmdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLHQpJiYoZVt0XT1yW3RdKX0pKGUscil9LGZ1bmN0aW9uKGUscil7ZnVuY3Rpb24gdCgpe3RoaXMuY29uc3RydWN0b3I9ZX1vKGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToodC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5NYWNEZXZpY2VNYW5hZ2VyPXZvaWQgMDt2YXIgbj1mdW5jdGlvbihlKXtmdW5jdGlvbiByKCl7cmV0dXJuIGUuY2FsbCh0aGlzKXx8dGhpc31yZXR1cm4gaShyLGUpLHJ9KHQoNjIpLkJhc2VEZXZpY2VNYW5hZ2VyKTtyLk1hY0RldmljZU1hbmFnZXI9bn0sNTgzOmZ1bmN0aW9uKGUscix0KXt2YXIgbyxpPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobz1mdW5jdGlvbihlLHIpe3JldHVybihvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHIpe2UuX19wcm90b19fPXJ9fHxmdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLHQpJiYoZVt0XT1yW3RdKX0pKGUscil9LGZ1bmN0aW9uKGUscil7ZnVuY3Rpb24gdCgpe3RoaXMuY29uc3RydWN0b3I9ZX1vKGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToodC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5Nb2JpbGVEZXZpY2VNYW5hZ2VyPXZvaWQgMDt2YXIgbj10KDYwMyksRT1mdW5jdGlvbihlKXtmdW5jdGlvbiByKCl7cmV0dXJuIGUuY2FsbCh0aGlzKXx8dGhpc31yZXR1cm4gaShyLGUpLHIucHJvdG90eXBlLmNoZWNrU3VwcG9ydFNjcmVlblNoYXJlPWZ1bmN0aW9uKCl7cmV0dXJuITF9LHIucHJvdG90eXBlLmdldFNjcmVlblRyYWNrPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSxyKXtyKG5ldyBuLkRldmljZUVycm9yKG4uRGV2aWNlRXJyb3JDb2RlLkVSUk9SX1NDUkVFTlNIQVJFX05PVFNVUFBPUlQsXCJtb2JpbGUgbm90IHN1cHBvcnQgc2NyZWVuc2hhcmVcIikpfSkpfSxyLnByb3RvdHlwZS5jcmVhdGVWaWRlb0NvbnN0cmFpbnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlLmRldmljZUlkfHxlLmZhY2luZ01vZGV8fGUud2lkdGh8fGUuaGVpZ2h0P3t2aWRlbzp7ZGV2aWNlSWQ6ZS5mYWNpbmdNb2RlP2UuZmFjaW5nTW9kZTplLmRldmljZUlkLHdpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fX06e3ZpZGVvOiEwfX0scn0odCg2MikuQmFzZURldmljZU1hbmFnZXIpO3IuTW9iaWxlRGV2aWNlTWFuYWdlcj1FfSw5MzU6ZnVuY3Rpb24oZSxyLHQpe3ZhciBvLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChvPWZ1bmN0aW9uKGUscil7cmV0dXJuKG89T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUscil7ZS5fX3Byb3RvX189cn18fGZ1bmN0aW9uKGUscil7Zm9yKHZhciB0IGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCkmJihlW3RdPXJbdF0pfSkoZSxyKX0sZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW8oZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOih0LnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgdCl9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLldpbmRvd3NEZXZpY2VNYW5hZ2VyPXZvaWQgMDt2YXIgbj1mdW5jdGlvbihlKXtmdW5jdGlvbiByKCl7cmV0dXJuIGUuY2FsbCh0aGlzKXx8dGhpc31yZXR1cm4gaShyLGUpLHJ9KHQoNjIpLkJhc2VEZXZpY2VNYW5hZ2VyKTtyLldpbmRvd3NEZXZpY2VNYW5hZ2VyPW59LDYwNzooZSxyLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5Ccm93c2VyRGV2aWNlTWFuYWdlcj12b2lkIDA7dmFyIG89dCgzMDQpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiQnJvd3NlckRldmljZU1hbmFnZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gby5Ccm93c2VyRGV2aWNlTWFuYWdlcn19KSx3aW5kb3cmJih3aW5kb3cuQnJvd3NlckRldmljZU1hbmFnZXI9by5Ccm93c2VyRGV2aWNlTWFuYWdlcil9LDEwMTooZSxyKT0+e3ZhciB0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuU3lzdGVtVXRpbD12b2lkIDAsZnVuY3Rpb24oZSl7ZVtlLlVua25vd249MF09XCJVbmtub3duXCIsZVtlLk1hY09TPTFdPVwiTWFjT1NcIixlW2UuV2luZG93cz0yXT1cIldpbmRvd3NcIixlW2UuQW5kcm9pZD0zXT1cIkFuZHJvaWRcIixlW2UuSXBob25lPTRdPVwiSXBob25lXCIsZVtlLklwYWQ9NV09XCJJcGFkXCIsZVtlLkxpbnV4PTZdPVwiTGludXhcIn0odHx8KHQ9e30pKTt2YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLnN5c3RlbVR5cGU9dC5Vbmtub3duLHRoaXMuZ2V0U3lzdGVtSW5mbygpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJpc0lvc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zeXN0ZW1UeXBlPT09dC5JcGFkfHx0aGlzLnN5c3RlbVR5cGU9PT10LklwaG9uZX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJpc0FuZHJvaWRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3lzdGVtVHlwZT09PXQuQW5kcm9pZH0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJpc01hY09TXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN5c3RlbVR5cGU9PT10Lk1hY09TfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImlzV2luZG93c1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zeXN0ZW1UeXBlPT09dC5XaW5kb3dzfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImlzTGludXhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3lzdGVtVHlwZT09PXQuTGludXh9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUuZ2V0U3lzdGVtSW5mbz1mdW5jdGlvbigpe2lmKG5hdmlnYXRvciYmbmF2aWdhdG9yLnVzZXJBZ2VudCl7dmFyIGU9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvY2FsZUxvd2VyQ2FzZSgpO2UuaW5kZXhPZihcImlwYWRcIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuSXBhZDplLmluZGV4T2YoXCJpcGhvbmVcIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuSXBob25lOmUuaW5kZXhPZihcImFuZHJvaWRcIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuQW5kcm9pZDplLmluZGV4T2YoXCJ3aW5cIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuV2luZG93czplLmluZGV4T2YoXCJtYWNcIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuTWFjT1M6ZS5pbmRleE9mKFwibGludXhcIik+LTE/dGhpcy5zeXN0ZW1UeXBlPXQuTGludXg6ZS5pbmRleE9mKFwiXCIpPi0xJiYodGhpcy5zeXN0ZW1UeXBlPXQuVW5rbm93bil9fSxlfSgpO3IuU3lzdGVtVXRpbD1vfX0scj17fTtyZXR1cm4gZnVuY3Rpb24gdChvKXtpZihyW29dKXJldHVybiByW29dLmV4cG9ydHM7dmFyIGk9cltvXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5leHBvcnRzfSg2MDcpfSkoKX0pKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 26 */
/*!*************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/js/ZLMRTCClient.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),
/* 27 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 29)
var ieee754 = __webpack_require__(/*! ieee754 */ 30)
var isArray = __webpack_require__(/*! isarray */ 31)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 28)))

/***/ }),
/* 28 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 30 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 31 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 32 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 33);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 33 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 32)))

/***/ }),
/* 34 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 35 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 36);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 36 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 37 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 34);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 38 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 39 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 40 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 41 */
/*!**************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/App.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDMEs7QUFDMUssZ0JBQWdCLHVMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!***************************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 43);\n/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Louis/Documents/HBuilderProjects/temp/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 45 */
/*!*******************************************************************************!*\
  !*** C:/Users/Louis/Documents/HBuilderProjects/temp/uni.promisify.adaptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\nuni.addInterceptor({\n  returnValue: function returnValue(res) {\n    if (!(!!res && (_typeof(res) === \"object\" || typeof res === \"function\") && typeof res.then === \"function\")) {\n      return res;\n    }\n    return new Promise(function (resolve, reject) {\n      res.then(function (res) {\n        return res[0] ? reject(res[0]) : resolve(res[1]);\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLnByb21pc2lmeS5hZGFwdG9yLmpzIl0sIm5hbWVzIjpbInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7QUFBQUEsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDakJDLFdBQVcsdUJBQUVDLEdBQUcsRUFBRTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDQSxHQUFHLEtBQUssUUFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7TUFDeEcsT0FBT0QsR0FBRztJQUNaO0lBQ0EsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNELEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUM5RCxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbInVuaS5hZGRJbnRlcmNlcHRvcih7XG4gIHJldHVyblZhbHVlIChyZXMpIHtcbiAgICBpZiAoISghIXJlcyAmJiAodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVzID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcy50aGVuKChyZXMpID0+IHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pKTtcbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ })
],[[0,"app-config"]]]);