# $else
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a else statement
## Usage
```
$else[else]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
else | String | The code to run | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/else.ts)
    
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
    name: "$else",
    version: "1.2.0",
    description: "Creates a else statement",
    unwrap: true,
    args: [
        {
            name: "else",
            description: "The code to run",
            required: true,
            type: ArgType.String,
            rest: false,
        }
    ],
    brackets: true,
    async execute(ctx, [ arg ]) {
        return Return.success(arg)
    },
})

```
    
</details>