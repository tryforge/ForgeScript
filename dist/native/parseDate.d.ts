import { ArgType, NativeFunction } from "../structures";
export declare enum DateType {
    LocaleDate = 0,
    LocaleTime = 1,
    Locale = 2,
    Date = 3,
    ISO = 4,
    UTC = 5,
    Time = 6
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
    required: true;
}, {
    name: string;
    description: string;
    enum: typeof DateType;
    rest: false;
    required: true;
    type: ArgType.Enum;
}], true>;
export default _default;
//# sourceMappingURL=parseDate.d.ts.map