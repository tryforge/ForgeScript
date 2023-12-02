import { ChannelType } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    rest: true;
    required: false;
    enum: typeof ChannelType;
}], true>;
export default _default;
//# sourceMappingURL=randomGuildChannelID.d.ts.map