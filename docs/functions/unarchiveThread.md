# $unarchiveThread
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Unarchives a thread, returns bool
## Usage
```
$unarchiveThread[channel ID;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The thread to unarchive | Yes | No
reason | String | The reason to unarchive this thread | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/unarchiveThread.ts)
    
</summary>
    
```ts
import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$unarchiveThread",
    description: "Unarchives a thread, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to unarchive",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "reason",
            description: "The reason to unarchive this thread",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, reason ]) {
        const thread = channel as ThreadChannel

        const success = await thread.setArchived(false, reason || undefined).catch(noop)

        return Return.success(
            !!success
        )
    },
})
```
    
</details>