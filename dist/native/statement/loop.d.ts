import { ArgType, NativeFunction } from "../../structures";
export declare enum SortType {
    asc = 0,
    desc = 1
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Number;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.String;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SortType;
}], false>;
export default _default;
//# sourceMappingURL=loop.d.ts.map