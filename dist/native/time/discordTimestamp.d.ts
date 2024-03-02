import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Time;
}, {
    name: string;
    rest: false;
    required: true;
    enum: {
        readonly ShortTime: "t";
        readonly LongTime: "T";
        readonly ShortDate: "d";
        readonly LongDate: "D";
        readonly ShortDateTime: "f";
        readonly LongDateTime: "F";
        readonly RelativeTime: "R";
    };
    type: ArgType.Enum;
    description: string;
}], true>;
export default _default;
//# sourceMappingURL=discordTimestamp.d.ts.map