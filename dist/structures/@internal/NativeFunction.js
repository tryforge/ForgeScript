"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["URL"] = 0] = "URL";
    ArgType[ArgType["String"] = 1] = "String";
    ArgType[ArgType["BigInt"] = 2] = "BigInt";
    ArgType[ArgType["Unknown"] = 3] = "Unknown";
    ArgType[ArgType["OverwritePermission"] = 4] = "OverwritePermission";
    ArgType[ArgType["Number"] = 5] = "Number";
    ArgType[ArgType["User"] = 6] = "User";
    ArgType[ArgType["Date"] = 7] = "Date";
    ArgType[ArgType["Guild"] = 8] = "Guild";
    ArgType[ArgType["RoleOrUser"] = 9] = "RoleOrUser";
    ArgType[ArgType["Invite"] = 10] = "Invite";
    ArgType[ArgType["Permission"] = 11] = "Permission";
    ArgType[ArgType["Json"] = 12] = "Json";
    ArgType[ArgType["Color"] = 13] = "Color";
    ArgType[ArgType["Enum"] = 14] = "Enum";
    ArgType[ArgType["ForumTag"] = 15] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 16] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 17] = "Boolean";
    ArgType[ArgType["Attachment"] = 18] = "Attachment";
    ArgType[ArgType["Reaction"] = 19] = "Reaction";
    ArgType[ArgType["Message"] = 20] = "Message";
    ArgType[ArgType["Channel"] = 21] = "Channel";
    ArgType[ArgType["Role"] = 22] = "Role";
    ArgType[ArgType["Webhook"] = 23] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 24] = "GuildSticker";
    ArgType[ArgType["Time"] = 25] = "Time";
    ArgType[ArgType["Member"] = 26] = "Member";
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