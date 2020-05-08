
import {
  removeSymbols,
  limiteFilenameLength
} from './utils'

class ResponseMock {
  private response: _Response;
  private request: _Request;
  constructor(response: _Response, request: _Request) {
    this.response = response
    this.request = request
  }

  isSuccessful() {
    return this.response.status >= 200 && this.response.status < 300
  }
  isJSON() {
    return this.response.content.mimeType === 'application/json'
  }
  getFiddlerMock(): string {
    if (this.isSuccessful() && this.isJSON()) return this.getSuccessfulJsonFiddlerMock()
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
    if (this.isJSON()) return JSON.stringify(JSON.parse(this.response.content.text), null, 2)
    else return this.response.content.text
  }
  private getFilenameExtension(): string {
    if (this.isSuccessful() && this.isJSON()) return 'json'
    else return 'dat'
  }
}

export default ResponseMock