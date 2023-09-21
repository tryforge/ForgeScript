"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = require("node:util");
exports.default = (...args) => {
    console.error(...args.map(x => typeof x === "string" ? x : (0, node_util_1.inspect)(x, { colors: true, depth: Infinity })));
};
//# sourceMappingURL=noop.js.map