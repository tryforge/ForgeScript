"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["String"] = 0] = "String";
    ArgType[ArgType["Number"] = 1] = "Number";
    ArgType[ArgType["User"] = 2] = "User";
    ArgType[ArgType["Date"] = 3] = "Date";
    ArgType[ArgType["Guild"] = 4] = "Guild";
    ArgType[ArgType["Invite"] = 5] = "Invite";
    ArgType[ArgType["Permission"] = 6] = "Permission";
    ArgType[ArgType["Json"] = 7] = "Json";
    ArgType[ArgType["Enum"] = 8] = "Enum";
    ArgType[ArgType["ForumTag"] = 9] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 10] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 11] = "Boolean";
    ArgType[ArgType["Reaction"] = 12] = "Reaction";
    ArgType[ArgType["Message"] = 13] = "Message";
    ArgType[ArgType["Channel"] = 14] = "Channel";
    ArgType[ArgType["Role"] = 15] = "Role";
    ArgType[ArgType["Webhook"] = 16] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 17] = "GuildSticker";
    ArgType[ArgType["Time"] = 18] = "Time";
    ArgType[ArgType["Member"] = 19] = "Member";
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