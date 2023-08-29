# $setChannelSlowmode
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a channel slowmode, returns bool
## Usage
```
$setChannelSlowmode[channel ID;seconds]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel id to set its nsfw state | Yes | No
seconds | Number | The number of seconds per message | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setChannelSlowmode.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelSlowmode",
    description: "Sets a channel slowmode, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i: BaseChannel) => "setRateLimitPerUser" in i,
            type: ArgType.Channel,
            required: true
        },
        {
            name: "seconds",
            description: "The number of seconds per message",
            rest: false,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [ channel, seconds ]) {
        return Return.success(
            !!(await (channel as TextChannel).setRateLimitPerUser(seconds || 0).catch(noop))
        )
    },
})
```
    
</details>