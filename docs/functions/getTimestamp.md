# $getTimestamp
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the current timestamp
## Usage
```
$getTimestamp
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getTimestamp.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getTimestamp",
    version: "1.0.0",
    description: "Gets the current timestamp",
    unwrap: false,
    execute(ctx) {
        return Return.success(Date.now())
    },
})
```
    
</details>