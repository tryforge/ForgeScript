# $username
> Retrieves an user's username.
## Usage
```
$username
```
---
```
$username[id]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
id | User | The user id to get the username of | No | No
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/username.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return, ReturnType } from "../structures/Return"

export default new NativeFunction({
    name: "$username",
    description: "Retrieves an user's username.",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The user id to get the username of",
            type: ArgType.User,
            rest: false
        }
    ],
    unwrap: true,
    execute: async function(ctx, [ user ]) {
        user ??= ctx.user // < No bracket support
        return Return.success(user?.username)
    }
})
```
    
</details>