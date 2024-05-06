export interface PermissionsUpdatePathParams {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the permission. */
  permissionId: string;
}

export interface PermissionsUpdateQueryParams {
  /** Whether to remove the expiration date. */
  removeExpiration?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. */
  transferOwnership?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
}
