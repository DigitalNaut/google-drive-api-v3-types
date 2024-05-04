export interface FilesWatchPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface FilesWatchQueryParams {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. */
  acknowledgeAbuse: boolean;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels: string;
}
