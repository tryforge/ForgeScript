import { ClientEvents, Collection, GatewayIntentsString, Guild, GuildMember, Invite, PartialGuildMember } from "discord.js";
import { ForgeClient } from "../../core";
export interface IGuildInviter {
    inviterId: string;
    code: string;
}
export interface IGuildInvite {
    uses: number;
    userId: string;
    code: string;
}
export declare class InviteTracker {
    static readonly Invites: Collection<string, IGuildInvite[]>;
    static readonly RequiredIntents: GatewayIntentsString[];
    static readonly RequiredEvents: (keyof ClientEvents)[];
    /**
     * Guild => invited user => invited by
     */
    static readonly Inviters: Collection<string, Collection<string, IGuildInviter>>;
    private static init;
    static hasPermissions(guild: Guild): boolean;
    static uncache(guild: Guild): void;
    static cacheAll(client: ForgeClient): Promise<void>;
    static cache(guild: Guild): Promise<void>;
    static inviteCreateHandler(invite: Invite): Promise<void>;
    static inviteDeleteHandler(invite: Invite): Promise<void>;
    static deleteInviter(member: GuildMember | PartialGuildMember): void;
    static findInviter(member: GuildMember | PartialGuildMember): Promise<void>;
}
//# sourceMappingURL=InviteTracker.d.ts.map