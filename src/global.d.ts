declare type Method = "GET" | "POST" | "PUT" | "PATCH" 

declare type _RequestContent = {
  size: number
  mimeType: string
  compression: number
  /** When JSON, needs to be parsed */
  text: string
  cache: any
  timings: any
  serverIPAddress: any
  _initiator: any
  _priority: string,
  _resourceType: string,
  connection: string,
  pageref: string
}

declare type _ResponseContent = {
  size: number
  mimeType: string
  compression: number
  text: string
  encoding: string
}

declare type Header = {
  name: string
  value: string
}

declare type QueryString = {
  name: string
  value: string
}

declare type Cookie = {
  name: string
  value: string
  expires: any | null
  httpOnly: boolean
  secure: boolean
}

declare type _Response = {
  status: number
  statusText: string
  httpVersion: string
  headers: Header[]
  cookies: any[]
  content: _ResponseContent
}

declare type _Request = {
  method: Method
  url: string
  httpVersion: string
  headers: Header[]
  queryString: QueryString[]
  cookies: Cookie[]
  content: _RequestContent
}

declare type Petition = {
  startedDateTime: string
  time: number
  request: _Request
  response: _Response
  cache: any
  timings: any
  serverIpAddress: string
  _initiator: any
  _priority: string
  _resourceType: string
  connection: string
  pageref: string
}

declare type NetWorkReport = {
  log: {
    version: string
    creator: any
    pages: any[]
    entries: Petition[] // collision with native Request type
  }
}
