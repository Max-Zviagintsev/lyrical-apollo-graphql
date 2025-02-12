import mongoose from 'mongoose';
import LyricsModel from '../models/lyrics.model.ts';
import { Lyrics } from '../types.ts';

const { ObjectId } = mongoose.Types;

const lyricsResolvers = {
  Query: {
    lyrics: async (_: unknown, id: string): Promise<Lyrics | null> => {
      try {
        const objectId = new ObjectId(id);
        const lyrics = await LyricsModel.findById(objectId).populate('song');

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
        const objectId = new ObjectId(id);
        const lyrics = await LyricsModel.findById(objectId);

        if (!lyrics) {
          throw new Error('Lyrics not found');
        }

        lyrics.likes = (lyrics.likes || 0) + 1;

        return await lyrics.save();
      } catch (error) {
        console.error('Error liking lyrics:', error);
        throw new Error('Failed to like lyrics');
      }
    },
  },
};

export { lyricsResolvers };
