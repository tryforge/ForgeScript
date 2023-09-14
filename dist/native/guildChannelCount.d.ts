import { ChannelType } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    required: true;
}, {
    name: string;
    description: string;
    rest: true;
    required: true;
    enum: typeof ChannelType;
    type: ArgType.Enum;
}], true>;
export default _default;
//# sourceMappingURL=guildChannelCount.d.ts.map