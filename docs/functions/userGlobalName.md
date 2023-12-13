# $userGlobalName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the global name of a user
## Usage
```
$userGlobalName
```
---
```
$userGlobalName[user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to return its global name | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/userGlobalName.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userGlobalName",
    version: "1.0.0",
    description: "Returns the global name of a user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its global name",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.globalName)
    },
})

```
    
</details>