"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$title",
    version: "1.0.0",
    description: "Adds an embed title",
    unwrap: true,
    args: [
        {
            name: "title",
            description: "Adds a title to the embed",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "hyperlink",
            description: "The hyperlink url",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [title, hyperlink, index]) {
        const embed = ctx.container.embed(index ?? 0).setTitle(title);
        if (hyperlink)
            embed.setURL(hyperlink);
        return this.success();
    },
});
//# sourceMappingURL=title.js.map