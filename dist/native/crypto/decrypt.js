"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const structures_1 = require("../../structures");
/**
 * Provided to FS by baby lynn
 */
function decrypt(encryptedText, encryptionKey) {
    const textParts = encryptedText.split(":");
    // @ts-ignore
    const iv = Buffer.from(textParts.shift(), "hex");
    const encrypted = Buffer.from(textParts.join(":"), "hex");
    const decipher = (0, crypto_1.createDecipheriv)("aes-256-cbc", Buffer.from(encryptionKey, "hex"), iv);
    // @ts-ignore
    let decrypted = decipher.update(encrypted, "hex", "utf-8");
    // @ts-ignore
    decrypted += decipher.final("utf-8");
    return decrypted;
}
exports.default = new structures_1.NativeFunction({
    name: "$decrypt",
    description: "Encrypts given text with a key",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to decrypt",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "key",
            description: "The key to use to decrypt the text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, key]) {
        return this.success(decrypt(text, key));
    }
});
//# sourceMappingURL=decrypt.js.map