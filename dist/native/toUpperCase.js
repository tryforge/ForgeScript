"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$toUpperCase",
    version: "1.0.0",
    description: "Makes a string uppercase",
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to turn uppercase",
            type: structures_1.ArgType.String,
            rest: true,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [values]) {
        return structures_1.Return.success(values.join(";").toUpperCase());
    }
});
//# sourceMappingURL=toUpperCase.js.map