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
const util_1 = require("util");
const fs = require("fs");
const RuleSet_1 = require("./RuleSet");
const ResponseMock_1 = require("./ResponseMock");
const networkCaptureImport = require("./target/networkcapture.json");
const networkCapture = networkCaptureImport;
const writeFile = util_1.promisify(fs.writeFile);
const OUTPUT_FOLDER = './generated/';
const OUTPUT_RULESET_FILENAME = 'ruleset';
const MOCKS_PATH = 'C:/mocks/';
const main = (networkCapture) => __awaiter(void 0, void 0, void 0, function* () {
    const ruleSet = new RuleSet_1.default();
    yield networkCapture.log.entries.forEach(({ response, request }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const responseMock = new ResponseMock_1.default(response, request);
            yield writeFile(`${OUTPUT_FOLDER}mocks/${responseMock.getFilename()}`, responseMock.getFiddlerMock());
            ruleSet.addRule({
                match: request.url,
                action: `${MOCKS_PATH}${responseMock.getFilename()}`
            });
        }
        catch (error) {
            console.error(`There was an error processing request ${request.url}\n`);
        }
    }));
    yield writeFile(`${OUTPUT_FOLDER}${OUTPUT_RULESET_FILENAME}.farx`, ruleSet.getXMLRuleSet());
    console.log('Process finished');
});
main(networkCapture);
//# sourceMappingURL=index.js.map