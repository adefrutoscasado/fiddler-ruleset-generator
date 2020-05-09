"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSZip = require("jszip");
const RuleSet_1 = require("./RuleSet");
exports.RuleSet = RuleSet_1.default;
const ResponseMock_1 = require("./ResponseMock");
exports.ResponseMock = ResponseMock_1.default;
const OUTPUT_RULESET_FILENAME = 'ruleset';
const MOCKS_PATH = 'C:/mocks/';
const defaultJsZipGenerationOptions = { type: 'blob' };
const exportToZip = (networkCapture, jsZipGenerationOptions = defaultJsZipGenerationOptions, { mocksPath = MOCKS_PATH, useJsonOnSuccess = true, onErrorProcessingRequest = console.error, }) => __awaiter(void 0, void 0, void 0, function* () {
    let zip = new JSZip();
    const ruleSet = new RuleSet_1.default();
    yield networkCapture.log.entries.forEach(({ response, request }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const responseMock = new ResponseMock_1.default(response, request, { useJsonOnSuccess });
            zip.file(`mocks/${responseMock.getFilename()}`, responseMock.getFiddlerMock());
            ruleSet.addRule({
                match: request.url,
                action: `${mocksPath}${responseMock.getFilename()}`
            });
        }
        catch (error) {
            onErrorProcessingRequest(`There was an error processing request ${request.url}\n${error}\n`);
        }
    }));
    zip.file(`${OUTPUT_RULESET_FILENAME}.farx`, ruleSet.getXMLRuleSet());
    return yield zip.generateAsync(jsZipGenerationOptions);
});
exports.default = exportToZip;
//# sourceMappingURL=index.js.map