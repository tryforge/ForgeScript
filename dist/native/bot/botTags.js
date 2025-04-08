"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botTags",
    version: "1.5.0",
    description: "Returns the client tags",
    unwrap: true,
    aliases: ["$clientTags"],
    args: [
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: false,
    output: (0, array_1.default)(),
    execute(ctx, [sep]) {
        return this.success(ctx.client.application.tags?.join(sep ?? ", "));
    },
});
//# sourceMappingURL=botTags.js.map