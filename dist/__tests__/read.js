"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const FunctionManager_1 = require("../managers/FunctionManager");
const ExperimentalCompiler_1 = require("../core/ExperimentalCompiler");
FunctionManager_1.FunctionManager.loadNative();
ExperimentalCompiler_1.ExperimentalCompiler.setFunctions(FunctionManager_1.FunctionManager.raw);
const code = "$description[$sendMessage[$channelID;hi;true]]";
const bro = `
$modal[botinteract;Agregar un Robot]
$addTextInput[IDinput;ID del bot;Short;yes;ID de tu Robot;;0;20]
$addTextInput[prefixbot;Prefix del bot;Short;yes;Prefix de tu Robot;;0;5]`;
const compiled = ExperimentalCompiler_1.ExperimentalCompiler["compile"](code);
console.log((0, util_1.inspect)(compiled, { depth: 10, colors: true }), compiled.resolve.toString());
//# sourceMappingURL=read.js.map