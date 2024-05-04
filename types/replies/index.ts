import { User } from "../user";

export interface ReplyResource {
  /** Output only. The ID of the reply. */
  id: string;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#reply".
   */
  kind: string;
  /** Output only. The time at which the reply was created (RFC 3339 date-time). */
  createdTime: string;
  /** Output only. The last time the reply was modified (RFC 3339 date-time). */
  modifiedTime: string;
  /**
   * The action the reply performed to the parent comment. Valid values are:
   *  - resolve
   *  - reopen
   */
  action: string;
  /** Output only. The author of the reply. The author's email address and permission ID will not be populated. */
  author: User;
  /** Output only. Whether the reply has been deleted. A deleted reply has no content. */
  deleted: boolean;
  /** Output only. The content of the reply with HTML formatting. */
  htmlContent: string;
  /** The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no action is specified. */
  content: string;
}
