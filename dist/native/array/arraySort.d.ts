import { ArgType, NativeFunction } from "../../structures";
export declare enum SortType {
    asc = 0,
    desc = 1
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SortType;
}], true>;
export default _default;
//# sourceMappingURL=arraySort.d.ts.map