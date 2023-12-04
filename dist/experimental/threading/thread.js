"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const structures_1 = require("../../structures");
const core_1 = require("../../core");
const managers_1 = require("../../managers");
managers_1.FunctionManager.loadNative();
core_1.Compiler.setFunctions(managers_1.FunctionManager.raw);
worker_threads_1.parentPort?.on("message", async (ctx) => {
    const cmd = structures_1.BaseCommand.from(ctx.code);
    const run = await core_1.Interpreter.run({
        // @ts-ignore
        client: null,
        command: cmd,
        keywords: ctx.keywords,
        environment: ctx.environment,
        data: cmd.compiled.code,
        obj: null
    });
    worker_threads_1.parentPort?.postMessage({
        taskId: ctx.taskId,
        value: run
    });
});
//# sourceMappingURL=thread.js.map