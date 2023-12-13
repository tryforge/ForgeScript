# $userCreatedAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the timestamp this user created their account
## Usage
```
$userCreatedAt
```
---
```
$userCreatedAt[user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to return its creation date | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/userCreatedAt.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userCreatedAt",
    version: "1.0.2",
    description: "Returns the timestamp this user created their account",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its creation date",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.createdTimestamp)
    },
})

```
    
</details>