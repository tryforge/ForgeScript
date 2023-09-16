"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteSystem = void 0;
const discord_js_1 = require("discord.js");
const noop_1 = __importDefault(require("../functions/noop"));
const ForgeError_1 = require("./ForgeError");
const managers_1 = require("../managers");
class InviteSystem {
    static Invites = new discord_js_1.Collection();
    static RequiredIntents = ["Guilds", "GuildInvites", "GuildMembers"];
    static RequiredEvents = [
        "inviteCreate",
        "inviteDelete",
        "guildMemberAdd",
        "guildMemberUpdate",
        "guildMemberRemove",
        "guildCreate",
        "guildDelete",
    ];
    /**
     * Guild => invited user => invited by
     */
    static Inviters = new discord_js_1.Collection();
    static init(client) {
        if (!client.options.intents.has(InviteSystem.RequiredIntents))
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.Custom, `The next intents must be enabled: ${this.RequiredIntents.join(", ")}`);
        client.events.load(managers_1.NativeEventName, this.RequiredEvents);
        console.warn("The Invite System is still beta, correct functionality is not guaranteed");
    }
    static hasPermissions(guild) {
        return guild.members.me.permissions.has("ManageGuild");
    }
    static uncache(guild) {
        this.Invites.delete(guild.id);
        this.Inviters.delete(guild.id);
    }
    static async cacheAll(client) {
        for (const [, guild] of client.guilds.cache) {
            await this.cache(guild);
        }
    }
    static async cache(guild) {
        const invites = this.hasPermissions(guild) ? await guild.invites.fetch().catch(noop_1.default) : undefined;
        if (!invites) {
            console.error(`Failed to cache invites for guild ${guild.name}.`);
            return;
        }
        const arr = new Array();
        for (const [, invite] of invites) {
            if (invite.uses === null || invite.inviterId === null)
                continue;
            arr.push({
                uses: invite.uses,
                code: invite.code,
                userId: invite.inviterId,
            });
        }
        this.Invites.set(guild.id, arr);
    }
    static async inviteCreateHandler(invite) {
        const invites = this.Invites.get(invite.guild?.id);
        if (invites !== undefined) {
            invites.push({
                code: invite.code,
                userId: invite.inviterId,
                uses: 0,
            });
            return;
        }
        // Cache
        await this.cache(invite.guild);
    }
    static async inviteDeleteHandler(invite) {
        const invites = this.Invites.get(invite.guild?.id);
        if (!invites)
            return;
        const index = invites.findIndex((x) => x.code === invite.code);
        if (index !== -1)
            invites.splice(index, 1);
    }
    static deleteInviter(member) {
        this.Inviters.get(member.guild.id)?.delete(member.id);
    }
    static async findInviter(member) {
        const guild = member.guild;
        const newInvites = await guild.invites.fetch().catch(noop_1.default);
        const oldInvites = this.Invites.get(guild.id);
        if (!newInvites || !oldInvites) {
            console.error(`Failed to cache invites for guild ${guild.name}.`);
            return;
        }
        let used = null;
        for (let i = 0, len = oldInvites.length; i < len; i++) {
            const old = oldInvites[i];
            const inv = newInvites.get(old.code);
            // Invite does no longer exist
            if (!inv) {
                continue;
            }
            if (old.uses !== inv.uses) {
                used = old;
                old.uses = inv.uses;
                break;
            }
        }
        if (used !== null) {
            const invitedUsers = this.Inviters.ensure(guild.id, () => new discord_js_1.Collection());
            invitedUsers.set(member.id, {
                code: used.code,
                inviterId: used.userId,
            });
        }
        else
            console.error(`Could not resolve the invitation used by ${member.displayName} (${member.id}).`);
    }
}
exports.InviteSystem = InviteSystem;
//# sourceMappingURL=InviteSystem.js.map