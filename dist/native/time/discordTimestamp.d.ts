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
        readonly MediumTime: "T";
        readonly LongTime: "T";
        readonly ShortDate: "d";
        readonly LongDate: "D";
        readonly LongDateShortTime: "f";
        readonly ShortDateTime: "f";
        readonly FullDateShortTime: "F";
        readonly LongDateTime: "F";
        readonly ShortDateShortTime: "s";
        readonly ShortDateMediumTime: "S";
        readonly RelativeTime: "R";
    };
    type: ArgType.Enum;
    description: string;
}], true, true>;
export default _default;
//# sourceMappingURL=discordTimestamp.d.ts.map