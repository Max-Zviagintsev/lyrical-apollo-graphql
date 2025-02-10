import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Lyrics } from '../types.ts';

const lyricsSchema = new Schema<Lyrics>({
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const LyricsModel = model<Lyrics>('Lyrics', lyricsSchema, 'lyrics');

export default LyricsModel;
