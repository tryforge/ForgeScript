"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "avatar",
    type: "messageCreate",
    aliases: ["av"],
    code: `
    $onlyIf[$authorID==$botOwnerID;]
    $if[$message!=;
        $if[$message==--random;
            $let[user;$randomMemberID]
        ;
            $let[req1;$findMember[$guildID;$message;false]]
            $if[$get[req1]!=;
                $let[user;$get[req1]]
            ;
                $let[req2;$findUser[$message;false]]
                $if[$get[req2]!=;
                    $let[user;$get[req2]]
                ;
                    $let[user;]
                ]
            ]
        ]
    ;
        $let[user;$authorID]
    ]
    $onlyIf[$get[user]!=;Usuario Inválido!]

    $color[$if[$memberExists[$guildID;$get[user]]==true;$if[$memberDisplayColor==#000000;35393e];5865F2]]
    $title[Avatar de $username[$get[user]]]
    $let[av1;$userAvatar[$get[user];2048;png]]
    $let[av2;]
    $let[exists;$memberExists[$guildID;$get[user]]]
    $if[$get[exists]==true;
        $let[av2;$memberAvatar[$guildID;$get[user];2048;png]]
    ]
    $description[Avatar Global.]
    $image[$get[av1]]
    $footer[Pedido por $username;$userAvatar[$authorID;2048;png]]
    $if[$get[av2]!=;
        $onlyIf[$get[av1]!=$get[av2];]
        $addActionRow
        $addButton[$authorID_av1_$get[user];Global;Primary;;true]
        $addButton[$authorID_av2_$get[user];Servidor;Primary;;false]
    ]
    `
};
//# sourceMappingURL=av.js.map