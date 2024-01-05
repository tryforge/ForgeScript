"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const ForgeError_1 = require("../../structures/forge/ForgeError");
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$djsEval",
    version: "1.0.0",
    description: "Eval js code",
    unwrap: true,
    output: NativeFunction_1.ArgType.Unknown,
    args: [
        {
            name: "code",
            description: "The code to eval",
            rest: true,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [arg]) {
        const code = arg.join(";");
        try {
            let evaled = await eval(code);
            if (typeof evaled !== "string")
                evaled = (0, util_1.inspect)(evaled, { depth: 1 });
            return this.success(evaled);
        }
        catch (error) {
            return this.error(ForgeError_1.ErrorType.Custom, error.message);
        }
    },
});
//# sourceMappingURL=djsEval.js.map