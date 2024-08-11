import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    type: ArgType.Channel;
    rest: false;
    check: (i: BaseChannel) => i is import("discord.js").DMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PrivateThreadChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").VoiceChannel;
}, {
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}], true>;
export default _default;
//# sourceMappingURL=sendMessage.d.ts.map