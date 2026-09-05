/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import defineProperties from "../functions/defineProperties"
import { BaseThemeType, SharedClientTheme } from "discord.js"

export enum ClientThemeProperty {
    baseMix = "baseMix",
    baseTheme = "baseTheme",
    gradientAngle = "gradientAngle",
    colors = "colors"
}

export const ClientThemeProperties = defineProperties<typeof ClientThemeProperty, SharedClientTheme>({
    baseMix: (i) => i?.baseMix,
    baseTheme: (i) => i?.baseTheme ? BaseThemeType[i?.baseTheme] : null,
    gradientAngle: (i) => i?.gradientAngle,
    colors: (i, sep) => i?.colors.join(sep ?? ", "),
})