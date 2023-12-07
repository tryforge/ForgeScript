# $commandCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the command count
## Usage
```
$commandCount
```
---
```
$commandCount[...categories]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
categories | String | The event types to filter by | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/commandCount.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandCount",
    version: "1.0.0",
    description: "Returns the command count",
    brackets: false,
    args: [
        {
            name: "categories",
            rest: true,
            required: true,
            description: "The event types to filter by",
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [categories]) {
        return Return.success(
            this.hasFields
                ? ctx.client.commands["commands"]
                    .filter((_, key) => categories.includes(key))
                    .reduce((x, y) => x + y.length, 0)
                : ctx.client.commands["commands"].reduce((x, y) => x + y.length, 0)
        )
    },
})

```
    
</details>