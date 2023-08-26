import { inspect } from "util"
import { Compiler } from "../core/Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { Interpreter } from "../core/Interpreter"

Compiler.setFunctions(FunctionManager.raw)

const code = "$log[hi]"

const compiled = Compiler.compile(code)

Interpreter.run({
    client: {},
    data: compiled,
    obj: {},
    args: []
} as any).then(console.log)