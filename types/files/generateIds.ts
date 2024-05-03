export interface FilesGenerateIdsQueryParams {
  /** The number of IDs to return. */
  count: number;
  /**
   * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
   *
   * (Default: 'drive')
   */
  spaces: string;
  /**
   * The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the drive 'space'.
   *
   * (Default: 'files')
   */
  type: string;
}
