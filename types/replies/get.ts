export interface RepliesGetPathParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the reply. */
  replyId: string;
}

export interface RepliesGetQueryParams {
  /** Whether to return deleted replies. Deleted replies will not include their original content. */
  includeDeleted: boolean;
}
