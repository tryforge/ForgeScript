import generateMetadata from "./functions/generateMetadata"
import { NativeEventName } from "./managers"

// eslint-disable-next-line no-undef
generateMetadata(`${__dirname}/native`, "native", NativeEventName)