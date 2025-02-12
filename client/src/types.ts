export interface Lyrics {
  id: string
  content: string
  likes: number
}
export interface Song {
  id: string
  title: string
  lyrics: Lyrics[]
}
export interface SongCreateBody {
  title: string
}
export interface AddLyricsBody {
  content: string
}
