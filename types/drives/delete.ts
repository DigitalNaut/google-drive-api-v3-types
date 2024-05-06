export interface DrivesDeletePathParams {
  /** The ID of the shared drive. */
  driveId: string;
}

export interface DrivesDeleteQueryParams {
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to true. */
  allowItemDeletion?: boolean;
}
