# $fetchRows
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Fetch a message's components, this will override any other component added to the response
## Usage
```
$fetchRows[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel id to get the message from | Yes | No
message ID | Message | The message id to get the components from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/fetchRows.ts)
    
</summary>
    
```ts
import { ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$fetchRows",
    version: "1.0.0",
    description: "Fetch a message's components, this will override any other component added to the response",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get the message from",
            rest: false,
            required: true,
            type: ArgType.Channel
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: ArgType.Message,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [, msg ]) {
        ctx.container.components = msg.components.map(x => ActionRowBuilder.from(x))
        return Return.success()
    },
})
```
    
</details>