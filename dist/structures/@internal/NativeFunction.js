"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["URL"] = 0] = "URL";
    ArgType[ArgType["String"] = 1] = "String";
    ArgType[ArgType["BigInt"] = 2] = "BigInt";
    ArgType[ArgType["Unknown"] = 3] = "Unknown";
    ArgType[ArgType["TextChannel"] = 4] = "TextChannel";
    ArgType[ArgType["OverwritePermission"] = 5] = "OverwritePermission";
    ArgType[ArgType["Number"] = 6] = "Number";
    ArgType[ArgType["User"] = 7] = "User";
    ArgType[ArgType["Date"] = 8] = "Date";
    ArgType[ArgType["Guild"] = 9] = "Guild";
    ArgType[ArgType["RoleOrUser"] = 10] = "RoleOrUser";
    ArgType[ArgType["Invite"] = 11] = "Invite";
    ArgType[ArgType["Permission"] = 12] = "Permission";
    ArgType[ArgType["Json"] = 13] = "Json";
    ArgType[ArgType["Color"] = 14] = "Color";
    ArgType[ArgType["Enum"] = 15] = "Enum";
    ArgType[ArgType["ForumTag"] = 16] = "ForumTag";
    ArgType[ArgType["Emoji"] = 17] = "Emoji";
    ArgType[ArgType["GuildEmoji"] = 18] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 19] = "Boolean";
    ArgType[ArgType["Attachment"] = 20] = "Attachment";
    ArgType[ArgType["Reaction"] = 21] = "Reaction";
    ArgType[ArgType["Message"] = 22] = "Message";
    ArgType[ArgType["Channel"] = 23] = "Channel";
    ArgType[ArgType["Role"] = 24] = "Role";
    ArgType[ArgType["Webhook"] = 25] = "Webhook";
    ArgType[ArgType["Sticker"] = 26] = "Sticker";
    ArgType[ArgType["Time"] = 27] = "Time";
    ArgType[ArgType["Member"] = 28] = "Member";
    ArgType[ArgType["ApplicationEmoji"] = 29] = "ApplicationEmoji";
    ArgType[ArgType["AutomodRule"] = 30] = "AutomodRule";
    ArgType[ArgType["ScheduledEvent"] = 31] = "ScheduledEvent";
    ArgType[ArgType["StageInstance"] = 32] = "StageInstance";
    ArgType[ArgType["SoundboardSound"] = 33] = "SoundboardSound";
    ArgType[ArgType["Template"] = 34] = "Template";
})(ArgType || (exports.ArgType = ArgType = {}));
class NativeFunction {
    data;
    async;
    path;
    constructor(data) {
        this.data = data;
        // @ts-ignore
        this.async = data.execute[Symbol.toStringTag] === "AsyncFunction";
    }
    get name() {
        return this.data.name;
    }
}
exports.NativeFunction = NativeFunction;
//# sourceMappingURL=NativeFunction.js.map