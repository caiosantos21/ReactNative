import { tableSchema } from '@nozbe/watermelondb';

export const WeaponSchema = tableSchema({
  name: 'posts',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'cost', type: 'number' },
    { name: 'weight', type: 'number' },
    { name: 'range', type: 'string' },
    { name: 'is_martial', type: 'boolean' },
    { name: 'is_finesse', type: 'boolean' },
    { name: 'is_light', type: 'boolean' },
    { name: 'is_two_handed', type: 'boolean' },
    { name: 'is_versatile', type: 'boolean' },
    { name: 'is_heavy', type: 'boolean' },
    { name: 'is_reach', type: 'boolean' },
    { name: 'is_throw', type: 'boolean' },
    { name: 'has_amunition', type: 'boolean' },
    { name: 'has_loading', type: 'boolean' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
