/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"
import { buildActionRow, buildComponent, isTopLevel } from "../../functions/components"
import { ActionRowBuilder, ComponentType } from "discord.js"

export default new NativeFunction({
    name: "$loadComponents",
    version: "1.4.0",
    aliases: ["$loadComponent"],
    description: "Loads components JSON (or array) to the response",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "component data",
            type: ArgType.Json,
            rest: false,
            required: true,
            description: "The components object or array of objects to load",
        },
    ],
    execute(ctx, [json]) {
        const components = Array.isArray(json)
            ? Array.isArray(json[0])
                ? json.map((row) => new ActionRowBuilder().addComponents(row?.map((comp: any) => buildActionRow(comp))))
                : isTopLevel(json[0]?.type as ComponentType)
                    ? json.map((comp) => buildComponent(comp, ctx))
                    : new Array(new ActionRowBuilder().addComponents(json?.map((comp) => buildActionRow(comp))))
            : new Array(isTopLevel(json?.type as ComponentType) ? buildComponent(json, ctx) : new ActionRowBuilder().addComponents(buildActionRow(json)))

        ctx.container.components.push(...components)

        return this.success()
    },
})