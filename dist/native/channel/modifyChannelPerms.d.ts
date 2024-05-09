import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    pointer: number;
    pointerProperty: string;
    type: ArgType.RoleOrUser;
}, {
    name: string;
    rest: true;
    required: true;
    type: ArgType.OverwritePermission;
    description: string;
    enum: {
        readonly CreateInstantInvite: bigint;
        readonly KickMembers: bigint;
        readonly BanMembers: bigint;
        readonly Administrator: bigint;
        readonly ManageChannels: bigint;
        readonly ManageGuild: bigint;
        readonly AddReactions: bigint;
        readonly ViewAuditLog: bigint;
        readonly PrioritySpeaker: bigint;
        readonly Stream: bigint;
        readonly ViewChannel: bigint;
        readonly SendMessages: bigint;
        readonly SendTTSMessages: bigint;
        readonly ManageMessages: bigint;
        readonly EmbedLinks: bigint;
        readonly AttachFiles: bigint;
        readonly ReadMessageHistory: bigint;
        readonly MentionEveryone: bigint;
        readonly UseExternalEmojis: bigint;
        readonly ViewGuildInsights: bigint;
        readonly Connect: bigint;
        readonly Speak: bigint;
        readonly MuteMembers: bigint;
        readonly DeafenMembers: bigint;
        readonly MoveMembers: bigint;
        readonly UseVAD: bigint;
        readonly ChangeNickname: bigint;
        readonly ManageNicknames: bigint;
        readonly ManageRoles: bigint;
        readonly ManageWebhooks: bigint;
        readonly ManageEmojisAndStickers: bigint;
        readonly ManageGuildExpressions: bigint;
        readonly UseApplicationCommands: bigint;
        readonly RequestToSpeak: bigint;
        readonly ManageEvents: bigint;
        readonly ManageThreads: bigint;
        readonly CreatePublicThreads: bigint;
        readonly CreatePrivateThreads: bigint;
        readonly UseExternalStickers: bigint;
        readonly SendMessagesInThreads: bigint;
        readonly UseEmbeddedActivities: bigint;
        readonly ModerateMembers: bigint;
        readonly ViewCreatorMonetizationAnalytics: bigint;
        readonly UseSoundboard: bigint;
        readonly CreateGuildExpressions: bigint;
        readonly CreateEvents: bigint;
        readonly UseExternalSounds: bigint;
        readonly SendVoiceMessages: bigint;
        readonly SendPolls: bigint;
    };
}], true>;
export default _default;
//# sourceMappingURL=modifyChannelPerms.d.ts.map