import { beforeEach, describe, expect, it } from 'vitest'
import { Http } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })
  const access_token_1s =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTo1NDoxOC4xMDNaIiwiaWF0IjoxNzA3MTQ4NDU4LCJleHAiOjE3MDcxNDg0NTl9.mgzPBSHDIwz5Pxv5F0_WH49UX_raSEqWpC8zzbIL_BM'
  const refresh_token_1000days =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTo1NjoyOC40NTFaIiwiaWF0IjoxNzA3MTQ4NTg4LCJleHAiOjE3OTM1NDg1ODh9.Nn-2KM8lPX2g791Fa55W0mJi5-GGGBEaTorVZ4Q91N8'
  it('Gọi API', async () => {
    // Không nên đụng đến thư mục apis
    // Vì test riêng file http thì chỉ nên dùng http thôi, vì lỡ như thư mục apis có thay đổi gì đó thì cũng không ảnh hưởng gì đến file test này
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Auth Request', async () => {
    await http.post('login', {
      email: 'congltph27602@fpt.edu.vn',
      password: '123456'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_1000days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
