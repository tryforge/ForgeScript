# $httpSetBody
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a JSON body for the request
## Usage
```
$httpSetBody[body]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
body | Json | the JSON body | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpSetBody.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpSetBody",
    version: "1.0.0",
    description: "Sets a JSON body for the request",
    args: [
        {
            name: "body",
            description: "the JSON body",
            rest: false,
            required: true,
            type: ArgType.Json
        }
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [ json ]) {
        ctx.http.body = JSON.stringify(json)
        return Return.success()
    },
})
```
    
</details>