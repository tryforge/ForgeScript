import { ActionRowBuilder, AnyComponentBuilder, ApplicationCommandOptionChoiceData, AttachmentBuilder, AutoModerationActionExecution, BaseChannel, Channel, EmbedBuilder, Guild, GuildEmoji, GuildMember, GuildScheduledEvent, Interaction, InteractionEditReplyOptions, InteractionReplyOptions, Invite, Message, MessageMentionOptions, MessageReaction, MessageReplyOptions, ModalBuilder, PollData, Presence, Role, Sticker, StickerResolvable, ThreadChannelResolvable, User, VoiceState, WebhookClient } from "discord.js";
export type Sendable = {} | Sticker | GuildScheduledEvent | Role | Presence | Message | User | GuildMember | BaseChannel | Interaction | VoiceState | WebhookClient | GuildEmoji | Guild | MessageReaction | Invite | AutoModerationActionExecution;
export declare class Container {
    content?: string;
    embeds: EmbedBuilder[];
    components: ActionRowBuilder<AnyComponentBuilder>[];
    reference?: string;
    reply: boolean;
    followUp: boolean;
    edit: boolean;
    ephemeral: boolean;
    tts: boolean;
    update: boolean;
    files: AttachmentBuilder[];
    channel?: Channel;
    stickers: StickerResolvable[];
    withResponse: boolean;
    modal?: ModalBuilder;
    choices: ApplicationCommandOptionChoiceData<string | number>[];
    allowedMentions: MessageMentionOptions;
    avatarURL?: string;
    username?: string;
    poll?: PollData;
    threadId?: ThreadChannelResolvable;
    threadName?: string;
    appliedTags?: string[];
    deleteIn?: number;
    send<T = unknown>(obj: Sendable, content?: string): Promise<T | null>;
    isValidMessage(options: MessageReplyOptions & InteractionReplyOptions & InteractionEditReplyOptions): boolean;
    embed(index: number): EmbedBuilder;
    reset(): void;
    getOptions<T>(content?: string): T;
}
//# sourceMappingURL=Container.d.ts.map