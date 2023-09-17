# $exec
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Runs a command in console
## Usage
```
$exec[command]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
command | String | The command to execute | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/exec.ts)
    
</summary>
    
```ts
import { execSync } from "child_process"
import { ArgType, ErrorType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$exec",
    version: "1.0.0",
    brackets: true,
    description: "Runs a command in console",
    unwrap: true,
    args: [
        {
            name: "command",
            description: "The command to execute",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(_, [command]) {
        try {
            const exec = await execSync(command, { encoding: "utf-8" })
            return Return.success(exec)
        } catch (error: any) {
            return Return.error(this.error(ErrorType.Custom, (error as Error).message))
        }
    },
})

```
    
</details>