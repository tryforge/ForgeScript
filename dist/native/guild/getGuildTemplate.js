"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateProperty = void 0;
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
var TemplateProperty;
(function (TemplateProperty) {
    TemplateProperty["code"] = "code";
    TemplateProperty["name"] = "name";
    TemplateProperty["description"] = "description";
    TemplateProperty["guildID"] = "guildId";
    TemplateProperty["authorID"] = "creatorId";
    TemplateProperty["timestamp"] = "createdTimestamp";
    TemplateProperty["updatedTimestamp"] = "updatedTimestamp";
    TemplateProperty["url"] = "url";
    TemplateProperty["usageCount"] = "usageCount";
})(TemplateProperty || (exports.TemplateProperty = TemplateProperty = {}));
exports.default = new structures_1.NativeFunction({
    name: "$getGuildTemplate",
    version: "1.5.0",
    description: "Gets the template of a guild",
    aliases: [
        "$getServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "property",
            description: "The property of the template to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: TemplateProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [code, prop]) {
        const template = await ctx.client.fetchGuildTemplate(code).catch();
        return this.successJSON(prop ? template[prop] : template);
    },
});
//# sourceMappingURL=getGuildTemplate.js.map