"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$exec",
    version: "1.0.0",
    brackets: true,
    description: "Runs a command in console",
    unwrap: true,
    args: [
        {
            name: "command",
            description: "The command to execute",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    async execute(_, [command]) {
        try {
            const exec = await (0, child_process_1.execSync)(command, { encoding: "utf-8" });
            return this.success(exec);
        }
        catch (error) {
            return this.err(this.error(structures_1.ErrorType.Custom, error.message));
        }
    },
});
//# sourceMappingURL=exec.js.map