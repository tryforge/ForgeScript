import { ButtonStyle } from "discord.js";
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
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    enum: typeof ButtonStyle;
    type: ArgType.Enum;
    required: true;
    rest: false;
}, {
    name: string;
    rest: false;
    type: ArgType.String;
    description: string;
}, {
    name: string;
    rest: false;
    type: ArgType.Boolean;
    description: string;
}], true>;
export default _default;
//# sourceMappingURL=editButtonOf.d.ts.map