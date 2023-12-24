"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getMessageReactionUsers",
    version: "1.0.0",
    description: "Gets the user ids that have reacted to a specific emoji",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get emoji users from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emoji",
            description: "The emoji to get its users",
            required: true,
            pointer: 1,
            rest: false,
            type: structures_1.ArgType.Reaction,
        },
        {
            name: "separator",
            description: "The separator to use for every user",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [, , reaction, sep]) {
        const users = new Array();
        let afterID = undefined;
        if (reaction.users.cache.size <= reaction.count) {
            for (;;) {
                const bulk = await reaction.users.fetch({
                    limit: 100,
                    after: afterID,
                });
                if (!bulk.size)
                    break;
                afterID = bulk.last()?.id;
                users.push(...bulk.map((x) => x.id));
            }
        }
        return this.success(users.join(sep || ", "));
    },
});
//# sourceMappingURL=getMessageReactionUsers.js.map