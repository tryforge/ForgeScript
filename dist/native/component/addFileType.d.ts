import { ArgType, NativeFunction } from "../../structures";
export declare const FileTypeRegex: RegExp;
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: true;
    required: true;
    type: ArgType.String;
    check: (x: string) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=addFileType.d.ts.map