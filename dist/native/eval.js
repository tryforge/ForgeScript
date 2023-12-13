"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compiler_1 = require("../core/Compiler");
const Interpreter_1 = require("../core/Interpreter");
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$eval",
    version: "1.0.0",
    description: "Evaluates given code",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            type: NativeFunction_1.ArgType.String,
            rest: false,
            required: true,
            description: "The code to eval",
        },
        {
            name: "send",
            type: NativeFunction_1.ArgType.Boolean,
            rest: false,
            description: "Whether to send as new message",
        },
    ],
    async execute(ctx, [code, send]) {
        send ??= true;
        try {
            const result = await Interpreter_1.Interpreter.run({
                ...ctx.runtime,
                data: Compiler_1.Compiler.compile(code),
                doNotSend: !send,
            });
            return result === null ? this.stop() : this.success(send ? undefined : result);
        }
        catch (error) {
            console.error(error);
            return this.err(error);
        }
    },
});
//# sourceMappingURL=eval.js.map