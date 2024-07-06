import { PollAnswerData } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswers",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Adds multiple poll answers",
    args: [
        {
            name: "text;emoji",
            description: "The answer's text followed by emoji",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ texts ]) {
        const ref = (ctx.container.poll?.answers as Array<PollAnswerData>)
        
        for (let i = 0, len = texts.length;i < len;i += 2) {
            const [ text, em ] = texts.slice(i, i + 1)
            ref.push({ 
                text,
                emoji: em || undefined
            })
        }

        return this.success()
    },
})