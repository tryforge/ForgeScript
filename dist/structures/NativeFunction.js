"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["String"] = 0] = "String";
    ArgType[ArgType["BigInt"] = 1] = "BigInt";
    ArgType[ArgType["Number"] = 2] = "Number";
    ArgType[ArgType["User"] = 3] = "User";
    ArgType[ArgType["Date"] = 4] = "Date";
    ArgType[ArgType["Guild"] = 5] = "Guild";
    ArgType[ArgType["Invite"] = 6] = "Invite";
    ArgType[ArgType["Permission"] = 7] = "Permission";
    ArgType[ArgType["Json"] = 8] = "Json";
    ArgType[ArgType["Enum"] = 9] = "Enum";
    ArgType[ArgType["ForumTag"] = 10] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 11] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 12] = "Boolean";
    ArgType[ArgType["Reaction"] = 13] = "Reaction";
    ArgType[ArgType["Message"] = 14] = "Message";
    ArgType[ArgType["Channel"] = 15] = "Channel";
    ArgType[ArgType["Role"] = 16] = "Role";
    ArgType[ArgType["Webhook"] = 17] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 18] = "GuildSticker";
    ArgType[ArgType["Time"] = 19] = "Time";
    ArgType[ArgType["Member"] = 20] = "Member";
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