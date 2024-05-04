export interface PermissionsGetPathParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the permission. */
  permissionId: string;
}

export interface PermissionsGetQueryParams {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /* @deprecated  Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess: boolean;
}
