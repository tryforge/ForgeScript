import { inspect } from "util"
import { Compiler } from "../core/Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"
import { IExtendedCompiledFunctionConditionField } from "../structures"

Compiler.setFunctions(FunctionManager.raw)

const code = "$eval[ok;true;tt]"

const compiled = new Compiler(code)["compile"]()

console.log(inspect(compiled, { depth: 10, colors: true }), compiled.resolve.toString())