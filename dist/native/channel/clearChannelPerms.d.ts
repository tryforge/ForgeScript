import { BaseChannel, TextChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").NewsChannel | import("discord.js").StageChannel | TextChannel | import("discord.js").VoiceChannel;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=clearChannelPerms.d.ts.map