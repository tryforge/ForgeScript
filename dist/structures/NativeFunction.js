"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["URL"] = 0] = "URL";
    ArgType[ArgType["String"] = 1] = "String";
    ArgType[ArgType["BigInt"] = 2] = "BigInt";
    ArgType[ArgType["Number"] = 3] = "Number";
    ArgType[ArgType["User"] = 4] = "User";
    ArgType[ArgType["Date"] = 5] = "Date";
    ArgType[ArgType["Guild"] = 6] = "Guild";
    ArgType[ArgType["Invite"] = 7] = "Invite";
    ArgType[ArgType["Permission"] = 8] = "Permission";
    ArgType[ArgType["Json"] = 9] = "Json";
    ArgType[ArgType["Color"] = 10] = "Color";
    ArgType[ArgType["Enum"] = 11] = "Enum";
    ArgType[ArgType["ForumTag"] = 12] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 13] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 14] = "Boolean";
    ArgType[ArgType["Reaction"] = 15] = "Reaction";
    ArgType[ArgType["Message"] = 16] = "Message";
    ArgType[ArgType["Channel"] = 17] = "Channel";
    ArgType[ArgType["Role"] = 18] = "Role";
    ArgType[ArgType["Webhook"] = 19] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 20] = "GuildSticker";
    ArgType[ArgType["Time"] = 21] = "Time";
    ArgType[ArgType["Member"] = 22] = "Member";
})(ArgType || (exports.ArgType = ArgType = {}));
class NativeFunction {
    data;
    constructor(data) {
        this.data = data;
    }
    get name() {
        return this.data.name;
    }
}
exports.NativeFunction = NativeFunction;
//# sourceMappingURL=NativeFunction.js.map