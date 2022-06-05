import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import { StoreModule } from '../../../types/module';

export default class WeaponModel extends Model {
  static table = StoreModule.StoreWeapon;

  @field('title') title!: string;
  @field('description') description!: string;
  @field('cost') cost!: number;
  @field('weight') weight!: number;
  @field('range') range!: string;
  @field('is_martial') isMartial!: boolean;
  @field('is_finesse') isFinesse!: boolean;
  @field('is_light') isLight!: boolean;
  @field('is_two_handed') isTwoHanded!: boolean;
  @field('is_versatile') isVersatile!: boolean;
  @field('is_heavy') isHeavy!: boolean;
  @field('is_reach') isReach!: boolean;
  @field('is_throw') isThrow!: boolean;
  @field('has_amunition') hasAmunition!: boolean;
  @field('has_loading') hasLoading!: boolean;
  @field('created_at') createdAt!: number;
  @field('updated_at') updatedAt!: number;
}
