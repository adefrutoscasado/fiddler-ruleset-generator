"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_FILENAME_LENGTH = 248; // for windows
exports.compose = (fn1, ...fns) => fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
exports.regexEscape = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
exports.allowUnsecureConnection = (url) => url.replace('https', 'https?');
exports.stripQueryStringAndHashFromPath = (url) => url.split("?")[0].split("#")[0];
exports.addRegexFlag = (regExpression) => `regex:^${regExpression}`;
exports.removeSymbols = (string) => string.replace(/[^a-zA-Z ]/g, "");
exports.chunkString = (string, length) => string.match(new RegExp('.{1,' + length + '}', 'g')) || [];
exports.limiteFilenameLength = (name, formatLength) => {
    const DOT_LENGTH = 1;
    const [first] = exports.chunkString(name, MAX_FILENAME_LENGTH - formatLength - DOT_LENGTH);
    return first;
};
//# sourceMappingURL=index.js.map