"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$setChannelName",
    version: "1.0.0",
    description: "Sets a channel name, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its name",
            rest: false,
            check: (i) => "setName" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "name",
            description: "The name to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [channel, name]) {
        return this.success(!!(await channel.setName(name).catch(noop_1.default)));
    },
});
//# sourceMappingURL=setChannelName.js.map