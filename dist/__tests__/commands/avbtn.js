"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "avatar",
    type: "interactionCreate",
    code: `
    $onlyIf[$authorID==$botOwnerID;]
    $onlyIf[$isButton]
    $onlyIf[$or[$startsWith[$customID;$authorID_av1];$startsWith[$customID;$authorID_av2]]==true]

    $let[av1;]
    $let[av2;]
    $if[$startsWith[$customID;$authorID_av1]==true;
        $let[user;$replace[$customID;$authorID_av1_;]]
        $let[sent;
            $interactionUpdate[
                $color[$if[$memberExists[$guildID;$get[user]]==true;$if[$memberDisplayColor==#000000;35393e];5865F2]]
                $title[Avatar de $username[$get[user]]]
                $description[Avatar Global.]
                $image[$userAvatar[$get[user];2048;png]]
                $addActionRow
                $addButton[$authorID_av1_$get[user];Global;Primary;;true]
                $addButton[$authorID_av2_$get[user];Servidor;Primary;;false]
            ]
        ]
    ;
        $let[user;$replace[$customID;$authorID_av2_;]]
        $onlyIf[$memberExists[$guildID;$get[user]]==true]
        $let[av2;$memberAvatar[$guildID;$get[user];2048;png]]
        $let[sent;
            $interactionUpdate[
                $color[$if[$memberExists[$guildID;$get[user]]==true;$if[$memberDisplayColor==#000000;35393e];5865F2]]
                $title[Avatar de $username[$get[user]]]
                $description[Avatar de Servidor.]
                $image[$memberAvatar[$guildID;$get[user];2048;png]]
                $addActionRow
                $addButton[$authorID_av1_$get[user];Global;Primary;;false]
                $addButton[$authorID_av2_$get[user];Servidor;Primary;;true]
            ]
        ]
    ]
    `
};
//# sourceMappingURL=avbtn.js.map