/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRow, BaseChannel, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { ComponentProperties, ComponentProperty } from "../../properties/component"
import { MessageFlags } from "discord.js"

export default new NativeFunction({
    name: "$getComponents",
    version: "1.4.0",
    description: "Retrieves data of a component, not providing any property returns component json",
    unwrap: true,
    brackets: false,
    aliases: ["$getComponent"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "row index",
            description: "The row index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "component index",
            description: "The first component index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The first property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ComponentProperty,
            required: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value in case of array",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "component index",
            description: "The second component index to get data from",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The second property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ComponentProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, m, rowIndex, compIndex1, prop1, sep, compIndex2, prop2]) {
        m ??= ctx.message!
        let isV2 = m.flags.has(MessageFlags.IsComponentsV2)

        if (typeof rowIndex !== "number") {
            return this.successJSON(m?.components.map((x) =>
                isV2 ? x.toJSON() : (x as ActionRow<MessageActionRowComponent>).components
            ))
        }

        const row = m.components[rowIndex]
        const comps = "components" in row ? row.components : undefined
        const comp = (typeof compIndex1 === "number" ? comps?.[compIndex1] : undefined)

        if (!prop1) {
            return this.successJSON((isV2 ? comp : comp?.data) ?? (isV2 ? row : comps))
        }

        const comp1 = comp ?? row

        if (prop1 !== ComponentProperty.components && prop1 !== ComponentProperty.accessory) {
            return this.success(ComponentProperties[prop1](comp1, sep))
        }

        const comps2 = (prop1 === ComponentProperty.accessory && comp1 && "accessory" in comp1)
            ? comp1.accessory
            : comp1 && "components" in comp1
                ? comp1.components
                : undefined
        const comp2 = (!Array.isArray(comps2) ? comps2 : typeof compIndex2 === "number" ? comps2?.[compIndex2] : undefined)

        if (!prop2) {
            return this.successJSON(comp2?.data ?? comps2)
        }

        return this.success(ComponentProperties[prop2](comp2, sep))
    },
})