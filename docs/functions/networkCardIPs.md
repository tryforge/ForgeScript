# $networkCardIPs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns your network's card ips
## Usage
```
$networkCardIPs
```
---
```
$networkCardIPs[separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
separator | String | The separator to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/networkCardIPs.ts)
    
</summary>
    
```ts
import { networkInterfaces } from "os"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$networkCardIPs",
    version: "1.2.0",
    description: "Returns your network's card ips",
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
        return Return.success(Object.values(networkInterfaces()).map(x => x?.map(x => x.address).filter(Boolean).join(sep ?? ", ")).join(sep ?? ", "))
    }
})
```
    
</details>