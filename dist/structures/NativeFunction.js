"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeFunction = exports.ArgType = void 0;
var ArgType;
(function (ArgType) {
    ArgType[ArgType["String"] = 0] = "String";
    ArgType[ArgType["Number"] = 1] = "Number";
    ArgType[ArgType["User"] = 2] = "User";
    ArgType[ArgType["Guild"] = 3] = "Guild";
    ArgType[ArgType["Invite"] = 4] = "Invite";
    ArgType[ArgType["Permission"] = 5] = "Permission";
    ArgType[ArgType["Json"] = 6] = "Json";
    ArgType[ArgType["Enum"] = 7] = "Enum";
    ArgType[ArgType["ForumTag"] = 8] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 9] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 10] = "Boolean";
    ArgType[ArgType["Reaction"] = 11] = "Reaction";
    ArgType[ArgType["Message"] = 12] = "Message";
    ArgType[ArgType["Channel"] = 13] = "Channel";
    ArgType[ArgType["Role"] = 14] = "Role";
    ArgType[ArgType["Webhook"] = 15] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 16] = "GuildSticker";
    ArgType[ArgType["Time"] = 17] = "Time";
    ArgType[ArgType["Member"] = 18] = "Member";
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