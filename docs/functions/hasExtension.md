# $hasExtension
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether client has an extension
## Usage
```
$hasExtension[name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The extension name to check for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/hasExtension.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hasExtension",
    version: "1.2.0",
    description: "Checks whether client has an extension",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The extension name to check for",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ext ]) {
        return Return.success(!!ctx.client.options.extensions?.some(x => x.name === ext))
    },
})
```
    
</details>