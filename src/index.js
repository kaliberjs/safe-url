const safeProtocols = ['https:', 'http:']

export function safeUrl(string) {
  const url = new URL(string)

  if (safeProtocols.includes(url.protocol)) {
    return url.toString()
  }

  throw new Error('The given protocol is not allowed')
}
