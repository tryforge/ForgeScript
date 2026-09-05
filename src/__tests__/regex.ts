/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { inspect } from "node:util"
import { Compiler } from "../core"
import { FunctionManager } from "../managers"
FunctionManager.loadNative()
Compiler["setFunctions"](FunctionManager.raw)
console.log(
    Compiler["Regex"]
)

console.log(
    inspect(Compiler.compile("$@[,]authorID"), { colors: true, depth: Infinity })
)