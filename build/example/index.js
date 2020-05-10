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
const index_1 = require("./../index");
const _networkCapture = require("./mock.json");
const util_1 = require("util");
const fs = require("fs");
const writeFile = util_1.promisify(fs.writeFile);
// @ts-ignore
const networkCapture = _networkCapture;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const zip = yield index_1.default(networkCapture, { type: 'nodebuffer' }, { useJsonOnSuccess: false });
    yield writeFile('generated/export.zip', zip);
}))();
//# sourceMappingURL=index.js.map