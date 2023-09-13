# $minSafeInteger
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the lowest safe integer
## Usage
```
$minSafeInteger
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/minSafeInteger.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$minSafeInteger",
    version: "1.0.6",
    description: "Returns the lowest safe integer",
    unwrap: false,
    execute(ctx) {
        return Return.success(Number.MIN_SAFE_INTEGER)
    },
})
```
    
</details>