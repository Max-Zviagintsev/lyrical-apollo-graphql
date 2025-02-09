export interface Lyrics {
  id: string
  content: string
  likes: number
}

export interface Song {
  id: string
  title: string
}

export interface SongCreateBody {
  title: string
}
