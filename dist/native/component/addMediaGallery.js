"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const componentBuilders_1 = require("../../functions/componentBuilders");
const discord_js_1 = require("discord.js");
const addItem_1 = __importDefault(require("./addItem"));
exports.default = new structures_1.NativeFunction({
    name: "$addMediaGallery",
    version: "2.4.0",
    description: "Adds a new media gallery component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "items",
            description: "The items to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        (0, componentBuilders_1.addActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        ctx.component.gallery = new discord_js_1.MediaGalleryBuilder();
        const items = this.getFunctions(0, addItem_1.default);
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];
            const media = await item.execute(ctx);
            if (!this["isValidReturnType"](media))
                return media;
        }
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addMediaGalleryComponents(ctx.component.gallery);
        else
            ctx.container.components.push(ctx.component.gallery);
        delete ctx.component.gallery;
        return this.success();
    },
});
//# sourceMappingURL=addMediaGallery.js.map