import { ArgType, NativeFunction } from "../../structures";
import { TeamMemberProperty } from "../../properties/teamMember";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof TeamMemberProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=botTeamMembers.d.ts.map