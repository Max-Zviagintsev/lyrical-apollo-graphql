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

export interface Song {
  id: string;
  title: string;
  lyrics: Lyrics[];
}
