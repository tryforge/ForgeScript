import { ChannelType } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Enum;
    rest: true;
    required: true;
    enum: typeof ChannelType;
}], true, false>;
export default _default;
//# sourceMappingURL=randomChannelID.d.ts.map