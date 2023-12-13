"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$author",
    version: "1.0.0",
    description: "Adds an embed author",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "Adds a name to the embed author",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "icon",
            description: "The icon url",
            rest: false,
            type: structures_1.ArgType.String,
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
    execute(ctx, [name, icon, hyperlink, index]) {
        ctx.container.embed(index ?? 0).setAuthor({
            name,
            iconURL: icon || undefined,
            url: hyperlink || undefined,
        });
        return this.success();
    },
});
//# sourceMappingURL=author.js.map