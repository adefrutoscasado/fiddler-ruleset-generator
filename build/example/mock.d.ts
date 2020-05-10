export declare namespace log {
    export const version: string;
    export namespace creator {
        export const name: string;
        const version_1: string;
        export { version_1 as version };
    }
    export const pages: {
        "startedDateTime": string;
        "id": string;
        "title": string;
        "pageTimings": {
            "onContentLoad": number;
            "onLoad": number;
        };
    }[];
    export const entries: {
        "startedDateTime": string;
        "time": number;
        "request": {
            "method": string;
            "url": string;
            "httpVersion": string;
            "headers": {
                "name": string;
                "value": string;
            }[];
            "queryString": never[];
            "cookies": never[];
            "headersSize": number;
            "bodySize": number;
        };
        "response": {
            "status": number;
            "statusText": string;
            "httpVersion": string;
            "headers": {
                "name": string;
                "value": string;
            }[];
            "cookies": never[];
            "content": {
                "size": number;
                "mimeType": string;
                "compression": number;
                "text": string;
            };
            "redirectURL": string;
            "headersSize": number;
            "bodySize": number;
            "_transferSize": number;
        };
        "cache": {};
        "timings": {
            "blocked": number;
            "dns": number;
            "ssl": number;
            "connect": number;
            "send": number;
            "wait": number;
            "receive": number;
            "_blocked_queueing": number;
        };
        "serverIPAddress": string;
        "_initiator": {
            "type": string;
            "stack": {
                "callFrames": never[];
                "parent": {
                    "description": string;
                    "callFrames": never[];
                    "parent": {
                        "description": string;
                        "callFrames": never[];
                        "parent": {
                            "description": string;
                            "callFrames": never[];
                            "parentId": {
                                "id": string;
                                "debuggerId": string;
                            };
                        };
                    };
                };
            };
        };
        "_priority": string;
        "_resourceType": string;
        "connection": string;
        "pageref": string;
    }[];
}
