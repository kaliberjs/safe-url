const safeProtocols = ['https:', 'http:']

export function safeUrl(string) {
  const url = new URL(string)

  if (safeProtocols.includes(url.protocol)) {
    return string
  }

  throw new Error(`The given protocol is not allowed: '${url.protocol}'`)
}
