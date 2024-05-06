export interface FilesEmptyTrashQueryParams {
  /** @deprecated If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
  enforceSingleParent?: boolean;
  /** If set, empties the trash of the provided shared drive. */
  driveId?: string;
}
