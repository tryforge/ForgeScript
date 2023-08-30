import { ForgeClient } from "../core/ForgeClient"
import { config } from "dotenv"
import { MyExtension } from "./ext"
import { ActivityType } from "discord.js"
config()

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers"
    ],
    events: [
        "messageCreate",
        "ready",
        "interactionCreate",
        "messageUpdate",
        "messageDelete"
    ],
    prefixes: [
        "!"
    ],
    presence: {
        status: "idle",
        activities: [
            {
                name: "hi bro",
                state: "hi bro",
                type: ActivityType.Custom
            }
        ]
    },
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
    name: "eval",
    aliases: [ "ev" ],
    type: "messageCreate",
    code: "$eval[$message;true]",
    unprefixed: true
})

client.commands.add({
    type: "messageUpdate",
    code: `
message id $messageID updated by $username:
old content: $oldMessage[content]
new content: $newMessage[content]    
`
})

client.commands.add({
    type: "messageDelete",
    code: `
    a message has been deleted by $username, content: $message
    `
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