import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isRoleSelectMenu",
    description: "Returns whether the context is a role select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isRoleSelectMenu()))
    },
})