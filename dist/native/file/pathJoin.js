"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pathJoin",
    version: "2.2.0",
    description: "Joins paths together",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to join with",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(path_1.default.join(...paths));
    },
});
//# sourceMappingURL=pathJoin.js.map