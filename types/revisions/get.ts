export interface RevisionsGetPathParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the revision. */
  revisionId: string;
}

export interface RevisionsGetQueryParams {
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media. */
  acknowledgeAbuse?: boolean;
}
