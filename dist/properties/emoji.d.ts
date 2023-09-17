import { GuildEmoji } from "discord.js";
export declare enum EmojiProperty {
    guildID = "guildID",
    name = "name",
    id = "id",
    identifier = "identifier",
    requiresColons = "requiresColons",
    roles = "roles",
    managed = "managed",
    timestamp = "timestamp",
    animated = "animated",
    url = "url",
    format = "format"
}
export declare const EmojiProperties: import("../functions/defineProperties").Properties<typeof EmojiProperty, GuildEmoji>;
//# sourceMappingURL=emoji.d.ts.map