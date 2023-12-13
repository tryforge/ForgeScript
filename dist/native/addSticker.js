"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSticker",
    version: "1.0.0",
    description: "Adds a sticker to a guild, returns boolean",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the sticker to",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The url or file path for this sticker",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "name",
            description: "The sticker name",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "tags",
            description: "The tags to use for this sticker",
            type: structures_1.ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "description",
            description: "The description for the sticker",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [guild, url, name, tags, desc]) {
        const created = await guild.stickers
            .create({
            file: url,
            name,
            tags,
            description: desc || null,
        })
            .catch(noop_1.default);
        return this.success(!!created);
    },
});
//# sourceMappingURL=addSticker.js.map