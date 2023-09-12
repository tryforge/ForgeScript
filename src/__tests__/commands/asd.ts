export default {
    type: "interactionCreate",
    code: `$log[$customID]
    $if[$customID==addbot;
        $modal[botinteract;Agregar un Robot]
        $addTextInput[IDinput;ID del bot;Short;yes;ID de tu Robot;;0;20]
        $addTextInput[prefixbot;Prefix del bot;Short;yes;Prefix de tu Robot;;0;5]
    ;$stop]`
}