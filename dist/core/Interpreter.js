"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
const structures_1 = require("../structures");
class Interpreter {
    static async run(raw) {
        const ctx = raw instanceof structures_1.Context ? raw : new structures_1.Context(raw);
        const runtime = ctx.runtime;
        if (runtime.client !== null) {
            if (runtime.command && !ctx.client.canRespondToBots(runtime.command) && ctx.user?.bot)
                return null;
            if (runtime.command?.data.guildOnly && !ctx.guild)
                return null;
            else if (runtime.client.options.restrictions !== undefined) {
                const { guildIDs, userIDs } = runtime.client.options.restrictions;
                const guildID = ctx.guild?.id;
                const authorID = ctx.user?.id;
                if (userIDs?.length && authorID && !userIDs.includes(authorID))
                    return null;
                else if (guildIDs?.length && guildID && !guildIDs.includes(guildID))
                    return null;
            }
        }
        const args = new Array(runtime.data.functions.length);
        let content;
        if (ctx.runtime.data.functions.length === 0) {
            content = ctx.runtime.data.code;
        }
        else {
            ctx.executionTimestamp = performance.now();
            try {
                for (let i = 0, len = runtime.data.functions.length; i < len; i++) {
                    const fn = runtime.data.functions[i];
                    const rt = await fn.execute(ctx);
                    args[i] = (!rt.success && !ctx.handleNotSuccess(rt)) ? ctx["error"]() : rt.value;
                }
            }
            catch (err) {
                if (err instanceof Error)
                    structures_1.Logger.error(err);
                else if (err instanceof structures_1.Return) {
                    if (err.return)
                        return err.value;
                }
                return null;
            }
            content = runtime.data.resolve(args);
        }
        if (!runtime.doNotSend) {
            ctx.container.content = content;
            await ctx.container.send(runtime.obj);
        }
        return content;
    }
}
exports.Interpreter = Interpreter;
//# sourceMappingURL=Interpreter.js.map