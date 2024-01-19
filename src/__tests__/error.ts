import { ErrorType, ForgeError } from "../structures/forge/ForgeError"

console.log(new ForgeError(null, ErrorType.InvalidArgType, "cope", "id", "User"))
