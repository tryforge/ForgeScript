# $deleteCooldown
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes cooldown of given id
## Usage
```
$deleteCooldown[id]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
id | String | The id to delete its cooldown | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteCooldown.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteCooldown",
    version: "1.0.3",
    description: "Deletes cooldown of given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to delete its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(id)
        return this.success()
    },
})

```
    
</details>