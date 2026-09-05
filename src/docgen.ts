/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ComponentType, GatewayIntentBits, Locale, StickerFormatType } from "discord.js"
import generateMetadata from "./functions/generateMetadata"
import { NativeEventName } from "./managers"
import { EnumLike } from "./structures"
import { join } from "path"

const expose = {
    GatewayIntentBits: GatewayIntentBits,
    StickerFormatType: StickerFormatType,
    ComponentType: ComponentType,
} satisfies Record<string, EnumLike>

generateMetadata(
    // eslint-disable-next-line no-undef
    join(__dirname, "native"),
    "native",
    NativeEventName,
    false,
    expose,
    // eslint-disable-next-line no-undef
    join(__dirname, "handlers", "events")
)
