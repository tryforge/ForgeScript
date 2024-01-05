"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editField",
    version: "1.4.0",
    description: "Edits an embed field, returns true if the field was successfully edited",
    unwrap: true,
    args: [
        {
            name: "field index",
            description: "The index field to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "name",
            description: "The name for the field",
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "value",
            description: "The value for the field",
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "inline",
            description: "Whether this field will be inline",
            type: structures_1.ArgType.Boolean,
            rest: false,
        },
        {
            name: "index",
            description: "The index to edit this data on",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [fieldIndex, name, value, inline, index]) {
        const field = ctx.container.embed(index ?? 0).data.fields?.[fieldIndex];
        if (!field)
            return this.success();
        if (name)
            field.name = name;
        if (value)
            field.value = value;
        if (inline !== null)
            field.inline = inline;
        return this.success();
    },
});
//# sourceMappingURL=editField.js.map