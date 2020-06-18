function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!login\" class=\"\">\r\n  <app-login></app-login>\r\n</div>\r\n\r\n<div *ngIf=\"login\" class=\"\">\r\n  <app-work-board></app-work-board>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>header works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-actions/list-actions.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-actions/list-actions.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListActionsListActionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main_container\">\r\n    <header class=\"header\">\r\n        <button class=\"prev_btn\" (click)=\"defaulActionState()\">\r\n            <img src=\"assets/img/prev.png\" alt=\"\" class=\"prev_btn_img\"  *ngIf=\"actionStateId != 0\" >\r\n        </button>\r\n        <p class=\"title\">\r\n            {{title}}\r\n        </p>\r\n        <button class=\"close_btn\" (click)=\"complateClose()\">\r\n            <img src=\"assets/img/close.png\" alt=\"\" class=\"close_btn_img\">\r\n        </button>\r\n    </header> \r\n\r\n    <div *ngIf=\"actionStateId === 0\">  \r\n        <ul *ngFor=\"let ulNav of listActions\" class=\"nav_ul\" >\r\n            <div class=\"hr_line\"></div>\r\n            <li *ngFor=\"let liItem of ulNav\" (click)=\"someAction(liItem)\" class=\"li_item\">\r\n                {{liItem.text}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"actionStateId == 1\" class=\"copy_block\">\r\n        <p class=\"copy_block_title\">\r\n            Название\r\n        </p>\r\n        <textarea \r\n            class=\"copy_block_textarea\"\r\n            #text cols=\"30\" rows=\"3\"\r\n            [value]=\"newName\"\r\n        ></textarea>\r\n        <button class=\"btn_green\" (click)=\"copyColumn(text.value)\"> \r\n            Создать список\r\n        </button>\r\n    </div>\r\n    \r\n    <div *ngIf=\"actionStateId == 4\" class=\"sort_block\">\r\n        <ul class=\"nav_ul\">\r\n            <li class=\"li_item\" (click)=\"sortByParam(0)\">Дата создания (сначала новые)</li>\r\n            <li class=\"li_item\" (click)=\"sortByParam(1)\">Дата создания (сначала старые)</li>\r\n            <li class=\"li_item\" (click)=\"sortByParam(2)\">Название карточки (по алфавиту)</li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"actionStateId == 5\" class=\"move_to_block\">\r\n        <ul class=\"nav_ul\">\r\n            <li class=\"li_item\" *ngFor=\"let item of workColumns\" (click)=\"moveToService(item.id)\">   \r\n                {{item.name}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n        \r\n        \r\n\r\n\r\n\r\n\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-column/work-column.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-column/work-column.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWorkColumnWorkColumnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"work_column\">\r\n  <div class=\"work_column_header\">\r\n    <div class=\"header_left\">\r\n      <p class=\"header_title\">\r\n        {{data.name}}\r\n      </p>\r\n      <p class=\"header_subtitle\">\r\n        <span>{{data.listItems.length}}</span> карточки\r\n      </p>\r\n    </div>\r\n    <button class=\"list_actions\" (click)=\"listActionsState = !listActionsState\">\r\n      ...\r\n\r\n    </button>\r\n    <div class=\"list_actions_pop_up\" *ngIf=\"listActionsState\">\r\n      <app-list-actions\r\n        [data]=\"data\"\r\n        (action)=\"action($event)\"\r\n        (close)=\"close($event)\"\r\n      ></app-list-actions>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Top Block ADD -->\r\n  <div class=\"work_column_footer work_column_footer_add_to_top\" *ngIf=\"addItemToTopState\">\r\n    <!-- textarea -->\r\n    <textarea \r\n      class=\"footer_textarea\"  \r\n      placeholder=\"Ввести заголовок для этой карточки\" \r\n      #text cols=\"30\" rows=\"3\"\r\n    ></textarea>\r\n    <div class=\"footer_add_block\">\r\n      <button class=\"add_item\" (click)=\"addItemToTop(text)\">\r\n        Добавить карточку\r\n      </button>\r\n      <button class=\"footer_add_block_remove\" (click)='addItemToTopState = false'>\r\n        <img src=\"assets/img/close.png\" alt=\"\" class=\"close_img\">\r\n      </button>\r\n      <button class=\"footer_settings\">\r\n        ...\r\n      </button>\r\n    </div>\r\n  </div>\r\n  \r\n  <ul class=\"work_column_list\">\r\n    <li class=\"list_item\" *ngFor=\"let item of data.listItems\">\r\n      <input type=\"text\" class=\"list_input\" value={{item.text}} disabled>\r\n      <button class=\"list_item_settings_button\">\r\n        <img src=\"assets/img/edit.png\" alt=\"\" class=\"edit_img\">\r\n      </button>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- Bottom Block ADD -->\r\n  <div *ngIf=\"!addItemToTopState\">\r\n    <div class=\"work_column_footer\" *ngIf=\"!addBlockState\" (click)='addBlockState = true'>\r\n      <button class=\"work_column_add\">\r\n        + Add New Ticket\r\n      </button>\r\n    </div>\r\n    <div class=\"work_column_footer\" *ngIf=\"addBlockState\">\r\n      <!-- textarea -->\r\n      <textarea \r\n        class=\"footer_textarea\"  \r\n        placeholder=\"Ввести заголовок для этой карточки\" \r\n        #text cols=\"30\" rows=\"3\"\r\n      ></textarea>\r\n      <div class=\"footer_add_block\">\r\n        <button class=\"add_item\" (click)=\"addItem(text)\">\r\n          Добавить карточку\r\n        </button>\r\n        <button class=\"footer_add_block_remove\" (click)='addBlockState = false'>\r\n          <img src=\"assets/img/close.png\" alt=\"\" class=\"close_img\">\r\n        </button>\r\n        <button class=\"footer_settings\">\r\n          ...\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boards/boards.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boards/boards.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBoardsBoardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>boards works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>login works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-board/work-board.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-board/work-board.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWorkBoardWorkBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main_container\">\n\n  <ul class=\"list\">\n    <li *ngFor=\"let column of columns\" class=\"list_item\">\n      <app-work-column\n        [data]='column'\n      ></app-work-column>\n    </li>\n  </ul>\n  \n  <div class=\"add_new_column list\">\n    <button class=\"add_new_column_button\" *ngIf=\"!addingBlockState\" (click)=\"addingBlockState = !addingBlockState\">\n     + Добавьте еще одну колонку\n    </button>\n    <div class=\"adding_block\"  *ngIf=\"addingBlockState\" >\n      <input type=\"text\" class=\"adding_block_input\" #input placeholder=\"Ввести заголовок списка\">\n      <div class=\"adding_block_buttons\">\n        <button class=\"adding_block_buttons_add\" (click)=\"addColumn(input)\">Добавить список</button>\n        <button class=\"adding_block_buttons_remove\" (click)=\"this.addingBlockState = !this.addingBlockState\">\n          <img src=\"assets/img/close.png\" class=\"close_img\" alt=\"\">\n        </button>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'trello';
      this.login = true;
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_boards_boards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/boards/boards.component */
    "./src/app/pages/boards/boards.component.ts");
    /* harmony import */


    var _pages_work_board_work_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/work-board/work-board.component */
    "./src/app/pages/work-board/work-board.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_work_column_work_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/work-column/work-column.component */
    "./src/app/components/work-column/work-column.component.ts");
    /* harmony import */


    var _components_list_actions_list_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/list-actions/list-actions.component */
    "./src/app/components/list-actions/list-actions.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_boards_boards_component__WEBPACK_IMPORTED_MODULE_6__["BoardsComponent"], _pages_work_board_work_board_component__WEBPACK_IMPORTED_MODULE_7__["WorkBoardComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_work_column_work_column_component__WEBPACK_IMPORTED_MODULE_9__["WorkColumnComponent"], _components_list_actions_list_actions_component__WEBPACK_IMPORTED_MODULE_10__["ListActionsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/list-actions/list-actions.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/list-actions/list-actions.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListActionsListActionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_container{\r\n    background-color: #fbfbfb;\r\n    position: absolute;\r\n    margin-top: 7px;\r\n    border-radius: 3px;\r\n    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);\r\n    white-space: nowrap;\r\n    width: 304px;\r\n    padding: 0 12px;\r\n}\r\n.header{\r\n    display: flex;\r\n    font-size: 16px;\r\n    padding: 10px 0;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.close_btn{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.title{\r\n    font-size: 15px;\r\n    color: #2e3a50;\r\n    display: flex;\r\n}\r\n.close_btn{\r\n    right: 15px;\r\n}\r\n.close_btn_img{\r\n    width: 10px;\r\n}\r\n.hr_line{\r\n    width: auto;\r\n    height: 1px;\r\n    background-color: #ccc;\r\n    margin: 0 12px;\r\n    margin-bottom: 7px;\r\n    padding: 0 12px;\r\n}\r\n.nav_ul{\r\n    margin: 5px 0;\r\n}\r\n.li_item{\r\n    color: #172b4d;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    height: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 0 12px;\r\n    cursor: pointer;\r\n}\r\n.li_item:hover{\r\n    background-color: rgba(9,30,66,.04);\r\n}\r\n.prev_btn{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 15px;\r\n}\r\n.prev_btn_img{\r\n    width: 15px;\r\n}\r\n/* Copy Block */\r\n.copy_block{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n.copy_block_textarea{\r\n    width: 100%;\r\n    padding: 5px;\r\n}\r\n.copy_block_title{\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWFjdGlvbnMvbGlzdC1hY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEVBQTBFO0lBQzFFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QtYWN0aW9ucy9saXN0LWFjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IC00cHggcmdiYSg5LDMwLDY2LC4yNSksIDAgMCAwIDFweCByZ2JhKDksMzAsNjYsLjA4KTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlX2J0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMmUzYTUwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2xvc2VfYnRue1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmNsb3NlX2J0bl9pbWd7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG4uaHJfbGluZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuLm5hdl91bHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuLmxpX2l0ZW17XHJcbiAgICBjb2xvcjogIzE3MmI0ZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGlfaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwzMCw2NiwuMDQpO1xyXG59XHJcbi5wcmV2X2J0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLnByZXZfYnRuX2ltZ3tcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4vKiBDb3B5IEJsb2NrICovXHJcbi5jb3B5X2Jsb2Nre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4uY29weV9ibG9ja190ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb3B5X2Jsb2NrX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/list-actions/list-actions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/list-actions/list-actions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ListActionsComponent */

  /***/
  function srcAppComponentsListActionsListActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListActionsComponent", function () {
      return ListActionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-board-data.service */
    "./src/app/services/work-board-data.service.ts");

    var ListActionsComponent = /*#__PURE__*/function () {
      function ListActionsComponent(boardData) {
        _classCallCheck(this, ListActionsComponent);

        this.boardData = boardData;
        this.title = 'Действия со списком';
        this.actionStateId = 0;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newName = '';
        this.listActions = [[{
          id: 0,
          text: 'Добавить карточку…'
        }, {
          id: 1,
          text: 'Копировать список…'
        }, {
          id: 2,
          text: 'Переместить список…'
        }, {
          id: 3,
          text: 'Подписаться '
        }], [{
          id: 4,
          text: 'Сортировать по...'
        }], [{
          id: 5,
          text: 'Переместить все карточки списка…'
        }, {
          id: 6,
          text: 'Архивировать все карточки списка…'
        }], [{
          id: 7,
          text: 'Архивировать список'
        }]];
        this.workColumns = this.boardData.getWorkColumns();
      }

      _createClass(ListActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newName = this.data.name;
        }
      }, {
        key: "someAction",
        value: function someAction(action) {
          if (action.id == 0) {
            this.addCard(action.id);
          }

          if (action.id == 1) {
            this.copyCard(action.id);
          }

          if (action.id == 4) {
            this.sortBy(action.id);
          }

          if (action.id == 5) {
            this.moveTo(action.id);
          }
        }
      }, {
        key: "defaulActionState",
        value: function defaulActionState() {
          this.actionStateId = 0;
          this.title = 'Действия со списком';
        }
      }, {
        key: "closeEmit",
        value: function closeEmit() {
          var item = false;
          this.close.emit(item);
        }
      }, {
        key: "complateClose",
        value: function complateClose() {
          this.closeEmit();
          this.defaulActionState();
        }
      }, {
        key: "addCard",
        value: function addCard(id) {
          var item = {
            id: id,
            value: true
          };
          this.action.emit(item);
        } // копирование карточки

      }, {
        key: "copyCard",
        value: function copyCard(id) {
          this.actionStateId = id;
          this.title = 'Копирование списка';
        }
      }, {
        key: "copyColumn",
        value: function copyColumn(text) {
          if (text.trim() == '') {
            return false;
          }

          var item0 = JSON.stringify(this.data);
          var item = JSON.parse(item0);
          item.name = text;
          this.boardData.copyNewColumn(item);
          this.defaulActionState();
          this.closeEmit();
        } // сортировка карточки

      }, {
        key: "sortBy",
        value: function sortBy(id) {
          if (this.data.listItems.length == 0) {
            return false;
          }

          this.actionStateId = id;
          this.title = 'Сортировать колонку';
        }
      }, {
        key: "sortByParam",
        value: function sortByParam(item, id) {
          console.log(this.data);
          this.boardData.sortByParam(item, this.data.id);
          this.complateClose();
        }
      }, {
        key: "moveTo",
        value: function moveTo(id) {
          this.actionStateId = id;
          this.title = 'Переместить все карточки в список';
        }
      }, {
        key: "moveToService",
        value: function moveToService(id) {
          var items0 = JSON.stringify(this.data.listItems);
          var items = JSON.parse(items0);
          this.boardData.moveTo(items, id);
          var idArr = [];

          for (var i = 0; i < this.data.listItems.length; i++) {
            idArr.push(this.data.listItems[i]);
          }

          this.boardData.deleteWorkColumnItemById(this.data.id, idArr);
        }
      }]);

      return ListActionsComponent;
    }();

    ListActionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__["WorkBoardDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListActionsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListActionsComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListActionsComponent.prototype, "close", void 0);
    ListActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-actions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-actions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-actions/list-actions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-actions.component.css */
      "./src/app/components/list-actions/list-actions.component.css"))["default"]]
    })], ListActionsComponent);
    /***/
  },

  /***/
  "./src/app/components/work-column/work-column.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/work-column/work-column.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWorkColumnWorkColumnComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".work_column{\r\n  width: 270px;\r\n  background-color: #ebecf0;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n.work_column_header{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.header{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.header_button{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  top: -30px;\r\n}\r\n.header_title{\r\n  font-size: 14px;\r\n  color: #172b4d;\r\n  margin-bottom: 5px;\r\n}\r\n.header_subtitle{\r\n  font-size: 12px;\r\n  color: #5e6c84;\r\n}\r\n.list_actions{\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n}\r\n.list_actions:hover{\r\n  background-color: #d9dbe2;;\r\n}\r\n.list_actions_pop_up{\r\n  position: absolute;\r\n  margin-left: 225px;\r\n  margin-top: 23px;\r\n}\r\n.list_item{\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 24px;\r\n  box-shadow: 0 1px 0 rgba(9,30,66,.25);\r\n  width: 100%;\r\n  background-color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.list_item:hover{\r\n  background-color: rgb(250, 250, 250);\r\n  box-shadow: 0 2px 1px rgba(9,30,66,.25);\r\n}\r\n.list_item:hover .list_item_settings_button{\r\n  display: block;\r\n}\r\n.list_item_settings_button{\r\n  display: none;\r\n}\r\n.list_input{\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n.list_input:disabled{\r\n  background-color: transparent;\r\n}\r\n.work_column_add{\r\n  width: 90%;\r\n  margin-top: 10px;\r\n  font-size: 16px;\r\n  color: #5e6c84;\r\n  text-align: left;\r\n  padding: 5px 10px;\r\n  border-radius: 2px;\r\n}\r\n.work_column_add:hover{\r\n  background-color: #d9dce2;\r\n}\r\n.footer_textarea{\r\n  width: 100%;\r\n  border: none;\r\n  resize: vertical;\r\n  padding: 7px;\r\n  margin: 10px 0;\r\n}\r\n.footer_add_block{\r\n  display: flex;\r\n}\r\n.add_item{\r\n  background-color: #5aac44;\r\n  padding: 6px 12px; \r\n  color: #fff;\r\n  font-weight: 400;\r\n  border-radius: 2px;\r\n}\r\n.add_item:hover{\r\n  background-color: #61bd4f;\r\n}\r\n.footer_add_block_remove{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 15px;\r\n}\r\n.close_img{\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n.footer_settings{\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  margin-left: auto;\r\n  border: 1px solid #ccc;\r\n}\r\n.edit_img{\r\n  margin-bottom: -2px;\r\n  width: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrLWNvbHVtbi93b3JrLWNvbHVtbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmstY29sdW1uL3dvcmstY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya19jb2x1bW57XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLndvcmtfY29sdW1uX2hlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGVhZGVyX2J1dHRvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IC0zMHB4O1xyXG59XHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMTcyYjRkO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uaGVhZGVyX3N1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzVlNmM4NDtcclxufVxyXG4ubGlzdF9hY3Rpb25ze1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmxpc3RfYWN0aW9uczpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkYmUyOztcclxufVxyXG4ubGlzdF9hY3Rpb25zX3BvcF91cHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuLmxpc3RfaXRlbXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDksMzAsNjYsLjI1KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmxpc3RfaXRlbTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IHJnYmEoOSwzMCw2NiwuMjUpO1xyXG59XHJcbi5saXN0X2l0ZW06aG92ZXIgLmxpc3RfaXRlbV9zZXR0aW5nc19idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpc3RfaXRlbV9zZXR0aW5nc19idXR0b257XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGlzdF9pbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saXN0X2lucHV0OmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi53b3JrX2NvbHVtbl9hZGR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzVlNmM4NDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ud29ya19jb2x1bW5fYWRkOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRjZTI7XHJcbn1cclxuLmZvb3Rlcl90ZXh0YXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmZvb3Rlcl9hZGRfYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWRkX2l0ZW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYWM0NDtcclxuICBwYWRkaW5nOiA2cHggMTJweDsgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmFkZF9pdGVtOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWJkNGY7XHJcbn1cclxuLmZvb3Rlcl9hZGRfYmxvY2tfcmVtb3Zle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uY2xvc2VfaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxufVxyXG4uZm9vdGVyX3NldHRpbmdze1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmVkaXRfaW1ne1xyXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/work-column/work-column.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/work-column/work-column.component.ts ***!
    \*****************************************************************/

  /*! exports provided: WorkColumnComponent */

  /***/
  function srcAppComponentsWorkColumnWorkColumnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkColumnComponent", function () {
      return WorkColumnComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-board-data.service */
    "./src/app/services/work-board-data.service.ts");

    var WorkColumnComponent = /*#__PURE__*/function () {
      function WorkColumnComponent(boardData) {
        _classCallCheck(this, WorkColumnComponent);

        this.boardData = boardData;
        this.addBlockState = true;
        this.listActionsState = false;
        this.addItemToTopState = false;
      }

      _createClass(WorkColumnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.columns = this.boardData.getWorkColumns();
        }
      }, {
        key: "addItem",
        value: function addItem(text) {
          if (text.value.trim() == '') {
            return false;
          }

          this.boardData.addListItem(this.data.id, text.value);
          text.value = '';
        }
      }, {
        key: "addItemToTop",
        value: function addItemToTop(text) {
          if (text.value.trim() == '') {
            return false;
          }

          this.boardData.addListItemToTop(this.data.id, text.value);
          text.value = '';
        }
      }, {
        key: "action",
        value: function action(event) {
          if (event.id == 0) {
            this.addCard(event.value);
          }
        }
      }, {
        key: "addCard",
        value: function addCard(value) {
          this.addItemToTopState = value;
        }
      }, {
        key: "close",
        value: function close(event) {
          this.listActionsState = event;
        }
      }, {
        key: "sortByParam",
        value: function sortByParam(id) {
          if (id == 0) {}
        }
      }]);

      return WorkColumnComponent;
    }();

    WorkColumnComponent.ctorParameters = function () {
      return [{
        type: src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__["WorkBoardDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WorkColumnComponent.prototype, "data", void 0);
    WorkColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-column',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-column.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-column/work-column.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-column.component.css */
      "./src/app/components/work-column/work-column.component.css"))["default"]]
    })], WorkColumnComponent);
    /***/
  },

  /***/
  "./src/app/pages/boards/boards.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/boards/boards.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBoardsBoardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvYXJkcy9ib2FyZHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/boards/boards.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/boards/boards.component.ts ***!
    \**************************************************/

  /*! exports provided: BoardsComponent */

  /***/
  function srcAppPagesBoardsBoardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardsComponent", function () {
      return BoardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoardsComponent = /*#__PURE__*/function () {
      function BoardsComponent() {
        _classCallCheck(this, BoardsComponent);
      }

      _createClass(BoardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoardsComponent;
    }();

    BoardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boards/boards.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boards.component.css */
      "./src/app/pages/boards/boards.component.css"))["default"]]
    })], BoardsComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/login/login.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/pages/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/work-board/work-board.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/pages/work-board/work-board.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWorkBoardWorkBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_container{\r\n  padding: 10px;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  align-items: flex-start;\r\n}\r\n.list{\r\n  display: flex;\r\n}\r\n.list + .list {\r\n  margin-left: 25px;\r\n}\r\n.list_item{\r\n  margin-left: 25px;\r\n}\r\n.add_new_column{\r\n  width: 270px;\r\n  /* background-color: #ebecf0; */\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  background-color: hsla(0,0%,100%,.24);\r\n}\r\n.add_new_column_button{\r\n  color: #fff;\r\n}\r\n.adding_block{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n.adding_block_input{\r\n  background: #fff;\r\n  height: 34px;\r\n  border-radius: 3px;\r\n  padding: 8px 12px;\r\n  box-shadow: inset 0 0 0 ;\r\n  border: 2px solid #0079bf;\r\n}\r\n.adding_block_buttons{\r\n  display: flex;\r\n  margin-top: 10px;\r\n}\r\n.adding_block_buttons_add{\r\n  background-color: #5aac44;\r\n  padding: 8px 12px; \r\n  color: #fff;\r\n  font-weight: 400;\r\n  border-radius: 2px;\r\n}\r\n.adding_block_buttons_remove{\r\n  margin-left: 15px;\r\n}\r\n.close_img{\r\n  width: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29yay1ib2FyZC93b3JrLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstYm9hcmQvd29yay1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmxpc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubGlzdCArIC5saXN0IHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4ubGlzdF9pdGVte1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uYWRkX25ld19jb2x1bW57XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZjA7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLDAlLDEwMCUsLjI0KTtcclxufVxyXG4uYWRkX25ld19jb2x1bW5fYnV0dG9ue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5hZGRpbmdfYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZGRpbmdfYmxvY2tfaW5wdXR7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3OWJmO1xyXG59XHJcbi5hZGRpbmdfYmxvY2tfYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmFkZGluZ19ibG9ja19idXR0b25zX2FkZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhYzQ0O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4OyBcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYWRkaW5nX2Jsb2NrX2J1dHRvbnNfcmVtb3Zle1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY2xvc2VfaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/work-board/work-board.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/work-board/work-board.component.ts ***!
    \**********************************************************/

  /*! exports provided: WorkBoardComponent */

  /***/
  function srcAppPagesWorkBoardWorkBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkBoardComponent", function () {
      return WorkBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-board-data.service */
    "./src/app/services/work-board-data.service.ts");

    var WorkBoardComponent = /*#__PURE__*/function () {
      function WorkBoardComponent(boardDate) {
        _classCallCheck(this, WorkBoardComponent);

        this.boardDate = boardDate;
        this.addingBlockState = false;
      }

      _createClass(WorkBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.columns = this.boardDate.getWorkColumns();
        }
      }, {
        key: "addColumn",
        value: function addColumn(input) {
          if (input.value.trim() == '') {
            return false;
          }

          this.boardDate.addWorkInColumns(input.value);
          input.value = '';
        }
      }]);

      return WorkBoardComponent;
    }();

    WorkBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_work_board_data_service__WEBPACK_IMPORTED_MODULE_2__["WorkBoardDataService"]
      }];
    };

    WorkBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-board/work-board.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-board.component.css */
      "./src/app/pages/work-board/work-board.component.css"))["default"]]
    })], WorkBoardComponent);
    /***/
  },

  /***/
  "./src/app/services/work-board-data.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/work-board-data.service.ts ***!
    \*****************************************************/

  /*! exports provided: WorkBoardDataService */

  /***/
  function srcAppServicesWorkBoardDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkBoardDataService", function () {
      return WorkBoardDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorkBoardDataService = /*#__PURE__*/function () {
      function WorkBoardDataService() {
        _classCallCheck(this, WorkBoardDataService);

        this.workColumnsIndex = 0;
        this.listIndex = 0;
        this.boards = [{
          id: 0,
          name: 'One page'
        }];
        this.workColumns = [{
          id: 0,
          name: 'qwerty',
          listItems: [{
            text: 'asdfgb',
            itemId: 0,
            changed: false,
            date: 0
          }, {
            text: ';lkkjsnv',
            itemId: 1,
            changed: false,
            date: 0
          }]
        }, {
          id: 2,
          name: 'qwerty2',
          listItems: [{
            text: '2 asdfgb',
            itemId: 0,
            changed: false,
            date: 0
          }, {
            text: '2 ;lkkjsnv',
            itemId: 1,
            changed: false,
            date: 0
          }]
        }, {
          id: 3,
          name: 'qwerty3',
          listItems: [{
            text: '3 asdfgb',
            itemId: 0,
            changed: false,
            date: 0
          }, {
            text: '3 ;lkkjsnv',
            itemId: 1,
            changed: false,
            date: 0
          }]
        }];
      } // -- Board


      _createClass(WorkBoardDataService, [{
        key: "getBoards",
        value: function getBoards() {
          return this.boards;
        }
      }, {
        key: "getBoardById",
        value: function getBoardById(id) {
          for (var i = 0; i < this.boards.length; i++) {
            if (this.boards[i].id === id) {
              return this.boards[id].id;
            }
          }
        } // -- Work-Board

      }, {
        key: "getWorkColumns",
        value: function getWorkColumns() {
          return this.workColumns;
        }
      }, {
        key: "addListItem",
        value: function addListItem(id, textValue) {
          this.listIndex++;

          for (var i = 0; i < this.workColumns.length; i++) {
            if (this.workColumns[i].id === id) {
              var item = {
                itemId: this.listIndex,
                text: textValue,
                changed: false,
                date: Date.now()
              };
              this.workColumns[i].listItems.push(item);
              console.log(this.workColumns[i].listItems);
            }
          }
        }
      }, {
        key: "addListItemToTop",
        value: function addListItemToTop(id, textValue) {
          for (var i = 0; i < this.workColumns.length; i++) {
            if (this.workColumns[i].id == id) {
              var item = {
                itemId: this.listIndex++,
                text: textValue,
                changed: false,
                date: Date.now()
              };
              this.workColumns[i].listItems.unshift(item);
            }
          }
        }
      }, {
        key: "addWorkInColumns",
        value: function addWorkInColumns(name) {
          if (name.trim() == "") {
            return false;
          }

          this.workColumnsIndex++;
          var item = {
            id: this.workColumnsIndex,
            name: name,
            listItems: [],
            date: Date.now()
          };
          this.workColumns.push(item);
        }
      }, {
        key: "consolelog",
        value: function consolelog() {
          console.log(this.workColumns);
        }
      }, {
        key: "copyNewColumn",
        value: function copyNewColumn(event) {
          var item = Object.assign({}, event);
          this.workColumnsIndex++;
          item.id = this.workColumnsIndex;
          item.date = Date.now();
          this.workColumns.push(item);
          this.consolelog();
        }
      }, {
        key: "sortByParam",
        value: function sortByParam(item, id) {
          console.log(item); //сортируем строки по названию

          if (item == 3) {
            this.workColumns[id].listItems.sort(function (a, b) {
              var nameA = a.text.toLowerCase(),
                  nameB = b.text.toLowerCase();

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }
            });
          }

          if (item == 1) {
            this.workColumns[id].listItems.sort(function (a, b) {
              // return a.date - b.date
              return 1;
            });
          }

          if (item == 0) {
            this.workColumns[id].listItems.sort(function (a, b) {
              // return b.date - a.date
              return 1;
            });
          }
        }
      }, {
        key: "moveTo",
        value: function moveTo(items, id) {
          console.log('move', 0);

          for (var i = 0; i < this.workColumns.length; i++) {
            if (this.workColumns[i].id == id) {
              console.log(items);
              console.log(this.workColumns[i].listItems);
              console.log(123);
              this.workColumns[i].listItems.concat(items);
              console.log(this.workColumns[i].listItems);
            }
          }

          console.log('move', 1);
          var a = [0, 1];
          var b = [2, 3];
          console.log(a.concat(b));
        }
      }, {
        key: "deleteWorkColumnItemById",
        value: function deleteWorkColumnItemById(id, arr) {
          for (var i = 0; i < this.workColumns[id].listItems.length; i++) {
            for (var j = 0; j < arr.length; j++) {
              if (this.workColumns[id].listItems[i] == arr[j]) {
                this.workColumns[id].listItems.splice(i, 1);
              }
            }
          }
        }
      }]);

      return WorkBoardDataService;
    }();

    WorkBoardDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WorkBoardDataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Алихан\Desktop\angular project\trello\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map