import { ArgType, NativeFunction } from "../../structures";
export declare enum ConnectionState {
    Connecting,
    Closed,
    Closing,
    Open
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Number;
}], true>;
export default _default;
//# sourceMappingURL=wsState.d.ts.map