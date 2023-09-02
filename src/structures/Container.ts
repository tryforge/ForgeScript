import { ActionRowBuilder, AnyComponentBuilder, AttachmentBuilder, BaseChannel, BaseInteraction, Channel, EmbedBuilder, Guild, GuildEmoji, GuildMember, Interaction, InteractionReplyOptions, Message, MessageReplyOptions, ModalBuilder, Role, TextInputBuilder, User, VoiceState, WebhookClient } from "discord.js"
import noop from "../functions/noop"
import { ForgeClient } from "../core"

export type Sendable = null | Role | Message | User | GuildMember | BaseChannel | Interaction | VoiceState | WebhookClient | GuildEmoji | Guild

export class Container {
    public content?: string
    public embeds = new Array<EmbedBuilder>()
    public components = new Array<ActionRowBuilder<AnyComponentBuilder>>()
    public reply = false
    public ephemeral = false
    public files = new Array<AttachmentBuilder>()
    public channel?: Channel
    public fetchReply = false
    public modal?: ModalBuilder
    
    public async send<T = unknown>(obj: Sendable, content?: string): Promise<T | null> {
        let res: Promise<unknown>
        const options = this.getOptions<any>(content)

        if (this.channel && this.channel.isTextBased()) {
            res = this.channel.send(options)
        } else if (obj instanceof WebhookClient) {
            res = obj.send(options)
        } else if (obj instanceof Message) {
            res = this.reply ? obj.reply(options) : obj.channel.send(options)
        } else if (obj instanceof BaseInteraction && obj.isRepliable()) {
            if (this.modal && !obj.replied && "showModal" in obj) {
                res = obj.showModal(this.modal)
            } else {
                res = obj[(obj.deferred || obj.replied ? "editReply" : "reply") as "reply"](options)
            }
        } else if (obj instanceof BaseChannel && obj.isTextBased()) {
            res = obj.send(options)
        } else if (obj instanceof GuildMember || obj instanceof User) {
            res = obj.send(options)
        } else {
            res = Promise.resolve(null)
        }

        this.reset()
        return await res.catch(noop) as T
    }

    public embed(index: number) {
        return this.embeds[index] ??= new EmbedBuilder()
    }

    public reset() {
        delete this.channel
        delete this.content
        delete this.modal
        this.reply = false
        this.ephemeral = false
        this.fetchReply = false
        this.components.length = 0
        this.embeds.length = 0
        this.files.length = 0
    }

    public getOptions<T>(content?: string): T {
        return (content ?? {
            fetchReply: this.fetchReply,
            files: this.files,
            ephemeral: this.ephemeral,
            content: this.content || null,
            components: this.components,
            embeds: this.embeds,
        }) as T 
    }
}