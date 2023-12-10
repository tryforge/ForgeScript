# $elseIf
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a else if statement
## Usage
```
$elseIf[condition;if true]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
condition | String | The condition to check against | No | No
if true | String | The code to run if true | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/elseIf.ts)
    
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
    name: "$elseIf",
    version: "1.2.0",
    description: "Creates a else if statement",
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to check against",
            rest: false,
            type: ArgType.String,
            condition: true,
        },
        {
            name: "if true",
            description: "The code to run if true",
            required: true,
            type: ArgType.String,
            rest: false,
        }
    ],
    brackets: true,
    async execute(ctx) {
        const condition = await this["resolveCondition"](
            ctx,
            this.data.fields![0] as IExtendedCompiledFunctionConditionField
        )

        if (!this["isValidReturnType"](condition)) return condition

        if (!condition.value) return Return.success()

        return this["resolveCode"](ctx, this.data.fields![1] as IExtendedCompiledFunctionField)
    },
})

```
    
</details>