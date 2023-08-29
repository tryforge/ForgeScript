# $userAccentColor
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the user accent color
## Usage
```
$userAccentColor
```
---
```
$userAccentColor[user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to retrieve the accent color | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/userAccentColor.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userAccentColor",
    description: "Returns the user accent color",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the accent color",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    unwrap: true,
    execute(ctx, [ user ]) {
        return Return.success(
            (user ?? ctx.user)?.hexAccentColor
        )
    },
})
```
    
</details>