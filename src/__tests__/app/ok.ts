import { ApplicationCommandType } from "discord.js";
import { ApplicationCommand } from "../../structures";

export default new ApplicationCommand({
    data: {
        name: "ok",
        type: ApplicationCommandType.User
    },
    code: "$log[executed] target: <@$option[user]>"
})