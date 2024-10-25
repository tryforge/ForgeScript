import { ArgType, NativeFunction } from "../../structures";
export declare enum AuthorizingIntegrationOwnersType {
    Guild = 0,
    User = 1
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AuthorizingIntegrationOwnersType;
}], true>;
export default _default;
//# sourceMappingURL=authorizingIntegrationOwners.d.ts.map