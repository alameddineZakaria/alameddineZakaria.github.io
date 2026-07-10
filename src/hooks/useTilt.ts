import { useRef } from 'react'
import type { MouseEvent } from 'react'

const MAX_TILT_DEG = 7
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el || prefersReducedMotion) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(700px) rotateX(${(-y * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(x * MAX_TILT_DEG).toFixed(2)}deg) translateY(-4px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
