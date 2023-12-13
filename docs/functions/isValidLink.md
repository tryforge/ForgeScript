# $isValidLink
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether a link is valid
## Usage
```
$isValidLink[link]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
link | String | The link to check | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isValidLink.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export const LinkRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

export default new NativeFunction({
    name: "$isValidLink",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "link",
            description: "The link to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    description: "Checks whether a link is valid",
    execute(_, [link]) {
        return this.success(LinkRegex.test(link))
    },
})

```
    
</details>