"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteStageInstance",
    version: "2.3.0",
    description: "Deletes a stage instance, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.StageInstance,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [instance]) {
        return this.success(!!(await instance.delete().catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteStageInstance.js.map