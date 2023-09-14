import { EnumLike } from "../structures";
export type Properties<Enum extends EnumLike, Type> = {
    [P in keyof Enum]: (v?: Type | null, sep?: string | null) => null | undefined | string | number | boolean;
};
export default function defineProperties<Enum extends EnumLike, Type>(props: Properties<Enum, Type>): Properties<Enum, Type>;
//# sourceMappingURL=defineProperties.d.ts.map