# $messageCreatedAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the timestamp of the message
## Usage
```
$messageCreatedAt
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/messageCreatedAt.ts)
    
</summary>
    
```ts
import { MessageType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageCreatedAt",
    version: "1.0.0",
    description: "Returns the timestamp of the message",
    unwrap: false,
    execute(ctx) {
        return Return.success(MessageType[ctx.message?.createdTimestamp!])
    },
})
```
    
</details>