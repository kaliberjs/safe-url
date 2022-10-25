export function safeUrl(string) {
  const url = new URL(string)

  if (url.searchParams) {
    for (const [_, value] of url.searchParams) {
      if (!isSafeUrl(value)) {
        throw new Error('The given protocol is not allowed')
      }
    }
  }

  if (isSafeUrl(url)) {
    return url.toString()
  }

  throw new Error('The given protocol is not allowed')
}

function isSafeUrl(string) {
  const safeProtocols = ['https:', 'http:']

  try {
    const url = new URL(string)
    return safeProtocols.includes(url.protocol)
  } catch(e) {
    return true
  }
}
