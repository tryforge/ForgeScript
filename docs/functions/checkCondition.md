# $checkCondition
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether a condition is valid
## Usage
```
$checkCondition[condition]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
condition | String | The condition to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/checkCondition.ts)
    
</summary>
    
```ts
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$checkCondition",
    description: "Checks whether a condition is valid",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to use",
            rest: false,
            condition: true,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx) {
        const cond = await this["resolveCondition"](ctx, this.data.fields![0] as IExtendedCompiledFunctionConditionField)
        if (!this["isValidReturnType"](cond)) return cond
        return Return.success(cond.value)
    },
})
```
    
</details>