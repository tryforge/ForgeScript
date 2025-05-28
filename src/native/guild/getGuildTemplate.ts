import { ArgType, NativeFunction, Return } from "../../structures"

export enum TemplateProperty {
    code = "code",
    name = "name",
    description = "description",
    guildID = "guildId",
    authorID = "creatorId",
    timestamp = "createdTimestamp",
    updatedTimestamp = "updatedTimestamp",
    url = "url",
    usageCount = "usageCount",
    unSynced = "unSynced"
}

export default new NativeFunction({
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
            type: ArgType.Template,
        },
        {
            name: "property",
            description: "The property of the template to return",
            rest: false,
            type: ArgType.Enum,
            enum: TemplateProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [ template, prop ]) {
        return this.successJSON(prop ? template[prop] : template)
    },
})