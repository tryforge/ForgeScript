import { ArgType, NativeFunction } from "../../structures";
/**
 * Provided to FS by baby lynn
 * @param text
 * @param encryptionKey
 * @returns
 */
export declare function encrypt(text: string, encryptionKey: string): string;
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=encrypt.d.ts.map