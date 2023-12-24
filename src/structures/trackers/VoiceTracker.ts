import { ForgeClient } from "../../core"
import { Logger } from "../@internal/Logger"

export class VoiceTracker {
    private constructor() {}

    private static init(client: ForgeClient) {
        Logger.warn("The Voice Tracker is still beta, correct functionality is not guaranteed")
    }
}