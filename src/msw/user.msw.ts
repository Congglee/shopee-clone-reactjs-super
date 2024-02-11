import '@testing-library/jest-dom/vitest'
import { HttpResponse, http } from 'msw'
import config from 'src/constants/config'
import { access_token_1s } from './auth.msw'

const meResponse = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '65b57b89b11400893df73f66',
    roles: ['User'],
    email: 'congltph27602@fpt.edu.vn',
    createdAt: '2024-01-27T21:54:17.944Z',
    updatedAt: '2024-02-05T15:08:56.099Z',
    address: '13 phố Trịnh Văn Bô',
    date_of_birth: '2003-12-31T17:00:00.000Z',
    name: 'Công LT',
    phone: '0987162162',
    avatar: 'bd26f8df-5724-4d8b-afe0-9c8e6273c71c.png'
  }
}

const meRequest = http.get<any>(`${config.baseUrl}me`, async ({ request }) => {
  const access_token = request.headers.get('authorization')
  if (access_token === access_token_1s) {
    return HttpResponse.json({
      message: 'Lỗi',
      data: {
        message: 'Token hết hạn',
        name: 'EXPIRED_TOKEN'
      }
    })
  }
  return HttpResponse.json(meResponse)
})

const userRequests = [meRequest]

export default userRequests
