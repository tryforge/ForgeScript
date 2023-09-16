"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
const path_1 = require("path");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$pathJoin",
    version: "1.0.7",
    description: "Join the given paths",
    args: [
        {
            name: "paths",
            description: "The file paths to join",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: true
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [paths]) {
        return Return_1.Return.success((0, path_1.join)(...paths));
    },
});
//# sourceMappingURL=pathJoin.js.map