"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotAvatar",
    version: "1.0.0",
    description: "Sets the bot profile icon",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientAvatar"
    ],
    args: [
        {
            name: "url",
            description: "The icon url",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [url]) {
        return this.success(!!(await ctx.client.user.setAvatar(url).catch(noop_1.default)));
    },
});
//# sourceMappingURL=setBotAvatar.js.map