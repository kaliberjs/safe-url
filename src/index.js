const safeProtocols = ['https:', 'http:']

export function safeUrl(string, { allowedHostsList = [] } = {}) {
  const url = new URL(string)

  if (allowedHostsList.length && !allowedHostsList.includes(url.host)) {
    throw new Error(`The given host is not allowed: '${url.host}'`)
  }

  if (safeProtocols.includes(url.protocol)) {
    return string
  }

  throw new Error(`The given protocol is not allowed: '${url.protocol}'`)
}
