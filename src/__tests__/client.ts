import { ForgeClient } from "../core"
import { config } from "dotenv"
import { ActivityType, ApplicationCommandType, Events } from "discord.js"
import { LogPriority } from "../structures/@internal/Logger"
import { MyExtension } from "./ext"
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
        "AutoModerationExecution",
    ],
    events: [
        "autoModerationActionExecution",
        "guildAuditLogEntryCreate",
        "ready",
        "messageCreate",
        "messageUpdate",
        "messageReactionAdd",
        "guildMemberAdd",
        "interactionCreate",
    ],
    extensions: [new MyExtension()],
    mobile: true,
    useInviteSystem: true,
    prefixes: ["!", "<@$botID>"],
    restrictions: {
        userIDs: ["1096285761365610576", "590267498192961540"],
    },
    respondOnEdit: 10000,
    optionalGuildID: true,
})

console.log("Started")

client.commands.add({
    type: Events.MessageReactionAdd,
    code: `
$log[$getEmbeds[$channelID;$messageID]]`
})

client.commands.add({
    type: "webhooksUpdate",
    code: "Hewwo",
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
    type: "interactionCreate",
    allowedInteractionTypes: [ "modal" ],
    code: `
    $log[hello $channelID | $messageID]
    $editButtonOf[$channelID;$messageID;yes;;;Danger;;true]
    `
})

client.commands.add({
    type: "messageCreate",
    name: "modal",
    code: `
    $addActionRow
    $addButton[yes;yes;Primary]
    Click
    `
})

client.commands.add({
    type: "interactionCreate",
    allowedInteractionTypes: [ "button" ],
    code: `
    $modal[yes;owa]
    $addTextInput[owa;owa;Short;true]
    $showModal
    `
})

client.commands.add({
    type: "messageCreate",
    name: "body",
    code: `
    $!jsonLoad[json;{}]
    $!jsonSet[$message;json;message]
    $!jsonSet[$authorID;json;id]
    $!jsonSet[$userAvatar;json;avatar]
    $!httpSetBody[$env[json]]
    $codeBlock[$env[json]]
    `,
})

client.commands.add({
    type: Events.GuildMemberAdd,
    code: "$sendMessage[1146874219515346984;<@$authorID> has joined using invite code $inviterCode by <@$inviterID>]",
})

client.commands.add({
    type: Events.ClientReady,
    code: `$log[Ready on client $username[$botID]]
    $setStatus[online;Custom;hi bro;hi bro]
    $optra[tst]
    $optra[waos;5]`,
})

client.commands.add({
    name: "eval",
    aliases: ["ev"],
    type: "messageCreate",
    code: "$eval[$message]",
})

client.commands.add({
    name: "djs",
    code: `
        $if[$true==true;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]                
        $let[text;$replace[$djsEval[const channel = ctx.message.channel \nconst message = ctx.message \nconst author = ctx.message.author \nconst client = ctx.message.client \nconst guild = ctx.message.guild \n$message];<ref *1> ;;1]]
        $if[$charCount[$get[text]]>1950;$attachment[$get[text];result.json;true];\`\`\`json\n$get[text]\n\`\`\`]
    `,
    type: "messageCreate",
})

client.commands.add({
    type: "autoModerationActionExecution",
    code: "$log[Blocked] $!djsEval[e]",
})

client.commands.add({
    allowedInteractionTypes: ["autocomplete"],
    type: "interactionCreate",
    code: `
    $log[Command name: $commandName | Focused option name: $focusedOptionName - $focusedOptionValue]
    $addChoice[tmr;land]
    `,
})

client.functions.add({
    name: "optra",
    params: ["message", "amount?"],
    code: `
        $if[$env[amount]==;
            $djsEval[console.log("$env[message]".repeat(2))];
            $djsEval[console.log("$env[message]".repeat(Number($env[amount])))]
        ]
        $return[]
    `
})

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)
