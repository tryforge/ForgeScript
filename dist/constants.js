"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeParser = void 0;
const ms_utility_1 = __importDefault(require("ms-utility"));
const constants_1 = require("ms-utility/dist/constants");
exports.TimeParser = new ms_utility_1.default([
    ...constants_1.DefaultTimeUnits,
    [
        "w",
        {
            word: "week",
            ms: 1000 * 60 * 60 * 24 * 7
        }
    ],
    [
        "M",
        {
            word: "month",
            ms: 1000 * 60 * 60 * 24 * 30
        }
    ],
    [
        "y",
        {
            word: "year",
            ms: 1000 * 60 * 60 * 24 * 30 * 12
        }
    ],
]);
//# sourceMappingURL=constants.js.map