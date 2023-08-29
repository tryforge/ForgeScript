import { ForgeClient } from "../core/ForgeClient"
import { config } from "dotenv"
import { MyExtension } from "./ext"
config()

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages"
    ],
    events: [
        "messageCreate",
        "ready",
        "interactionCreate"
    ],
    prefixes: [
        "!"
    ],
    extensions: [
        new MyExtension()
    ]
})

client.functions.add(
    "get_user",
    [ "id" ],
    "$return[$username[$environment[id]]]"
)

client.commands.add({
    name: "eval",
    aliases: [ "ev" ],
    type: "messageCreate",
    code: "$eval[$message;true]",
    unprefixed: true
})

client.commands.add({
    type: "interactionCreate",
    code: `$interactionReply[Is menu: $isAnySelectMenu | Is button: $isButton | custom id: $customID | values if menu: $selectMenuValues;yes]
$stop`
})

client.commands.add({
    name: "djs",
    type: "messageCreate",
    code: "$djsEval[$message]"
})

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)