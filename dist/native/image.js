"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$image",
    version: "1.0.0",
    description: "Adds an embed image",
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The url for the embed image",
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
    execute(ctx, [image, index]) {
        if (image)
            ctx.container.embed(index ?? 0).setImage(image);
        return this.success();
    },
});
//# sourceMappingURL=image.js.map