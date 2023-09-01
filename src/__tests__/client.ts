import { ForgeClient } from "../core/ForgeClient"
import { config } from "dotenv"
import { MyExtension } from "./ext"
import { ActivityType, Events } from "discord.js"
config()

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers"
    ],
    prefixes: [
        "!"
    ],
    optionalGuildID: true,
    extensions: [
        new MyExtension()
    ]
})

console.log("Started")

client.functions.add(
    "get_user",
    [ "id" ],
    "$return[$username[$env[id]]]"
)

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

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)