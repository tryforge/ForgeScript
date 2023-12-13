"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
const Context_1 = require("../structures/Context");
class Interpreter {
    static async run(runtime) {
        const ctx = new Context_1.Context(runtime);
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
        ctx.executionTimestamp = performance.now();
        for (let i = 0, len = runtime.data.functions.length; i < len; i++) {
            const fn = runtime.data.functions[i];
            const rt = await fn.execute(ctx);
            if (!rt.success && !ctx.handleNotSuccess(rt))
                return null;
            args[i] = rt.value;
        }
        const content = runtime.data.resolve(args);
        if (!runtime.doNotSend) {
            ctx.container.content = content;
            await ctx.container.send(runtime.obj);
        }
        return content;
    }
}
exports.Interpreter = Interpreter;
//# sourceMappingURL=Interpreter.js.map