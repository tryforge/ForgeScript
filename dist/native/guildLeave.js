"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildLeave",
    version: "1.0.0",
    description: "Leaves a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to leave",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    async execute(ctx, [g]) {
        g ??= ctx.guild;
        return this.success(!!(await g?.leave().catch(noop_1.default)));
    },
});
//# sourceMappingURL=guildLeave.js.map