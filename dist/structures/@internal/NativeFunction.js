"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["URL"] = 0] = "URL";
    ArgType[ArgType["String"] = 1] = "String";
    ArgType[ArgType["BigInt"] = 2] = "BigInt";
    ArgType[ArgType["OverwritePermission"] = 3] = "OverwritePermission";
    ArgType[ArgType["Number"] = 4] = "Number";
    ArgType[ArgType["User"] = 5] = "User";
    ArgType[ArgType["Date"] = 6] = "Date";
    ArgType[ArgType["Guild"] = 7] = "Guild";
    ArgType[ArgType["RoleOrUser"] = 8] = "RoleOrUser";
    ArgType[ArgType["Invite"] = 9] = "Invite";
    ArgType[ArgType["Permission"] = 10] = "Permission";
    ArgType[ArgType["Json"] = 11] = "Json";
    ArgType[ArgType["Color"] = 12] = "Color";
    ArgType[ArgType["Enum"] = 13] = "Enum";
    ArgType[ArgType["ForumTag"] = 14] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 15] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 16] = "Boolean";
    ArgType[ArgType["Attachment"] = 17] = "Attachment";
    ArgType[ArgType["Reaction"] = 18] = "Reaction";
    ArgType[ArgType["Message"] = 19] = "Message";
    ArgType[ArgType["Channel"] = 20] = "Channel";
    ArgType[ArgType["Role"] = 21] = "Role";
    ArgType[ArgType["Webhook"] = 22] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 23] = "GuildSticker";
    ArgType[ArgType["Time"] = 24] = "Time";
    ArgType[ArgType["Member"] = 25] = "Member";
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