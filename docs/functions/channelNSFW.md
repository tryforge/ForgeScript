# $channelNSFW
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether the channel is nsfw
## Usage
```
$channelNSFW
```
---
```
$channelNSFW[channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The id of the channel | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelNSFW.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelNSFW",
    version: "1.0.0",
    description: "Returns whether the channel is nsfw",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success("nsfw" in chan ? chan.nsfw : false)
    },
})

```
    
</details>