import { ArgType, NativeFunction, Return } from "../../structures"

export enum AuthorizingIntegrationOwnersType {
    Guild,
    User
}

export default new NativeFunction({
    name: "$authorizingIntegrationOwners",
    version: "1.5.0",
    description: "Returns the authorizing integration owners of this interaction",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "type",
            description: "The type of authorizing integration owners to return",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AuthorizingIntegrationOwnersType
        },
    ],
    output: ArgType.Json,
    execute(ctx, [type]) {
        const owners = ctx.interaction && "authorizingIntegrationOwners" in ctx.interaction ? ctx.interaction.authorizingIntegrationOwners : undefined
        return this.successJSON(owners && this.hasFields ? owners[type] : owners)
    },
})