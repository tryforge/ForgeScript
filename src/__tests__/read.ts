import { inspect } from "util"
import { Compiler } from "../core/Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"
import { IExtendedCompiledFunctionConditionField } from "../structures"

Compiler.setFunctions(FunctionManager.raw)

const code = `
$modal[botinteract;Agregar un Robot]
$addTextInput[IDinput;ID del bot;Short;yes;ID de tu Robot;;0;20]
$addTextInput[prefixbot;Prefix del bot;Short;yes;Prefix de tu Robot;;0;5]`

const compiled = new Compiler(code)["compile"]()

console.log(inspect(compiled, { depth: 10, colors: true }), compiled.resolve.toString())