webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n  ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\r\n  ~ This software is released under MIT license.\r\n  ~ The full license information can be found in LICENSE in the root directory of this project.\r\n  -->\r\n<p>This is a page to help demonstrate routing.</p>\r\n<button class=\"btn btn-primary\" (click)=\"open = true\">Show modal</button>\r\n<clr-modal [(clrModalOpen)]=\"open\">\r\n  <h3 class=\"modal-title\">I have a nice title</h3>\r\n  <div class=\"modal-body\">\r\n    <p>But not much to say...</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"open = false\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"open = false\">Ok</button>\r\n  </div>\r\n</clr-modal>\r\n<!--------------------->\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = (function () {
    function AboutComponent() {
        this.open = false;
    }
    AboutComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
            template: __webpack_require__("../../../../../src/app/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<clr-main-container class=\"clr-container\">\r\n<!--==== NAVIGATION ===============-->\r\n  <div class ='nav-wrapper' >\r\n    <!--*ngIf='isdisable'-->\r\n  <clr-header >\r\n    <div class=\"branding\">\r\n      <a href=\"#\" class=\"nav-link\">\r\n        <span class=\"clr-icon clr-clarity-logo\"></span>\r\n        <span class=\"title\">Alpha Stock</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-nav \" [clr-nav-level]=\"1\">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span class=\"nav-text nav-a\">Home</span></a>\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"active\"><span class=\"nav-text nav-a\">About</span></a>\r\n      </div>\r\n      <div class='middle'>\r\n    </div>\r\n  <!--===== Left tabs ===================-->\r\n     <div *ngIf='_user.isLogIn == false' class='header-actions'>  \r\n          <a class='nav-link sign1' href='#' [routerLink]=\"['/register']\" routerLinkActive=\"active\"><span class=\"nav-text nav-a\">Sign Up</span></a>\r\n          <a class='nav-link sign2' href='#' [routerLink]=\"['/login']\" routerLinkActive=\"active\"><span class=\"nav-text nav-a\">log in</span></a>\r\n     </div>\r\n     <div *ngIf='_user.isLogIn == true' class='header-actions'>\r\n      <a class='nav-link sign1'  routerLinkActive=\"active\"><span class=\"nav-text nav-a\">My profile</span></a>\r\n      <app-logout></app-logout>\r\n     </div>\r\n    \r\n  </clr-header>\r\n  </div>\r\n<!-- ==== END NAV  ---- >  Content  ================================== -->\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n      <!--<app-registration></app-registration>-->\r\n    </div>\r\n  </div>\r\n</clr-main-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clr-icon.clr-clarity-logo {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%0D%3C!--%0D  ~ Copyright (c) 2016 VMware%2C Inc. All Rights Reserved.%0D  ~ This software is released under MIT license.%0D  ~ The full license information can be found in LICENSE in the root directory of this project.%0D  --%3E%0D%3Csvg width%3D%2236px%22 height%3D%2236px%22 viewBox%3D%220 0 36 36%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 40.3 (33839) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Elogo%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22logo%22 transform%3D%22translate(0.000000%2C 4.500000)%22%3E%0D            %3Cg id%3D%22large%22 transform%3D%22translate(0.000000%2C 0.044118)%22%3E%0D                %3Cpolyline id%3D%22Fill-3%22 fill%3D%22%230095D3%22 points%3D%2224.7018129 0.0388840336 35.979641 6.71768066 35.9614589 20.2811697 24.7018129 26.9417748 18.0173463 22.9707846 29.6688177 16.4295126 29.6688177 10.5321277 24.9216504 7.92742184 18.0321077 3.99030785%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-4%22 fill%3D%22%23F38B00%22 points%3D%2211.3313965 0.0388840336 0.0535685039 6.71768066 0.0717505512 20.2811697 11.3313965 26.9417748 18.0166889 22.970061 7.35448694 16.4295126 7.35448694 10.5321277 18.0324642 3.98991663%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-5%22 fill%3D%22%23004B70%22 points%3D%2218.017374 22.9708988 11.4990488 18.9719838 18.0212495 15.1272387 24.9510827 19.0786297%22%3E%3C%2Fpolyline%3E%0D                %3Cpolyline id%3D%22Fill-6%22 fill%3D%22%2398441E%22 points%3D%2218.0314053 3.98921729 11.5267517 7.97364692 18.0439938 11.8578324 24.9058951 7.91831944%22%3E%3C%2Fpolyline%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  height: 36px;\n  width: 36px;\n  margin-right: 11px; }\n\n.nav-wrapper .branding,\n.header-nav,\n.header-actions {\n  background-color: #004a70;\n  vertical-align: middle; }\n\n.nav-a {\n  line-height: 1.7rem !important; }\n\n.not-login,\n.yes-login {\n  position: relative;\n  left: 1100px; }\n\n.middle {\n  position: absolute;\n  left: 40%; }\n\n.clr-container {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
// import { Router, ActivatedRoute } from '@angular/router';
var AppComponent = (function () {
    function AppComponent(_user) {
        this._user = _user;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var angular_1 = __webpack_require__("../../../../@clr/angular/esm5/clr-angular.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var logout_component_1 = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
var favorites_component_1 = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
var search_component_1 = __webpack_require__("../../../../../src/app/search/search.component.ts");
var side_bar_component_1 = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
var chart_component_1 = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
var news_component_1 = __webpack_require__("../../../../../src/app/news/news.component.ts");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
var news_api_service_1 = __webpack_require__("../../../../../src/app/news-api.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var ng2_charts_1 = __webpack_require__("../../../../ng2-charts/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                registration_component_1.RegistrationComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                favorites_component_1.FavoritesComponent,
                search_component_1.SearchComponent,
                side_bar_component_1.SideBarComponent,
                chart_component_1.ChartComponent,
                news_component_1.NewsComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_1.ClarityModule,
                app_routing_1.ROUTING,
                ng2_charts_1.ChartsModule
            ],
            providers: [
                user_service_1.UserService,
                stock_api_service_1.StockApiService,
                news_api_service_1.NewsApiService,
                data_service_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var logout_component_1 = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent
        //, children: [
        //   {path: 'register2', component: RegistrationComponent, outlet: 'firstChild'}]
    },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n   \r\n\r\n        <div class='canvas-wrapper' style=\"display: block;\"  width=\"400\" height=\"400\" *ngIf=\"_data.finalLineChartArray.length > 0\">\r\n          <canvas baseChart id='canvas' \r\n          [datasets]=\"_data.lineChartData\" \r\n          [labels]=\"_data.lineChartLabels\" \r\n          [colors]=\"_data.lineChartColors\"\r\n          [options]=\"_data.lineChartOptions\" \r\n          [legend]=\"_data.lineChartLegend\" \r\n          [chartType]=\"_data.lineChartType\"\r\n          (chartHover)=\"_data.chartHovered($event)\"\r\n          (chartClick)=\"_data.chartClicked($event)\">\r\n          </canvas>\r\n        </div>\r\n     \r\n\r\n    <!-- <div class=\"table1\" style=\"margin-bottom: 10px\">\r\n      <table class=\"dates1 table table-responsive table-condensed\">\r\n        <tr>\r\n          <th *ngFor=\"let label of _data.lineChartLabels\">{{label}}</th>\r\n        </tr>\r\n        <tr *ngFor=\"let d of _data.lineChartData\">\r\n          <td *ngFor=\"let label of _data.lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\r\n        </tr>\r\n      </table>\r\n    </div> -->\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
// import { SideBarComponent } from '../side-bar/side-bar.component';
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var ChartComponent = (function () {
    function ChartComponent(_stock, 
        // private _sidebar: SideBarComponent,
        _user, _data) {
        this._stock = _stock;
        this._user = _user;
        this._data = _data;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this._user.getUser(sessionStorage.getItem("userId"), sessionStorage.getItem('token'))
            .subscribe(function (response) {
            //this.user = response;
        });
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'app-chart',
            template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [stock_api_service_1.StockApiService,
            user_service_1.UserService,
            data_service_1.DataService])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;


/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
var news_api_service_1 = __webpack_require__("../../../../../src/app/news-api.service.ts");
var DataService = (function () {
    function DataService(_stock, _newsService) {
        this._stock = _stock;
        this._newsService = _newsService;
        //logic for the the chart from ng2Charts ==================================
        // linechartData is the main array that displays the graph
        this.lineChartData = [
            {},
        ];
        //  lineChartLabels is the main array to display the dates
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            legend: {
                display: true
            }
        };
        //public data: number[] = [6];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgb(66, 134, 244)',
                pointBackgroundColor: 'rgb(66, 134, 244)',
                pointBorderColor: 'rgb(66, 134, 244)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //-------------------------------------------------------------------------------------------------------
        this.finalClosingDataArray = [];
        this.finalLineChartArray = [];
        this.dateLabelsArray = [];
        this.arrayOfDailyDates = [];
        this.objofDailyData = {};
        this.sideStockData = {};
        this.newsArray = [];
    }
    // events
    DataService.prototype.chartClicked = function (e) {
    };
    DataService.prototype.chartHovered = function (e) {
    };
    // subscribe for stock API; turn ng2 data into a single array and = lineChartData
    DataService.prototype.setCurrentData = function (response) {
        this.dailyProp = response[Object.keys(response)[1]];
        this.arrayOfDailyDates = [];
        for (var prop in this.dailyProp) {
            this.arrayOfDailyDates.push(this.dailyProp[prop]);
        }
        ;
        this.objofDailyData = this.arrayOfDailyDates[0];
        this.sideStockData.date = Object.keys(this.dailyProp)[0];
        this.sideStockData.open = this.objofDailyData["1. open"].slice(0, 6);
        this.sideStockData.high = this.objofDailyData["2. high"].slice(0, 6);
        this.sideStockData.low = this.objofDailyData["3. low"].slice(0, 6);
        this.sideStockData.close = this.objofDailyData["4. close"].slice(0, 6);
    };
    DataService.prototype.getNews = function () {
        var _this = this;
        this._newsService.stockNewsCall(this._stock.stockSymbol)
            .subscribe(function (response) {
            _this.newsArray = [];
            response.forEach(function (each) {
                _this.newsData = {
                    title: each.headline.slice(0, 65) + "...",
                    imgs: each.image,
                    source: each.source,
                    summary: each.summary.slice(0, 100),
                    url: each.url
                };
                _this.newsArray.push(_this.newsData);
                _this.newsData = {};
            });
        });
    };
    DataService.prototype.setLineChartLabels = function () {
        this.dateLabelsArray = Object.keys(this.stockPricesObj)
            .reverse().slice(this._stock.sliceNum1);
        if (this._stock.stockUrl1 == 'TIME_SERIES_INTRADAY&symbol=') {
            this.dateLabelsArray = this.dateLabelsArray.map(function (elem) {
                return elem.split(' ')[1].slice(0, 5);
            });
        }
        this.lineChartLabels = this.dateLabelsArray;
    };
    DataService.prototype.onApi = function (symbol) {
        var _this = this;
        this.finalLineChartArray = [];
        this._stock.getStockData(symbol)
            .subscribe(function (response) {
            if (Object.keys(response)[0] == "Meta Data") {
                _this._stock.stockSymbol = symbol;
                _this.stockPricesObj = response[_this._stock.mainPropertyKey];
                for (var property in _this.stockPricesObj) {
                    _this.finalClosingDataArray.push(parseFloat(_this.stockPricesObj[property]['4. close']));
                }
                ;
                _this.finalLineChartArray = [
                    {
                        data: (_this.finalClosingDataArray.reverse().slice(_this._stock.sliceNum1)),
                        label: _this._stock.stockSymbol
                    }
                ];
                _this.lineChartData = _this.finalLineChartArray;
                _this.setLineChartLabels();
                _this.setCurrentData(response);
                _this.getNews();
            }
            else {
                _this._stock.stockSymbol = '';
                alert("Sorry \"" + symbol + "\" could not be found \nPlease try a different stock");
            }
        });
        // un-comment if you want to show all of ur searches (bellow)
        //this.lineChartData = [];
    };
    ;
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [stock_api_service_1.StockApiService,
            news_api_service_1.NewsApiService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class='table-wrapper card'>   \r\n    <div class='table-header card-header'>    \r\n        <h4 id='label1'>Favorite Stocks</h4> \r\n        <button class='btn btn-primary' id=\"add-button\" [disabled]=\"!_stock.stockSymbol\" (click)='addFavorite()'>add stock</button>\r\n    </div>    \r\n    <table class=\"table table-noborder\" id='table1'>\r\n        <thead>\r\n            <tr>\r\n                <th class=\"left\">Stock</th>\r\n                <th class=\"left\">Price</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of favoriteList; let i = index\">\r\n                <td *ngIf='deleteStock == false' class='left'><a >{{item.symbol}}</a></td>\r\n                <td *ngIf='deleteStock == true' class='left' ><a class='on-click red-button'(click)=\"onDeleteStock(item)\" >{{item.symbol}}</a></td>\r\n                <td class='left'>{{item.price}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class='delete-button' >\r\n        <button *ngIf='_user.isLogIn == true' class=\"btn btn-sm btn-link red-button\" \r\n                (click)=\"makeDeleteVisible()\">{{deleteMessage}}\r\n        </button>\r\n        <button *ngIf='_user.isLogIn == false' \r\n                class=\"btn btn-sm btn-link\" \r\n                [routerLink]=\"['/login']\">Login to add to favorites\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"showDeleteAlert\" class=\"modal\">\r\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)='cancelDeleteStock()'>\r\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n                </button>\r\n                <h3 class=\"modal-title\">Delete <strong>{{stockToDelete.symbol}}</strong> from favorites</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Are you sure you want to delete <strong>{{stockToDelete.symbol}}</strong>? This action is permenant and cannot be recovered.</p>\r\n            </div>\r\n            <div class=\"modal-footer \">\r\n                <button class=\"btn btn-outline  foot-button\" type=\"button\" (click)='cancelDeleteStock()'>Cancel</button>\r\n                <button class=\"btn btm-sm btn-primary \" type=\"button\" (click)='deleteFavorite()'>Ok</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div  *ngIf=\"showDeleteAlert\" class=\"modal-backdrop\" aria-hidden=\"true\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-wrapper {\n  margin-top: 20px; }\n\n.main-table {\n  margin-top: 0px; }\n\n#table1 {\n  margin: 0px;\n  margin-left: 5px; }\n\n.table-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 11px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 5px 5px 0px 5px; }\n\n#label1 {\n  font-size: 16px;\n  padding: 5px;\n  margin: 0px 0px 0px 0px; }\n\n.fav-wrapper {\n  position: absolute;\n  top: 15%; }\n\n.favList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.stock-column {\n  width: 80%; }\n\n.delete-item {\n  padding: 4px; }\n\n.delete-button {\n  float: right; }\n\n.red-button {\n  color: #ab4949 !important;\n  margin: 0px !important; }\n\n#add-button {\n  margin: 0px 0px 5px 0px; }\n\n.on-click {\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header .close {\n  padding: 0px; }\n\n.modal-header {\n  display: inline; }\n\n@media screen and (max-width: 668px) {\n  .table-wrapper {\n    margin-top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
var FavoritesComponent = (function () {
    function FavoritesComponent(_user, _stock) {
        this._user = _user;
        this._stock = _stock;
        this.favoriteList = [];
        this.favoriteData = {};
        this.stockArray = [];
        this.stockData = {};
        this.showDeleteAlert = false;
        this.stockToDelete = {};
        this.deleteStock = false;
        this.deleteMessage = 'Delete';
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getFav();
    };
    ;
    // step 2) for each index send the ticker symbol to obtain an obj with the price and stock symbol (metadata), place those 2 in an obj and then push them in an array.
    // (side note: the ticker symbol is send in the order they appear in the 'stockArray', but are not received in order(FavoriteList), therefore, it is not easy to link price, symbol and id in the same obj in order)
    FavoritesComponent.prototype.getIntraPrice = function (symbolArray) {
        var _this = this;
        var favArray = [];
        symbolArray.map(function (index) {
            _this._stock.serviceIntraDay(index.symbol)
                .subscribe(function (response) {
                console.log(response, "#5");
                var priceKey = Object.keys(response["Time Series (15min)"])[0];
                index.price = response["Time Series (15min)"][priceKey]["4. close"].slice(0, 6);
                favArray.push(index);
                _this.favoriteList = favArray;
            });
        });
    };
    // 1st step) Get all favorite stock symbols from backend and place corresponding instance ID and symbol in an obj and push it in array; invoke getIntraPrice to get the price from the API   
    FavoritesComponent.prototype.getFav = function () {
        var _this = this;
        this._user.getFavoritesData(window.sessionStorage.getItem('token'), window.sessionStorage.getItem('userId'))
            .subscribe(function (response) {
            if (response.length !== 0)
                _this.getIntraPrice(response);
            else
                _this.favoriteList = [];
        });
    };
    //adds a stock to fav by posting list obj, unique id and token of user 
    FavoritesComponent.prototype.addFavorite = function () {
        var _this = this;
        var isStockRepeat;
        console.log(this._stock.stockSymbol, "symbol");
        isStockRepeat = this.favoriteList.some(function (each) {
            return each.symbol == _this._stock.stockSymbol;
        });
        if (!isStockRepeat && this._stock.stockSymbol) {
            var list = {};
            list.symbol = this._stock.stockSymbol;
            this._user.saveFavorite(list, window.sessionStorage.getItem('token'), window.sessionStorage.getItem('userId'))
                .subscribe(function (_) {
                _this.getFav();
            });
        }
        else {
            alert("Sorry \"" + this._stock.stockSymbol + "\" is already in your Favorite list");
        }
    };
    ;
    // delete favorite stock symbol by sending token, and userId to banckend
    FavoritesComponent.prototype.deleteFavorite = function () {
        var _this = this;
        this._user.deleteFavUser(window.sessionStorage.getItem('token'), this.stockToDelete.id, window.sessionStorage.getItem('userId'))
            .subscribe(function (_) {
            _this.deleteStock = false;
            _this.deleteMessage = 'Delete';
            _this.getFav();
            _this.cancelDeleteStock();
        });
    };
    FavoritesComponent.prototype.onDeleteStock = function (stock) {
        this.showDeleteAlert = true;
        this.stockToDelete = stock;
    };
    FavoritesComponent.prototype.cancelDeleteStock = function () {
        this.showDeleteAlert = false;
    };
    FavoritesComponent.prototype.makeDeleteVisible = function () {
        if (!this.deleteStock) {
            this.deleteStock = true;
            this.deleteMessage = "Cancel";
        }
        else if (this.deleteStock) {
            this.deleteStock = false;
            this.deleteMessage = 'Delete';
        }
    };
    FavoritesComponent.prototype.searchStock = function () {
        console.log('search');
    };
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            stock_api_service_1.StockApiService])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n  ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\r\n  ~ This software is released under MIT license.\r\n  ~ The full license information can be found in LICENSE in the root directory of this project.\r\n  -->\r\n<div class='page-wapper'>\r\n\r\n  <div class='search1'>\r\n    <app-search></app-search>\r\n  </div>\r\n\r\n  <div class='main-parent'>\r\n    <div class= 'data'>\r\n      <app-side-bar></app-side-bar>\r\n    </div>\r\n\r\n    <div class= 'news'>\r\n      <app-news></app-news>\r\n    </div>\r\n        \r\n    <div class='wrapper card'>\r\n      <app-chart></app-chart>\r\n      <div class=\"card-footer\" *ngIf=\"!_data.finalLineChartArray.length > 0\"></div>\r\n    </div> \r\n\r\n    <div class='fav-side'>\r\n      <app-favorites></app-favorites>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-wrapper {\n  overflow-x: hidden; }\n\n.main-parent {\n  display: -ms-grid;\n  display: grid;\n  grid-template-areas: 'data chart fav'\r ' news chart fav';\n  -ms-grid-columns: 2fr 7.35fr 2fr;\n      grid-template-columns: 2fr 7.35fr 2fr;\n  -ms-grid-rows: 4fr 4fr;\n      grid-template-rows: 4fr 4fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 10px;\n  margin-top: 20px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.search1 {\n  margin: auto auto auto auto;\n  width: 440px;\n  height: 90px;\n  position: relative;\n  top: -25px; }\n\n.news {\n  grid-area: news; }\n\n.wrapper {\n  grid-area: chart;\n  height: 30vw;\n  min-height: 335px; }\n\n.data {\n  grid-area: data; }\n\n.fav-side {\n  grid-area: fav;\n  margin-top: 3px; }\n\n@media screen and (max-width: 1224px) and (min-width: 668px) {\n  .main-parent {\n    display: -ms-grid;\n    display: grid;\n    grid-template-areas: 'chart  fav'\r 'news data';\n    -ms-grid-rows: 6fr 4fr;\n        grid-template-rows: 6fr 4fr;\n    -ms-grid-columns: 7fr 3fr;\n        grid-template-columns: 7fr 3fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 10px;\n    height: 100%;\n    margin-top: 30px; } }\n\n@media screen and (max-width: 668px) {\n  .main-parent {\n    display: -ms-grid;\n    display: grid;\n    grid-template-areas: 'chart chart'\r ' data fav'\r ' news news';\n    -ms-grid-rows: 1fr .5fr .5fr;\n        grid-template-rows: 1fr .5fr .5fr;\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n    height: 100%;\n    margin-top: 20px; }\n  .fav-side {\n    grid-area: fav;\n    margin-top: 0px; }\n  .search1 {\n    width: 80%; } }\n\n@media screen and (max-width: 500px) {\n  .main-parent {\n    display: -ms-grid;\n    display: grid;\n    grid-template-areas: 'chart'\r ' fav'\r ' data'\r ' news';\n    -ms-grid-rows: .5fr .25fr .4fr 1fr;\n        grid-template-rows: .5fr .25fr .4fr 1fr;\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n    height: 100%;\n    margin-top: 10px; }\n  .wrapper {\n    min-height: 235px; }\n  .search1 {\n    width: 98%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var HomeComponent = (function () {
    function HomeComponent(_user, _data) {
        this._user = _user;
        this._data = _data;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getUser(sessionStorage.getItem("userId"), sessionStorage.getItem('token'))
            .subscribe(function (response) {
            _this.user = response;
        });
    };
    ;
    HomeComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            data_service_1.DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/app.module.ts"));


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper card' >\r\n  <div class='upper'>\r\n    <span class=\"clr-icon clr-clarity-logo\" ></span>\r\n    <h1 id='header'>LOG IN</h1>\r\n  </div>\r\n\r\n  <div class='form-class'>\r\n    <form (keyup.enter)='loginFunct(email.value, password.value)'>\r\n      <input type='text' class='inputbox' placeholder='Email' #email><br>\r\n      <input type='password' class='inputbox' placeholder='Password' #password><br><br>\r\n    </form>\r\n    <label for=\"remember\"><input type='checkbox' id='remember'>Remeber me</label>\r\n  </div> \r\n\r\n  <div class='message'> \r\n    {{noFillMessage}}\r\n    {{noMatchMessage}}\r\n  </div>  \r\n\r\n  <div class='bottom'>\r\n    <button id='login-button'  class='btn' (click)='loginFunct(email.value, password.value)'>Login</button><br>\r\n    <a id='forgot-pass' href=# >Forgot Password</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  border-radius: 10px;\n  position: relative;\n  background: linear-gradient(to bottom, #025b87, #057ab5);\n  width: 390px;\n  height: 550px;\n  color: #d0d0d0;\n  margin: 3% auto; }\n\n.clr-icon.clr-clarity-logo {\n  background-image: url(/images/clarity_logo.svg);\n  width: 150px;\n  height: 100px;\n  margin-left: 37px; }\n\n#header {\n  color: white;\n  font-weight: 600;\n  position: relative;\n  top: -10px; }\n\n.upper {\n  text-align: center;\n  position: relative;\n  top: 25px;\n  color: white; }\n\n.form-class {\n  position: relative;\n  top: 30px;\n  left: 7%; }\n\n.inputbox {\n  color: white;\n  width: 300px;\n  height: 60px;\n  font-size: 20px;\n  opacity: 1;\n  border-bottom-color: white; }\n\n::-webkit-input-placeholder {\n  opacity: 1; }\n\n:-ms-input-placeholder {\n  opacity: 1; }\n\n::placeholder {\n  opacity: 1; }\n\n#remember {\n  border: none;\n  background-color: white;\n  width: 17px;\n  height: 17px; }\n\n.bottom {\n  text-align: center;\n  position: relative;\n  top: 80px; }\n\n#login-button {\n  border-radius: 25px;\n  background-color: white;\n  position: relative;\n  top: 10px;\n  border: none;\n  width: 100px;\n  height: 45px;\n  margin-bottom: 15px; }\n\n.message {\n  position: relative;\n  top: 12%;\n  left: 30%;\n  padding: 0px;\n  margin-bottom: -40px;\n  width: 250px;\n  height: 40px; }\n\n#forgot-pass {\n  color: white; }\n\n@media screen and (max-width: 668px) {\n  .wrapper {\n    width: 100%;\n    height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = (function () {
    function LoginComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        this.noMatchMessage = '';
        this.noFillMessage = '';
        this.userData = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.getDataVerification = function () {
        var _this = this;
        this._user.getUser(sessionStorage.getItem('userId'), sessionStorage.getItem('token'))
            .subscribe(function (data) {
            _this._router.navigate(["/home"]);
            _this._user.userLoginData.firstName = data.firstName;
            _this._user.userLoginData.lastName = data.lastName;
            alert("Welcome " + _this._user.userLoginData.firstName + "!");
        });
    };
    ;
    // subscribes a user and gives a token 
    LoginComponent.prototype.subscribeFunt = function () {
        var _this = this;
        this._user.onLogin(this.userData)
            .subscribe(function (response) {
            window.sessionStorage.setItem('token', response.token);
            window.sessionStorage.setItem('userId', response.userId);
            _this._user.isLogIn = true;
            _this.getDataVerification();
        });
    };
    ;
    //called when buttton is clicked and sets the user input values to Userdata obj
    LoginComponent.prototype.loginFunct = function (email, password) {
        if (email != '' && password != '') {
            this.userData.email = email;
            this.userData.password = password;
            this.noFillMessage = '';
            this.subscribeFunt();
        }
        else {
            this.noFillMessage = 'Please fill in all spaces';
        }
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" (click)='onLogout()' class='nav-link sign2'><span class=\"nav-text  nav-a\" >Log out</span></a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-a {\n  line-height: 1.7rem !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LogoutComponent = (function () {
    function LogoutComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        console.log('onlogout');
    };
    //logs out by calling logOut in user.service and sending token
    LogoutComponent.prototype.onLogout = function () {
        var _this = this;
        // this._user.displayLogin = false;
        this._user.onLogOut(window.sessionStorage.getItem('token'))
            .subscribe(function (res) {
            alert("Logout successfully");
            _this._user.isLogIn = false;
            window.sessionStorage.clear();
            _this._router.navigateByUrl('/login');
        });
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "../../../../../src/app/news-api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var NewsApiService = (function () {
    function NewsApiService(_http) {
        this._http = _http;
        this.newsAPI1 = 'https://api.iextrading.com/1.0/stock/';
        this.newsAPI2 = '/news/last/5';
    }
    NewsApiService.prototype.stockNewsCall = function (tickerSymbol) {
        return this._http.get("" + this.newsAPI1 + tickerSymbol + this.newsAPI2);
    };
    NewsApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NewsApiService);
    return NewsApiService;
}());
exports.NewsApiService = NewsApiService;


/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card card side-wrapper\"  id='news-wrapper'*ngIf = \"true\">\r\n    <!-- *ngIf='sideStockData.open || sideStockData.high' -->\r\n  <div class=\"card-header data-head\" >\r\n    Market News \r\n  </div>\r\n  <div class=\"card-block\" >\r\n\r\n    <div class=\"card-text data-body\" id='set-height' *ngIf=\"!_data.newsArray[0]\">\r\n       Enter a stock for relevant news.\r\n    </div>\r\n\r\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <div class=\"carousel-inner\" id='set-height'>\r\n        <div class=\"carousel-item active\" *ngIf=\"_data.newsArray[0]\">\r\n          <div class=\"card-title data-title\">\r\n            {{_data.newsArray[0].title}}\r\n          </div>\r\n            <div class=\"card-text data-body\">\r\n              {{_data.newsArray[0].summary ? _data.newsArray[0].summary: null}}\r\n            <a href={{_data.newsArray[0].url}}>...Read more</a>\r\n          </div>\r\n        </div>\r\n          <div class=\"carousel-item\" *ngIf=\"_data.newsArray[1]\">\r\n            <div class=\"card-title data-title\">\r\n            {{_data.newsArray[1].title}}\r\n          </div>\r\n          <div class=\"card-text data-body\">\r\n            {{_data.newsArray[1].summary ? _data.newsArray[1].summary: null}}\r\n            <a href={{_data.newsArray[1].url}}>...Read more</a>\r\n          </div>\r\n          </div>\r\n          <div class=\"carousel-item data-title\" *ngIf=\"_data.newsArray[2]\">\r\n            <div class=\"card-title data-body\">\r\n            {{_data.newsArray[2].title ? _data.newsArray[2].title: null}}\r\n          </div>\r\n          <div class=\"card-text data-body\">\r\n            {{_data.newsArray[2].summary}}\r\n            <a href={{_data.newsArray[2].url}}>...Read more</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-footer foot\">\r\n    <button class=\"btn btn-sm btn-link\"  *ngIf=\"_data.newsArray[0]\" >find similar articles</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#news-wrapper {\n  margin-top: 0px; }\n\n.side-wrapper {\n  width: 100%; }\n\n.data-body {\n  font-size: 12px;\n  max-height: 115px; }\n\n#set-height {\n  min-height: 65.5px; }\n\n.data-head {\n  font-size: 16px; }\n\n.data-title {\n  font-size: 14px; }\n\n.foot {\n  font-size: 5px !important; }\n\n.card-footer {\n  font-size: 5px; }\n\n@media screen and (max-width: 1224px) {\n  #news-wrapper {\n    margin-top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var NewsComponent = (function () {
    function NewsComponent(_data) {
        this._data = _data;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper card\">\r\n  \r\n  <aside id=\"pic\">\r\n      <img id='pic1' src='./images/register.jpg'>\r\n  </aside>\r\n\r\n  <div class=\"main\">\r\n    <h1 id='header'>Sign Up</h1>\r\n    <main class=\"typeSec\">\r\n      <form (keyup.enter)=\"signFunct(firstName.value, lastName.value, email.value, password.value,  repassword.value)\">\r\n        <label class='label1' for=\"\">First Name</label><br>\r\n        <input type=\"text\" class='required' name=\"firstname\" #firstName required><br> \r\n        <label class='label1' for=''>Last Name</label><br>\r\n        <input type=\"text\" class='required' name=\"lastname\" #lastName required><br>\r\n        <label class='label1' for=\"\">Email</label><br>\r\n        <input type=\"text\" class='required' name=\"email\" #email required><br>\r\n        <label class='label1' for=\"\">Password</label><br>\r\n        <input type=\"password\"  class='required' name=\"password\" #password required><br>\r\n        <label class='label1'for=\"\">Repeat Password</label><br>\r\n        <input type=\"password\"  id='pass-input' class='required' name=\"repassword\" #repassword required>\r\n        <div class='message'>\r\n          {{passwordError}}<br> {{fillmessage}}\r\n        </div>\r\n      </form>\r\n    </main>\r\n    <section class=\"sign-section\">\r\n      <a  id=\"sign-up\" class=\"btn btn-primary\" \r\n          (click)=\"signFunct(firstName.value, lastName.value, email.value, password.value,  repassword.value)\">\r\n        <span> Sign up </span>\r\n      </a>\r\n      <a id=\"sign-in\" class='btn btn-link' (click)=\"logFunct()\"> \r\n        <span>Sign in</span>\r\n      </a>\r\n    </section>\r\n  </div>\r\n\r\n</div>\r\n "

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 700px;\n  height: 600px;\n  margin: 3% auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  border-radius: 10px; }\n\n.main {\n  font-family: arial;\n  padding-left: 35px;\n  width: 50%;\n  margin: auto; }\n\n#pic {\n  position: relative;\n  width: 50%;\n  height: 595px; }\n\n#pic img {\n  border-radius: 10px;\n  background-color: grey;\n  width: 100%;\n  height: 595px; }\n\n#header {\n  font-weight: 700;\n  margin-bottom: 15px; }\n\n#pass-input {\n  margin-bottom: 0px; }\n\n.message {\n  margin-top: 0px;\n  color: red;\n  height: 50px;\n  font-weight: 600; }\n\n.sign-section {\n  margin-bottom: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n#sign-up {\n  color: white;\n  text-align: center;\n  padding-top: 2px;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px; }\n\n#sign-in {\n  margin-left: 10px; }\n\n.required {\n  border-bottom: 1.5px solid black; }\n\ninput {\n  background-color: linear-gradient(to right, red, yellow);\n  width: 240px;\n  border: none;\n  border-bottom: 1.3px solid black;\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var RegistrationComponent = (function () {
    function RegistrationComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.img1 = "../images/russiapic.jpg";
        this.passwordError = '';
        this.fillmessage = '';
        this.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.setnewUser = function (first, last, email, pass) {
        this.newUser.firstName = first;
        this.newUser.lastName = last;
        this.newUser.email = email;
        this.newUser.password = pass;
    };
    ;
    RegistrationComponent.prototype.alertFunct = function () {
        alert("Account succesfully created\n    First Name: " + this.newUser.firstName + "\n    Last Name: " + this.newUser.lastName + "\n    Email: " + this.newUser.email);
    };
    ;
    RegistrationComponent.prototype.putFunct = function () {
        var _this = this;
        this._user.postSign(this.newUser)
            .subscribe(function (response) {
            window.sessionStorage.setItem('token', response.token);
            window.sessionStorage.setItem('userId', response.userId);
            _this.alertFunct();
            _this._router.navigate(["/login"]);
        });
    };
    ;
    RegistrationComponent.prototype.signFunct = function (first, last, email, pass, repassword) {
        if (first != '' && last != '' && email != '' && pass != '' && repassword != '') {
            this.fillmessage = '';
            if (pass == repassword) {
                this.passwordError = '';
                this.setnewUser(first, last, email, pass);
                this.putFunct();
                this._router.navigate(["/login"]);
            }
            else {
                this.passwordError = 'Password did not match';
            }
        }
        else {
            this.fillmessage = 'Please fill in all spaces';
        }
    };
    ;
    RegistrationComponent.prototype.logFunct = function () {
        this._router.navigate(["/login"]);
    };
    ;
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"subnav card options1\">\r\n  <ul class=\"nav nav-wrapper\">\r\n      <li class=\"nav-item\">\r\n          <a    (click)='getIntraDayData(stockName.value)' \r\n                [class.active]=\"isButtonActive == 'intraDay'\" \r\n                class=\"nav-link nav-buttom\" >Hourly</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a    (click)='getDailyyData(stockName.value)' \r\n                [class.active]=\"isButtonActive == 'daily'\" \r\n                class=\"nav-link nav-buttom\">Daily</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a    (click)='getWeeklyData(stockName.value)'\r\n                [class.active]=\"isButtonActive == 'weekly'\" \r\n                class=\"nav-link nav-buttom\">Weekly</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a    (click)='getMonthlyData(stockName.value)' \r\n                [class.active]=\"isButtonActive == 'monthly'\" \r\n                class=\"nav-link nav-buttom\">Monthly</a>\r\n      </li>\r\n  </ul>\r\n</nav>\r\n\r\n<input  id='searchBox' \r\n        class=\"..search\" \r\n        type=\"text\"\r\n        placeholder='  Enter stock symbol...' \r\n        spellcheck=\"false\" \r\n        name=\"stockName\" \r\n        #stockName \r\n        (keyup.enter)=\" _data.onApi(stockName.value)\">\r\n<!-- <button id='submit-button' class='btn btn-primary' name='submitName' (click)=' _data.onApi(stockName.value)' >\r\nSearch\r\n</button> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".options1 {\n  margin-bottom: 13px;\n  border-radius: 7px; }\n\n.nav-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.nav-buttom {\n  cursor: pointer;\n  font-size: 14px; }\n\n#searchBox {\n  border-bottom-width: thick;\n  width: 100%;\n  margin: 0px;\n  font-size: 30px;\n  text-align: center;\n  font-weight: bold;\n  padding: 20px; }\n\n#submit-button {\n  position: relative;\n  right: -410px;\n  top: -46px; }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: black;\n  font-size: 20px;\n  text-align: center;\n  padding-bottom: 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
// import { ChartComponent } from '../chart/chart.component';
var SearchComponent = (function () {
    function SearchComponent(_stock, _data
        // private _chart: ChartComponent 
    ) {
        this._stock = _stock;
        this._data = _data;
        this.isButtonActive = 'daily';
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    //different api-point to request different data 
    SearchComponent.prototype.getDailyyData = function (symbol) {
        console.log(symbol, "day");
        this._stock.stockUrl1 = 'TIME_SERIES_DAILY&symbol=';
        this._stock.stockUrl2 = '&apikey=ARCGC8U9ZSC7IA7V';
        this._stock.mainPropertyKey = 'Time Series (Daily)';
        this.isButtonActive = 'daily';
        if (symbol) {
            this._data.onApi(symbol);
        }
        else
            return;
    };
    ;
    SearchComponent.prototype.getWeeklyData = function (symbol) {
        console.log(symbol, "week");
        this._stock.stockUrl1 = 'TIME_SERIES_WEEKLY&symbol=';
        this._stock.stockUrl2 = '&apikey=ARCGC8U9ZSC7IA7V';
        this._stock.mainPropertyKey = 'Weekly Time Series';
        this.isButtonActive = 'weekly';
        if (symbol) {
            this._data.onApi(symbol);
        }
        else
            return;
    };
    ;
    SearchComponent.prototype.getMonthlyData = function (symbol) {
        console.log(symbol, "month");
        this._stock.stockUrl1 = 'TIME_SERIES_MONTHLY&symbol=';
        this._stock.stockUrl2 = '&apikey=ARCGC8U9ZSC7IA7V';
        this._stock.mainPropertyKey = 'Monthly Time Series';
        this.isButtonActive = 'monthly';
        if (symbol) {
            this._data.onApi(symbol);
        }
        else
            return;
    };
    ;
    SearchComponent.prototype.getIntraDayData = function (symbol) {
        console.log(symbol, "intra");
        this._stock.stockUrl1 = 'TIME_SERIES_INTRADAY&symbol=';
        this._stock.stockUrl2 = '&interval=30min&apikey=ARCGC8U9ZSC7IA7V';
        this._stock.mainPropertyKey = 'Time Series (30min)';
        this.isButtonActive = 'intraDay';
        if (symbol) {
            this._data.onApi(symbol);
        }
        else
            return;
    };
    ;
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [stock_api_service_1.StockApiService,
            data_service_1.DataService
            // private _chart: ChartComponent 
        ])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" card main-wrapper\" id ='main-wrapper'> \r\n\r\n  <div class=\"side-wrapper\">\r\n    <div class=\"card-header data-head\">\r\n    Most Current Data: <strong>{{ _stock.stockSymbol || uppercase}}</strong>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"card-title data-body\">\r\n        <ol>\r\n          <li>Open: {{_data.sideStockData.open}}\r\n          <li>Close: {{_data.sideStockData.close}}\r\n          <li>High: {{_data.sideStockData.high}}\r\n          <li>Low: {{_data.sideStockData.low}}\r\n        </ol>\r\n      </div>\r\n      <div class=\"card-text\" id='date'>\r\n        {{_data.sideStockData.date}}\r\n      </div>\r\n    </div>\r\n    <div  class=\"card-footer foot\">\r\n      <button class=\"btn btn-sm btn-link\"\r\n              *ngIf='_data.sideStockData.open || _data.sideStockData.high'>see in depth analysis</button>\r\n    </div>\r\n  </div>\r\n  \r\n \r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 1224px) {\n  #main-wrapper {\n    margin-top: 0px; } }\n\n.side-wrapper {\n  width: 100%; }\n\n.data-body {\n  font-size: 12px;\n  min-height: 96px; }\n\n.data-head {\n  font-size: 16px; }\n\n.data-title {\n  font-size: 14px; }\n\n.foot {\n  font-size: 5px !important;\n  min-height: 49px; }\n\n.card-footer {\n  font-size: 5px; }\n\n#date {\n  min-height: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var stock_api_service_1 = __webpack_require__("../../../../../src/app/stock-api.service.ts");
var news_api_service_1 = __webpack_require__("../../../../../src/app/news-api.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var SideBarComponent = (function () {
    function SideBarComponent(_user, _stock, _newsService, _data) {
        this._user = _user;
        this._stock = _stock;
        this._newsService = _newsService;
        this._data = _data;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            stock_api_service_1.StockApiService,
            news_api_service_1.NewsApiService,
            data_service_1.DataService])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;


/***/ }),

/***/ "../../../../../src/app/stock-api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var StockApiService = (function () {
    function StockApiService(_http) {
        this._http = _http;
        this.mainPropertyKey = 'Time Series (Daily)';
        this.sliceNum1 = -12;
        this.baseUrl = 'https://www.alphavantage.co/query?function=';
        this.stockUrl1 = 'TIME_SERIES_DAILY&symbol=';
        this.stockSymbol = '';
        this.stockUrl2 = '&apikey=ARCGC8U9ZSC7IA7V';
        this.completeURL = '';
    }
    //gets stock data by search
    StockApiService.prototype.getStockData = function (symbol) {
        this.stockSymbol = symbol;
        ;
        this.completeURL = "" + this.baseUrl + this.stockUrl1 + symbol + this.stockUrl2;
        return this._http.get(this.completeURL);
    };
    ;
    //Api for Favorites price
    StockApiService.prototype.serviceIntraDay = function (symbol) {
        this.stockUrl2 = '&apikey=ARCGC8U9ZSC7IA7V';
        return this._http.get(this.baseUrl + "TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=15min" + this.stockUrl2);
    };
    StockApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StockApiService);
    return StockApiService;
}());
exports.StockApiService = StockApiService;


/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/api/finUsers";
        this.displayLogin = false;
        this.loginFavorite = 'Login to add to favorites';
        this.userLoginData = {};
        window.sessionStorage.getItem('token') ? this.isLogIn = true : this.isLogIn = false;
        console.log(this.isLogIn, 'Is login');
    }
    UserService.prototype.ngOnInit = function () {
        console.log('dog');
    };
    // call function when user creates an account / post used info to mongodb
    UserService.prototype.postSign = function (newUser) {
        return this._http.post(this.url, newUser);
    };
    // call function when user logs in / post password and email
    UserService.prototype.onLogin = function (useData) {
        return this._http.post(this.url + '/login', useData);
    };
    //User/logout//
    UserService.prototype.onLogOut = function (token) {
        return this._http.post(this.url + '/logout?access_token=' + token, {});
    };
    //usser/{id} 
    UserService.prototype.getUser = function (id, token) {
        return this._http.get(this.url + "/" + id + "?access_token=" + token);
    };
    // POST /finUsers/{id}/favorites
    UserService.prototype.saveFavorite = function (data, token, id) {
        return this._http.post(this.url + "/" + id + '/favorites?access_token=' + token, data);
    };
    UserService.prototype.getFavoritesData = function (token, id) {
        return this._http.get(this.url + '/' + id + '/favorites?access_token=' + token);
    };
    ;
    //DELETE /finUsers/{id}/favorites/{fk}
    UserService.prototype.deleteFavUser = function (token, id, finUserId) {
        return this._http.delete(this.url + '/' + finUserId + '/favorites/' + id + '?access_token=' + token);
    };
    ;
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var _1 = __webpack_require__("../../../../../src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-SG": "../../../../moment/locale/en-SG.js",
	"./en-SG.js": "../../../../moment/locale/en-SG.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map