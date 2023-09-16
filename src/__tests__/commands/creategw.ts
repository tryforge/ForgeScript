export default {

    name: "creategw",

    code: `$onlyIf[$message[0]!=;Invalid Usage, Usage: (duration in seconds) (winners) (prize)]
$onlyIf[$message[1]!=;Invalid Usage, Usage: (duration in seconds) (winners) (prize)]
$onlyIf[$message[2]!=;Invalid Usage, Usage: (duration in seconds) (winners) (prize)]
$let[winners;$replace[$replace[$replace[$message[1];1;One];2;Two];3;Three]]
$let[gwmsg;$sendMessage[$channelID;$title[🎉Giveaway🎉] $description[Ends: <t:$round[$divide[$math[$getTimestamp+$replace[$message[0];s;]000];1000]]:R>

Winners: $get[winners]

Prize: $message[2;200]];true]]

$wait[$replace[$message[0];s;]000]

[Jump To Giveaway\\](https://discord.com/channels/$guildID/$channelID/$get[gwmsg])
$let[participants;$getMessageReactionUsers[$channelID;$get[gwmsg];🎉;,]]
$arrayLoad[particip4nts;,;$get[participants]]
$title[Giveaway Ended]
$description[Winners: $replace[$get[winners];One;<@$arrayAt[participants;$randomNumber[1;$getMessageReactionCount[$channelID;$get[gwmsg];🎉]]]>]]`,

    type: "messageCreate"

}