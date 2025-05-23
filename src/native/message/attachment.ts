import { AttachmentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$attachment",
    version: "1.0.0",
    brackets: true,
    description: "Adds an attachment to the response",
    unwrap: true,
    aliases: [
        "$addAttachment"
    ],
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
            description: "The name for this attachment, with the extension",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "as text",
            description: "Whether to use url param as text",
            rest: false,
            type: ArgType.Boolean
        },
        {
            name: "encoding",
            description: "Encoding to use for text, utf-8 default",
            rest: false,
            type: ArgType.String
        },
        {
            name: "description",
            description: "The description for this attachment",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [url, name, asText, enc, desc]) {
        const attachment = new AttachmentBuilder(asText ? Buffer.from(url, enc as BufferEncoding ?? "utf-8") : url, {
            name,
            description: desc || undefined
        })

        ctx.container.files.push(attachment)
        return this.success()
    },
})
