# $randomText
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random text (no cache)
## Usage
```
$randomText[...texts]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
texts | String | The texts to use | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomText.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomText",
    description: "Returns a random text (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "texts",
            description: "The texts to use",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ texts ]) {
        const rnd = texts[Math.floor(Math.random() * texts.length)]
        return Return.success(rnd)
    },
})
```
    
</details>