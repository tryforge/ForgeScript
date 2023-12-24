"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$thumbnail",
    version: "1.0.0",
    description: "Adds an embed thumbnail",
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The url for the embed thumbnail",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [thumbnail, index]) {
        ctx.container.embed(index ?? 0).setThumbnail(thumbnail);
        return this.success();
    },
});
//# sourceMappingURL=thumbnail.js.map