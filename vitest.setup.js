import '@testing-library/jest-dom/vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import config from './src/constants/config'

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

export const restHandlers = [
  http.post(`${config.baseUrl}login`, async () => {
    return HttpResponse.json(loginResponse)
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
