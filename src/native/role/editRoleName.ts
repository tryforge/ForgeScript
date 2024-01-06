import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editRoleName",
    version: "1.0.7",
    description: "Edits a role's name, returns boolean",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit name for",
            rest: false,
            required: true,
        },
        {
            name: "name",
            description: "The new name for the role",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(_, [, role, name]) {
        return this.success(!!(await role.setName(name).catch(noop)))
    },
})
