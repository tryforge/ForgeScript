# $setChannelNSFW
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a channel nsfw state, returns bool
## Usage
```
$setChannelNSFW[channel ID;state]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel id to set its nsfw state | Yes | No
state | Boolean | The state to set | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setChannelNSFW.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelNSFW",
    version: "1.0.0",
    description: "Sets a channel nsfw state, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i: BaseChannel) => "setNSFW" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "state",
            description: "The state to set",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(_, [channel, state]) {
        return Return.success(!!(await (channel as TextChannel).setNSFW(state || false).catch(noop)))
    },
})

```
    
</details>