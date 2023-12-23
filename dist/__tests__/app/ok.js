"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.ApplicationCommand(module.exports = {
    data: {
        name: "eval",
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
    code: `$let[rand;$round[$randomNumber[0;1.1;true];2]]
    $ifx[
    $if[$get[rand]<0.10;1]
    $elseIf[$get[rand]<0.20;2]
    $elseIf[$get[rand]<0.30;3]
    $elseIf[$get[rand]<0.40;4]
    $elseIf[$get[rand]<0.50;5]
    $else[l]
    ]
 `
});
//# sourceMappingURL=ok.js.map