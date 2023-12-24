"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const else_1 = __importDefault(require("./else"));
const elseif_1 = __importDefault(require("./elseif"));
const if_1 = __importDefault(require("./if"));
exports.default = new structures_1.NativeFunction({
    name: "$ifx",
    version: "1.2.0",
    description: "WIP if statements",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "block",
            description: "The if, elseif, else blocks",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    experimental: true,
    async execute(ctx) {
        const ifStatement = this.getFunction(0, if_1.default);
        const elseIfStatements = this.getFunctions(0, elseif_1.default);
        const elseStatement = this.getFunction(0, else_1.default);
        const ifRun = await ifStatement.execute(ctx);
        if (!this["isValidReturnType"](ifRun) || ifRun.value !== null)
            return ifRun;
        for (let i = 0, len = elseIfStatements.length; i < len; i++) {
            const statement = elseIfStatements[i];
            const statementRun = await statement.execute(ctx);
            if (!this["isValidReturnType"](statementRun) || statementRun.value !== null)
                return statementRun;
        }
        return elseStatement?.execute(ctx) ?? this.success();
    },
});
//# sourceMappingURL=ifx.js.map