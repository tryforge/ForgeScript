import { ArgType, NativeFunction } from "../../structures";
export declare enum CalendarType {
    Day = 0,
    Week = 1
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof CalendarType;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=calendar.d.ts.map