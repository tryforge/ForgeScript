import { GuildPreviewProperty } from "../../properties/guild";
import { ArgType, NativeFunction } from "../../structures";
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
    type: ArgType.Enum;
    enum: typeof GuildPreviewProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true, false>;
export default _default;
//# sourceMappingURL=getGuildPreview.d.ts.map