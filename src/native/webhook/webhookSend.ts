import { BaseChannel, Message, ThreadChannelResolvable, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookSend",
    version: "1.0.0",
    description: "Sends a message with a webhook",
    brackets: true,
    unwrap: true,
    output: ArgType.Message,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "content",
            description: "The content for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Return the message id of the sent message",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "username",
            description: "The username for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "avatar",
            description: "The avatar for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "thread ID",
            description: "The thread to send message to",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "post name",
            description: "The name for the created forum post",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the created forum post",
            rest: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [url, content, returnMessageID, username, avatarUrl, thread, name, tags]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        ctx.container.avatarURL = avatarUrl || undefined
        ctx.container.username = username || undefined
        ctx.container.threadId = thread?.id as ThreadChannelResolvable || undefined
        ctx.container.threadName = name || undefined
        ctx.container.appliedTags = tags || undefined

        const m = await ctx.container.send<Message>(web)
        return this.success(returnMessageID && m ? m.id : undefined)
    },
})