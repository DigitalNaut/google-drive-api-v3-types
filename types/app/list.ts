import { AppResource } from ".";

export interface AppsListQueryParams {
  /** A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists. */
  appFilterExtensions: string;
  /** A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists. */
  appFilterMimeTypes: string;
  /**
   * A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format
   *
   * @see http://www.unicode.org/reports/tr35/
   */
  languageCode: string;
}

/** A list of third-party applications which the user has installed or given access to Google Drive. */
export interface AppsListResponse {
  /** The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). */
  defaultAppIds: string[];
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#appList".
   * */
  kind: string;
  /** A link back to this list. */
  selfLink: string;
  /** The list of apps. */
  items: AppResource[];
}
