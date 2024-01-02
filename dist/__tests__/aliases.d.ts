export declare enum BlockType {
    Possibilities = 0,
    String = 1
}
export type Block = {
    type: BlockType.Possibilities;
    nullable: boolean;
    possibilities: (Block & {
        type: BlockType.String;
    })[];
} | {
    type: BlockType.String;
    tokens: {
        value: string;
        isLastNull: boolean;
    }[];
};
//# sourceMappingURL=aliases.d.ts.map