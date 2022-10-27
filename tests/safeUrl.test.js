import { it, expect, describe } from '@jest/globals'
import { safeUrl } from '../index'

describe('safeUrl', () => {
  it('returns a string', () => {
    const url = safeUrl('https://kaliber.net')
    expect(typeof url).toBe("string")
  })

  it('preserves the given input string', () => {
    const input = 'https://kaliber.net'
    const result = safeUrl(input)
    expect(result).toEqual(input)
  })

  describe('returns the input url when used with a safe url', () => {
    it('http', () => {
      const httpSafeUrl = 'http://kaliber.net/?token=kaliber&user=1#hash'
      const httpUrl = safeUrl(httpSafeUrl)
      expect(httpUrl).toEqual(httpSafeUrl)
    })

    it('https', () => {
      const httpsSafeUrl = 'https://kaliber.net/?token=kaliber&user=1#hash'
      const httpsUrl = safeUrl(httpsSafeUrl)
      expect(httpsUrl).toEqual(httpsSafeUrl)
    })
  })

  it('throws an error when used with a unsafe url', () => {
    const unsafeInput = 'javascript:confirm(document.domain)//'
    expect(() => safeUrl(unsafeInput)).toThrowError()
  })
})
