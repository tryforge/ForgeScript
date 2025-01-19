import { ReactionProperty } from "../../properties/reaction";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.TextChannel;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Message;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ReactionProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getMessageReactions.d.ts.map