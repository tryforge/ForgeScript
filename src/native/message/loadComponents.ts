import {
    APIButtonComponent,
    ComponentType,
    ActionRowBuilder,
    ButtonBuilder,
    ChannelSelectMenuBuilder,
    MentionableSelectMenuBuilder,
    RoleSelectMenuBuilder,
    StringSelectMenuBuilder,
    UserSelectMenuBuilder,
} from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

const ComponentBuilders = {
    [ComponentType.Button as ComponentType]: ButtonBuilder,
    [ComponentType.StringSelect as ComponentType]: StringSelectMenuBuilder,
    [ComponentType.UserSelect as ComponentType]: UserSelectMenuBuilder,
    [ComponentType.ChannelSelect as ComponentType]: ChannelSelectMenuBuilder,
    [ComponentType.RoleSelect as ComponentType]: RoleSelectMenuBuilder,
    [ComponentType.MentionableSelect as ComponentType]: MentionableSelectMenuBuilder,
}

function loadComponent(x: any) {
    return ComponentBuilders[x.type as ComponentType]?.from(x)
}

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
                ? json.map((row) => new ActionRowBuilder().addComponents(row?.map((x: any) => loadComponent(x))))
                : new Array(new ActionRowBuilder().addComponents(json?.map((x) => loadComponent(x))))
            : new Array(new ActionRowBuilder().addComponents(loadComponent(json)))
            
        ctx.container.components.push(...components)

        return this.success()
    },
})