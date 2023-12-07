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
    ArgType[ArgType["Color"] = 9] = "Color";
    ArgType[ArgType["Enum"] = 10] = "Enum";
    ArgType[ArgType["ForumTag"] = 11] = "ForumTag";
    ArgType[ArgType["GuildEmoji"] = 12] = "GuildEmoji";
    ArgType[ArgType["Boolean"] = 13] = "Boolean";
    ArgType[ArgType["Reaction"] = 14] = "Reaction";
    ArgType[ArgType["Message"] = 15] = "Message";
    ArgType[ArgType["Channel"] = 16] = "Channel";
    ArgType[ArgType["Role"] = 17] = "Role";
    ArgType[ArgType["Webhook"] = 18] = "Webhook";
    ArgType[ArgType["GuildSticker"] = 19] = "GuildSticker";
    ArgType[ArgType["Time"] = 20] = "Time";
    ArgType[ArgType["Member"] = 21] = "Member";
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