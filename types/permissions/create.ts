export interface PermissionsCreatePathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface PermissionsCreateQueryParams {
  /** A plain text custom message to include in the notification email. */
  emailMessage?: string;
  /** @deprecated See `moveToNewOwnersRoot` for details. */
  enforceSingleParent?: boolean;
  /** This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed. */
  moveToNewOwnersRoot?: boolean;
  /** Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. */
  sendNotificationEmail?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. */
  transferOwnership?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
}
