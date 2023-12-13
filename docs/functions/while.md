# $while
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Executes code while a condition is true

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$while[condition;code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
condition | String | The condition to validate | Yes | No
code | String | The code to execute | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/while.ts)
    
</summary>
    
```ts
import {
    ArgType,
    IExtendedCompiledFunctionConditionField,
    IExtendedCompiledFunctionField,
    NativeFunction,
    Return,
} from "../structures"

export default new NativeFunction({
    name: "$while",
    version: "1.0.3",
    description: "Executes code while a condition is true",
    unwrap: false,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to validate",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The code to execute",
        },
    ],
    async execute(ctx) {
        const condition = this.data.fields![0] as IExtendedCompiledFunctionConditionField
        const code = this.data.fields![1] as IExtendedCompiledFunctionField

        for (;;) {
            const cond = await this["resolveCondition"](ctx, condition)
            if (!this["isValidReturnType"](cond)) return cond
            else if (!cond.value) break

            const exec = await this["resolveCode"](ctx, code)
            if (exec.success || exec.continue) continue
            else if (exec.break) break
            else return exec
        }

        return this.success()
    },
})

```
    
</details>