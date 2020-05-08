export declare const compose: <R>(fn1: (a: R) => R, ...fns: ((a: R) => R)[]) => (a: R) => R;
export declare const regexEscape: (string: string) => string;
export declare const allowUnsecureConnection: (url: string) => string;
export declare const stripQueryStringAndHashFromPath: (url: string) => string;
export declare const addRegexFlag: (regExpression: string) => string;
export declare const removeSymbols: (string: string) => string;
export declare const chunkString: (string: string, length: number) => RegExpMatchArray;
export declare const limiteFilenameLength: (name: string, formatLength: number) => string;
