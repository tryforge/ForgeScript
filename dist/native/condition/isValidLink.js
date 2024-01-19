"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkRegex = void 0;
const structures_1 = require("../../structures");
exports.LinkRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
exports.default = new structures_1.NativeFunction({
    name: "$isValidLink",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "link",
            description: "The link to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    description: "Checks whether a link is valid, this will not make sure that a site actually exists or returns success HTTP responses.",
    execute(ctx, [link]) {
        return this.success(exports.LinkRegex.test(link));
    },
});
//# sourceMappingURL=isValidLink.js.map