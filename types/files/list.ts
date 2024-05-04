type OrderBy =
  | "createdTime"
  | "folder"
  | "modifiedByMeTime"
  | "modifiedTime"
  | "name"
  | "name_natural"
  | "quotaBytesUsed"
  | "recency"
  | "sharedWithMeTime"
  | "starred"
  | "viewedByMeTime";

type Spaces = "drive" | "appDataFolder";

export interface FilesListQueryParams {
  /** Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter. */
  corpora: string;
  /** @deprecated The source of files to list. Use 'corpora' instead. */
  corpus: unknown;
  /** ID of the shared drive to search. */
  driveId: string;
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives: boolean;
  /** @deprecated Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems: boolean;
  /** A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,`modifiedTime` desc,name. */
  orderBy: OrderBy;
  /** The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. */
  pageSize: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken: string;
  /** A query for filtering the file results. See the "Search for files & folders" guide for supported syntax. */
  q: string;
  /** A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
  spaces: Spaces;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** @deprecated Deprecated: Use `driveId` instead. */
  teamDriveId: string;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels: string;
}

export interface FilesListResponse {
  /** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken: string;
  /**
   * Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#fileList".
   */
  kind: string;
  /** Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the 'allDrives' corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'. */
  incompleteSearch: boolean;
  /** The list of files. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  files: File[];
}
