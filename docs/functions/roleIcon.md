# $roleIcon
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role icon
## Usage
```
$roleIcon
```
---
```
$roleIcon[guild ID;role ID;size;extension]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve the role from | Yes | No
role ID | Role | The role to use to get its icon | Yes | No
size | Number | The size to use for the image | No | No
extension | String | The extension to use for the image | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleIcon.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleIcon",
    version: "1.0.0",
    description: "Returns the role icon",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the role from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "role ID",
            description: "The role to use to get its icon",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Role
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, role, size, ext ]) {
        return Return.success(
            (role ?? ctx.role)?.iconURL({
                extension: ext as ImageExtension || undefined,
                size: size as ImageSize || 2048
            })
        )
    },
})
```
    
</details>