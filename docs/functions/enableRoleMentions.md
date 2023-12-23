# $enableRoleMentions
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Only parses these roles for mentions
## Usage
```
$enableRoleMentions[guild ID;...roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve roles from | Yes | No
roles | Role | The roles to parse mentions for | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/enableRoleMentions.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$enableRoleMentions",
    version: "1.3.0",
    description: "Only parses these roles for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to retrieve roles from"
        },
        {
            name: "roles",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Role,
            description: "The roles to parse mentions for"
        }
    ],
    execute(ctx, [, roles ]) {
        ctx.container.allowedMentions.roles =  roles.map(x => x.id)
        return this.success()
    },
})
```
    
</details>