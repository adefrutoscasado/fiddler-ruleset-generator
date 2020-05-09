declare class ResponseMock {
    private response;
    private request;
    private useJsonOnSuccessOption;
    constructor(response: _Response, request: _Request, { useJsonOnSuccess }: {
        useJsonOnSuccess?: boolean | undefined;
    });
    isSuccessful(): boolean;
    isJSON(): boolean;
    shouldCreateJsonMock(): boolean;
    getFiddlerMock(): string;
    private getSuccessfulJsonFiddlerMock;
    private getDefaultFiddlerMock;
    getFilename(): string;
    getParsedResponse(): string;
    private getFilenameExtension;
}
export default ResponseMock;
