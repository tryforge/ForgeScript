import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerOwnerID",
    version: "1.4.0",
    description: "Returns the user who added the sticker",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull owner of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.User,
    async execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(await s?.fetchUser().then(x => x?.id).catch(noop))
    },
})