import mongoose from 'mongoose';
import SongModel from '../models/song.model.ts';
import LyricsModel from '../models/lyrics.model.ts';
import { Lyrics, Song } from '../types.ts';

const { ObjectId } = mongoose.Types;

const songResolvers = {
  Query: {
    songs: async (): Promise<Song[]> => {
      try {
        return await SongModel.find({}, { __v: 0 }).populate('lyrics');
      } catch (error) {
        console.error('Error fetching songs:', error);
        throw new Error('Failed to fetch songs');
      }
    },

    song: async (_: unknown, args: { id: string }): Promise<Song | null> => {
      try {
        const objectId = new ObjectId(args.id);
        const song = await SongModel.findById(objectId).populate('lyrics');

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

    deleteSong: async (_: unknown, args: { id: string }): Promise<string> => {
      try {
        const objectId = new ObjectId(args.id);
        const result = await SongModel.findByIdAndDelete(objectId);

        if (!result) {
          throw new Error('Song not found');
        }

        console.log('id', args.id);
        return args.id;
      } catch (error) {
        console.error('Error deleting song:', error);
        throw new Error('Failed to delete song');
      }
    },

    addLyrics: async (
      _: unknown,
      args: { songId: string; content: string }
    ): Promise<Song> => {
      try {
        const objectId = new ObjectId(args.songId);
        const song = await SongModel.findById(objectId);

        if (!song) {
          throw new Error('Song not found');
        }

        const newLyrics = new LyricsModel({
          content: args.content,
          song: objectId,
        });
        const savedLyrics = await newLyrics.save();

        song.lyrics.push(savedLyrics._id);

        await song.save();
        return await song.populate('lyrics');
      } catch (error) {
        console.error('Error adding lyrics:', error);
        throw new Error('Failed to add lyrics');
      }
    },
  },
};

export { songResolvers };
