"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CooldownManager = void 0;
const discord_js_1 = require("discord.js");
class CooldownManager {
    client;
    cooldowns = new discord_js_1.Collection();
    constructor(client) {
        this.client = client;
    }
    add(id, duration) {
        this.cooldowns.set(id, {
            startedAt: Date.now(),
            duration,
        });
    }
    delete(id) {
        this.cooldowns.delete(id);
    }
    clear() {
        this.cooldowns.clear();
    }
    getTimeLeft(id) {
        const data = this.cooldowns.get(id);
        return data ? Math.max(data.duration - (Date.now() - data.startedAt), 0) : 0;
    }
}
exports.CooldownManager = CooldownManager;
//# sourceMappingURL=CooldownManager.js.map