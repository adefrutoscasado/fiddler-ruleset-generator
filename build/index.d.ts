/// <reference types="node" />
import * as JSZip from 'jszip';
import RuleSet from './RuleSet';
import ResponseMock from './ResponseMock';
declare const exportToZip: (networkCapture: NetWorkReport, mocksPath?: string, jsZipGenerationOptions?: JSZip.JSZipGeneratorOptions<"text" | "blob" | "arraybuffer" | "base64" | "binarystring" | "array" | "uint8array" | "nodebuffer">, onErrorProcessingRequest?: {
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
}) => Promise<string | number[] | ArrayBuffer | Uint8Array | Blob | Buffer>;
export { RuleSet, ResponseMock };
export default exportToZip;
