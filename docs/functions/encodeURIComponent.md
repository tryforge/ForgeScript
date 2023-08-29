# $encodeURIComponent
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Encodes text for a url
## Usage
```
$encodeURIComponent[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to encode | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/encodeURIComponent.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$encodeURIComponent",
    description: "Encodes text for a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to encode",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        return Return.success(encodeURIComponent(text))
    },
})
```
    
</details>