import { MessageReaction } from "discord.js";
export declare enum ReactionProperty {
    emoji = "emoji",
    count = "count",
    burstCount = "burstCount",
    normalCount = "normalCount",
    me = "me",
    meBurst = "meBurst",
    burstColors = "burstColors"
}
export declare const ReactionProperties: import("../functions/defineProperties").Properties<typeof ReactionProperty, MessageReaction>;
//# sourceMappingURL=reaction.d.ts.map