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
    ArgType[ArgType["GuildEmoji"] = 17] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 18] = "Boolean";
    ArgType[ArgType["Attachment"] = 19] = "Attachment";
    ArgType[ArgType["Reaction"] = 20] = "Reaction";
    ArgType[ArgType["Message"] = 21] = "Message";
    ArgType[ArgType["Channel"] = 22] = "Channel";
    ArgType[ArgType["Role"] = 23] = "Role";
    ArgType[ArgType["Webhook"] = 24] = "Webhook";
    ArgType[ArgType["Sticker"] = 25] = "Sticker";
    ArgType[ArgType["Time"] = 26] = "Time";
    ArgType[ArgType["Member"] = 27] = "Member";
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