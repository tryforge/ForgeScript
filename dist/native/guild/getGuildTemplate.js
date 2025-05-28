"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateProperty = void 0;
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
    TemplateProperty["unSynced"] = "unSynced";
})(TemplateProperty || (exports.TemplateProperty = TemplateProperty = {}));
exports.default = new structures_1.NativeFunction({
    name: "$getGuildTemplate",
    version: "1.5.0",
    description: "Gets the data of a guild template",
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
            type: structures_1.ArgType.Template,
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
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [template, prop]) {
        return this.successJSON(prop ? template[prop] : template);
    },
});
//# sourceMappingURL=getGuildTemplate.js.map