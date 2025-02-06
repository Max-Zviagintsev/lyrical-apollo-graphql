import {
  AddSongArgs,
  DeleteSongArgs,
  ResolverFunction,
  Song,
  SongQueryArgs,
} from './types.ts';

const songResolvers = {
  Query: {
    song: ((parent, { id }): Song | null => {
      return { id, title: 'Example song', lyrics: [] };
    }) as ResolverFunction<SongQueryArgs, Song | null>,

    songs: ((): Song[] | null => {
      return [{ id: '123', title: 'Example song', lyrics: [] }];
    }) as ResolverFunction<null, Song | null>,
  },

  Mutation: {
    addSong: ((parent, { title }): Song => {
      return { id: '123', title, lyrics: [] };
    }) as ResolverFunction<AddSongArgs, Song>,

    deleteSong: ((parent, { id }): void => {}) as ResolverFunction<
      DeleteSongArgs,
      void
    >,
  },
};

export { songResolvers };
