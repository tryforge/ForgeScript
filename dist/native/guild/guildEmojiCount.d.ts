import { ArgType, NativeFunction } from "../../structures";
import { EmojiType } from "../emoji/emojiCount";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof EmojiType;
}], true>;
export default _default;
//# sourceMappingURL=guildEmojiCount.d.ts.map