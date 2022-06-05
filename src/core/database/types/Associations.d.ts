export type ColumnName = string;

export interface BelongsToAssociation {
  type: 'belongs_to';
  key: ColumnName;
}

export interface HasManyAssociation {
  type: 'has_many';
  foreignKey: ColumnName;
}

export type AssociationInfo = BelongsToAssociation | HasManyAssociation;

export interface Associations {
  [tableName: string]: AssociationInfo;
}
