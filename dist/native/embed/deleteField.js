"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteField",
    version: "2.1.0",
    description: "Deletes an embed field",
    unwrap: true,
    args: [
        {
            name: "field index",
            description: "The index field to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "index",
            description: "The index to delete this field on",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [fieldIndex, index]) {
        ctx.container.embed(index ?? 0).data.fields?.splice(fieldIndex, 1);
        return this.success();
    },
});
//# sourceMappingURL=deleteField.js.map