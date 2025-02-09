import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Song } from '../types.ts';

const songSchema = new Schema<Song>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lyrics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lyrics',
    },
  ],
});

const SongModel = model<Song>('Song', songSchema, 'songs');

export default SongModel;
