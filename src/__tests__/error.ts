import { ErrorType, ForgeError } from "../structures/ForgeError"

console.log(
    new ForgeError(
        null,
        ErrorType.InvalidArgType,
        "cope",
        "id",
        "User"
    )
)