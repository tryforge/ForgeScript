import { createCipheriv, createDecipheriv, randomBytes } from "crypto"
import { ArgType, NativeFunction } from "../../structures"

/**
 * Provided to FS by baby lynn
 */
function decrypt(encryptedText: string, encryptionKey: string) {
    const textParts = encryptedText.split(":")
    // @ts-ignore
    const iv = Buffer.from(textParts.shift(), "hex")
    const encrypted = Buffer.from(textParts.join(":"), "hex")
    const decipher = createDecipheriv("aes-256-cbc", Buffer.from(encryptionKey, "hex"), iv)
    // @ts-ignore
    let decrypted = decipher.update(encrypted, "hex", "utf-8")
    // @ts-ignore
    decrypted += decipher.final("utf-8")
    return decrypted
}

export default new NativeFunction({
    name: "$decrypt",
    version: "1.5.0",
    description: "Encrypts given text with a key",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to decrypt",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "key",
            description: "The key to use to decrypt the text",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ text, key ]) {
        return this.success(decrypt(text, key))
    }
})