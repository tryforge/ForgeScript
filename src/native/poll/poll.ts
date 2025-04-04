import { PollLayoutType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$poll",
    version: "1.5.0",
    description: "Creates a poll",
    brackets: true,
    args: [
        {
            name: "question",
            description: "The poll question",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "duration",
            description: "The poll's duration",
            rest: false,
            required: true,
            type: ArgType.Time
        },
        {
            name: "multiselect",
            description: "Whether to allow multi select",
            rest: false,
            type: ArgType.Boolean
        },
        {
            name: "layout",
            description: "The layout for this poll",
            rest: false,
            enum: PollLayoutType,
            type: ArgType.Enum
        },
    ],
    unwrap: true,
    execute(ctx, [ q, dur, multi, layout ]) {
        ctx.container.poll = {
            answers: [],
            allowMultiselect: multi || false,
            duration: dur / 1000 / 60 / 60,
            question: { text: q },
            layoutType: layout || undefined
        }

        return this.success()
    }
})