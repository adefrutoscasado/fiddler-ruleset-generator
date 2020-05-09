
import {
  removeSymbols,
  limiteFilenameLength
} from './utils'

class ResponseMock {
  private response: _Response;
  private request: _Request;
  private useJsonOnSuccessOption: boolean;
  constructor(
    response: _Response, 
    request: _Request,
    {useJsonOnSuccess = true}
  ) {
    this.response = response
    this.request = request
    this.useJsonOnSuccessOption = useJsonOnSuccess
  }

  isSuccessful() {
    return this.response.status >= 200 && this.response.status < 300
  }
  isJSON() {
    return this.response.content.mimeType === 'application/json'
  }
  shouldCreateJsonMock(): boolean {
    if (!(this.isJSON() && this.isSuccessful())) return false
    return this.useJsonOnSuccessOption
  }
  getFiddlerMock(): string {
    if (this.shouldCreateJsonMock()) return this.getSuccessfulJsonFiddlerMock()
    return this.getDefaultFiddlerMock()
  }
  private getSuccessfulJsonFiddlerMock(): string {
    return `${this.getParsedResponse()}`
  }
  private getDefaultFiddlerMock(): string {
    return `
${this.response.httpVersion} ${this.response.status} ${this.response.statusText}
${this.response.headers.map((header: Header) => `${header.name}: ${header.value}`).join('\n')}

${this.getParsedResponse()}`
  }
  getFilename(): string {
    const filename = removeSymbols(this.request.url)
    const sanitizedFilename = limiteFilenameLength(filename, this.getFilenameExtension().length)
    return `${sanitizedFilename}.${this.getFilenameExtension()}`
  }
  getParsedResponse() {
    if (this.shouldCreateJsonMock()) return JSON.stringify(JSON.parse(this.response.content.text), null, 2)
    else return this.response.content.text
  }
  private getFilenameExtension(): string {
    if (this.shouldCreateJsonMock()) return 'json'
    else return 'dat'
  }
}

export default ResponseMock