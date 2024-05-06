import { PermissionResource } from ".";

export interface PermissionsListPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface PermissionsListQueryParams {
  /** The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView?: string;
}

export interface PermissionsListResponse {
  /** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /**
   * Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#permissionList".
   */
  kind?: string;
  /** The list of permissions. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  permissions?: PermissionResource[];
}
