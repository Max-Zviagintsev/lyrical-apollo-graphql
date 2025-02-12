import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;
import { Song } from '../types.ts';

const songSchema = new Schema<Song>({
  title: {
    type: String,
    required: true,
  },
  lyrics: [
    {
      type: Types.ObjectId,
      ref: 'Lyrics',
    },
  ],
});

const SongModel = model<Song>('Song', songSchema, 'songs');

export default SongModel;
