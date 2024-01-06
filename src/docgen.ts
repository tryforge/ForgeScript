import { GatewayIntentBits } from "discord.js"
import { EnumLike, Logger } from "./structures"
import { NativeEventName } from "./managers"
import generateMetadata from "./functions/generateMetadata"

const expose = {
    "GatewayIntentBits": GatewayIntentBits
} satisfies Record<string, EnumLike>

Logger.info("Generating Metadata")
generateMetadata(
    // eslint-disable-next-line no-undef
    `${__dirname}/native`, 
    "native", 
    NativeEventName,
    false, 
    expose,
    // eslint-disable-next-line no-undef
    `${__dirname}/handlers/events`
)