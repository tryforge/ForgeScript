# $switch
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Switch-case statement for javascript

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$switch[value;cases]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
value | String | The value to match with | Yes | No
cases | String | The cases to use ($case), use $case[default;...] to add a default case | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/switch.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"
import _case from "./case"

export default new NativeFunction({
    name: "$switch",
    version: "1.0.3",
    description: "Switch-case statement for javascript",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "value",
            description: "The value to match with",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "cases",
            rest: false,
            description: "The cases to use ($case), use $case[default;...] to add a default case",
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const match = await this["resolveCode"](ctx, this.data.fields![0] as IExtendedCompiledFunctionField)
        if (!this["isValidReturnType"](match)) return match

        const value = match.value as string
        const switchCases: CompiledFunction[] = (
            this.data.fields![1] as IExtendedCompiledFunctionField
        ).functions.filter((x) => x.data.name === _case.name)
        const index = switchCases.findIndex(
            (x) => (x.data.fields![0] as IExtendedCompiledFunctionField).value === "default"
        )
        const defaultCase = index === -1 ? null : switchCases.splice(index, 1)[0]

        for (let i = 0, len = switchCases.length; i < len; i++) {
            const cas = switchCases[i]
            const caseValue: Return = await cas["resolveCode"](
                ctx,
                cas.data.fields![0] as IExtendedCompiledFunctionField
            )
            if (!this["isValidReturnType"](caseValue)) return caseValue

            if (caseValue.value === value) {
                return cas.execute(ctx)
            }
        }

        if (defaultCase) return defaultCase.execute(ctx)

        return this.success()
    },
})

```
    
</details>