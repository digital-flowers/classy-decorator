"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var classy = function classy() {
    return function (Class) {
        var _Class = function _Class() {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return new (Function.prototype.bind.apply(Class, [null].concat(rest)))();
        };
        _Class.prototype = Class.prototype;
        return _Class;
    };
};

exports.default = classy;