# $deleteChannels
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes given channel ids, returns the count of channels deleted
## Usage
```
$deleteChannels[...channels]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channels | Channel | The channels to delete | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteChannels.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteChannels",
    version: "1.0.5",
    brackets: true,
    unwrap: true,
    description: "Deletes given channel ids, returns the count of channels deleted",
    args: [
        {
            name: "channels",
            description: "The channels to delete",
            rest: true,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "delete" in i,
        },
    ],
    async execute(_, [channels]) {
        let count = 0
        for (let i = 0, len = channels.length; i < len; i++) {
            const ch = channels[i]
            const success = await ch.delete().catch(noop)
            if (success) count++
        }

        return this.success(count)
    },
})

```
    
</details>