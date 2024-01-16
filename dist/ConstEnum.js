"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityType = exports.ColorType = void 0;
/**颜色*/
var ColorType;
(function (ColorType) {
    ColorType[ColorType["Red"] = 1] = "Red";
    ColorType[ColorType["Blue"] = 2] = "Blue";
    ColorType[ColorType["Yellow"] = 3] = "Yellow";
    ColorType[ColorType["Green"] = 4] = "Green";
})(ColorType || (exports.ColorType = ColorType = {}));
/**品质*/
var QualityType;
(function (QualityType) {
    QualityType[QualityType["NORMAL"] = 0] = "NORMAL";
    QualityType[QualityType["BLUE"] = 1] = "BLUE";
    QualityType[QualityType["RED"] = 2] = "RED";
    QualityType[QualityType["GOLD"] = 3] = "GOLD";
    QualityType[QualityType["PINK"] = 4] = "PINK";
})(QualityType || (exports.QualityType = QualityType = {}));
