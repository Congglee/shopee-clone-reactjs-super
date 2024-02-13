import '@testing-library/jest-dom/vitest'
import { HttpResponse, http } from 'msw'
import config from 'src/constants/config'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTo1NDoxOC4xMDNaIiwiaWF0IjoxNzA3MTQ4NDU4LCJleHAiOjE3MDcxNDg0NTl9.mgzPBSHDIwz5Pxv5F0_WH49UX_raSEqWpC8zzbIL_BM'
export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTo1NjoyOC40NTFaIiwiaWF0IjoxNzA3MTQ4NTg4LCJleHAiOjE3OTM1NDg1ODh9.Nn-2KM8lPX2g791Fa55W0mJi5-GGGBEaTorVZ4Q91N8'
export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0xM1QxNTowNzowNC4yMzRaIiwiaWF0IjoxNzA3ODM2ODI0LCJleHAiOjE3MTc4MzY4MjN9.fqpDiRq7naF39vzbdJyiyWRRYBcTKOsKOfs_PUJGAH8'

const loginResponse = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0xMFQxNjo1MDoyNS4zNjBaIiwiaWF0IjoxNzA3NTgzODI1LCJleHAiOjE3MTc1ODM4MjR9.USoZQ_KdotNpqjyzvTVG3bM_ZW0EpdQhFe0F3Uzu2tE',
    expires: 9999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0xMFQxNjo1MDoyNS4zNjBaIiwiaWF0IjoxNzA3NTgzODI1LCJleHAiOjE3OTM5ODM4MjV9.y0xc1ai6vMYYQu85RSDAyqGoLlQgFz3FSDF7iouHU8U',
    expires_refresh_token: 86400000,
    user: {
      _id: '65b57b89b11400893df73f66',
      roles: ['User'],
      email: 'congltph27602@fpt.edu.vn',
      createdAt: '2024-01-27T21:54:17.944Z',
      updatedAt: '2024-02-05T15:08:56.099Z',
      __v: 0,
      address: '13 phố Trịnh Văn Bô',
      date_of_birth: '2003-12-31T17:00:00.000Z',
      name: 'Công LT',
      phone: '0987162162',
      avatar: 'bd26f8df-5724-4d8b-afe0-9c8e6273c71c.png'
    }
  }
}

const refreshTokenResponse = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjhmNzAyMGVjNDEyMDg0N2ZlNTY0MyIsImVtYWlsIjoiY29uZ2xkcW44ODhAZ21haWwuY29tIiwicm9sZXMiOlsiQWRtaW4iXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDItMTFUMTQ6MzQ6MDYuMzM3WiIsImlhdCI6MTcwNzY2MjA0NiwiZXhwIjoxNzA4MjY2ODQ2fQ.kpyMm2LIQGSP53zwXj_cB3PnzMFlrdJM449gdzfeHPg'
  }
}

const loginRequest = http.post(`${config.baseUrl}login`, async () => {
  return HttpResponse.json(loginResponse)
})

const refreshToken = http.post(`${config.baseUrl}refresh-access-token`, async () => {
  return HttpResponse.json(refreshTokenResponse)
})

const authRequests = [loginRequest, refreshToken]

export default authRequests
