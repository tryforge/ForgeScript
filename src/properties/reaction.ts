/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { MessageReaction } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ReactionProperty {
    emoji = "emoji",
    count = "count",
    burstCount = "burstCount",
    normalCount = "normalCount",
    me = "me",
    meBurst = "meBurst",
    burstColors = "burstColors",
}

export const ReactionProperties = defineProperties<typeof ReactionProperty, MessageReaction>({
    emoji: (i) => i?.emoji.toString(),
    count: (i) => i?.count,
    burstCount: (i) => i?.countDetails.burst,
    normalCount: (i) => i?.countDetails.normal,
    me: (i) => i?.me,
    meBurst: (i) => i?.meBurst,
    burstColors: (i, sep) => i?.burstColors?.join(sep ?? ", "),
})