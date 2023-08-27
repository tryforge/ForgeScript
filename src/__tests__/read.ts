import { inspect } from "util"
import { Compiler } from "../core/Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"
import { IExtendedCompiledFunctionConditionField } from "../structures"

Compiler.setFunctions(FunctionManager.raw)

const code = "$checkCondition[!=]"

const compiled = Compiler.compile(code)

console.log(inspect(compiled.functions[0], { depth: 10, colors: true }))
compiled.functions[0]["resolveCondition"]({} as any, compiled.functions[0].data.fields![0] as IExtendedCompiledFunctionConditionField).then(r => console.log(r.value))
