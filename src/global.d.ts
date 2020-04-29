type Method = "GET" | "POST" | "PUT" | "PATCH" 

type _RequestContent = {
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

type _ResponseContent = {
  size: number
  mimeType: string
  compression: number
  text: string
  encoding: string
}

type Header = {
  name: string
  value: string
}

type QueryString = {
  name: string
  value: string
}

type Cookie = {
  name: string
  value: string
  expires: any | null
  httpOnly: boolean
  secure: boolean
}

type _Response = {
  status: number
  statusText: string
  httpVersion: string
  headers: Header[]
  cookies: any[]
  content: _ResponseContent
}

type _Request = {
  method: Method
  url: string
  httpVersion: string
  headers: Header[]
  queryString: QueryString[]
  cookies: Cookie[]
  content: _RequestContent
}

type Petition = {
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

type NetWorkReport = {
  log: {
    version: string
    creator: any
    pages: any[]
    entries: Petition[] // collision with native Request type
  }
}
