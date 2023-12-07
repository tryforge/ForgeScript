"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const discord_js_1 = require("discord.js");
const noop_1 = __importDefault(require("../functions/noop"));
class Container {
    content;
    embeds = new Array();
    components = new Array();
    reference;
    reply = false;
    followUp = false;
    edit = false;
    ephemeral = false;
    update = false;
    files = new Array();
    channel;
    fetchReply = false;
    modal;
    choices = new Array();
    async send(obj, content) {
        let res;
        const options = this.getOptions(content);
        if (!this.isValidMessage(options)) {
            return null;
        }
        if (this.channel && this.channel.isTextBased()) {
            res = this.channel.send(options);
        }
        else if (obj instanceof discord_js_1.AutoModerationActionExecution && obj.channel && "send" in obj.channel) {
            res = obj.channel.send(options);
        }
        else if (obj instanceof discord_js_1.WebhookClient) {
            res = obj.send(options);
        }
        else if (obj instanceof discord_js_1.Message) {
            res = this.edit ? obj.edit(options) : obj.channel.send(options);
        }
        else if (obj instanceof discord_js_1.BaseInteraction) {
            if (obj.isRepliable()) {
                if (this.modal && !obj.replied && "showModal" in obj) {
                    res = obj.showModal(this.modal);
                }
                else {
                    res =
                        obj[(this.followUp ? "followUp" : obj.deferred || obj.replied ? "editReply" : this.update ? "update" : "reply")](options);
                }
            }
            else {
                res = obj.respond(this.choices);
            }
        }
        else if (obj instanceof discord_js_1.BaseChannel && obj.isTextBased()) {
            res = obj.send(options);
        }
        else if (obj instanceof discord_js_1.GuildMember || obj instanceof discord_js_1.User) {
            res = obj.send(options);
        }
        else {
            res = Promise.resolve(null);
        }
        const result = await res.catch(noop_1.default);
        this.reset();
        return result;
    }
    isValidMessage(options) {
        return (!!options.content?.trim() ||
            !!options.embeds?.length ||
            !!options.stickers?.length ||
            !!options.files?.length ||
            !!options.components?.length ||
            !!options.attachments?.length ||
            !!this.modal ||
            !!this.choices.length);
    }
    embed(index) {
        return (this.embeds[index] ??= new discord_js_1.EmbedBuilder());
    }
    reset() {
        delete this.channel;
        delete this.content;
        delete this.modal;
        delete this.reference;
        this.followUp = false;
        this.reply = false;
        this.update = false;
        this.ephemeral = false;
        this.fetchReply = false;
        this.edit = false;
        this.choices.length = 0;
        this.components.length = 0;
        this.embeds.length = 0;
        this.files.length = 0;
    }
    getOptions(content) {
        return (content
            ? {
                content,
            }
            : {
                reply: this.reference
                    ? {
                        messageReference: this.reference,
                        failIfNotExists: false,
                    }
                    : undefined,
                files: this.files,
                ephemeral: this.ephemeral,
                content: this.content || null,
                components: this.components,
                embeds: this.embeds,
            });
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map