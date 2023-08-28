import { AttachmentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$attachment",
    brackets: true,
    description: "Adds an attachment to the response",
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The attachment url or path to file",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "name",
            description: "the name for this attachment, with the extension",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ url, name ]) {
        const attachment = new AttachmentBuilder(url, {
            name
        })

        ctx.container.files.push(attachment)
        return Return.success()
    },
})