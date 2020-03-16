declare class ResponseMock {
    private response;
    private request;
    constructor(response: _Response, request: _Request);
    isSuccessful(): boolean;
    isJSON(): boolean;
    getFiddlerMock(): string;
    private getSuccessfulJsonFiddlerMock;
    private getDefaultFiddlerMock;
    getFilename(): string;
    getParsedResponse(): string;
    private getFilenameExtension;
}
export default ResponseMock;
