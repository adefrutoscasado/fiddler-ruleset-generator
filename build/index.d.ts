/// <reference types="node" />
import * as JSZip from 'jszip';
import RuleSet from './RuleSet';
import ResponseMock from './ResponseMock';
interface ExportOptions {
    mocksPath?: string;
    useJsonOnSuccess?: boolean;
    onErrorProcessingRequest?: (errorMessage: string) => void;
}
declare const exportToZip: (networkCapture: NetWorkReport, jsZipGenerationOptions: JSZip.JSZipGeneratorOptions<"text" | "blob" | "arraybuffer" | "base64" | "binarystring" | "array" | "uint8array" | "nodebuffer"> | undefined, { mocksPath, useJsonOnSuccess, onErrorProcessingRequest, }: ExportOptions) => Promise<string | number[] | ArrayBuffer | Uint8Array | Blob | Buffer>;
export { RuleSet, ResponseMock };
export default exportToZip;
