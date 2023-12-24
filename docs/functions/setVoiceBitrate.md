# $setVoiceBitrate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets the bitrate quality voice channel
## Usage
```
$setVoiceBitrate[channel ID;bitrate;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to edit bitrate | Yes | No
bitrate | Number | The new bitrate | Yes | No
reason | String | Reason to change the bitrate | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setVoiceBitrate.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction } from "../structures"
import { BaseChannel, VoiceChannel } from "discord.js"

export default new NativeFunction({
    name: "$setVoiceBitrate",
    version: "1.4.0",
    description: "Sets the bitrate quality voice channel",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit bitrate",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "bitrate",
            rest: false,
            type: ArgType.Number,
            required: true,
            description: "The new bitrate"
        },
        {
            name: "reason",
            description: "Reason to change the bitrate",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, bitrate, reason ]) {
        return this.success(!!(await (channel as VoiceChannel).setBitrate(bitrate, reason ?? undefined).catch(noop)))
    },
})
```
    
</details>