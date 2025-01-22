import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { number } from "@rjweb/utils"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function round(value: number): number {
  const [top, bottom] = number.fraction(value)

  return number.round(top / bottom, 4)
}

export function is(value: number | undefined, target: number): boolean {
  if (value === undefined) return false

  const ceil = value + 0.01,
    floor = value - 0.01

  return floor <= target && ceil >= target
}

export function parse(value: string): number | undefined {
  value = value.replace(',', '.')

  const f = parseFloat(value)
  if (!isNaN(f)) return f

  return undefined
}