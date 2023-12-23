import { ForgeClient } from "../core/ForgeClient"
import { config } from "dotenv"
import { MyExtension } from "./ext"
import { ActivityType, Events } from "discord.js"
import { FunctionManager } from "../managers"
import { Compiler } from "../core"
import { LogPriority } from "../structures/Logger"
config()

const client = new ForgeClient({
    logLevel: LogPriority.High,
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers",
        "DirectMessages",
        "GuildInvites",
        "GuildModeration",
        "GuildMessageReactions",
        "AutoModerationExecution"
    ],
    events: [
        "autoModerationActionExecution",
        "guildAuditLogEntryCreate",
        "ready",
        "messageCreate",
        "messageReactionAdd",
        "guildMemberAdd",
        "interactionCreate",
    ],
    disableFunctions: [
        "$guildName",
        "$cope"
    ],
    mobile: true,
    useInviteSystem: true,
    prefixes: ["!"],
    restrictions: {
        userIDs: ["1096285761365610576"],
    },
    optionalGuildID: true,
    extensions: []
})

console.log("Started")

client.commands.add({
    type: Events.MessageReactionAdd,
    code: "$sendMessage[1148816643447865415;hello] $log[$guildID bro]",
})

client.commands.add({
    type: Events.InteractionCreate,
    code: `$onlyIf[$isButton]
    $title[hello!]
    $interactionUpdate
    `
})

client.commands.add({
    type: Events.GuildAuditLogEntryCreate,
    code: `
    $sendMessage[1148787451490476092;
        Executor Id: $auditLog[executorID]
        Target Id: $auditLog[targetID]
        Action Type: $auditLog[actionType]
        Target Type: $auditLog[targetType]
        Changes: $auditLog[changes]
        Extras: $auditLog[extra]
    ]
    `,
})

client.commands.add({
    type: Events.GuildMemberAdd,
    code: "$sendMessage[1146874219515346984;<@$authorID> has joined using invite code $inviterCode by <@$inviterID>]",
})

client.commands.add({
    type: Events.ClientReady,
    code: `$log[Ready on client $username[$botID]]
    $setStatus[online;Custom;hi bro;hi bro]`,
})

client.commands.add({
    name: "eval",
    aliases: ["ev"],
    type: "messageCreate",
    code: "$eval[$message;true]",
})

client.commands.add({
    name: "djs",
    type: "messageCreate",
    code: `
    $let[text;$replace[$djsEval[const channel = ctx.message.channel \nconst message = ctx.message \nconst author = ctx.message.author \nconst client = ctx.message.client \nconst guild = ctx.message.guild \n$message];<ref *1> ;;1]]
$if[$charCount[$get[text]]>1950;$attachment[$get[text];result.json;true];\n\`\`\`json\n$get[text]\n\`\`\`]
 `,
})

client.commands.add({
    type: "autoModerationActionExecution",
    code: "$log[Blocked]"
})

client.commands.add({
    allowedInteractionTypes: [
        "autocomplete"
    ],
    type: "interactionCreate",
    code: `
    $log[Command name: $commandName | Focused option name: $focusedOptionName - $focusedOptionValue]
    $addChoice[tmr;land]
    `,
})

client.commands.load("dist/__tests__/commands")
client.applicationCommands.load("dist/__tests__/app")

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)
