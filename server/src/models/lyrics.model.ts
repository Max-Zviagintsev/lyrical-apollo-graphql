import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;
import { Lyrics } from '../types.ts';

const lyricsSchema = new Schema<Lyrics>({
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  song: [
    {
      type: Types.ObjectId,
      ref: 'Song',
      required: true,
    },
  ],
});

const LyricsModel = model<Lyrics>('Lyrics', lyricsSchema, 'lyrics');

export default LyricsModel;
