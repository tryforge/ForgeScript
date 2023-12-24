# $setVoiceUserLimit
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets the limit of users that can connect to this voice channel
## Usage
```
$setVoiceUserLimit[channel ID;limit;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to edit user limit | Yes | No
limit | Number | The new user limit | Yes | No
reason | String | Reason to change the user limit | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setVoiceUserLimit.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction } from "../structures"
import { BaseChannel, VoiceChannel } from "discord.js"

export default new NativeFunction({
    name: "$setVoiceUserLimit",
    version: "1.4.0",
    description: "Sets the limit of users that can connect to this voice channel",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit user limit",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "limit",
            rest: false,
            type: ArgType.Number,
            required: true,
            description: "The new user limit"
        },
        {
            name: "reason",
            description: "Reason to change the user limit",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, limit, reason ]) {
        return this.success(!!(await (channel as VoiceChannel).setUserLimit(limit, reason ?? undefined).catch(noop)))
    },
})
```
    
</details>