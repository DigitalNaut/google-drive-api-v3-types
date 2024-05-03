export interface DrivesListQueryParams {
  /** Maximum number of shared drives to return per page. */
  pageSize: number;
  /** Page token for shared drives. */
  pageToken: string;
  /** Query string for searching shared drives. */
  q: string;
  /** Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. */
  useDomainAdminAccess: boolean;
}
