"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotName",
    version: "1.0.0",
    description: "Sets the bot name",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [name]) {
        return this.success(!!(await ctx.client.user.setUsername(name).catch(noop_1.default)));
    },
});
//# sourceMappingURL=setBotName.js.map