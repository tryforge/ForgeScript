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
    ArgType[ArgType["Json"] = 5] = "Json";
    ArgType[ArgType["Enum"] = 6] = "Enum";
    ArgType[ArgType["ForumTag"] = 7] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 8] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 9] = "Boolean";
    ArgType[ArgType["Reaction"] = 10] = "Reaction";
    ArgType[ArgType["Message"] = 11] = "Message";
    ArgType[ArgType["Channel"] = 12] = "Channel";
    ArgType[ArgType["Role"] = 13] = "Role";
    ArgType[ArgType["Webhook"] = 14] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 15] = "GuildSticker";
    ArgType[ArgType["Time"] = 16] = "Time";
    ArgType[ArgType["Member"] = 17] = "Member";
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