import { ChangeResource } from ".";

export interface ChangesListQueryParams {
  /** The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
  driveId?: string;
  /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
  includeCorpusRemovals?: boolean;
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
  includeRemoved?: boolean;
  /** @deprecated Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** The maximum number of changes to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the `getStartPageToken` method. */
  pageToken?: string;
  /** Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. */
  restrictToMyDrive?: boolean;
  /** A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
  spaces?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** @deprecated Use `driveId` instead. */
  teamDriveId?: string;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
}

export interface ChangesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "drive#changeList". */
  kind?: string;
  /** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire. */
  nextPageToken?: string;
  /** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire. */
  newStartPageToken?: string;
  /** The list of changes. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  changes?: ChangeResource[];
}
