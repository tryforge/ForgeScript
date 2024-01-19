"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Return = exports.ReturnType = void 0;
var ReturnType;
(function (ReturnType) {
    ReturnType[ReturnType["Error"] = 0] = "Error";
    ReturnType[ReturnType["Stop"] = 1] = "Stop";
    ReturnType[ReturnType["Success"] = 2] = "Success";
    ReturnType[ReturnType["Return"] = 3] = "Return";
    ReturnType[ReturnType["Break"] = 4] = "Break";
    ReturnType[ReturnType["Continue"] = 5] = "Continue";
})(ReturnType || (exports.ReturnType = ReturnType = {}));
class Return {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    get error() {
        return this.type === ReturnType.Error;
    }
    get stop() {
        return this.type === ReturnType.Stop;
    }
    get return() {
        return this.type === ReturnType.Return;
    }
    get success() {
        return this.type === ReturnType.Success;
    }
    get continue() {
        return this.type === ReturnType.Continue;
    }
    get break() {
        return this.type === ReturnType.Break;
    }
}
exports.Return = Return;
//# sourceMappingURL=Return.js.map