# $setChannelName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a channel name, returns bool
## Usage
```
$setChannelName[channel ID;name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel id to set its name | Yes | No
name | String | The name to set | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setChannelName.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelName",
    version: "1.0.0",
    description: "Sets a channel name, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its name",
            rest: false,
            check: (i: BaseChannel) => "setName" in i,
            type: ArgType.Channel,
            required: true
        },
        {
            name: "name",
            description: "The name to set",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, name ]) {
        return Return.success(
            !!(await (channel as TextChannel).setName(name).catch(noop))
        )
    },
})
```
    
</details>