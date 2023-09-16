# $pathJoin
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Join the given paths
## Usage
```
$pathJoin[...paths]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
paths | String | The file paths to join | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/pathJoin.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"
import { join } from "path"

export default new NativeFunction({
    name: "$pathJoin",
    version: "1.0.7",
    description: "Join the given paths",
    args: [
        {
            name: "paths",
            description: "The file paths to join",
            required: true,
            type: ArgType.String,
            rest: true
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ paths ]) {
        return Return.success(join(...paths))
    },
})
```
    
</details>