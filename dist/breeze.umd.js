(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["breeze"] = factory();
	else
		root["breeze"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/hello-world/src/main.vue?vue&type=template&id=6646522a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._m(0), _c('h3', [_vm._v("Installed CLI Plugins")]), _vm._m(1), _c('h3', [_vm._v("Essential Links")]), _vm._m(2), _c('h3', [_vm._v("Ecosystem")]), _vm._m(3)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', [_vm._v(" For a guide and recipes on how to configure / customize this project,"), _c('br'), _vm._v(" check out the "), _c('a', {
    attrs: {
      "href": "https://cli.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-cli documentation")]), _vm._v(". ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("babel")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("eslint")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Core Docs")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://forum.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Forum")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://chat.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Community Chat")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://twitter.com/vuejs",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Twitter")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://news.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("News")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://router.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-router")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://vuex.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vuex")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-devtools#vue-devtools",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-devtools")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://vue-loader.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-loader")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/awesome-vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("awesome-vue")])])]);
}];

;// CONCATENATED MODULE: ./components/hello-world/src/main.vue?vue&type=template&id=6646522a&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/hello-world/src/main.vue?vue&type=script&lang=js&
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
;// CONCATENATED MODULE: ./components/hello-world/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/hello-world/src/main.vue?vue&type=style&index=0&id=6646522a&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/hello-world/src/main.vue?vue&type=style&index=0&id=6646522a&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./components/hello-world/src/main.vue



;


/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6646522a",
  null
  
)

/* harmony default export */ var main = (component.exports);
;// CONCATENATED MODULE: ./components/hello-world/index.js
// 引入组件

// 为组件添加 install 方法，在vue中调用 Vue.use(组件)
// 将自动调用组件的 install 方法注册组件
main.install = function (Vue) {
  Vue.component(main.name, main);
};
/* harmony default export */ var hello_world = (main);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/watermark/src/main.vue?vue&type=template&id=1e8e38f2&scoped=true&
var mainvue_type_template_id_1e8e38f2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "contain",
    staticClass: "contain"
  }, [_vm._t("default")], 2);
};
var mainvue_type_template_id_1e8e38f2_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/watermark/src/main.vue?vue&type=script&lang=js&
let targetNode = null;
let div = null;
let observer = null;
/* harmony default export */ var watermark_src_mainvue_type_script_lang_js_ = ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "watermark",
  props: {
    textList: {
      type: Array,
      default: () => ["hellobreeze"]
    },
    styleConfig: {
      type: Object,
      default: () => ({
        textAlign: "left",
        fontSize: 12,
        fontColor: "rgba(0,0,0,0.15)",
        canWidth: 195,
        canHeight: 100
      })
    }
  },
  methods: {
    renderWatermark() {
      let can = document.createElement("canvas");
      can.width = this.styleConfig.canWidth;
      can.height = this.styleConfig.canHeight;
      let cans = can.getContext("2d");
      cans.rotate(-20 * Math.PI / 180);
      cans.font = `${this.styleConfig.fontSize}px Microsoft JhengHei`;
      cans.textBaseline = "Middle";
      cans.textAlign = this.styleConfig.textAlign;
      cans.fillStyle = this.styleConfig.fontColor;
      this.textList.forEach((text, index) => {
        cans.fillText(text, 0, 4 * can.height / 5 + index * 1.5 * this.styleConfig.fontSize);
      });
      const url = can.toDataURL("image/png");

      // 如果targetNode有div
      if (targetNode.contains(div)) {
        targetNode.removeChild(div);
      }
      div = document.createElement("div");
      div.style.pointerEvents = "none";
      div.style.top = "0px";
      div.style.left = "0px";
      div.style.position = "absolute";
      div.style.zIndex = "100000";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.background = `url(${url}) left top repeat`;
      targetNode.appendChild(div);
    }
  },
  mounted() {
    targetNode = this.$refs.contain;
    this.renderWatermark();
    const that = this;
    const callback = function (mutationsList) {
      // console.log(mutationsList, "mutationsList");
      for (let mutation of mutationsList) {
        if (mutation.removedNodes) {
          for (let node of mutation.removedNodes) {
            // console.log(node === div);
            if (node === div) {
              that.renderWatermark();
              return;
            }
          }
        }
        if (mutation.type === "attributes") {
          that.renderWatermark();
          return;
        }
      }
    };
    // 创建一个观察器实例并传入回调函数
    observer = new MutationObserver(callback);
    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true
    });
  },
  destroyed() {
    // 停止观察
    observer.disconnect();
    div = null;
  }
});
;// CONCATENATED MODULE: ./components/watermark/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_watermark_src_mainvue_type_script_lang_js_ = (watermark_src_mainvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/watermark/src/main.vue?vue&type=style&index=0&id=1e8e38f2&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/watermark/src/main.vue?vue&type=style&index=0&id=1e8e38f2&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./components/watermark/src/main.vue



;


/* normalize component */

var main_component = normalizeComponent(
  components_watermark_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_1e8e38f2_scoped_true_render,
  mainvue_type_template_id_1e8e38f2_scoped_true_staticRenderFns,
  false,
  null,
  "1e8e38f2",
  null
  
)

/* harmony default export */ var src_main = (main_component.exports);
;// CONCATENATED MODULE: ./components/watermark/index.js
// 引入组件

// 为组件添加 install 方法，在vue中调用 Vue.use(组件)
// 将自动调用组件的 install 方法注册组件
src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main);
};
/* harmony default export */ var watermark = (src_main);
;// CONCATENATED MODULE: ./components/index.js
// 引入组件


const components = {
  HelloWorld: hello_world,
  watermark: watermark
};

// 添加 install 方法，在vue中调用 Vue.use(组件)
// 将自动调用 install 方法注册所有组件
const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

// 导出所有组件
/* harmony default export */ var components_0 = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=breeze.umd.js.map