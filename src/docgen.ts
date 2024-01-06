import { GatewayIntentBits } from "discord.js"
import generateMetadata from "./functions/generateMetadata"
import { NativeEventName } from "./managers"
import { EnumLike } from "./structures"

const expose = {
    "GatewayIntentBits": GatewayIntentBits
} satisfies Record<string, EnumLike>

generateMetadata(
    // eslint-disable-next-line no-undef
    `${__dirname}/native`, 
    "native", 
    NativeEventName, 
    false, 
    expose
)