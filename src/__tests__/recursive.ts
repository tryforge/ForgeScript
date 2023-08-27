import recursiveReaddirSync from "../functions/recursiveReaddirSync"

console.log(
    recursiveReaddirSync("./src/__tests__/a1").map(x => x.name)
)