import { describe, it, expect } from 'vitest'
import { isAxiosError, isAxiosUnprocessableEntityError } from '../utils'
import { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

// describe dùng để mô tả tập hợp các ngữ cảnh hoặc đơn vị cần test: Ví dụ function, component
describe('isAxiosError', () => {
  // it dùng để ghi chú trường hợp cần t
  it('isAxiosError trả về boolean', () => {
    // expect dùng để mong đợi giá trị trả về
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})

describe('isAxiosUnprocessableEntityError', () => {
  it('isAxiosUnprocessableEntityError trả về boolean', () => {
    expect(isAxiosUnprocessableEntityError(new Error())).toBe(false)
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.InternalServerError,
          data: null
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
      )
    ).toBe(false)
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity,
          data: null
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
      )
    ).toBe(true)
  })
})
