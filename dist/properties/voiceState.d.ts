import { VoiceState } from "discord.js";
export declare enum VoiceStateProperty {
    channelID = "channelID",
    guildID = "guildID",
    authorID = "authorID",
    deaf = "deaf",
    selfDeaf = "selfDeaf",
    guildDeaf = "guildDeaf",
    muted = "muted",
    selfMuted = "selfMuted",
    guildMuted = "guildMuted",
    timestamp = "timestamp"
}
export declare const VoiceStateProperties: import("../functions/defineProperties").Properties<typeof VoiceStateProperty, VoiceState>;
//# sourceMappingURL=voiceState.d.ts.map