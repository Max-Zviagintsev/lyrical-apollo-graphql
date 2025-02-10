import LyricsModel from '../models/lyrics.model.ts';
import { Lyrics } from '../types.ts';

const lyricsResolvers = {
  Query: {
    lyrics: async (_: unknown, id: string): Promise<Lyrics | null> => {
      try {
        const lyrics = await LyricsModel.findById(id);
        if (!lyrics) {
          throw new Error('Song not found');
        }
        return lyrics;
      } catch (error) {
        console.error('Error fetching song:', error);
        throw new Error('Failed to fetch song');
      }
    },
  },

  Mutation: {
    likeLyrics: async (_: unknown, id: string) => {
      try {
        const lyrics = await LyricsModel.findById(id);
        if (!lyrics) {
          throw new Error('Lyrics not found');
        }
        lyrics.likes += 1;
        const updatedLyrics = await lyrics.save();
        return updatedLyrics;
      } catch (error) {
        console.error('Error liking lyrics:', error);
        throw new Error('Failed to like lyrics');
      }
    },
  },
};

export { lyricsResolvers };
