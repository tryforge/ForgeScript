import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$userIDs",
    version: "1.4.0",
    description: "Returns all the users that are currently cached",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    output: array<ArgType.User>(),
    execute(ctx, [ sep ]) {
        return this.success(ctx.client.users.cache.map(x => x.id).join(sep ?? ", "))
    },
})