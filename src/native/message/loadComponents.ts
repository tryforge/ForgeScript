import {
    APIButtonComponent,
    APIEmbed,
    APISelectMenuComponent,
    ActionRowBuilder,
    AnyComponentBuilder,
    ButtonBuilder,
    ComponentType,
    EmbedBuilder,
    SelectMenuBuilder,
} from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadComponents",
    version: "1.4.0",
    aliases: ["$loadComponent"],
    description: "Loads components json (or array) to the response",
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
        if (Array.isArray(json)) {
            ctx.container.components.push(
                ...json.map((x) =>
                    new ActionRowBuilder().addComponents(
                        (x as any).map((x: any) =>
                            x.type === ComponentType.Button ? ButtonBuilder.from(x) : SelectMenuBuilder.from(x)
                        )
                    )
                )
            )
        } else {
            ctx.container.components.push(
                new ActionRowBuilder().addComponents(
                    json.type === ComponentType.Button
                        ? ButtonBuilder.from(json as unknown as APIButtonComponent)
                        : SelectMenuBuilder.from(json as any)
                )
            )
        }

        return this.success()
    },
})
