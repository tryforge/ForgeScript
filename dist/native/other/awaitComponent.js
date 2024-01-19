"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const isTrue_1 = __importDefault(require("../../functions/isTrue"));
exports.default = new structures_1.NativeFunction({
    name: "$awaitComponent",
    version: "1.4.0",
    description: "Awaits a component, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
        {
            name: "message ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
            description: "The message to await component on"
        },
        {
            name: "filter",
            description: "The filter to run for every interaction received after this, this is called with interaction context",
            rest: false,
            required: true,
            condition: true,
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
        const filter = this.data.fields[2];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 4);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [, msg, time] = args;
        const int = await msg.awaitMessageComponent({
            time,
            filter: async (m) => {
                const res = await this["resolveCondition"](ctx.clone({ obj: m }), filter);
                if (res.return || res.success) {
                    return (0, isTrue_1.default)(res);
                }
                else
                    return false;
            }
        }).catch(ctx.noop);
        if (int) {
            const rt = await this["resolveCode"](ctx.clone({ obj: int }), this.data.fields[3]);
            if (!this["isValidReturnType"](rt))
                return rt;
        }
        return this.success(!!int);
    },
});
//# sourceMappingURL=awaitComponent.js.map