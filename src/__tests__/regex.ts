import { Compiler } from "../core"
import { FunctionManager } from "../managers"
FunctionManager.loadNative()
Compiler["setFunctions"](FunctionManager.raw)
console.log(
    Compiler["Regex"]
)

console.log(
    Compiler.compile("$!authorID")
)