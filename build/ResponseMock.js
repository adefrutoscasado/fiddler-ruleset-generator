"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class ResponseMock {
    constructor(response, request) {
        this.response = response;
        this.request = request;
    }
    isSuccessful() {
        return this.response.status >= 200 && this.response.status < 300;
    }
    isJSON() {
        return this.response.content.mimeType === 'application/json';
    }
    getFiddlerMock() {
        if (this.isSuccessful() && this.isJSON())
            return this.getSuccessfulJsonFiddlerMock();
        return this.getDefaultFiddlerMock();
    }
    getSuccessfulJsonFiddlerMock() {
        return `${this.getParsedResponse()}`;
    }
    getDefaultFiddlerMock() {
        return `
${this.response.httpVersion} ${this.response.status} ${this.response.statusText}
${this.response.headers.map((header) => `${header.name}: ${header.value}`).join('\n')}

${this.getParsedResponse()}`;
    }
    getFilename() {
        const filename = utils_1.removeSymbols(this.request.url);
        const sanitizedFilename = utils_1.limiteFilenameLength(filename, this.getFilenameExtension().length);
        return `${sanitizedFilename}.${this.getFilenameExtension()}`;
    }
    getParsedResponse() {
        if (this.isJSON())
            return JSON.stringify(JSON.parse(this.response.content.text), null, 2);
        else
            return this.response.content.text;
    }
    getFilenameExtension() {
        if (this.isSuccessful() && this.isJSON())
            return 'json';
        else
            return 'dat';
    }
}
exports.default = ResponseMock;
//# sourceMappingURL=ResponseMock.js.map