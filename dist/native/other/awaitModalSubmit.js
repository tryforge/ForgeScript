"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$awaitModalSubmit",
    version: "1.4.0",
    description: "Awaits a modal submit, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The modal's custom id to wait for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "success code",
            description: "The code to execute on success, this is called with interaction context",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time,
            description: "The max time to wait for a component"
        }
    ],
    async execute(ctx) {
        if (!ctx.interaction || !("awaitModalSubmit" in ctx.interaction))
            return this.success(false);
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [id, time] = args;
        const int = await ctx.interaction.awaitModalSubmit({
            time,
            filter: i => i.customId === id
        }).catch(ctx.noop);
        if (int) {
            const rt = await this["resolveCode"](ctx.clone({ obj: int }), this.data.fields[0]);
            if (!this["isValidReturnType"](rt))
                return rt;
        }
        return this.success(!!int);
    },
});
//# sourceMappingURL=awaitModalSubmit.js.map