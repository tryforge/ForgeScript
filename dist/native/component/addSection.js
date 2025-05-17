"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const componentBuilders_1 = require("../../functions/componentBuilders");
const discord_js_1 = require("discord.js");
const addButton_1 = __importDefault(require("./addButton"));
const addTextDisplay_1 = __importDefault(require("./addTextDisplay"));
const addThumbnail_1 = __importDefault(require("./addThumbnail"));
exports.default = new structures_1.NativeFunction({
    name: "$addSection",
    version: "2.4.0",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessory to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        (0, componentBuilders_1.addActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        ctx.component.section = new discord_js_1.SectionBuilder();
        ctx.container.inside.push(discord_js_1.ComponentType.Section);
        const textDisplays = this.getFunctions(0, addTextDisplay_1.default);
        const newButton = this.getFunction(0, addButton_1.default);
        const newThumbnail = this.getFunction(0, addThumbnail_1.default);
        for (let i = 0, len = textDisplays.length; i < len; i++) {
            const textDisplay = textDisplays[i];
            const text = await textDisplay.execute(ctx);
            if (!this["isValidReturnType"](text))
                return text;
        }
        if (newButton) {
            const button = await newButton.execute(ctx);
            if (!this["isValidReturnType"](button))
                return button;
        }
        if (newThumbnail) {
            const thumbnail = await newThumbnail.execute(ctx);
            if (!this["isValidReturnType"](thumbnail))
                return thumbnail;
        }
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addSectionComponents(ctx.component.section);
        else
            ctx.container.components.push(ctx.component.section);
        delete ctx.component.section;
        ctx.container.inside.pop();
        return this.success();
    },
});
//# sourceMappingURL=addSection.js.map