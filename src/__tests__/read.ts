import { inspect } from "util"
import { Compiler } from "../core/Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"
import { IExtendedCompiledFunctionConditionField } from "../structures"

Compiler.setFunctions(FunctionManager.raw)

const code = "$checkCondition[$authorID!=1096285761365610576]"

const compiled = Compiler.compile(code)

console.log(inspect(compiled.functions[0], { depth: 10, colors: true }))