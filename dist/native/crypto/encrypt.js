"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
const crypto_1 = require("crypto");
const structures_1 = require("../../structures");
/**
 * Provided to FS by baby lynn
 * @param text
 * @param encryptionKey
 * @returns
 */
function encrypt(text, encryptionKey) {
    const iv = (0, crypto_1.randomBytes)(16);
    const cipher = (0, crypto_1.createCipheriv)("aes-256-cbc", Buffer.from(encryptionKey, "hex"), iv);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + ":" + encrypted;
}
exports.encrypt = encrypt;
exports.default = new structures_1.NativeFunction({
    name: "$encrypt",
    description: "Encrypts given text with a key",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to encrypt",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "key",
            description: "The key to use to encrypt text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, key]) {
        return this.success(encrypt(text, key));
    }
});
//# sourceMappingURL=encrypt.js.map