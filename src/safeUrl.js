const errorMessage = 'The given protocol is not allowed'
const knownProtocols = ['https:', 'http:']

export function safeUrl(string) {
  const url = new URL(string)

  if (url.searchParams) {
    for (const [_, value] of url.searchParams) {
      if (!isSafeUrl(value)) {
        throw new Error(errorMessage)
      }
    }
  }

  if (isSafeUrl(url)) {
    return url.toString()
  }

  throw new Error(errorMessage)
}

function isSafeUrl(string) {
  try {
    const url = new URL(string)
    return knownProtocols.includes(url.protocol)
  } catch(e) {
    return true
  }
}
