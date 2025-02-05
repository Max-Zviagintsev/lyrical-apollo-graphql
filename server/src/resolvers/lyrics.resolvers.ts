import {
  ResolverFunction,
  Lyrics,
  LyricsQueryArgs,
  AddLyricsArgs,
  LikeLyricsArgs,
} from './types.ts';

const lyricsResolvers = {
  Query: {
    lyrics: ((parent, { id }): Lyrics | null => {
      return { id, content: 'Example lyrics', likes: 10 };
    }) as ResolverFunction<LyricsQueryArgs, Lyrics | null>,
  },

  Mutation: {
    addLyrics: ((parent, { content, songID }): Lyrics => {
      return { id: '123', content, likes: 0 };
    }) as ResolverFunction<AddLyricsArgs, Lyrics>,

    likeLyrics: ((parent, { id }): Lyrics => {
      return { id, content: 'Liked lyrics', likes: 100 };
    }) as ResolverFunction<LikeLyricsArgs, Lyrics>,
  },
};

export { lyricsResolvers };
