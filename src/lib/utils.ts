import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTime(text: string): number {
  const wpm = 180
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
