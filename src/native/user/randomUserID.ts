import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomUserID",
    category: "user",
    version: "1.0.3",
    description: "Returns a random user ID",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.users.cache.randomKey())
    },
})