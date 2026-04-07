'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress({ color = '#60a5fa' }: { color?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%`, background: color }}
    />
  )
}