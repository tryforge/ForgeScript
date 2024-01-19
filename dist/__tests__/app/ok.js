"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.ApplicationCommand({
    data: {
        name: "eval",
        name_localizations: {
            "es-ES": "evaluar",
        },
        description_localizations: {
            "es-ES": "Evalua un codigo"
        },
        description: "Evaluate a code.",
        options: [
            {
                type: 3,
                name: "code",
                description: "Your code goes here.",
                required: true,
            },
            {
                type: 5,
                name: "ephemeral",
                description: "Make the response ephemeral?"
            }
        ]
    },
    code: `
    $applicationCommandDisplay
 `
});
//# sourceMappingURL=ok.js.map