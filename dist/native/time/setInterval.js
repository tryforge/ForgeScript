"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setInterval",
    version: "1.0.2",
    description: "Executes code after given duration until canceled",
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
            description: "The name for this interval",
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
        const data = setInterval(async () => {
            await this["resolveCode"](ctx, code);
        }, time.value);
        if (name.value)
            ctx.client.intervals.set(name.value, data);
        return this.success();
    },
});
//# sourceMappingURL=setInterval.js.map