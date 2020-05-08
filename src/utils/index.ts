

const MAX_FILENAME_LENGTH: number = 248 // for windows

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1)

export const regexEscape = (string: string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

export const allowUnsecureConnection = (url: string) => url.replace('https', 'https?')

export const stripQueryStringAndHashFromPath = (url: string) => url.split("?")[0].split("#")[0]

export const addRegexFlag = (regExpression: string) => `regex:^${regExpression}`

export const removeSymbols = (string: string) => string.replace(/[^a-zA-Z ]/g, "")

export const chunkString = (string: string, length: number) => string.match(new RegExp('.{1,' + length + '}', 'g')) || []

export const limiteFilenameLength = (name: string, formatLength: number) => {
  const DOT_LENGTH: number = 1
  const [first] = chunkString(name, MAX_FILENAME_LENGTH - formatLength - DOT_LENGTH)
  return first
}

