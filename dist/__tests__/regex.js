"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = require("node:util");
const core_1 = require("../core");
const managers_1 = require("../managers");
managers_1.FunctionManager.loadNative();
core_1.Compiler["setFunctions"](managers_1.FunctionManager.raw);
console.log(core_1.Compiler["Regex"]);
console.log((0, node_util_1.inspect)(core_1.Compiler.compile("$@[,]authorID"), { colors: true, depth: Infinity }));
//# sourceMappingURL=regex.js.map