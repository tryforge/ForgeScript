import { createCipheriv, randomBytes } from "crypto"
import { ArgType, NativeFunction } from "../../structures"

/**
 * Provided to FS by baby lynn
 * @param text 
 * @param encryptionKey 
 * @returns 
 */
export function encrypt(text: string, encryptionKey: string) {
    const iv = randomBytes(16)
    const cipher = createCipheriv("aes-256-cbc", Buffer.from(encryptionKey, "hex"), iv)
    let encrypted = cipher.update(text, "utf-8", "hex")
    encrypted += cipher.final("hex")
    return iv.toString("hex") + ":" + encrypted
}

export default new NativeFunction({
    name: "$encrypt",
    version: "1.5.0",
    description: "Encrypts given text with a key",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to encrypt",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "key",
            description: "The key to use to encrypt text",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ text, key ]) {
        return this.success(encrypt(text, key))
    }
})