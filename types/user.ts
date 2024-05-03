/** Information about a Drive user. */
export interface User {
  /** Output only. A plain text displayable name for this user. */
  displayName: string;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#user".
   */
  kind: string;
  /** Output only. Whether this user is the requesting user. */
  me: boolean;
  /** Output only. The user's ID as visible in Permission resources. */
  permissionId: string;
  /** Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
  emailAddress: string;
  /** Output only. A link to the user's profile photo, if available. */
  photoLink: string;
}
