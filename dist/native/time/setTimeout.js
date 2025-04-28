"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
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
        {
            name: "name",
            description: "The name for this timeout",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields[0];
        const time = await this["resolveUnhandledArg"](ctx, 1);
        if (!this["isValidReturnType"](time))
            return time;
        const name = await this["resolveUnhandledArg"](ctx, 2);
        if (!this["isValidReturnType"](name))
            return name;
        const data = setTimeout(async () => {
            await this["resolveCode"](ctx, code);
            if (name.value)
                ctx.client.timeouts.delete(name.value);
        }, time.value);
        if (name.value)
            ctx.client.timeouts.set(name.value, data);
        return this.success();
    },
});
//# sourceMappingURL=setTimeout.js.map