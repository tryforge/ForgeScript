import { BaseChannel, TextChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    check: (i: BaseChannel) => i is import("discord.js").DMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | TextChannel | import("discord.js").PrivateThreadChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").VoiceChannel;
    type: ArgType.Channel;
}, {
    name: string;
    description: string;
    rest: true;
    required: true;
    pointer: number;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=deleteMessage.d.ts.map