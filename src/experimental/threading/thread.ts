/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { parentPort } from "worker_threads"
import { BaseCommand, IBaseCommand } from "../../structures"
import { Compiler, IRunnable, Interpreter } from "../../core"
import { FunctionManager } from "../../managers"
import { IThreadContext } from "../../managers/ThreadManager"

FunctionManager.loadNative()
Compiler["setFunctions"](FunctionManager.raw)

export interface IThreadResponse {
    value: string | null
    taskId: number
}

parentPort?.on("message", async (ctx: IThreadContext & { taskId: number }) => {
    const cmd = BaseCommand.from(ctx.code)

    const run = await Interpreter.run({
        // @ts-ignore
        client: null,
        command: cmd,
        keywords: ctx.keywords,
        environment: ctx.environment,
        data: cmd.compiled.code,
        obj: {},
    })

    parentPort?.postMessage({
        taskId: ctx.taskId,
        value: run,
    })
})
