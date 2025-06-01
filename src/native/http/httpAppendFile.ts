import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$httpAppendFile",
    version: "1.4.0",
    description: "Appends a file to form data",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name to add this value to",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "url / path",
            type: ArgType.Attachment,
            rest: false,
            required: true,
            description: "The path or url to use"
        }
    ],
    execute(ctx, [ key, file ]) {
        // @ts-ignore
        ctx.http.form?.append(key, new Blob([file.attachment as Buffer]), file.name!)
        return this.success()        
    },
})