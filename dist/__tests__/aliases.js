"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockType = void 0;
const util_1 = require("util");
var BlockType;
(function (BlockType) {
    BlockType[BlockType["Possibilities"] = 0] = "Possibilities";
    BlockType[BlockType["String"] = 1] = "String";
})(BlockType || (exports.BlockType = BlockType = {}));
class Aliases {
    source;
    index = 0;
    constructor(regex) {
        this.source = regex.source.replaceAll("?:", "");
    }
    parseStringBlock() {
        const tokens = new Array();
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const str = this.parseWhile(x => /[A-z]/.test(x));
            if (!str)
                break;
            tokens.push({
                value: str,
                isLastNull: this.source[this.index] === "?" ? (this.index++, true) : false
            });
        }
        return {
            tokens,
            type: BlockType.String
        };
    }
    parsePossibilitiesBlock() {
        const possibilities = new Array();
        // Skip (
        this.index++;
        for (;;) {
            const block = this.parseStringBlock();
            possibilities.push(block);
            if (this.source[this.index] === ")")
                break;
            else if (this.source[this.index] === "|")
                this.index++;
            else
                throw new Error(`Unknown symbol: ${this.source[this.index]}`);
        }
        // Skip )
        this.index++;
        return {
            nullable: this.source[this.index] === "?" ? (this.index++, true) : false,
            type: BlockType.Possibilities,
            possibilities
        };
    }
    parseWhile(fn) {
        let chars = "";
        let char;
        while (fn(char = this.source[this.index])) {
            if (!char)
                break;
            chars += char;
            this.index++;
        }
        return chars;
    }
    parse() {
        const nodes = new Array();
        for (;;) {
            if (this.index === this.source.length)
                break;
            const char = this.source[this.index];
            if (/[A-z]/.test(char))
                nodes.push(this.parseStringBlock());
            else if (char === "(")
                nodes.push(this.parsePossibilitiesBlock());
            else
                throw new Error(`Unknown symbol: ${char}`);
        }
        return Aliases.toArray(nodes);
    }
    static getBlockMatches(block) {
        const matches = new Array();
        switch (block.type) {
            case BlockType.Possibilities: {
                for (const possibility of block.possibilities) {
                    matches.push(...this.getBlockMatches(possibility));
                }
                if (block.nullable)
                    matches.push("");
                break;
            }
            case BlockType.String: {
                for (const token of block.tokens) {
                    matches.push(token.value);
                    if (token.isLastNull)
                        matches.push(token.value.slice(0, -1));
                }
                break;
            }
        }
        return matches;
    }
    static toArray(blocks) {
        const aliases = new Array();
        const outputs = blocks.map(x => this.getBlockMatches(x));
        const maxMatches = outputs.reduce((x, y) => x * y.length, 1);
        console.log(outputs);
        for (let i = 0; i < maxMatches; i++) {
            aliases[i] = "";
            for (const output of outputs) {
                for (let x = 0; x < output.length; x++) {
                    aliases[i + x] += output[x];
                }
            }
        }
        return aliases;
    }
}
console.log("Parsing");
console.log((0, util_1.inspect)(new Aliases(/(?:get|fetch)(?:audit)?logs?/).parse(), { colors: true, depth: Infinity }));
//# sourceMappingURL=aliases.js.map