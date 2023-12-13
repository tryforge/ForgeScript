"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$input",
    version: "1.0.0",
    description: "Returns a value from a text field",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to get the input field value",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.interaction?.isModalSubmit() ? ctx.interaction.fields.getTextInputValue(id) : undefined);
    },
});
//# sourceMappingURL=input.js.map