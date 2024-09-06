import { ArgType, NativeFunction } from "../../structures";
export declare enum EmojiType {
    normal = "normal",
    animated = "animated"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof EmojiType;
}], true>;
export default _default;
//# sourceMappingURL=emojiCount.d.ts.map