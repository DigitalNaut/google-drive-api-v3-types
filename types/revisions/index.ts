import { User } from "../user";

export interface RevisionsResource {
  /** Output only. The ID of the revision. */
  id: string;
  /** Output only. The MIME type of the revision. */
  mimeType: string;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#revision".
   */
  kind: string;
  /** Whether this revision is published. This is only applicable to Docs Editors files. */
  published: boolean;
  /**
   * Output only. Links for exporting Docs Editors files to specific formats.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  exportLinks: Record<string, string>;
  /**
   * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
   *
   * This field is only applicable to files with binary content in Drive.
   */
  keepForever: boolean;
  /** Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
  md5Checksum: string;
  /** Output only. The last time the revision was modified (RFC 3339 date-time). */
  modifiedTime: string;
  /** Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. */
  publishAuto: boolean;
  /** Whether this revision is published outside the domain. This is only applicable to Docs Editors files. */
  publishedOutsideDomain: boolean;
  /** Output only. A link to the published revision. This is only populated for Google Sites files. */
  publishedLink: string;
  /** Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. */
  size: string;
  /** Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
  originalFilename: string;
  /** Output only. The last user to modify this revision. */
  lastModifyingUser: User;
}
