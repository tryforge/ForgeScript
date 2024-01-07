import { GuildFeature } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    rest: true;
    type: ArgType.Enum;
    enum: typeof GuildFeature;
    description: string;
}], true>;
export default _default;
//# sourceMappingURL=guildHasAnyFeatures.d.ts.map