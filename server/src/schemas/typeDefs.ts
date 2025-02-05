import { mergeTypeDefs } from '@graphql-tools/merge';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const querySchema = readFileSync(path.join(__dirname, 'query.graphql'), 'utf8');
const songSchema = readFileSync(path.join(__dirname, 'song.graphql'), 'utf8');
const lyricsSchema = readFileSync(
  path.join(__dirname, 'lyrics.graphql'),
  'utf8'
);

const typeDefs = mergeTypeDefs([songSchema, lyricsSchema, querySchema]);

export { typeDefs };
