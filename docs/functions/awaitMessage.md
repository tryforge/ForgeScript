# $awaitMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Awaits a message, returns message ID or nothing if no valid response
## Usage
```
$awaitMessage[channel ID;variable name;filter;time]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to await message on | Yes | No
variable name | String | The variable to load the message id that was sent as response by an user, get it with $env[<variable>] | Yes | No
filter | String | The filter to run for every message sent after this | Yes | No
time | Time | The max time to wait for a message | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/awaitMessage.ts)
    
</summary>
    
```ts
import { BaseChannel, TextBasedChannel } from "discord.js";
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures";
import { noop } from "lodash";
import isTrue from "../functions/isTrue";

export default new NativeFunction({
    name: "$awaitMessage",
    version: "1.0.7",
    description: "Awaits a message, returns message ID or nothing if no valid response",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to await message on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "variable name",
            description: "The variable to load the message id that was sent as response by an user, get it with $env[<variable>]",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "filter",
            description: "The filter to run for every message sent after this",
            rest: false,
            required: true,
            condition: true,
            type: ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: ArgType.Time,
            description: "The max time to wait for a message"
        }
    ],
    async execute(ctx): Promise<Return> {
        const filter = this.data.fields![2] as IExtendedCompiledFunctionConditionField
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3)
        if (!this["isValidReturnType"](rt)) return rt
        const [ channel, varName, time ] = args
        const msg = await (channel as TextBasedChannel).awaitMessages({
            errors: [ "time" ],
            max: 1,
            time,
            filter: async (m) => {
                ctx.setEnvironmentKey(varName, m.id)
                const res = await this["resolveCondition"](ctx, filter)
                if (res.return || res.success) {
                    return isTrue(res)
                } else return false
            }
        }).catch(noop)

        return Return.success(msg?.first()?.id)
    },
})
```
    
</details>