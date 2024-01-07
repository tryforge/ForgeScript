import { inspect } from "util"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"
import { IExtendedCompiledFunctionConditionField } from "../structures"
import { ExperimentalCompiler } from "../core/ExperimentalCompiler"

FunctionManager.loadNative()
ExperimentalCompiler.setFunctions(FunctionManager.raw)

const code = "$and[true;e==1]"

const bro = `
$modal[botinteract;Agregar un Robot]
$addTextInput[IDinput;ID del bot;Short;yes;ID de tu Robot;;0;20]
$addTextInput[prefixbot;Prefix del bot;Short;yes;Prefix de tu Robot;;0;5]`

const compiled = ExperimentalCompiler["compile"](code)

console.log(inspect(compiled, { depth: 10, colors: true }), compiled.resolve.toString())
