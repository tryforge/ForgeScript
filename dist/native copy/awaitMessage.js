"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const lodash_1 = require("lodash");
const isTrue_1 = __importDefault(require("../functions/isTrue"));
exports.default = new structures_1.NativeFunction({
    name: "$awaitMessage",
    version: "1.0.7",
    description: "Awaits a message, returns message ID or nothing if no valid response",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to await message on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
        {
            name: "variable name",
            description: "The variable to load the message id that was sent as response by an user, get it with $env[<variable>]",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "filter",
            description: "The filter to run for every message sent after this",
            rest: false,
            required: true,
            condition: true,
            type: structures_1.ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time,
            description: "The max time to wait for a message"
        }
    ],
    async execute(ctx) {
        const filter = this.data.fields[2];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [channel, varName, time] = args;
        const msg = await channel.awaitMessages({
            errors: ["time"],
            max: 1,
            time,
            filter: async (m) => {
                ctx.setEnvironmentKey(varName, m.id);
                const res = await this["resolveCondition"](ctx, filter);
                if (res.return || res.success) {
                    return (0, isTrue_1.default)(res);
                }
                else
                    return false;
            }
        }).catch(lodash_1.noop);
        return this.success(msg?.first()?.id);
    },
});
//# sourceMappingURL=awaitMessage.js.map