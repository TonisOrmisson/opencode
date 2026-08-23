export function taskbarBadgeCount(count: number, focused: boolean) {
  if (focused || !Number.isFinite(count)) return 0
  return Math.max(0, Math.floor(count))
}
