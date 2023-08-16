import { renderHook } from "@testing-library/react"
import useResetPassword from "./useResetPassword"

describe.only('useResetPassword', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useResetPassword())
   
    expect(typeof result.current.handleResetPassword).toBe('function')
    expect(typeof result.current.handleChangeInfoResetEmail).toBe('function')
    expect(result.current.emailReset).toEqual('')
  })
})