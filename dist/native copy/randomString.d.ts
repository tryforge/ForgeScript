import { ArgType, NativeFunction } from "../structures";
export declare const Numbers = "0123456789";
export declare const LowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
export declare const UppercaseLetters: string;
export declare const CharArray: string[];
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=randomString.d.ts.map