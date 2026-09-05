import { BaseChannel, TextChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").DMChannel | import("discord.js").PartialGroupDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel;
}], true>;
export default _default;
//# sourceMappingURL=startTyping.d.ts.map