import { ActionRowBuilder, ApplicationCommandOptionChoiceData, AttachmentBuilder, AutoModerationActionExecution, BaseChannel, Channel, ComponentType, ContainerBuilder, ContainerComponentBuilder, EmbedBuilder, Guild, GuildEmoji, GuildMember, GuildScheduledEvent, Interaction, InteractionEditReplyOptions, InteractionReplyOptions, Invite, Message, MessageActionRowComponentBuilder, MessageMentionOptions, MessageReaction, MessageReplyOptions, ModalBuilder, PollData, Presence, Role, SoundboardSound, Sticker, StickerResolvable, ThreadChannelResolvable, User, VoiceState, WebhookClient } from "discord.js";
export type Sendable = {} | Sticker | GuildScheduledEvent | Role | Presence | Message | User | GuildMember | BaseChannel | Interaction | VoiceState | WebhookClient | GuildEmoji | Guild | MessageReaction | Invite | AutoModerationActionExecution | SoundboardSound;
export declare class Container {
    content?: string;
    embeds: EmbedBuilder[];
    components: (ContainerBuilder | ContainerComponentBuilder)[];
    actionRow?: ActionRowBuilder<MessageActionRowComponentBuilder>;
    inside: ComponentType[];
    reference?: string;
    reply: boolean;
    followUp: boolean;
    edit: boolean;
    ephemeral: boolean;
    tts: boolean;
    update: boolean;
    isComponentsV2: boolean;
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
    send<T = unknown>(obj: Sendable, content?: string, messageID?: string): Promise<T | null>;
    isValidMessage(options: MessageReplyOptions & InteractionReplyOptions & InteractionEditReplyOptions): boolean;
    embed(index: number): EmbedBuilder;
    /**
     * Checks if current context is inside a component builder function.
     * @param type The type of the component to check for.
     * @returns
     */
    isInside(type: ComponentType): boolean;
    reset(): void;
    getOptions<T>(content?: string): T;
}
//# sourceMappingURL=Container.d.ts.map