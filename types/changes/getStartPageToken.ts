export interface GetStartPageTokenQueryParams {
  /** The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. */
  driveId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** @deprecated Use `driveId` instead. */
  teamDriveId: string;
}

export interface GetStartPageTokenResponse {
  /** The starting page token for listing future changes. The page token doesn't expire. */
  startPageToken: string;
  /**
   *  Identifies what kind of resource this is.
   *
   *  Value: the fixed string "drive#startPageToken".
   * */
  kind: string;
}
