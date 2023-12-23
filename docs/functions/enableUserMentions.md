# $enableUserMentions
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Only parses these users for mentions
## Usage
```
$enableUserMentions[...users]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
users | User | The users to parse mentions for | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/enableUserMentions.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$enableUserMentions",
    version: "1.3.0",
    description: "Only parses these users for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "users",
            rest: true,
            required: true,
            type: ArgType.User,
            description: "The users to parse mentions for"
        }
    ],
    execute(ctx, [ users ]) {
        ctx.container.allowedMentions.users =  users.map(x => x.id)
        return this.success()
    },
})
```
    
</details>