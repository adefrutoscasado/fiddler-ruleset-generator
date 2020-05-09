"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class ResponseMock {
    constructor(response, request, { useJsonOnSuccess = true }) {
        this.response = response;
        this.request = request;
        this.useJsonOnSuccessOption = useJsonOnSuccess;
    }
    isSuccessful() {
        return this.response.status >= 200 && this.response.status < 300;
    }
    isJSON() {
        return this.response.content.mimeType === 'application/json';
    }
    shouldCreateJsonMock() {
        if (!(this.isJSON() && this.isSuccessful()))
            return false;
        return this.useJsonOnSuccessOption;
    }
    getFiddlerMock() {
        if (this.shouldCreateJsonMock())
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
        if (this.shouldCreateJsonMock())
            return JSON.stringify(JSON.parse(this.response.content.text), null, 2);
        else
            return this.response.content.text;
    }
    getFilenameExtension() {
        if (this.shouldCreateJsonMock())
            return 'json';
        else
            return 'dat';
    }
}
exports.default = ResponseMock;
//# sourceMappingURL=ResponseMock.js.map