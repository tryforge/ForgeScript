import { ActionRowBuilder, AnyComponentBuilder, AttachmentBuilder, BaseChannel, BaseInteraction, Channel, EmbedBuilder, GuildMember, Interaction, InteractionReplyOptions, Message, MessageReplyOptions, User } from "discord.js"
import noop from "../functions/noop"

export type Sendable = Message | User | GuildMember | Channel | Interaction

export class Container {
    public content?: string
    public embeds = new Array<EmbedBuilder>()
    public components = new Array<ActionRowBuilder<AnyComponentBuilder>>()
    public reply = false
    public ephemeral = false
    public files = new Array<AttachmentBuilder>()
    public channel?: Channel

    public async send(obj: Sendable, content?: string): Promise<unknown | null> {
        let res: Promise<unknown>
        const options = this.getOptions<any>(content)

        if (this.channel && this.channel.isTextBased()) {
            res = this.channel.send(options)
        } else if (obj instanceof Message) {
            res = this.reply ? obj.reply(options) : obj.channel.send(options)
        } else if (obj instanceof BaseInteraction && obj.isRepliable()) {
            res = obj[(obj.deferred || obj.replied ? "editReply" : "reply") as "reply"](options)
        } else if (obj instanceof BaseChannel && obj.isTextBased()) {
            res = obj.send(options)
        } else if (obj instanceof GuildMember || obj instanceof User) {
            res = obj.send(options)
        } else {
            res = Promise.resolve(null)
        }

        this.reset()
        return await res.catch(noop)
    }

    public embed(index: number) {
        return this.embeds[index] ??= new EmbedBuilder()
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