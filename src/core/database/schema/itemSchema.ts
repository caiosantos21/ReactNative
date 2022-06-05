// model/schema.js
import { appSchema } from '@nozbe/watermelondb';
import { storeSchema } from './Items';

export const dbSchema = appSchema({
  version: 1,
  tables: [...storeSchema],
});
