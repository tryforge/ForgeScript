# $clearMessages
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Clears x amount of messages from a channel, returns the number of messages deleted
## Usage
```
$clearMessages[channel ID;amount]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to clear messages on | Yes | No
amount | Number | The amount of messages to delete | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/clearMessages.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import splitNumber from "../functions/splitNumber"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$clearMessages",
    description: "Clears x amount of messages from a channel, returns the number of messages deleted",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clear messages on",
            required: true,
            rest: false,
            type: ArgType.Channel,
            check: (x: BaseChannel) => "messages" in x
        },
        {
            name: "amount",
            description: "The amount of messages to delete",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [ channel, amount ]) {
        let count = 0

        for (const n of splitNumber(amount, 100)) {
            const col = await (channel as TextChannel).bulkDelete(n, true).catch(noop)
            if (!col || !col.size) break
            count += col.size
        }

        return Return.success(count)
    },
})
```
    
</details>