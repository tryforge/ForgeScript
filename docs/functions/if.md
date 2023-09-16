# $if
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a if statement
## Usage
```
$if[condition;if true;if false]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
condition | String | The condition to check against | No | No
if true | String | The code to run if true | Yes | No
if false | String | The code to run if false | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/if.ts)
    
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
    name: "$if",
    version: "1.0.0",
    description: "Creates a if statement",
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
        },
        {
            name: "if false",
            description: "The code to run if false",
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const condition = await this["resolveCondition"](
            ctx,
            this.data.fields![0] as IExtendedCompiledFunctionConditionField
        )
        if (!this["isValidReturnType"](condition)) return condition

        const fieldToRun = (condition.value ? this.data.fields![1] : this.data.fields![2]) as
            | IExtendedCompiledFunctionField
            | undefined
        if (!fieldToRun) return Return.success()

        return this["resolveCode"](ctx, fieldToRun)
    },
})

```
    
</details>