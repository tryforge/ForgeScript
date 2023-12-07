import { ActionRowBuilder, AnyComponentBuilder, ApplicationCommandOptionChoiceData, AttachmentBuilder, AutoModerationActionExecution, BaseChannel, Channel, EmbedBuilder, Guild, GuildEmoji, GuildMember, Interaction, InteractionEditReplyOptions, InteractionReplyOptions, Invite, Message, MessageReaction, MessageReplyOptions, ModalBuilder, Presence, Role, User, VoiceState, WebhookClient } from "discord.js";
export type Sendable = null | Role | Presence | Message | User | GuildMember | BaseChannel | Interaction | VoiceState | WebhookClient | GuildEmoji | Guild | MessageReaction | Invite | AutoModerationActionExecution;
export declare class Container {
    content?: string;
    embeds: EmbedBuilder[];
    components: ActionRowBuilder<AnyComponentBuilder>[];
    reference?: string;
    reply: boolean;
    followUp: boolean;
    edit: boolean;
    ephemeral: boolean;
    update: boolean;
    files: AttachmentBuilder[];
    channel?: Channel;
    fetchReply: boolean;
    modal?: ModalBuilder;
    choices: ApplicationCommandOptionChoiceData<string | number>[];
    send<T = unknown>(obj: Sendable, content?: string): Promise<T | null>;
    isValidMessage(options: MessageReplyOptions & InteractionReplyOptions & InteractionEditReplyOptions): boolean;
    embed(index: number): EmbedBuilder;
    reset(): void;
    getOptions<T>(content?: string): T;
}
//# sourceMappingURL=Container.d.ts.map