import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRolePosition",
    category: "unknown",
    version: "1.0.7",
    description: "Edits a role's position, returns boolean",
    unwrap: true,
    brackets: true,
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
            description: "The role to edit position for",
            rest: false,
            required: true,
        },
        {
            name: "position",
            description: "The new position for the role",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    async execute(_, [, role, pos]) {
        return this.success(!!(await role.setPosition(pos).catch(noop)))
    },
})
