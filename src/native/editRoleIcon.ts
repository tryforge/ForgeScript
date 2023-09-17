import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRoleIcon",
    version: "1.0.7",
    description: "Edits a role's icon, returns boolean",
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
            description: "The role to edit icon for",
            rest: false,
            required: true,
        },
        {
            name: "icon",
            description: "The new icon for the role",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(_, [, role, url]) {
        return Return.success(!!(await role.setIcon(url).catch(noop)))
    },
})
