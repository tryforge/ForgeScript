"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$platform",
    version: "1.0.0",
    description: "Returns the member platforms",
    brackets: false,
    aliases: [
        "$memberPlatforms",
        "$platforms",
        "$memberPlatform"
    ],
    unwrap: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member id return its platform",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator for each platform",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, member, sep]) {
        return this.success(Object.keys((member ?? ctx.member)?.presence?.clientStatus ?? {}).join(sep || ", "));
    },
});
//# sourceMappingURL=platform.js.map