import { it, expect, describe } from '@jest/globals'
import { safeUrl } from '../src/safeUrl'

describe('safeUrl', () => {
  it('returns a string', () => {
    const url = safeUrl('https://kaliber.net')
    expect(typeof url).toBe("string")
  })

  it('returns the input url when used with a valid url', () => {
    const httpsSafeUrl = 'https://kaliber.net/?token=kaliber&user=1#hash'
    const httpsUrl = safeUrl(httpsSafeUrl)
    expect(httpsUrl).toBe(httpsSafeUrl)

    const httpSafeUrl = 'http://kaliber.net/?token=kaliber&user=1#hash'
    const httpUrl = safeUrl(httpSafeUrl)
    expect(httpUrl).toBe(httpSafeUrl)
  })

  it('throws an error when used with a unsafe url', () => {
    const unsafeInput = 'javascript:confirm(document.domain)//'
    expect(() => safeUrl(unsafeInput)).toThrowError()
  })

  it('throws an error if one of the params is a unsafe part', () => {
    const unsafeInput = 'https://kaliber.net/?returnUrl=javascript:confirm(document.domain)//&token=xyz'
    expect(() => safeUrl(unsafeInput)).toThrowError()
  })
})
