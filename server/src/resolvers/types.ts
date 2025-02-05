export type ResolverParent = unknown;

export type ResolverFunction<Args, ReturnType> = (
  parent: ResolverParent,
  args: Args
) => ReturnType;

export interface Lyrics {
  id: string;
  content: string;
  likes: number;
}

export interface LyricsQueryArgs {
  id: string;
}

export interface AddLyricsArgs {
  content: string;
  songID: string;
}

export interface LikeLyricsArgs {
  id: string;
}

export interface Song {
  id: string;
  title: string;
  lyrics: Lyrics[];
}

export interface SongQueryArgs {
  id: string;
}

export interface AddSongArgs {
  title: string;
}

export interface DeleteSongArgs {
  id: string;
}
