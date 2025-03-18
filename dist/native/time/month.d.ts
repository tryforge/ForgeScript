import { ArgType, NativeFunction } from "../../structures";
export declare enum ExtendedTimeFormat {
    Numeric = "numeric",
    TwoDigit = "2-digit",
    Long = "long",
    Short = "short",
    Narrow = "narrow"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ExtendedTimeFormat;
}], true>;
export default _default;
//# sourceMappingURL=month.d.ts.map