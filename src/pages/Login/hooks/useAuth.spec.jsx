import { renderHook } from "@testing-library/react"
import useAuth from "./useAuth"

describe('useResetPassword', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useAuth())

    expect(typeof result.current.handleChangeInfoLogin).toBe('function')
    expect(typeof result.current.handleSignIn).toBe('function')
  })
})