import { CommentResource } from ".";

export interface CommentsListPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface CommentsListQueryParams {
  /** Whether to include deleted comments. Deleted comments will not include their original content. */
  includeDeleted?: boolean;
  /** The maximum number of comments to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
  /** The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). */
  startModifiedTime?: string;
}

export interface CommentsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "drive#commentList". */
  kind?: string;
  /** The list of comments. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  comments?: CommentResource[];
  /*** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
}
