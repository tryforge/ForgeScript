# $setChannelTopic
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a channel topic, returns bool
## Usage
```
$setChannelTopic[channel ID;topic]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel id to set its topic | Yes | No
topic | String | The topic to set | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setChannelTopic.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$setChannelTopic",
    version: "1.0.0",
    description: "Sets a channel topic, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its topic",
            rest: false,
            check: (i: BaseChannel) => "setTopic" in i,
            type: ArgType.Channel,
            required: true
        },
        {
            name: "topic",
            description: "The topic to set",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, topic ]) {
        return Return.success(
            !!(await (channel as TextChannel).setTopic(topic || null).catch(noop))
        )
    },
})
```
    
</details>