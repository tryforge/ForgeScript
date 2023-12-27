"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
const Logger_1 = require("../structures/@internal/Logger");
(0, dotenv_1.config)();
const client = new core_1.ForgeClient({
    logLevel: Logger_1.LogPriority.High,
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
        "messageUpdate",
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
    respondOnEdit: 10000,
    optionalGuildID: true
});
console.log("Started");
client.commands.add({
    type: discord_js_1.Events.MessageReactionAdd,
    code: "$sendMessage[1148816643447865415;hello] $log[$guildID bro]",
});
client.commands.add({
    type: "webhooksUpdate",
    code: "Hewwo"
});
client.commands.add({
    type: discord_js_1.Events.InteractionCreate,
    code: `$onlyIf[$isButton]
    $title[hello!]
    $interactionUpdate
    `
});
client.commands.add({
    type: discord_js_1.Events.GuildAuditLogEntryCreate,
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
});
client.commands.add({
    type: discord_js_1.Events.GuildMemberAdd,
    code: "$sendMessage[1146874219515346984;<@$authorID> has joined using invite code $inviterCode by <@$inviterID>]",
});
client.commands.add({
    type: discord_js_1.Events.ClientReady,
    code: `$log[Ready on client $username[$botID]]
    $setStatus[online;Custom;hi bro;hi bro]`,
});
client.commands.add({
    name: "eval",
    aliases: ["ev"],
    type: "messageCreate",
    code: "$eval[$message;true]",
});
client.commands.add({
    name: "djs",
    code: `
        $if[$true==true;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]                
        $let[text;$replace[$djsEval[const channel = ctx.message.channel \nconst message = ctx.message \nconst author = ctx.message.author \nconst client = ctx.message.client \nconst guild = ctx.message.guild \n$message];<ref *1> ;;1]]
        $if[$charCount[$get[text]]>1950;$attachment[$get[text];result.json;true];\`\`\`json\n$get[text]\n\`\`\`]
    `,
    type: "messageCreate"
});
client.commands.add({
    type: "autoModerationActionExecution",
    code: "$log[Blocked] $!djsEval[e]"
});
client.commands.add({
    allowedInteractionTypes: [
        "autocomplete"
    ],
    type: "interactionCreate",
    code: `
    $log[Command name: $commandName | Focused option name: $focusedOptionName - $focusedOptionValue]
    $addChoice[tmr;land]
    `,
});
client.commands.load("dist/__tests__/commands");
client.applicationCommands.load("dist/__tests__/app");
// eslint-disable-next-line no-undef
client.login(process.env.TOKEN);
//# sourceMappingURL=client.js.map