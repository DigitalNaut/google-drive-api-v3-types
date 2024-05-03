export interface DrivesGetPathParams {
  /** The ID of the shared drive. */
  driveId: string;
}

export interface DrivesGetQueryParams {
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess: boolean;
}
