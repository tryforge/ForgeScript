import { Sendable } from "../structures/Container";
import { IExtendedCompilationResult } from "./Compiler";
import { ForgeClient } from "./ForgeClient";
import { Channel, Guild, GuildAuditLogsEntry, GuildEmoji, GuildMember, Invite, Message, Presence, Role, User, VoiceState } from "discord.js";
import { BaseCommand } from "../structures";
export interface IStates {
    message: Message;
    voiceState: VoiceState;
    presence: Presence;
    role: Role;
    member: GuildMember;
    emoji: GuildEmoji;
    user: User;
    audit: GuildAuditLogsEntry;
    channel: Channel;
    guild: Guild;
    invite: Invite;
}
export type States = {
    [K in keyof IStates]?: {
        old?: IStates[K] | null;
        new?: IStates[K] | null;
    };
};
export interface IRunnable {
    client: ForgeClient;
    data: IExtendedCompilationResult;
    obj: Sendable;
    command: BaseCommand<unknown> | null;
    doNotSend?: boolean;
    extras?: unknown;
    states?: States;
    keywords?: Record<string, string>;
    environment?: Record<string, unknown>;
    args?: string[];
}
export declare class Interpreter {
    static run(runtime: IRunnable): Promise<string | null>;
}
//# sourceMappingURL=Interpreter.d.ts.map