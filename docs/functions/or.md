# $or
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Validates one condition
## Usage
```
$or[...conditions]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
conditions | String | The conditions that must match one | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/or.ts)
    
</summary>
    
```ts
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$or",
    version: "1.0.0",
    description: "Validates one condition",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: ArgType.String,
            condition: true,
            description: "The conditions that must match one",
        },
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields!.length; i < len; i++) {
            const field = this.data.fields![i] as IExtendedCompiledFunctionConditionField
            const resolved = await this["resolveCondition"](ctx, field)
            if (!this["isValidReturnType"](resolved)) return resolved
            else if (resolved.value) return this.success(true)
        }

        return this.success(false)
    },
})

```
    
</details>