# $and
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Validates multiple conditions
## Usage
```
$and[...conditions]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
conditions | String | The conditions that must match | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/and.ts)
    
</summary>
    
```ts
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$and",
    version: "1.0.0",
    description: "Validates multiple conditions",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: ArgType.String,
            condition: true,
            description: "The conditions that must match",
        },
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields!.length; i < len; i++) {
            const field = this.data.fields![i] as IExtendedCompiledFunctionConditionField
            const resolved = await this["resolveCondition"](ctx, field)
            if (!this["isValidReturnType"](resolved)) return resolved
            else if (!resolved.value) return Return.success(false)
        }

        return Return.success(true)
    },
})

```
    
</details>