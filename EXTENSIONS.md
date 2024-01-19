# Creating your first extension

## Before you start...
Make sure you have `node` installed on your machine, you can verify this by using `node -v` on a terminal like Windows CMD.
> If you don't have `node` installed, you can get it [here](https://nodejs.org/en/download)

## Creating a workspace
Create a folder, somewhere in your machine, let's name it `my-first-extension`, now let's open it with an IDE like Visual Studio Code.
Once opened, open a terminal, and run the following commands:
```bash
npm i --g typescript

npm init --y

npm i typescript github:tryforge/ForgeScript#dev --save-dev

tsc --init --target es2022 --rootdir src --outdir dist
```

Now then, let's create a folder called `src`, which is where all our code will reside.
