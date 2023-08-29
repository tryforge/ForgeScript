# $decodeURIComponent
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Decodes text from a url
## Usage
```
$decodeURIComponent[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to decode | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/decodeURIComponent.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$decodeURIComponent",
    description: "Decodes text from a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to decode",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        return Return.success(decodeURIComponent(text))
    },
})
```
    
</details>