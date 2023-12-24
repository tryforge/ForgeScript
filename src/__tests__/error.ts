import { ErrorType, ForgeError } from "../structures/@internal/ForgeError"

console.log(new ForgeError(null, ErrorType.InvalidArgType, "cope", "id", "User"))
