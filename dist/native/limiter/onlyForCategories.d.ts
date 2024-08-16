import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    pointer: number;
    description: string;
    rest: true;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}], false>;
export default _default;
//# sourceMappingURL=onlyForCategories.d.ts.map