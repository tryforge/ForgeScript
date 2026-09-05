import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { ClientThemeProperty } from "../../properties/clientTheme";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").DMChannel | import("discord.js").PartialGroupDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel;
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
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof ClientThemeProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getMessageClientTheme.d.ts.map