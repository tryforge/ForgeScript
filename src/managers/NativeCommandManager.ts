import { CommandType } from "../structures"
import { BaseCommandManager } from "./BaseCommandManager"
import { NativeEventName } from "./EventManager"

export class NativeCommandManager extends BaseCommandManager<CommandType> {
    public handlerName = NativeEventName
}
