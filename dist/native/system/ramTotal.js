"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const node_os_1 = __importDefault(require("node:os"));
exports.default = new structures_1.NativeFunction({
    name: "$ramTotal",
    version: "2.2.0",
    description: "Returns the maximum total ram capacity of the system in GB",
    aliases: [
        "$memoryTotal",
        "$maxRam",
    ],
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(node_os_1.default.totalmem() / (1024 ** 3));
    },
});
//# sourceMappingURL=ramTotal.js.map