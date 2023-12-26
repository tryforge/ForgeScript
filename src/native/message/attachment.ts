import { AttachmentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$attachment",
    version: "1.0.0",
    brackets: true,
    description: "Adds an attachment to the response",
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The attachment url or path to file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "name",
            description: "the name for this attachment, with the extension",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "as text",
            description: "Whether to use url param as text",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [url, name, asText]) {
        const attachment = new AttachmentBuilder(asText ? Buffer.from(url, "utf-8") : url, {
            name,
        })

        ctx.container.files.push(attachment)
        return this.success()
    },
})
