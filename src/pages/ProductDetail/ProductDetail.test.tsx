import { delay, renderWithRouter } from 'src/utils/testUtils'
import { describe, test, expect } from 'vitest'

describe('ProductDetail', () => {
  test('Render UI ProductDetail', async () => {
    renderWithRouter({ route: '/Điện-Thoại-Xiaomi-Redmi-9A-2GB32GB--Hàng-Chính-Hãng-i-60afb07e6ef5b902180aacb6' })
    await delay(1000)
    expect(document.body).toMatchSnapshot()
    // await screen.debug(document.body.querySelector('.bg-gray-200'))
  })
})
