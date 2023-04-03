import type { User } from './user'

export interface Program {
  id: number | string,
  imageUrl: string
  programName: string
  date: string
  detailImageUrl?: { src: string, width: number, height: number }[]
  albumImageUrl?: string[]
  detailContent?: string
}
