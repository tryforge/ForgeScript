"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
const InviteSystem_1 = require("../../structures/InviteSystem");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "inviteDelete",
    version: "1.0.3",
    description: "This event is fired when an invite is deleted",
    listener: async function (inv) {
        if (this.options.useInviteSystem)
            await InviteSystem_1.InviteSystem.inviteDeleteHandler(inv);
        const commands = this.commands.get("inviteDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: inv,
                command,
                client: this,
                states: {
                    invite: {
                        old: inv,
                        new: inv,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "GuildInvites"],
});
//# sourceMappingURL=inviteDelete.js.map