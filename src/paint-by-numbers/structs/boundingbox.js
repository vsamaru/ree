"use strict";
exports.__esModule = true;
exports.BoundingBox = void 0;
// @ts-nocheck
var BoundingBox = /** @class */ (function () {
    function BoundingBox() {
        this.minX = Number.MAX_VALUE;
        this.minY = Number.MAX_VALUE;
        this.maxX = Number.MIN_VALUE;
        this.maxY = Number.MIN_VALUE;
    }
    Object.defineProperty(BoundingBox.prototype, "width", {
        get: function () {
            return this.maxX - this.minX + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "height", {
        get: function () {
            return this.maxY - this.minY + 1;
        },
        enumerable: false,
        configurable: true
    });
    return BoundingBox;
}());
exports.BoundingBox = BoundingBox;
