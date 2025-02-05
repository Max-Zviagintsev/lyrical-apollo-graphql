import { mergeResolvers } from '@graphql-tools/merge';
import { songResolvers } from './song.resolvers.ts';
import { lyricsResolvers } from './lyrics.resolvers.ts';

const resolvers = mergeResolvers([songResolvers, lyricsResolvers]);

export { resolvers };
