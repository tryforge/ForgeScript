"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userIDs",
    version: "1.4.0",
    description: "Returns all the users that are currently cached",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: (0, array_1.default)(),
    execute(ctx, [sep]) {
        return this.success(ctx.client.users.cache.map(x => x.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=userIDs.js.map