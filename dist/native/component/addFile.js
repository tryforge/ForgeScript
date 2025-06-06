"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const componentBuilders_1 = require("../../functions/componentBuilders");
exports.default = new structures_1.NativeFunction({
    name: "$addFile",
    version: "2.4.0",
    description: "Adds a new file component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url of the file (must use attachment://)",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [url, spoiler]) {
        (0, componentBuilders_1.addActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        const file = new discord_js_1.FileBuilder().setURL(url).setSpoiler(!!spoiler);
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addFileComponents(file);
        else
            ctx.container.components.push(file);
        return this.success();
    },
});
//# sourceMappingURL=addFile.js.map