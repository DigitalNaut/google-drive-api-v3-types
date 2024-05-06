export interface FilesDeletePathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface FilesDeleteQueryParams {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** @deprecated If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. */
  enforceSingleParent?: boolean;
}
