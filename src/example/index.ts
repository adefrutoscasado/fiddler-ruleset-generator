import exportZip from './../index'
import * as _networkCapture from './mock.json'
import { promisify } from 'util';
import * as fs from 'fs';
const writeFile = promisify(fs.writeFile);
// @ts-ignore
const networkCapture = _networkCapture as NetWorkReport

(async () => {
  const zip = await exportZip(networkCapture, {type: 'nodebuffer'}, {useJsonOnSuccess: true})
  await writeFile('generated/export.zip', zip)
})()