import { FormData } from "undici"
import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$httpAddForm",
    version: "1.4.0",
    description: "Adds form data to request",
    unwrap: false,
    execute(ctx) {
        ctx.http.form = new FormData()
        return this.success()
    },
})