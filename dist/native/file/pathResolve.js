"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pathResolve",
    version: "2.2.0",
    description: "Resolves paths into an absolute path",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to resolve",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(path_1.default.resolve(...paths));
    },
});
//# sourceMappingURL=pathResolve.js.map