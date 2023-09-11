import { CommandType, IBaseCommand } from "../../structures"

export default {
    name: "test",
    type: "messageCreate",
    code: "I worked. Imagine.",
    unprefixed: true
} as IBaseCommand<CommandType>