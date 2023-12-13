"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildVanityUses",
    version: "1.0.0",
    description: "Returns the guilds vanity uses",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity uses",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild;
        const vanity = await guild?.fetchVanityData().catch(noop_1.default);
        return this.success(vanity ? vanity.uses : undefined);
    },
});
//# sourceMappingURL=guildVanityUses.js.map