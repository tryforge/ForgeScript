import { ActionRowBuilder, AnyComponentBuilder, ApplicationCommandOptionChoiceData, AttachmentBuilder, BaseChannel, BaseInteraction, Channel, EmbedBuilder, Guild, GuildEmoji, GuildMember, Interaction, InteractionEditReplyOptions, InteractionReplyOptions, Invite, Message, MessageReaction, MessageReplyOptions, ModalBuilder, Role, TextInputBuilder, User, VoiceState, WebhookClient } from "discord.js"
import noop from "../functions/noop"
import { ForgeClient } from "../core"
import { RawMessageData } from "discord.js/typings/rawDataTypes"

export type Sendable = null | Role | Message | User | GuildMember | BaseChannel | Interaction | VoiceState | WebhookClient | GuildEmoji | Guild | MessageReaction | Invite

export class Container {
    public content?: string
    public embeds = new Array<EmbedBuilder>()
    public components = new Array<ActionRowBuilder<AnyComponentBuilder>>()
    public reference?: string
    public reply = false
    public edit = false
    public ephemeral = false
    public update = false
    public files = new Array<AttachmentBuilder>()
    public channel?: Channel
    public fetchReply = false
    public modal?: ModalBuilder
    public choices = new Array<ApplicationCommandOptionChoiceData<string | number>>()

    public async send<T = unknown>(obj: Sendable, content?: string): Promise<T | null> {
        let res: Promise<unknown>
        const options = this.getOptions<any>(content)

        if (!this.isValidMessage(options)) {
            return null
        }

        if (this.channel && this.channel.isTextBased()) {
            res = this.channel.send(options)
        } else if (obj instanceof WebhookClient) {
            res = obj.send(options)
        } else if (obj instanceof Message) {
            res = this.edit ? obj.edit(options) : obj.channel.send(options)
        } else if (obj instanceof BaseInteraction) {
            if (obj.isRepliable()) {
                if (this.modal && !obj.replied && "showModal" in obj) {
                    res = obj.showModal(this.modal)
                } else {
                    res = obj[(obj.deferred || obj.replied ? "editReply" : this.update ? "update" : "reply") as "reply"](options)
                }
            } else {
                res = obj.respond(this.choices)
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

    public isValidMessage(options: MessageReplyOptions & InteractionReplyOptions & InteractionEditReplyOptions) {
        return !!options.content?.trim() || 
            !!options.embeds?.length || 
            !!options.stickers?.length ||
            !!options.files?.length ||
            !!options.components?.length ||
            !!options.attachments?.length || 
            !!this.modal ||
            !!this.choices.length
    }

    public embed(index: number) {
        return this.embeds[index] ??= new EmbedBuilder()
    }

    public reset() {
        delete this.channel
        delete this.content
        delete this.modal
        delete this.reference

        this.reply = false
        this.update = false
        this.ephemeral = false
        this.fetchReply = false
        this.edit = false

        this.choices.length = 0
        this.components.length = 0
        this.embeds.length = 0
        this.files.length = 0
    }

    public getOptions<T>(content?: string): T {
        return (content ? {
            content
        } : {
            reply: this.reference ? {
                messageReference: this.reference,
                failIfNotExists: false
            } : undefined,
            files: this.files,
            ephemeral: this.ephemeral,
            content: this.content || null,
            components: this.components,
            embeds: this.embeds,
        }) as T 
    }
}