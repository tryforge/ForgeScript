# $networkCardNames
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns your network's card names
## Usage
```
$networkCardNames
```
---
```
$networkCardNames[separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
separator | String | The separator to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/networkCardNames.ts)
    
</summary>
    
```ts
import { networkInterfaces } from "os"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$networkCardNames",
    version: "1.2.0",
    description: "Returns your network's card names",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(Object.keys(networkInterfaces()).join(sep ?? ", "))
    }
})
```
    
</details>