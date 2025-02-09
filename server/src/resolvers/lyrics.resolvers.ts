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
    addLyrics: async (
      _: unknown,
      args: { id: string; content: string }
    ): Promise<Lyrics> => {
      try {
        const newLyrics = new LyricsModel({
          id: args.id,
          content: args.content,
        });

        const savedLyrics = await newLyrics.save();
        return savedLyrics;
      } catch (error) {
        console.error('Error adding lyrics:', error);
        throw new Error('Failed to add lyrics');
      }
    },

    likeLyrics: () => {},
  },
};

export { lyricsResolvers };
