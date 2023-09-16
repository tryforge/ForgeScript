"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$import",
    version: "1.0.7",
    description: "Import a property from the provided file",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "property",
            description: "The property name",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [path, property]) {
        return Return_1.Return.success(require(path)[property]);
    },
});
//# sourceMappingURL=import.js.map