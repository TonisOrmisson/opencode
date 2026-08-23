import { describe, expect, test } from "bun:test"
import { taskbarBadgeCount } from "./taskbar-attention"

describe("taskbar badge count", () => {
  test("normalizes counts for Electron's native badge API", () => {
    expect(taskbarBadgeCount(3, false)).toBe(3)
    expect(taskbarBadgeCount(3.9, false)).toBe(3)
    expect(taskbarBadgeCount(-1, false)).toBe(0)
    expect(taskbarBadgeCount(Number.NaN, false)).toBe(0)
  })

  test("hides the badge while the window is focused", () => {
    expect(taskbarBadgeCount(3, true)).toBe(0)
  })
})
