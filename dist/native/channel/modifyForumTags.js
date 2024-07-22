"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$modifyForumTags",
    description: "Modifiers a forum's tags, returns bool",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
            description: "The forum to edit tags on",
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, tags]) {
        const forum = channel;
        return this.success(!!(await forum.setAppliedTags(tags).catch(ctx.noop)));
    },
});
//# sourceMappingURL=modifyForumTags.js.map