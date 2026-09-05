"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = exports.defineProperties = exports.generateMetadata = void 0;
const generateMetadata_1 = __importDefault(require("./functions/generateMetadata"));
exports.generateMetadata = generateMetadata_1.default;
const defineProperties_1 = __importDefault(require("./functions/defineProperties"));
exports.defineProperties = defineProperties_1.default;
const array_1 = __importDefault(require("./functions/array"));
exports.array = array_1.default;
__exportStar(require("./managers"), exports);
__exportStar(require("./structures"), exports);
__exportStar(require("./core"), exports);
//# sourceMappingURL=index.js.map