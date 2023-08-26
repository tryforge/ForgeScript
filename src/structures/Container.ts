import { ActionRowBuilder, AnyComponentBuilder, AttachmentBuilder, BaseChannel, BaseInteraction, Channel, EmbedBuilder, GuildMember, Interaction, InteractionReplyOptions, Message, MessageReplyOptions, User } from "discord.js"

export type Sendable = Message | User | GuildMember | Channel | Interaction

export class Container {
    public content?: string
    public embeds = new Array<EmbedBuilder>()
    public components = new Array<ActionRowBuilder<any>>()
    public reply = false
    public ephemeral = false
    public files = new Array<AttachmentBuilder>()
    public channel?: Channel

    public async send(obj: Sendable, content?: string): Promise<unknown | null> {
        let res: unknown
        const options = this.getOptions<any>(content)

        if (this.channel && this.channel.isTextBased()) {
            res = await this.channel.send(options)
        } else if (obj instanceof Message) {
            res = this.reply ? await obj.reply(options) : await obj.channel.send(options)
        } else if (obj instanceof BaseInteraction && obj.isRepliable()) {
            res = await obj[(obj.deferred || obj.replied ? "editReply" : "reply") as "reply"](options)
        } else if (obj instanceof BaseChannel && obj.isTextBased()) {
            res = await obj.send(options)
        } else if (obj instanceof GuildMember || obj instanceof User) {
            res = await obj.send(options)
        } else {
            res = null
        }

        this.reset()
        return res
    }

    public reset() {
        delete this.channel
        delete this.content
        this.reply = false
        this.ephemeral = false
        this.components.length = 0
        this.embeds.length = 0
        this.files.length = 0
    }

    public getOptions<T>(content?: string): T {
        return (content ?? {
            files: this.files,
            ephemeral: this.ephemeral,
            content: this.content || null,
            components: this.components,
            embeds: this.embeds,
        }) as T 
    }
}