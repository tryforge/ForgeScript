import { TextBasedChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
export declare enum ReactionType {
    normal = "normal",
    burst = "burst"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: TextBasedChannel) => i is import("discord.js").DMChannel | import("discord.js").PartialDMChannel | import("discord.js").PartialGroupDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Message;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    required: true;
    pointer: number;
    rest: false;
    type: ArgType.Reaction;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ReactionType;
}], true>;
export default _default;
//# sourceMappingURL=getMessageReactionCount.d.ts.map