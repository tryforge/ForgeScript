"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setTimeout",
    version: "1.0.2",
    description: "Executes code after given duration",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "time",
            description: "How long to wait for before running this code",
            rest: false,
            type: structures_1.ArgType.Time,
        },
    ],
    async execute(ctx) {
        const [code] = this.data.fields;
        const time = await this["resolveUnhandledArg"](ctx, 1);
        if (!this["isValidReturnType"](time))
            return time;
        setTimeout(async () => {
            await this["resolveCode"](ctx, code);
        }, time.value);
        return this.success();
    },
});
//# sourceMappingURL=setTimeout.js.map