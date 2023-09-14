"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const Compiler_1 = require("../core/Compiler");
const FunctionManager_1 = require("../managers/FunctionManager");
Compiler_1.Compiler.setFunctions(FunctionManager_1.FunctionManager.raw);
const code = `
$modal[botinteract;Agregar un Robot]
$addTextInput[IDinput;ID del bot;Short;yes;ID de tu Robot;;0;20]
$addTextInput[prefixbot;Prefix del bot;Short;yes;Prefix de tu Robot;;0;5]`;
const compiled = new Compiler_1.Compiler(code)["compile"]();
console.log((0, util_1.inspect)(compiled, { depth: 10, colors: true }), compiled.resolve.toString());
//# sourceMappingURL=read.js.map