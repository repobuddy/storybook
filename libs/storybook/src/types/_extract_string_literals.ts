export type ExtractStringLiterals<T> = T extends any ? (string extends T ? never : T) : never
