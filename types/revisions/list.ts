import { RevisionsResource } from ".";

export interface RevisionsListPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface RevisionsListQueryParams {
  /** The maximum number of revisions to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
}

export interface RevisionsListResponse {
  /** The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /**
   * Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#revisionList".
   */
  kind?: string;
  /** The list of revisions. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  revisions?: RevisionsResource[];
}
