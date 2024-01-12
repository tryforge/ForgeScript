import noop from "../../functions/noop"
import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$showModal",
    version: "1.4.0",
    description: "Submits the modal",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "showModal" in ctx.interaction && ctx.container.modal) {
            await ctx.interaction.showModal(ctx.container.modal).catch(noop)
            ctx.container.reset()
        }
        
        return this.success()
    },
})