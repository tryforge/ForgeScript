"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const generateMetadata_1 = __importDefault(require("./functions/generateMetadata"));
const managers_1 = require("./managers");
const expose = {
    "GatewayIntentBits": discord_js_1.GatewayIntentBits,
    "StickerFormatType": discord_js_1.StickerFormatType
};
(0, generateMetadata_1.default)(
// eslint-disable-next-line no-undef
`${__dirname}/native`, "native", managers_1.NativeEventName, false, expose, 
// eslint-disable-next-line no-undef
`${__dirname}/handlers/events`, [
    "es"
]);
//# sourceMappingURL=docgen.js.map