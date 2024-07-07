"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segmenter = exports.SplitTextName = void 0;
const structures_1 = require("../../structures");
exports.SplitTextName = "splits";
exports.Segmenter = new Intl.Segmenter();
exports.default = new structures_1.NativeFunction({
    name: "$segmentTextSplit",
    version: "1.5.0",
    description: "Creates an array on given text using segmenter",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to split",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [text]) {
        ctx.setEnvironmentKey(exports.SplitTextName, [...exports.Segmenter.segment(text)].map(x => x.segment));
        return this.success();
    },
});
//# sourceMappingURL=segmentTextSplit.js.map