declare const _default: {
    "log": {
        "version": string;
        "creator": {
            "name": string;
            "version": string;
        };
        "pages": {
            "startedDateTime": string;
            "id": string;
            "title": string;
            "pageTimings": {
                "onContentLoad": number;
                "onLoad": number;
            };
        }[];
        "entries": ({
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding"?: undefined;
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
                "url"?: undefined;
                "lineNumber"?: undefined;
                "stack"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding"?: undefined;
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
                "url": string;
                "lineNumber": number;
                "stack"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding": string;
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
                "url": string;
                "lineNumber": number;
                "stack"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parentId"?: undefined;
                    "parent"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parentId": {
                        "id": string;
                        "debuggerId": string;
                    };
                    "parent"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "path": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                "url"?: undefined;
                "lineNumber"?: undefined;
                "stack"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
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
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent"?: undefined;
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
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
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent": {
                                            "description": string;
                                            "callFrames": {
                                                "functionName": string;
                                                "scriptId": string;
                                                "url": string;
                                                "lineNumber": number;
                                                "columnNumber": number;
                                            }[];
                                            "parent": {
                                                "description": string;
                                                "callFrames": {
                                                    "functionName": string;
                                                    "scriptId": string;
                                                    "url": string;
                                                    "lineNumber": number;
                                                    "columnNumber": number;
                                                }[];
                                                "parent": {
                                                    "description": string;
                                                    "callFrames": {
                                                        "functionName": string;
                                                        "scriptId": string;
                                                        "url": string;
                                                        "lineNumber": number;
                                                        "columnNumber": number;
                                                    }[];
                                                    "parent": {
                                                        "description": string;
                                                        "callFrames": {
                                                            "functionName": string;
                                                            "scriptId": string;
                                                            "url": string;
                                                            "lineNumber": number;
                                                            "columnNumber": number;
                                                        }[];
                                                    };
                                                };
                                                "parentId"?: undefined;
                                            };
                                            "parentId"?: undefined;
                                        };
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parentId": {
                                    "id": string;
                                    "debuggerId": string;
                                };
                                "parent"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parentId": {
                                    "id": string;
                                    "debuggerId": string;
                                };
                                "parent"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding": string;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parentId": {
                        "id": string;
                        "debuggerId": string;
                    };
                    "parent"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding": string;
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
                "url"?: undefined;
                "lineNumber"?: undefined;
                "stack"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parentId": {
                            "id": string;
                            "debuggerId": string;
                        };
                        "parent"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
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
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent"?: undefined;
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData": {
                    "mimeType": string;
                    "text": string;
                };
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parentId": {
                        "id": string;
                        "debuggerId": string;
                    };
                    "parent"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "path": string;
                    "domain": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding": string;
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
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent": {
                                            "description": string;
                                            "callFrames": {
                                                "functionName": string;
                                                "scriptId": string;
                                                "url": string;
                                                "lineNumber": number;
                                                "columnNumber": number;
                                            }[];
                                            "parentId": {
                                                "id": string;
                                                "debuggerId": string;
                                            };
                                            "parent"?: undefined;
                                        };
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parentId": {
                            "id": string;
                            "debuggerId": string;
                        };
                        "parent"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parentId": {
                                "id": string;
                                "debuggerId": string;
                            };
                            "parent"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "text"?: undefined;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parentId": {
                                    "id": string;
                                    "debuggerId": string;
                                };
                                "parent"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": null;
            "_resourceType": string;
            "pageref": string;
            "_webSocketMessages": {
                "type": string;
                "time": number;
                "opcode": number;
                "data": string;
            }[];
            "connection"?: undefined;
        } | {
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
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
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
                    "encoding": string;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent": {
                                            "description": string;
                                            "callFrames": {
                                                "functionName": string;
                                                "scriptId": string;
                                                "url": string;
                                                "lineNumber": number;
                                                "columnNumber": number;
                                            }[];
                                            "parentId": {
                                                "id": string;
                                                "debuggerId": string;
                                            };
                                            "parent"?: undefined;
                                        };
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent": {
                                            "description": string;
                                            "callFrames": {
                                                "functionName": string;
                                                "scriptId": string;
                                                "url": string;
                                                "lineNumber": number;
                                                "columnNumber": number;
                                            }[];
                                            "parentId": {
                                                "id": string;
                                                "debuggerId": string;
                                            };
                                            "parent"?: undefined;
                                        };
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding"?: undefined;
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
                    "callFrames": {
                        "functionName": string;
                        "scriptId": string;
                        "url": string;
                        "lineNumber": number;
                        "columnNumber": number;
                    }[];
                    "parent": {
                        "description": string;
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parent": {
                                    "description": string;
                                    "callFrames": {
                                        "functionName": string;
                                        "scriptId": string;
                                        "url": string;
                                        "lineNumber": number;
                                        "columnNumber": number;
                                    }[];
                                    "parent": {
                                        "description": string;
                                        "callFrames": {
                                            "functionName": string;
                                            "scriptId": string;
                                            "url": string;
                                            "lineNumber": number;
                                            "columnNumber": number;
                                        }[];
                                        "parent": {
                                            "description": string;
                                            "callFrames": {
                                                "functionName": string;
                                                "scriptId": string;
                                                "url": string;
                                                "lineNumber": number;
                                                "columnNumber": number;
                                            }[];
                                            "parent": {
                                                "description": string;
                                                "callFrames": {
                                                    "functionName": string;
                                                    "scriptId": string;
                                                    "url": string;
                                                    "lineNumber": number;
                                                    "columnNumber": number;
                                                }[];
                                                "parentId": {
                                                    "id": string;
                                                    "debuggerId": string;
                                                };
                                                "parent"?: undefined;
                                            };
                                            "parentId"?: undefined;
                                        };
                                    };
                                };
                                "parentId"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        } | {
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
                "queryString": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "expires": null;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "headersSize": number;
                "bodySize": number;
                "postData"?: undefined;
            };
            "response": {
                "status": number;
                "statusText": string;
                "httpVersion": string;
                "headers": {
                    "name": string;
                    "value": string;
                }[];
                "cookies": {
                    "name": string;
                    "value": string;
                    "path": string;
                    "domain": string;
                    "expires": string;
                    "httpOnly": boolean;
                    "secure": boolean;
                }[];
                "content": {
                    "size": number;
                    "mimeType": string;
                    "compression": number;
                    "text": string;
                    "encoding": string;
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
                        "callFrames": {
                            "functionName": string;
                            "scriptId": string;
                            "url": string;
                            "lineNumber": number;
                            "columnNumber": number;
                        }[];
                        "parent": {
                            "description": string;
                            "callFrames": {
                                "functionName": string;
                                "scriptId": string;
                                "url": string;
                                "lineNumber": number;
                                "columnNumber": number;
                            }[];
                            "parent": {
                                "description": string;
                                "callFrames": {
                                    "functionName": string;
                                    "scriptId": string;
                                    "url": string;
                                    "lineNumber": number;
                                    "columnNumber": number;
                                }[];
                                "parentId": {
                                    "id": string;
                                    "debuggerId": string;
                                };
                                "parent"?: undefined;
                            };
                            "parentId"?: undefined;
                        };
                        "parentId"?: undefined;
                    };
                    "parentId"?: undefined;
                };
                "url"?: undefined;
                "lineNumber"?: undefined;
            };
            "_priority": string;
            "_resourceType": string;
            "connection": string;
            "pageref": string;
            "_webSocketMessages"?: undefined;
        })[];
    };
};
export default _default;
