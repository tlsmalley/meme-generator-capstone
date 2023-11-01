// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SiteContent, Meme, Home } = initSchema(schema);

export {
  SiteContent,
  Meme,
  Home
};