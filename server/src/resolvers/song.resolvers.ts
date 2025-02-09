import SongModel from '../models/song.model.ts';
import { Lyrics, Song } from '../types.ts';

const songResolvers = {
  Query: {
    songs: async (): Promise<Song[]> => {
      try {
        const songs = await SongModel.find({}, { __v: 0 }).populate('lyrics');
        return songs;
      } catch (error) {
        console.error('Error fetching songs:', error);
        throw new Error('Failed to fetch songs');
      }
    },
    song: async (_: unknown, id: string): Promise<Song | null> => {
      try {
        const song = await SongModel.findById(id).populate('lyrics');
        if (!song) {
          throw new Error('Song not found');
        }
        return song;
      } catch (error) {
        console.error('Error fetching song:', error);
        throw new Error('Failed to fetch song');
      }
    },
  },

  Mutation: {
    addSong: async (
      _: unknown,
      args: { title: string; lyrics?: Lyrics }
    ): Promise<Song> => {
      try {
        const newSong = new SongModel({
          title: args.title,
          lyrics: args.lyrics,
        });

        const savedSong = await newSong.save();
        return savedSong;
      } catch (error) {
        console.error('Error adding song:', error);
        throw new Error('Failed to add song');
      }
    },
    deleteSong: async (_: unknown, id: string): Promise<boolean> => {
      try {
        const result = await SongModel.findByIdAndDelete(id);
        if (!result) {
          throw new Error('Song not found');
        }
        return true;
      } catch (error) {
        console.error('Error deleting song:', error);
        throw new Error('Failed to delete song');
      }
    },
  },
};

export { songResolvers };
