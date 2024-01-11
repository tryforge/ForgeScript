"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFunction = void 0;
const __1 = require("..");
const core_1 = require("../../core");
const isTrue_1 = __importDefault(require("../../functions/isTrue"));
const managers_1 = require("../../managers");
const Return_1 = require("../@internal/Return");
const ForgeError_1 = require("./ForgeError");
class ForgeFunction {
    data;
    compiled;
    constructor(data) {
        this.data = data;
        data.params ??= [];
    }
    populate() {
        managers_1.FunctionManager.add(this.asNative());
    }
    asNative() {
        const outer = this;
        return new __1.NativeFunction({
            name: `$${this.data.name}`,
            description: "Custom function",
            unwrap: (!!this.data.params?.length && !this.data.firstParamCondition),
            args: this.data.params?.length ? this.data.params.map((x, i) => ({
                name: x,
                rest: false,
                condition: i === 0 && !!this.data.firstParamCondition,
                type: __1.ArgType.String,
                required: true
            })) : undefined,
            brackets: this.data.params?.length ? true : undefined,
            async execute(ctx, args) {
                if (!this.fn.data.unwrap) {
                    const condition = await this["resolveCondition"](ctx, this.data.fields[0]);
                    if (!this["isValidReturnType"](condition))
                        return condition;
                    else if (!(0, isTrue_1.default)(condition))
                        return this.stop();
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    const params = await this["resolveMultipleArgs"](ctx, ...this.data.fields.slice(1).map((_, i) => i + 1));
                    if (!this["isValidReturnType"](params.return))
                        return params.return;
                    return outer.call(ctx, params.args);
                }
                else {
                    return outer.call(ctx, args ?? []);
                }
            }
        });
    }
    async call(ctx, args) {
        this.compiled ??= core_1.Compiler.compile(this.data.code, this.data.path);
        if (this.data.params.length !== args.length)
            return new Return_1.Return(Return_1.ReturnType.Error, new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.Custom, `Calling custom function ${this.data.name} requires ${this.data.params.length} arguments, received ${args.length}`));
        for (let i = 0, len = this.data.params.length; i < len; i++) {
            ctx.setEnvironmentKey(this.data.params[i], args[i]);
        }
        const result = await core_1.Interpreter.run(ctx.clone({
            doNotSend: true,
            allowTopLevelReturn: true,
            data: this.compiled
        }));
        return new Return_1.Return(result === null ? Return_1.ReturnType.Stop : Return_1.ReturnType.Success, result);
    }
}
exports.ForgeFunction = ForgeFunction;
//# sourceMappingURL=ForgeFunction.js.map