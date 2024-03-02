"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonEntries",
    version: "1.4.0",
    description: "Gets entries from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get entries from",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        }
    ],
    output: (0, array_1.default)(),
    unwrap: true,
    execute(ctx, [name]) {
        return this.successJSON(Object.entries(ctx.getEnvironmentKey(name)));
    },
});
//# sourceMappingURL=jsonEntries.js.map