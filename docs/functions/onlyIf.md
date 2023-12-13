# $onlyIf
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Stop execution if condition is not matched
## Usage
```
$onlyIf[condition;code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
condition | String | The condition to use | Yes | No
code | String | The code to execute if error | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/onlyIf.ts)
    
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
    name: "$onlyIf",
    version: "1.0.0",
    description: "Stop execution if condition is not matched",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to use",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if error",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        const [condition, code] = this.data.fields! as [
            IExtendedCompiledFunctionConditionField,
            IExtendedCompiledFunctionField,
        ]
        const res = await this["resolveCondition"](ctx, condition)
        if (!this["isValidReturnType"](res) || res.value) return res.success ? this.success() : res

        if (code) {
            const resolved = await this["resolveCode"](ctx, code)
            if (!this["isValidReturnType"](resolved)) return resolved
            ctx.container.content = resolved.value as string
            await ctx.container.send(ctx.obj)
        }

        return this.stop()
    },
})

```
    
</details>