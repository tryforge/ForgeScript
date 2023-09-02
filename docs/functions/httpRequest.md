# $httpRequest
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Performs an http request, returns the status code.
## Usage
```
$httpRequest[url;method;variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
url | String | The url to perform this request to | Yes | No
method | String | The method to use | Yes | No
variable | String | Environment variable name to load the response to | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpRequest.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { fetch } from "undici"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpRequest",
    version: "1.0.0",
    description: "Performs an http request, returns the status code.",
    args: [
        {
            name: "url",
            description: "The url to perform this request to",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "method",
            description: "The method to use",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "variable",
            description: "Environment variable name to load the response to",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    unwrap: true,
    async execute(ctx, [ url, method, name ]) {
        const req = await fetch(url, {
            method,
            ...ctx.http
        })

        ctx.clearHttpOptions()
        
        const contentType = req.headers.get("content-type")?.split(";")[0]
        
        if (contentType === "application/json") {
            ctx.setEnvironmentKey(name, await req.json())
        } else ctx.setEnvironmentKey(name, await req.text())

        return Return.success(req.status)
    },
})
```
    
</details>