type PermissionDetailRole =
  | "organizer"
  | "fileOrganizer"
  | "writer"
  | "commenter"
  | "reader";

type PermissionDetail = {
  /**
   * Output only. The permission type for this user. While new values may be added in future, the following are currently possible:
   * - file
   * - member
   */
  permissionType?: string;
  /** Output only. The ID of the item from which this permission is inherited. This is an output-only field. */
  inheritedFrom?: string;
  /**
   * Output only. The primary role for this user. While new values may be added in the future, the following are currently possible:
   * - organizer
   * - fileOrganizer
   * - writer
   * - committer
   * - reader
   */
  role?: PermissionDetailRole;
  /** Output only. Whether this permission is inherited. This field is always populated. This is an output-only field. */
  inherited?: boolean;
};

type TeamDrivePermissionDetail = {
  /** @deprecated Output only. Use `permissionDetails/permissionType` instead. */
  teamDrivePermissionType?: string;
  /** @deprecated Output only. Use `permissionDetails/inheritedFrom` instead. */
  inheritedFrom?: string;
  /** @deprecated Output only. Use `permissionDetails/role` instead. */
  role?: string;
  /** @deprecated Output only. Use `permissionDetails/inherited` instead. */
  inherited?: boolean;
};

type DisplayName = "user" | "group" | "domain" | "anyone";

type PermissionType = "user" | "group" | "domain" | "anyone";

type PhotoLink = "file" | "member";

type PermissionsResourceRole = "owner" | PermissionDetailRole;

interface CommonPermissionFields {
  /** Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values. */
  id?: string;
  /**
   * Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
   *  - user - User's full name, as defined for their Google account, such as "Joe Smith."
   *  - group - Name of the Google Group, such as "The Company Administrators."
   *  - domain - String domain name, such as "thecompany.com."
   *  - anyone - No `displayName` is present.
   */
  displayName?: DisplayName;
  /**
   * The type of the grantee. Valid values are:
   * - user
   * - group
   * - domain
   * - anyone
   *
   * When creating a permission, if `type` is user or group, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.
   */
  type?: PermissionType;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#permission".
   * */
  kind?: string;
  /** Output only. Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. */
  permissionDetails?: PermissionDetail[];
  /** Output only. A link to the user's profile photo, if available. */
  photoLink?: PhotoLink;
  /** The email address of the user or group to which this permission refers. */
  emailAddress?: string;
  /**
   * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
   * - owner
   * - organizer
   * - fileOrganizer
   * - writer
   * - commenter
   * - reader
   */
  role?: PermissionsResourceRole;
  /** Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone. */
  allowFileDiscovery?: boolean;
  /** The domain to which this permission refers. */
  domain?: string;
  /**
   * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
   *  - They can only be set on user and group permissions.
   *  - The time must be in the future.
   *  - The time cannot be more than a year in the future.
   */
  expirationTime?: string;
  /** @deprecated Output only. Use `permissionDetails` instead. */
  teamDrivePermissionDetails?: TeamDrivePermissionDetail[];
  /** Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
  deleted?: boolean;
  /** Indicates the view for this permission. Only populated for permissions that belong to a view. 'published' is the only supported value. */
  view?: string;
  /** Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive. */
  pendingOwner?: boolean;
}

interface UserPermission extends CommonPermissionFields {
  type?: "user" | "group";
  emailAddress?: string;
}

interface DomainPermission extends CommonPermissionFields {
  type?: "domain";
  domain?: string;
}

interface AnyonePermission extends CommonPermissionFields {
  type?: "anyone";
}

// Define the combined PermissionResource type using a discriminated union
export type PermissionResource =
  | UserPermission
  | DomainPermission
  | AnyonePermission;
