/* eslint-disable indent */
import {
    ActionRowBuilder,
    AnyComponentBuilder,
    ApplicationCommandOptionChoiceData,
    AttachmentBuilder,
    AutoModerationActionExecution,
    AutocompleteInteraction,
    BaseChannel,
    BaseInteraction,
    Channel,
    EmbedBuilder,
    Guild,
    GuildEmoji,
    GuildMember,
    GuildScheduledEvent,
    Interaction,
    InteractionEditReplyOptions,
    InteractionReplyOptions,
    Invite,
    Message,
    MessageMentionOptions,
    MessageReaction,
    MessageReplyOptions,
    ModalBuilder,
    PollData,
    Presence,
    Role,
    Sticker,
    StickerResolvable,
    TextChannel,
    TextInputBuilder,
    User,
    VoiceState,
    WebhookClient,
} from "discord.js"
import noop from "../../functions/noop"
import { ForgeClient } from "../../core"
import { RawMessageData } from "discord.js/typings/rawDataTypes"

export type Sendable =
    | {}
    | Sticker
    | GuildScheduledEvent
    | Role
    | Presence
    | Message
    | User
    | GuildMember
    | BaseChannel
    | Interaction
    | VoiceState
    | WebhookClient
    | GuildEmoji
    | Guild
    | MessageReaction
    | Invite
    | AutoModerationActionExecution

export class Container {
    public content?: string
    public embeds = new Array<EmbedBuilder>()
    public components = new Array<ActionRowBuilder<AnyComponentBuilder>>()
    public reference?: string
    public reply = false
    public followUp = false
    public edit = false
    public ephemeral = false
    public tts = false
    public update = false
    public files = new Array<AttachmentBuilder>()
    public channel?: Channel
    public stickers = new Array<StickerResolvable>()
    public fetchReply = false
    public modal?: ModalBuilder
    public choices = new Array<ApplicationCommandOptionChoiceData<string | number>>()
    public allowedMentions: MessageMentionOptions = {}
    public avatarURL?: string
    public username?: string
    public poll?: PollData

    public async send<T = unknown>(obj: Sendable, content?: string): Promise<T | null> {
        let res: Promise<unknown>
        const options = this.getOptions<any>(content)

        if (!this.isValidMessage(options)) {
            return null
        }

        if (this.channel && this.channel.isTextBased()) {
            res = (this.channel as TextChannel).send(options)
        } else if (obj instanceof AutoModerationActionExecution && obj.channel && "send" in obj.channel) {
            res = obj.channel.send(options)
        } else if (obj instanceof WebhookClient) {
            res = obj.send(options)
        } else if (obj instanceof Message) {
            res = this.edit ? obj.edit(options) : (obj.channel as TextChannel).send(options)
        } else if (obj instanceof BaseInteraction) {
            if (obj.isRepliable()) {
                if (this.modal && !obj.replied && "showModal" in obj) {
                    res = obj.showModal(this.modal)
                } else {
                    res =
                        obj[
                            (this.followUp
                                ? "followUp"
                                : obj.deferred || obj.replied
                                ? "editReply"
                                : this.update
                                ? "update"
                                : "reply") as "reply"
                        ](options)
                }
            } else {
                res = (obj as AutocompleteInteraction).respond(this.choices)
            }
        } else if (obj instanceof BaseChannel && obj.isTextBased()) {
            res = (obj as TextChannel).send(options)
        } else if (obj instanceof GuildMember || obj instanceof User) {
            res = obj.send(options)
        } else {
            res = Promise.resolve(null)
        }

        const result = (await res.catch(noop)) as T
        this.reset()
        return result
    }

    public isValidMessage(options: MessageReplyOptions & InteractionReplyOptions & InteractionEditReplyOptions) {
        return (
            !!options.stickers?.length ||
            !!options.content?.trim() ||
            !!options.embeds?.length ||
            !!options.stickers?.length ||
            !!options.files?.length ||
            !!options.components?.length ||
            !!options.attachments?.length ||
            !!this.modal ||
            !!this.choices.length ||
            !!this.poll
        )
    }

    public embed(index: number) {
        return (this.embeds[index] ??= new EmbedBuilder())
    }

    public reset() {
        delete this.channel
        delete this.content
        delete this.modal
        delete this.reference
        delete this.poll
        delete this.avatarURL
        delete this.username

        this.followUp = false
        this.reply = false
        this.update = false
        this.ephemeral = false
        this.fetchReply = false
        this.edit = false
        this.tts = false

        this.stickers.length = 0
        this.choices.length = 0
        this.components.length = 0
        this.embeds.length = 0
        this.files.length = 0

        this.allowedMentions = {}
    }

    public getOptions<T>(content?: string): T {
        return (
            content
                ? {
                      content,
                  }
                : {
                      poll: this.poll,
                      username: this.username,
                      avatarURL: this.avatarURL,
                      allowedMentions:
                          Object.keys(this.allowedMentions).length === 0 ? undefined : this.allowedMentions,
                      fetchReply: this.fetchReply,
                      reply: this.reference
                          ? {
                                messageReference: this.reference,
                                failIfNotExists: false,
                            }
                          : undefined,
                      ephemeral: this.ephemeral,
                      attachments: [],
                      files: this.files.length === 0 ? null : this.files,
                      stickers: this.stickers.length === 0 ? null : this.stickers,
                      content: this.content?.trim() || null,
                      components: this.components,
                      embeds: this.embeds,
                      tts: this.tts
                  }
        ) as T
    }
}
