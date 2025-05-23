# Creating your first Extension

## Before you start...
Make sure you have `node` installed on your machine, you can verify this by using `node -v` on a terminal like Windows CMD.

> If you don't have `node` installed, you can get it [here](https://nodejs.org/en/download).

## Creating a Workspace
Create a new folder, somewhere in your machine, let's name it `my-first-extension`, now let's open it with an IDE like Visual Studio Code.

Once opened, open a terminal, and run the following commands:
1.  ```bash
    npm i --g typescript
    ```
2.  ```bash
    npm init --y
    ```
3.  ```bash
    npm i typescript github:tryforge/ForgeScript#dev --save-dev
    ```
4.  ```bash
    tsc --init --target es2022 --rootdir src --outdir dist
    ```

Now then, let's create a folder called `src`, which is where all our code will reside.

## Compiling your Changes
Before you push your changes to GitHub, make sure to compile them. We use TypeScript therefore compiling is a mandatory step in the development of an extension.

After you are done with your changes, run the following command in the terminal:
```bash
tsc
```

Technically, after the process has finished, everything is now ready to be pushed to your repository on GitHub.

If you want to generate metadata and docs for your extension, **do not** push your changes already after compiling. Instead, read [the next step](#generating-metadata--docs).

## Generating Metadata & Docs
In order to generate metadata and docs for your extension, you will need to create a new `docgen.ts` file in your `src` root folder containing this code:
```ts
import { generateMetadata } from "@tryforge/forgescript" 

generateMetadata(`${__dirname}/native`, "native")
```
> *Replace `native` if your native functions folder has a different name.*

\
Then, add the following script to the existing scripts in your `package.json` file:

```json
{
  "scripts": {
    "docgen": "tsc && typedoc src/index.ts && node dist/docgen"
  },
}
```
\
Now, **after** compiling your changes, run this command:
```bash
npm run docgen
```

Once this step is done you are ready to push everything to GitHub. If you prefer adding changelog notes to your commits, head over to [the next step](#initializing-changelog-notes).

---

### Initializing Changelog Notes
> Before initializing, make sure you have completed the [previous step](#generating-metadata--docs). If you do not want to add a note to your commit, simply stick to `npm run docgen`.

First you need to add a new function by creating a `prompt.ts` file somewhere in your `src` root folder containing the code below without any modification:
```ts
import { stdin, stdout } from "process"
import { createInterface } from "readline"

export default async function(q: string) {
    const itf = createInterface(stdin, stdout)
    return new Promise<string>(r => {
        itf.question(q, input => {
            itf.close()
            r(input)
        })
    })
}
```
\
Create a new `commit.ts` file in your `src` root folder. Copy and paste the code below into the newly created file. You may need to adjust the import for the `prompt` function, depending on where you have this file located in your project.
```ts
import { execSync } from "child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"
import prompt from "./functions/prompt"

const path = "./metadata"
if (!existsSync(path)) mkdirSync(path)

const version = require("../package.json").version

async function main() {
    let skip = false

    const msg = (await prompt("Please write the commit message: ")).replace(
        /(--?(\w+))/gim, (match) => {
            const name = /(\w+)/.exec(match)![1].toLowerCase()
        
            switch (name) {
                case "hide": {
                    skip = true
                    break
                }

                default: {
                    throw new Error(`--${name} is not a valid flag.`)
                }
            }

            return ""
        } 
    ).trim()

    const fileName = join(path, "changelogs.json")
    const json: Record<string, string[]> = existsSync(fileName) ? JSON.parse(readFileSync(fileName, "utf-8")) : {}
    json[version] ??= []

    if (!skip) {
        json[version].unshift(msg)
        writeFileSync(fileName, JSON.stringify(json), "utf-8")
    }

    const branch = await prompt("Write the branch name to push to (defaults to dev): ") || "dev"
    const escapedMsg = msg.replace(/\$/g, "\\$")

    execSync("git branch -M " + branch + " && git add . && git commit -m \"" + escapedMsg + "\" && git push -u origin " + branch, {
        stdio: "inherit"
    })
}

// Nothing
main()
```
\
Add the following script to the existing scripts in your `package.json` file:
```json
{
  "scripts": {
    "commit": "npm run docgen && node dist/commit"
  },
}
```
\
Instead of running `npm run docgen` after compiling, run:
```bash
npm run commit
```
This command allows you to add an additional changelog note to your commit and automatically pushes your changes. If your extension was added as an official or community extension, all changelog notes will be displayed in the "Changelog" tab on the docs.

> Note that you should not run both scripts for the same commit. Either run `docgen` or `commit`, whatever suits your needs best.