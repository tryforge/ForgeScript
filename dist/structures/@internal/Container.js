"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/* eslint-disable indent */
const discord_js_1 = require("discord.js");
const noop_1 = __importDefault(require("../../functions/noop"));
const discord_js_2 = require("discord.js");
class Container {
    content;
    embeds = new Array();
    components = new Array();
    actionRow;
    inside = Array();
    reference;
    reply = false;
    followUp = false;
    edit = false;
    ephemeral = false;
    tts = false;
    update = false;
    isComponentsV2 = false;
    files = new Array();
    channel;
    stickers = new Array();
    withResponse = false;
    modal;
    choices = new Array();
    allowedMentions = {};
    avatarURL;
    username;
    poll;
    threadId;
    threadName;
    appliedTags;
    deleteIn;
    async send(obj, content, messageID) {
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
            res = this.edit && messageID ? obj.editMessage(messageID, options) : obj.send(options);
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
                        obj[(this.followUp
                            ? "followUp"
                            : obj.deferred || obj.replied
                                ? "editReply"
                                : this.update
                                    ? "update"
                                    : "reply")](options);
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
        const response = await res.catch(noop_1.default);
        const result = (response instanceof discord_js_1.InteractionCallbackResponse ? response.resource?.message : response);
        if (this.deleteIn && result instanceof discord_js_1.Message) {
            setTimeout(() => {
                result.delete().catch(noop_1.default);
            }, this.deleteIn);
        }
        this.reset();
        return result;
    }
    isValidMessage(options) {
        return (!!options.stickers?.length ||
            !!options.content?.trim() ||
            !!options.embeds?.length ||
            !!options.stickers?.length ||
            !!options.files?.length ||
            !!options.components?.length ||
            !!options.attachments?.length ||
            !!this.modal ||
            !!this.choices.length ||
            !!this.poll);
    }
    embed(index) {
        return (this.embeds[index] ??= new discord_js_1.EmbedBuilder());
    }
    /**
     * Checks if current context is inside a component builder function.
     * @param type The type of the component to check for.
     * @returns
     */
    isInside(type) {
        return this.inside.includes(type);
    }
    reset() {
        delete this.channel;
        delete this.content;
        delete this.modal;
        delete this.reference;
        delete this.poll;
        delete this.avatarURL;
        delete this.username;
        delete this.threadId;
        delete this.threadName;
        delete this.appliedTags;
        delete this.deleteIn;
        delete this.actionRow;
        this.followUp = false;
        this.reply = false;
        this.update = false;
        this.ephemeral = false;
        this.withResponse = false;
        this.edit = false;
        this.tts = false;
        this.isComponentsV2 = false;
        this.stickers.length = 0;
        this.choices.length = 0;
        this.components.length = 0;
        this.inside.length = 0;
        this.embeds.length = 0;
        this.files.length = 0;
        this.allowedMentions = {};
    }
    getOptions(content) {
        if (this.actionRow)
            this.components.push(this.actionRow);
        const flags = new Array();
        if (this.ephemeral)
            flags.push(discord_js_2.MessageFlags.Ephemeral);
        if (this.isComponentsV2)
            flags.push(discord_js_2.MessageFlags.IsComponentsV2);
        return (content
            ? {
                content,
            }
            : {
                poll: this.poll,
                username: this.username,
                avatarURL: this.avatarURL,
                allowedMentions: Object.keys(this.allowedMentions).length === 0 ? undefined : this.allowedMentions,
                withResponse: this.withResponse,
                reply: this.reference
                    ? {
                        messageReference: this.reference,
                        failIfNotExists: false,
                    }
                    : undefined,
                flags: flags.length === 0 ? undefined : flags,
                attachments: [],
                files: this.files.length === 0 ? null : this.files,
                stickers: this.stickers.length === 0 ? null : this.stickers,
                content: this.content?.trim() || null,
                components: this.components,
                embeds: this.embeds,
                tts: this.tts,
                threadId: this.threadId,
                threadName: this.threadName,
                appliedTags: this.appliedTags,
            });
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map