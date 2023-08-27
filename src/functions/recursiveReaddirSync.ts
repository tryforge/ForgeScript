import { Dirent, readdirSync } from "fs"

export default function recursiveReaddirSync(path: string): Dirent[] {
    const arr = new Array<Dirent>()

    for (const file of readdirSync(path, { withFileTypes: true })) {
        if (file.isDirectory()) {
            arr.push(file, ...recursiveReaddirSync(`${path}/${file.name}`))
        } else {
            arr.push(file)
        }
    }

    return arr
}