"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFunction = void 0;
const __1 = require("..");
const core_1 = require("../../core");
const managers_1 = require("../../managers");
const Return_1 = require("../@internal/Return");
const ForgeError_1 = require("./ForgeError");
class ForgeFunction {
    data;
    compiled;
    constructor(data) {
        this.data = data;
        if (!Array.isArray(data.params))
            data.params = [];
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
                name: typeof x === "string" ? x : x.name,
                rest: typeof x === "string" ? false : !!x.rest,
                condition: i === 0 && !!this.data.firstParamCondition,
                type: typeof x === "string" ? __1.ArgType.String : (typeof x.type === "number" && x.type in __1.ArgType ? x.type : __1.ArgType[x.type]) ?? __1.ArgType.String,
                required: typeof x === "string" ? true : x.required ?? true
            })) : undefined,
            brackets: this.data.brackets ?? (this.data.params?.length ? true : undefined),
            async execute(ctx, args) {
                if (!this.fn.data.unwrap) {
                    if (!this.data.fields || this.data.fields.length === 0) {
                        return outer.call(ctx, this, args ?? []);
                    }
                    const condition = await this["resolveCondition"](ctx, this.data.fields[0]);
                    if (!this["isValidReturnType"](condition))
                        return condition;
                    const params = await this["resolveMultipleArgs"](ctx, ...this.data.fields.slice(1).map((_, i) => i + 1));
                    if (!this["isValidReturnType"](params.return))
                        return params.return;
                    return outer.call(ctx, this, [condition.value, ...params.args]);
                }
                else {
                    return outer.call(ctx, this, args ?? []);
                }
            }
        });
    }
    async call(ctx, fn, args) {
        this.compiled ??= core_1.Compiler.compile(this.data.code, this.data.path);
        const params = Array.isArray(this.data.params) ? this.data.params : [];
        const required = params.filter(param => typeof param === "string" || param.required !== false);
        if (args.length < required.length)
            return new Return_1.Return(Return_1.ReturnType.Error, new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.Custom, `Calling custom function ${this.data.name} requires ${required.length} argument${required.length > 1 ? "s" : ""}, received ${args.length}`));
        const functionCtx = ctx.clone({
            doNotSend: true,
            allowTopLevelReturn: true,
            data: this.compiled
        });
        for (let i = 0, len = params.length; i < len; i++) {
            const param = params[i];
            const name = typeof param === "string" ? param : param.name;
            functionCtx.setEnvironmentKey(name, args[i]);
        }
        const result = await core_1.Interpreter.run(functionCtx);
        return result === null ? fn.stop() : fn.success(result);
    }
}
exports.ForgeFunction = ForgeFunction;
//# sourceMappingURL=ForgeFunction.js.map