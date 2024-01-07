"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseJSON_1 = __importDefault(require("../../functions/parseJSON"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "keys;value",
            description: "The keys to traverse, with the value to use at the end",
            type: structures_1.ArgType.String,
            rest: true,
            required: true
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [keys]) {
        return this.success(ctx.traverseAddEnvironmentKey((0, parseJSON_1.default)(keys[keys.length - 1]), ...keys.slice(0, -1)));
    },
});
//# sourceMappingURL=jsonSet.js.map