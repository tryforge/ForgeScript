# $coroutine
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Runs given code in a separate thread

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$coroutine[code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to run | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/coroutine.ts)
    
</summary>
    
```ts
/* eslint-disable no-undef */
import { Worker } from "worker_threads"
import { ArgType, ErrorType, NativeFunction, Return } from "../structures"
import { once } from "events"

export default new NativeFunction({
    name: "$coroutine",
    version: "1.2.0",
    description: "Runs given code in a separate thread",
    experimental: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to run",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx) {
        const code = this.displayField(0)
        return Return.success(
            await ctx.client.threading.run({
                code
            })
        )
    },
})
```
    
</details>