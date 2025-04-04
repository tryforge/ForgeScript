import { PollAnswerData } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswer",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Add a poll answer",
    args: [
        {
            name: "text",
            description: "The answer's text",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "emoji",
            rest: false,
            description: "The emoji to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ text, emoji ]) {
        (ctx.container.poll?.answers as Array<PollAnswerData>).push({
            text,
            emoji: emoji || undefined
        })

        return this.success()
    },
})