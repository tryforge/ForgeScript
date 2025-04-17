import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteStageInstance",
    version: "2.3.0",
    description: "Deletes a stage instance, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to delete",
            rest: false,
            required: true,
            type: ArgType.StageInstance,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [instance]) {
        return this.success(!!(await instance.delete().catch(ctx.noop)))
    },
})