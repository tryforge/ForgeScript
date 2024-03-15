"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addActionRowTo",
    version: "1.5.0",
    brackets: true,
    description: "Adds an action row (or rows) to a message",
    unwrap: false,
    aliases: [
        "$addActionRowsTo"
    ],
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to add row to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "components",
            description: "Components for this row",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "keep existing rows",
            description: "Whether to keep or remove existing rows of given message",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [, m, keep] = args;
        const code = this.data.fields[2];
        const rows = keep ? m.components.map(x => discord_js_1.ActionRowBuilder.from(x)) : new Array();
        const oldContainer = ctx.runtime.container;
        const newContainer = new structures_1.Container();
        // Add our new rows
        newContainer.components = rows;
        // Use new container
        ctx.container = newContainer;
        const codeExec = await this["resolveCode"](ctx, code);
        // Return the container
        ctx.container = oldContainer;
        if (!this["isValidReturnType"](codeExec))
            return codeExec;
        // Since rows is a reference, we do not need to retrieve from container.
        return this.success(!!(await m.edit({ components: rows }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=addActionRowTo.js.map