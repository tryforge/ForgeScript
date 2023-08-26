import { ArgType, NativeFunction } from "../structures"

export default function(fn: NativeFunction): string {
    const args = new Array<string>()

    args.push(
        `# ${fn.data.name}`,
        `> ${fn.data.description}`,
        "## Usage"
    )

    if (!fn.data.brackets) {
        args.push(`\`\`\`\n${fn.name}\n\`\`\``)
    }

    if (fn.data.brackets === false || fn.data.brackets) {
        if (fn.data.brackets === false) args.push("---")
        
        args.push(`\`\`\`\n${fn.name}[${fn.data.args!.map(x => x.rest ? `...${x.name}` : x.name).join(";")}]\n\`\`\``)

        args.push(
            "| Name | Type | Description | Required | Spread", 
            "| :---: | :---: | :---: | :---: | :---: |",
            ...fn.data.args!.map(x => [
                x.name,
                ArgType[x.type],
                x.description,
                x.required ? "Yes" : "No",
                x.rest ? "Yes": "No"
            ].join(" | "))
        )
    } 

    args.push(`## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/docs/functions/${fn.name.slice(1)}.md)`)

    return args.join("\n")
}