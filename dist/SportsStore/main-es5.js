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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./store/store.component */
    "./src/app/store/store.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "store");
        }
      },
      directives: [_store_store_component__WEBPACK_IMPORTED_MODULE_1__["StoreComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          template: '<store></store>'
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _store_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store/store.module */
    "./src/app/store/store.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/cart.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/cart.model.ts ***!
    \*************************************/

  /*! exports provided: Cart, CartLine */

  /***/
  function srcAppModelCartModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartLine", function () {
      return CartLine;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Cart =
    /*#__PURE__*/
    function () {
      function Cart() {
        _classCallCheck(this, Cart);

        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
      }

      _createClass(Cart, [{
        key: "addLine",
        value: function addLine(product) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var line = this.lines.find(function (line) {
            return line.product.id == product.id;
          });

          if (line != undefined) {
            line.quantity += quantity;
          } else {
            this.lines.push(new CartLine(product, quantity));
          }

          this.recalculate();
        }
      }, {
        key: "updateQuantity",
        value: function updateQuantity(product, quantity) {
          var line = this.lines.find(function (line) {
            return line.product.id == product.id;
          });

          if (line != undefined) {
            line.quantity = Number(quantity);
          }

          this.recalculate();
        }
      }, {
        key: "removeLine",
        value: function removeLine(id) {
          var index = this.lines.findIndex(function (line) {
            return line.product.id == id;
          });
          this.lines.splice(index, 1);
          this.recalculate();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.lines = [];
          this.itemCount = 0;
          this.cartPrice = 0;
        }
      }, {
        key: "recalculate",
        value: function recalculate() {
          var _this = this;

          this.itemCount = 0;
          this.cartPrice = 0;
          this.lines.forEach(function (l) {
            _this.itemCount += l.quantity;
            _this.cartPrice += l.quantity * l.product.price;
          });
        }
      }]);

      return Cart;
    }();

    Cart.ɵfac = function Cart_Factory(t) {
      return new (t || Cart)();
    };

    Cart.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Cart,
      factory: Cart.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var CartLine =
    /*#__PURE__*/
    function () {
      function CartLine(product, quantity) {
        _classCallCheck(this, CartLine);

        this.product = product;
        this.quantity = quantity;
      }

      _createClass(CartLine, [{
        key: "lineTotal",
        get: function get() {
          return this.quantity * this.product.price;
        }
      }]);

      return CartLine;
    }();
    /***/

  },

  /***/
  "./src/app/model/model.module.ts":
  /*!***************************************!*\
    !*** ./src/app/model/model.module.ts ***!
    \***************************************/

  /*! exports provided: ModelModule */

  /***/
  function srcAppModelModelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelModule", function () {
      return ModelModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product.repository */
    "./src/app/model/product.repository.ts");
    /* harmony import */


    var _static_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./static.datasource */
    "./src/app/model/static.datasource.ts");
    /* harmony import */


    var _cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.model */
    "./src/app/model/cart.model.ts"); // make its classes/services available to other modules


    var ModelModule = function ModelModule() {
      _classCallCheck(this, ModelModule);
    };

    ModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModelModule
    });
    ModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModelModule_Factory(t) {
        return new (t || ModelModule)();
      },
      providers: [_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"], _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"], _cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"], _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"], _cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/product.model.ts":
  /*!****************************************!*\
    !*** ./src/app/model/product.model.ts ***!
    \****************************************/

  /*! exports provided: Product */

  /***/
  function srcAppModelProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(id, name, category, description, price) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.category = category;
      this.description = description;
      this.price = price;
    };
    /***/

  },

  /***/
  "./src/app/model/product.repository.ts":
  /*!*********************************************!*\
    !*** ./src/app/model/product.repository.ts ***!
    \*********************************************/

  /*! exports provided: ProductRepository */

  /***/
  function srcAppModelProductRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRepository", function () {
      return ProductRepository;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _static_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./static.datasource */
    "./src/app/model/static.datasource.ts");

    var ProductRepository =
    /*#__PURE__*/
    function () {
      function ProductRepository(dataSource) {
        var _this2 = this;

        _classCallCheck(this, ProductRepository);

        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
          _this2.products = data;
          _this2.categories = data.map(function (p) {
            return p.category;
          }).filter(function (c, index, array) {
            return array.indexOf(c) == index;
          }).sort();
        });
      }

      _createClass(ProductRepository, [{
        key: "getProducts",
        value: function getProducts() {
          var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return this.products.filter(function (p) {
            return category == null || category == p.category;
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.products.find(function (p) {
            return p.id == id;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.categories;
        }
      }]);

      return ProductRepository;
    }();

    ProductRepository.ɵfac = function ProductRepository_Factory(t) {
      return new (t || ProductRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_static_datasource__WEBPACK_IMPORTED_MODULE_1__["StaticDataSource"]));
    };

    ProductRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductRepository,
      factory: ProductRepository.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _static_datasource__WEBPACK_IMPORTED_MODULE_1__["StaticDataSource"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/static.datasource.ts":
  /*!********************************************!*\
    !*** ./src/app/model/static.datasource.ts ***!
    \********************************************/

  /*! exports provided: StaticDataSource */

  /***/
  function srcAppModelStaticDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticDataSource", function () {
      return StaticDataSource;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product.model */
    "./src/app/model/product.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StaticDataSource =
    /*#__PURE__*/
    function () {
      function StaticDataSource() {
        _classCallCheck(this, StaticDataSource);

        this.products = [new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100)];
      }

      _createClass(StaticDataSource, [{
        key: "getProducts",
        value: function getProducts() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([this.products]);
        }
      }]);

      return StaticDataSource;
    }();

    StaticDataSource.ɵfac = function StaticDataSource_Factory(t) {
      return new (t || StaticDataSource)();
    };

    StaticDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StaticDataSource,
      factory: StaticDataSource.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticDataSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/cart.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/cart.component.ts ***!
    \*****************************************/

  /*! exports provided: CartSummaryComponent */

  /***/
  function srcAppStoreCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function () {
      return CartSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/cart.model */
    "./src/app/model/cart.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CartSummaryComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cart.itemCount, " items(s) ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, ctx_r0.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
      }
    }

    function CartSummaryComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (empty)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CartSummaryComponent = // the cart is injected by Angular
    function CartSummaryComponent(cart) {
      _classCallCheck(this, CartSummaryComponent);

      this.cart = cart;
    };

    CartSummaryComponent.ɵfac = function CartSummaryComponent_Factory(t) {
      return new (t || CartSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]));
    };

    CartSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartSummaryComponent,
      selectors: [["cart-summary"]],
      decls: 7,
      vars: 3,
      consts: [[1, "float-right"], [4, "ngIf"], [1, "btn", "btn-sm", "bg-dark", "text-white", 3, "disabled"], [1, "fas", "fa-shopping-cart"]],
      template: function CartSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your cart: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartSummaryComponent_span_3_Template, 3, 7, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartSummaryComponent_span_4_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.itemCount === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cart-summary',
          templateUrl: 'cartSummary.component.html'
        }]
      }], function () {
        return [{
          type: _model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/store.component.ts":
  /*!******************************************!*\
    !*** ./src/app/store/store.component.ts ***!
    \******************************************/

  /*! exports provided: StoreComponent */

  /***/
  function srcAppStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/product.repository */
    "./src/app/model/product.repository.ts");
    /* harmony import */


    var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/cart.model */
    "./src/app/model/cart.model.ts");
    /* harmony import */


    var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.component */
    "./src/app/store/cart.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function StoreComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var cat_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.changeCategory(cat_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r5 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", cat_r5 == ctx_r2.selectedCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r5, " ");
      }
    }

    function StoreComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_12_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var product_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.addProductToCart(product_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add to Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r8.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 3, product_r8.price, "USD", "symbol", "2.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r8.description, " ");
      }
    }

    function StoreComponent_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var page_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.changePage(page_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r11 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r11 == ctx_r4.selectedPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r11, " ");
      }
    }

    var StoreComponent =
    /*#__PURE__*/
    function () {
      function StoreComponent(repository, cart) {
        _classCallCheck(this, StoreComponent);

        this.repository = repository;
        this.cart = cart;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
      }

      _createClass(StoreComponent, [{
        key: "changeCategory",
        value: function changeCategory(newCategory) {
          this.selectedCategory = newCategory;
        }
      }, {
        key: "changePage",
        value: function changePage(newPage) {
          this.selectedPage = newPage;
        }
      }, {
        key: "changePageSize",
        value: function changePageSize(newSize) {
          this.productsPerPage = Number(newSize);
          this.changePage(1);
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(product) {
          this.cart.addLine(product);
        }
      }, {
        key: "products",
        get: function get() {
          var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
          return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
        }
      }, {
        key: "categories",
        get: function get() {
          return this.repository.getCategories();
        }
      }, {
        key: "pageNumbers",
        get: function get() {
          var products = this.repository.getProducts(this.selectedCategory);
          var pages = products.length / this.productsPerPage; // the next whole number, 0.5 => 1, 3.2 => 4

          var pageCount = Math.ceil(pages); // x is 0 and i is the index
          // if page count is 3, it generate [1, 2, 3]

          var pageNumbers = Array(pageCount).fill(0) // fills with 0
          .map(function (x, i) {
            return i + 1;
          });
          return pageNumbers;
        }
      }]);

      return StoreComponent;
    }();

    StoreComponent.ɵfac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]));
    };

    StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComponent,
      selectors: [["store"]],
      decls: 25,
      vars: 4,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col", "bg-dark", "text-white"], [1, "navbar-brand"], [1, "col-3", "p-2"], [1, "btn", "btn-block", "btn-outline-primary", 3, "click"], ["class", "btn btn-outline-primary btn-block", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-9", "p-2"], ["class", "card m-1 p-1 bg-light", 4, "ngFor", "ngForOf"], [1, "form-inline", "float-left", "mr-1"], [1, "form-control", 3, "value", "change"], ["value", "3"], ["value", "4"], ["value", "6"], ["value", "8"], [1, "btn-group", "float-right"], ["class", "btn btn-outline-primary", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-primary", "btn-block", 3, "click"], [1, "card", "m-1", "p-1", "bg-light"], [1, "badge", "badge-pill", "badge-primary", "float-right"], [1, "card-text", "bg-white", "p-1"], [1, "btn", "btn-successs", "btn-sm", "float-right", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SPORTS STORE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cart-summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_Template_button_click_8_listener() {
            return ctx.changeCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoreComponent_button_10_Template, 2, 3, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StoreComponent_div_12_Template, 10, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StoreComponent_Template_select_change_14_listener($event) {
            return ctx.changePageSize($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3 per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4 per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "6 per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8 per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StoreComponent_button_24_Template, 2, 3, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.productsPerPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageNumbers);
        }
      },
      directives: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartSummaryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'store',
          templateUrl: 'store.component.html'
        }]
      }], function () {
        return [{
          type: _model_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"]
        }, {
          type: _model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/store.module.ts":
  /*!***************************************!*\
    !*** ./src/app/store/store.module.ts ***!
    \***************************************/

  /*! exports provided: StoreModule */

  /***/
  function srcAppStoreStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreModule", function () {
      return StoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _model_model_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/model.module */
    "./src/app/model/model.module.ts");
    /* harmony import */


    var _store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store.component */
    "./src/app/store/store.component.ts");
    /* harmony import */


    var _cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart.component */
    "./src/app/store/cart.component.ts");

    var StoreModule = function StoreModule() {
      _classCallCheck(this, StoreModule);
    };

    StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreModule
    });
    StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoreModule_Factory(t) {
        return new (t || StoreModule)();
      },
      imports: [[_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, {
        declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cart_component__WEBPACK_IMPORTED_MODULE_5__["CartSummaryComponent"]],
        imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cart_component__WEBPACK_IMPORTED_MODULE_5__["CartSummaryComponent"]],
          exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"]]
        }]
      }], null, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\sisha\OneDrive\Desktop\Internet Applications\Learning\Chapter8\ch8\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map