"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var classy = function classy() {
    return function (Class) {
        var _Class = function _Class() {
            return new Class();
        };
        _Class.prototype = Class.prototype;
        return _Class;
    };
};

exports.default = classy;