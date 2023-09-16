"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = exports.NativeEventName = void 0;
const discord_js_1 = require("discord.js");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
exports.NativeEventName = "native";
class EventManager {
    client;
    static Loaded = {};
    events = new discord_js_1.Collection();
    constructor(client) {
        this.client = client;
    }
    load(name, ...events) {
        for (const eventType of events.flat()) {
            EventManager.Loaded[name] ??= {};
            const event = EventManager.Loaded[name][eventType];
            if (!event)
                throw new Error(`Event ${name} => ${eventType} is not supported.`);
            if (this.events.get(name)?.has(eventType))
                continue;
            EventManager.Loaded[name][eventType] = event;
            this.events.ensure(name, () => new discord_js_1.Collection()).set(eventType, event);
            event.register(this.client);
        }
    }
    has(event) {
        return this.events.has(event);
    }
    static load(name, path) {
        this.Loaded[name] = {};
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js"))) {
            const req = require(file).default;
            this.Loaded[name][req.name] = req;
        }
    }
    static toJSON(name) {
        return Object.values(this.Loaded[name]).map((x) => ({ ...x.data }));
    }
}
exports.EventManager = EventManager;
// eslint-disable-next-line no-undef
EventManager.load(exports.NativeEventName, __dirname + "/../handlers/events");
//# sourceMappingURL=EventManager.js.map