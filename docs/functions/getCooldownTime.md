# $getCooldownTime
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves current cooldown time in ms for given id
## Usage
```
$getCooldownTime[id]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
id | String | The id to get its cooldown | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getCooldownTime.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getCooldownTime",
    version: "1.0.3",
    description: "Retrieves current cooldown time in ms for given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to get its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(id))
    },
})

```
    
</details>