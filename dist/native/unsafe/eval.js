"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$eval",
    version: "1.0.0",
    description: "Evaluates given code",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    brackets: true,
    args: [
        {
            name: "code",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
            description: "The code to eval",
        },
        {
            name: "send",
            type: structures_1.ArgType.Boolean,
            rest: false,
            description: "Whether to send as new message",
        },
    ],
    async execute(ctx, [code, send]) {
        send ??= true;
        try {
            const result = await core_1.Interpreter.run({
                ...ctx.runtime,
                data: core_1.Compiler.compile(code),
                doNotSend: !send,
            });
            return result === null ? this.stop() : this.success(send ? undefined : result);
        }
        catch (error) {
            structures_1.Logger.error(error);
            return this.error(error);
        }
    },
});
//# sourceMappingURL=eval.js.map