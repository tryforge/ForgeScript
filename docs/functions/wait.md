# $wait
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Delays the code below for x milliseconds
## Usage
```
$wait[duration]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
duration | Time | The duration to wait for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/wait.ts)
    
</summary>
    
```ts
import { setTimeout } from "timers/promises"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$wait",
    version: "1.0.0",
    description: "Delays the code below for x milliseconds",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "duration",
            description: "The duration to wait for",
            rest: false,
            type: ArgType.Time,
            required: true,
        },
    ],
    async execute(_, [ms]) {
        await setTimeout(ms)
        return Return.success()
    },
})

```
    
</details>