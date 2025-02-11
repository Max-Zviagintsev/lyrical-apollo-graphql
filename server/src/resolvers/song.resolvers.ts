import mongoose from 'mongoose';
import SongModel from '../models/song.model.ts';
import LyricsModel from '../models/lyrics.model.ts';
import { Lyrics, Song } from '../types.ts';

const { ObjectId } = mongoose.Types;

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
        const objectId = new ObjectId(id);
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
    deleteSong: async (_: unknown, id: string): Promise<string> => {
      try {
        const objectId = new ObjectId(id);
        const result = await SongModel.findByIdAndDelete(objectId);

        if (!result) {
          throw new Error('Song not found');
        }
        return id;
      } catch (error) {
        console.error('Error deleting song:', error);
        throw new Error('Failed to delete song');
      }
    },
    addLyrics: async (
      _: unknown,
      args: { songId: string; content: string }
    ): Promise<Lyrics> => {
      try {
        const objectId = new ObjectId(args.songId);
        const song = await SongModel.findById(objectId);

        if (!song) {
          throw new Error('Song not found');
        }
        const newLyrics = new LyricsModel({
          content: args.content,
          song,
        });
        song.lyrics.push(newLyrics);

        const savedLyrics = await newLyrics.save();
        await song.save();
        return savedLyrics;
      } catch (error) {
        console.error('Error adding lyrics:', error);
        throw new Error('Failed to add lyrics');
      }
    },
  },
};

export { songResolvers };
