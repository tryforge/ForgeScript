import { ArgType, NativeFunction } from "../../structures";
export declare enum CustomStatusType {
    state = "state",
    emoji = "emoji"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Member;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof CustomStatusType;
}], true>;
export default _default;
//# sourceMappingURL=memberCustomStatus.d.ts.map