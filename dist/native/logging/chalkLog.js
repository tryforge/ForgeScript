"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const chalk_1 = __importDefault(require("chalk"));
function applyStyles(text, styles) {
    let styled = chalk_1.default;
    for (const style of styles) {
        const fn = styled[style];
        if (typeof fn !== "function")
            continue;
        styled = fn;
    }
    return styled(text);
}
exports.default = new structures_1.NativeFunction({
    name: "$chalkLog",
    version: "2.3.0",
    description: "Logs styled text to the console using Chalk",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to log",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "styles",
            description: "The styles to apply to the text",
            type: structures_1.ArgType.String,
            required: true,
            rest: true
        }
    ],
    execute(ctx, [text, styles]) {
        console.log(applyStyles(text, styles));
        return this.success();
    }
});
//# sourceMappingURL=chalkLog.js.map