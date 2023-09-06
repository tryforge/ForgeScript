import { ForgeClient } from "../core/ForgeClient"
import { config } from "dotenv"
import { MyExtension } from "./ext"
import { ActivityType, Events } from "discord.js"
import { FunctionManager } from "../managers"
import { Compiler } from "../core"
config()

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers",
        "DirectMessages",
        "GuildInvites",
        "GuildModeration"
    ],
    useInviteSystem: true,
    prefixes: [
        "!"
    ],
    restrictions: {
    },
    optionalGuildID: true,
    extensions: [
    ]
})

console.log(
    "Started"
)

client.functions.add(
    "get_user",
    [ "id" ],
    "$return[$username[$env[id]]]"
)

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
    `
})

client.commands.add({
    type: Events.GuildMemberAdd,
    code: "$sendMessage[1146874219515346984;<@$authorID> has joined using invite code $inviterCode by <@$inviterID>]"
})

client.commands.add({
    type: Events.ClientReady,
    code: `$log[Ready on client $username[$botID]]
    $setStatus[online;Custom;hi bro;hi bro]`
})

client.commands.add({
    name: "eval",
    aliases: [ "ev" ],
    type: "messageCreate",
    code: "$eval[$message;true]",
    unprefixed: true
})

client.commands.add({
    type: "interactionCreate",
    code: `$if[$isButton==false;
        $log[Not a button, modal?: $isModal, field value: $input[hello]]
    ;
        $log[Modal!]
        $modal[hello;Hi bro]
        $addTextInput[hello;wsg;Short;true]
    ]
    `
})

client.commands.add({
    name: "djs",
    type: "messageCreate",
    code: "$djsEval[$message]"
})

client.commands.load("dist/__tests__/commands")

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)