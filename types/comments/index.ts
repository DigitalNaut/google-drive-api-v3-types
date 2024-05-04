import { ReplyResource } from "../replies";
import { User } from "../user";

type QuotedFileContent = {
  /** The MIME type of the quoted content. */
  mimeType: string;
  /** The quoted content itself. This is interpreted as plain text if set through the API. */
  value: string;
};

export interface CommentResource {
  /** Output only. The ID of the reply. */
  id: string;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#comment".
   */
  kind: string;
  /** Output only. The time at which the comment was created (RFC 3339 date-time). */
  createdTime: string;
  /** Output only. The last time the comment or any of its replies was modified (RFC 3339 date-time). */
  modifiedTime: string;
  /** Output only. Whether the comment has been resolved by one of its replies. */
  resolved: boolean;
  /**
   * A region of the document represented as a JSON string. For details on defining anchor properties,  refer to [Manage comments and replies](https://developers.google.com/drive/api/guides/manage-comments).
   */
  anchor: string;
  /** Output only. The full list of replies to the comment in chronological order. */
  replies: ReplyResource[];
  /** Output only. The author of the comment. The author's email address and permission ID will not be populated. */
  author: User;
  /** Output only. Whether the comment has been deleted. A deleted comment has no content. */
  deleted: boolean;
  /** Output only. The content of the comment with HTML formatting. */
  htmlContent: string;
  /** The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed. */
  content: string;
  /** The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. */
  quotedFileContent: QuotedFileContent;
}
