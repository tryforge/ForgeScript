"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFunction = void 0;
const Compiler_1 = require("../core/Compiler");
const ForgeError_1 = require("./ForgeError");
const Return_1 = require("./Return");
class ForgeFunction {
    data;
    compiled;
    constructor(data) {
        this.data = data;
        data.params ??= [];
        this.compiled = Compiler_1.Compiler.compile(data.code);
    }
    async call(ctx, args) {
        if (this.data.params.length !== args.length)
            return new Return_1.Return(Return_1.ReturnType.Error, new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.Custom, `Calling custom function ${this.data.name} requires ${this.data.params.length} arguments, received ${args.length}`));
        for (let i = 0, len = this.data.params.length; i < len; i++) {
            ctx.setEnvironmentKey(this.data.params[i], args[i]);
        }
        for (let i = 0, len = this.compiled.functions.length; i < len; i++) {
            const fn = this.compiled.functions[i];
            const res = await fn.execute(ctx);
            if (res.return)
                return fn.success(res.value);
            else if (!fn["isValidReturnType"](res))
                return res;
        }
        return new Return_1.Return(Return_1.ReturnType.Success, null);
    }
}
exports.ForgeFunction = ForgeFunction;
//# sourceMappingURL=ForgeFunction.js.map