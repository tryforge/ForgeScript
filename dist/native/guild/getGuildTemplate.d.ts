import { ArgType, NativeFunction } from "../../structures";
export declare enum TemplateProperty {
    code = "code",
    name = "name",
    description = "description",
    guildID = "guildId",
    authorID = "creatorId",
    timestamp = "createdTimestamp",
    updatedTimestamp = "updatedTimestamp",
    url = "url",
    usageCount = "usageCount"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof TemplateProperty;
}], true>;
export default _default;
//# sourceMappingURL=getGuildTemplate.d.ts.map