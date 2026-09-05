import { AutoModerationRule, Channel, Entitlement, Guild, GuildAuditLogsEntry, GuildBan, GuildEmoji, GuildMember, GuildScheduledEvent, Invite, Message, PartialMessage, PartialPollAnswer, PartialSoundboardSound, PollAnswer, Presence, Role, SoundboardSound, StageInstance, Sticker, Subscription, User, VoiceChannelEffect, VoiceServerUpdateData, VoiceState } from "discord.js";
import { IExtendedCompilationResult } from ".";
import { Sendable, BaseCommand, Context, Container, ILocalFunctionData } from "../structures";
import { ForgeClient } from "./ForgeClient";
export interface IStates {
    message: Message;
    voiceState: VoiceState;
    voiceServer: VoiceServerUpdateData;
    voiceEffect: VoiceChannelEffect;
    presence: Presence;
    role: Role;
    member: GuildMember;
    emoji: GuildEmoji;
    user: User;
    audit: GuildAuditLogsEntry;
    channel: Channel;
    guild: Guild;
    poll: PollAnswer | PartialPollAnswer;
    entitlement: Entitlement;
    ban: GuildBan;
    scheduledEvent: GuildScheduledEvent;
    bulk: Array<Message | PartialMessage>;
    stage: StageInstance;
    invite: Invite;
    sticker: Sticker;
    automodRule: AutoModerationRule;
    soundboardSound: SoundboardSound | PartialSoundboardSound;
    subscription: Subscription;
}
export type States = {
    [K in keyof IStates]?: {
        old?: IStates[K] | null;
        new?: IStates[K] | null;
    };
};
export interface IRunnable {
    /**
     * The available discord client
     */
    client: ForgeClient;
    /**
     * The compiled data to execute
     */
    data: IExtendedCompilationResult;
    allowTopLevelReturn?: boolean;
    /**
     * The context this code will run in
     */
    obj: Sendable;
    /**
     * The command used for this execution
     */
    command: BaseCommand<unknown> | null;
    /**
     * Whether to suppress sending the response to discord.
     */
    doNotSend?: boolean;
    /**
     * Removes errors output to console
     */
    disableConsoleErrors?: boolean;
    /**
     * Extras data
     */
    extras?: unknown;
    /**
     * Whether to suppress errors from being sent to discord, and be sent to console instead
     */
    redirectErrorsToConsole?: boolean;
    /**
     * The old and new states of an event
     */
    states?: States;
    /**
     * The already existing variables defined with $let
     */
    keywords?: Record<string, unknown>;
    /**
     * The already existing env variables
     */
    environment?: Record<string, unknown>;
    /**
     * The already existing local functions
     */
    localFunctions?: Record<string, ILocalFunctionData>;
    /**
     * The args used in the message command
     */
    args?: string[];
    /**
     * The container reference to use
     */
    container?: Container;
}
export declare class Interpreter {
    static run(ctx: Context): Promise<string | null>;
    static run(runtime: IRunnable): Promise<string | null>;
}
//# sourceMappingURL=Interpreter.d.ts.map