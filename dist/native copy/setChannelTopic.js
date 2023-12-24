"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$setChannelTopic",
    version: "1.0.0",
    description: "Sets a channel topic, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its topic",
            rest: false,
            check: (i) => "setTopic" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "topic",
            description: "The topic to set",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [channel, topic]) {
        return this.success(!!(await channel.setTopic(topic || null).catch(noop_1.default)));
    },
});
//# sourceMappingURL=setChannelTopic.js.map