# $cpu
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the cpu usage of the host (not accurate)
## Usage
```
$cpu
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/cpu.ts)
    
</summary>
    
```ts
/* eslint-disable no-undef */
import { cpus, loadavg } from "os"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$cpu",
    version: "1.0.0",
    description: "Returns the cpu usage of the host (not accurate)",
    unwrap: false,
    execute() {
        return this.success(loadavg()[0] * 100)
    },
})

```
    
</details>