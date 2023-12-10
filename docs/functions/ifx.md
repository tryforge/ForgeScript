# $ifx
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> WIP if statements

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$ifx[block]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
block | String | The if, elseif, else blocks | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/ifx.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import _else from "./else"
import elseif from "./elseif"
import ifFunc from "./if"

export default new NativeFunction({
    name: "$ifx",
    version: "1.2.0",
    description: "WIP if statements",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "block",
            description: "The if, elseif, else blocks",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    experimental: true,
    async execute(ctx) {
        const ifStatement = this.getFunction(0, ifFunc)!
        const elseIfStatements = this.getFunctions(0, elseif)
        const elseStatement = this.getFunction(0, _else)

        const ifRun = await ifStatement.execute(ctx)
        if (!this["isValidReturnType"](ifRun) || ifRun.value !== null) return ifRun

        for (let i = 0, len = elseIfStatements.length;i < len;i++) {
            const statement = elseIfStatements[i]
            const statementRun = await statement.execute(ctx)
            if (!this["isValidReturnType"](statementRun) || statementRun.value !== null) return statementRun
        }

        return elseStatement?.execute(ctx) ?? Return.success()
    },
})
```
    
</details>