import { Types } from 'mongoose';

export interface Lyrics {
  _id: Types.ObjectId;
  content: string;
  likes?: number;
  song: Types.ObjectId;
}

export interface Song {
  _id: Types.ObjectId;
  title: string;
  lyrics: Types.ObjectId[];
}
