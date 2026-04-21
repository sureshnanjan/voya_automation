"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the DAta Struncture that holds the allowed colors in HerokuApp
 */
var HerokuColor;
(function (HerokuColor) {
    HerokuColor["Green"] = "green";
    HerokuColor["Red"] = "red";
    HerokuColor["Blue"] = "blue";
})(HerokuColor || (HerokuColor = {}));
var WorkDays;
(function (WorkDays) {
    WorkDays["Monday"] = "Monday";
    WorkDays["Tuesday"] = "Tuesday";
    WorkDays["Wednesday"] = "Wednesday";
    WorkDays["Thursday"] = "Thursday";
    WorkDays["Friday"] = "Friday";
})(WorkDays || (WorkDays = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
var SupportedBrowsers;
(function (SupportedBrowsers) {
    SupportedBrowsers["Chrome"] = "Chrome";
    SupportedBrowsers["Firefox"] = "Firefox";
})(SupportedBrowsers || (SupportedBrowsers = {}));
let hpbanner = { color: HerokuColor.Green, displaytext: "Fork me on Github", imageUrl: "link_to_image" };
//# sourceMappingURL=data_structures.js.map