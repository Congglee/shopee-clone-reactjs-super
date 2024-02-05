import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getProfileFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTowOTowOS43NDRaIiwiaWF0IjoxNzA3MTQ1NzQ5LCJleHAiOjE3MDcyMzIxNDl9.VpSYrcnA4ubAyeHpanBEL_PfgNJQtgOrx71_Z2_v3u4'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3Yjg5YjExNDAwODkzZGY3M2Y2NiIsImVtYWlsIjoiY29uZ2x0cGgyNzYwMkBmcHQuZWR1LnZuIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wNVQxNTowOTowOS43NDRaIiwiaWF0IjoxNzA3MTQ1NzQ5LCJleHAiOjE3MjA5Njk3NDl9.FBXUKgzHCPUFQpq1YQDfRXPPXwuLdZIkFQ9RNppVaoY'

const profile =
  '{"_id":"65b57b89b11400893df73f66","roles":["User"],"email":"congltph27602@fpt.edu.vn","createdAt":"2024-01-27T21:54:17.944Z","updatedAt":"2024-02-05T15:08:56.099Z","__v":0,"address":"13 phố Trịnh Văn Bô","date_of_birth":"2003-12-31T17:00:00.000Z","name":"Công LT","phone":"0987162162","avatar":"bd26f8df-5724-4d8b-afe0-9c8e6273c71c.png"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('getProfileFromLS', () => {
  it('trả về null nếu profile không được set trong localStorage', () => {
    expect(getProfileFromLS()).toBe(null)
  })

  it('trả về parsed profile object từ localStorage nếu được set', () => {
    setProfileToLS(JSON.parse(profile))
    const parsedProfile = JSON.parse(profile)
    expect(getProfileFromLS()).toEqual(parsedProfile)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    setProfileToLS(JSON.parse(profile))

    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
