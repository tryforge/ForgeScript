import { StageInstancePrivacyLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editStageInstance",
    version: "2.3.0",
    description: "Edits a stage instance, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to edit",
            rest: false,
            required: true,
            type: ArgType.StageInstance,
        },
        {
            name: "topic",
            description: "The new topic of the stage instance",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "privacy level",
            description: "The new privacy level of the stage instance",
            rest: false,
            type: ArgType.Enum,
            enum: StageInstancePrivacyLevel
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [instance, topic, level]) {
        return this.success(!!(await instance.edit({ topic: topic || undefined, privacyLevel: level || undefined }).catch(ctx.noop)))
    },
})