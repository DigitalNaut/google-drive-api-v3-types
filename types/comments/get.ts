export interface CommentsGetQueryParameters {
  /** Whether to return deleted comments. Deleted comments will not include their original content. */
  includeDeleted?: boolean;
}

export interface CommentsGetQueryParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
}
