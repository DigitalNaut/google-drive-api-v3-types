import { ReplyResource } from ".";

export interface RepliesListPathParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
}

export interface RepliesListQueryParams {
  /** Whether to include deleted replies. Deleted replies will not include their original content. */
  includeDeleted?: boolean;
  /** The maximum number of replies to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
}

export interface RepliesListResponse {
  /**
   * Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#replyList".
   */
  kind?: string;
  /** The list of replies. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  replies?: ReplyResource[];
  /** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
}
