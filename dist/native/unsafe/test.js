"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const customImport_1 = require("../../functions/customImport");
exports.default = new structures_1.NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    brackets: true,
    args: [
        structures_1.Arg.requiredString("test")
    ],
    async execute(ctx, args) {
        const imported = await (0, customImport_1.customImport)(args[0]);
        console.log(imported);
        return this.success();
    },
});
//# sourceMappingURL=test.js.map