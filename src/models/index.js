// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Meme, SiteContent, Home } = initSchema(schema);

export {
  Meme,
  SiteContent,
  Home
};