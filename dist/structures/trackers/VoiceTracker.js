"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceTracker = void 0;
const Logger_1 = require("../@internal/Logger");
class VoiceTracker {
    constructor() { }
    static init(client) {
        Logger_1.Logger.warn("The Voice Tracker is still beta, correct functionality is not guaranteed");
    }
}
exports.VoiceTracker = VoiceTracker;
//# sourceMappingURL=VoiceTracker.js.map