import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { number } from "@rjweb/utils"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function round(value: number): number {
  const normalRound = number.round(value, 4)

  const [top, bottom] = number.fraction(value),
    fractionRound = number.round(top / bottom, 4)

  if (Math.abs(normalRound - value) < Math.abs(fractionRound - value)) return normalRound
  return fractionRound
}

export function root(value: number, root: number): number {
  return Math.pow(value, 1 / root)
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