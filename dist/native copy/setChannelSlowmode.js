"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$setChannelSlowmode",
    version: "1.0.0",
    description: "Sets a channel slowmode, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i) => "setRateLimitPerUser" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "seconds",
            description: "The number of seconds per message",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(_, [channel, seconds]) {
        return this.success(!!(await channel.setRateLimitPerUser(seconds || 0).catch(noop_1.default)));
    },
});
//# sourceMappingURL=setChannelSlowmode.js.map