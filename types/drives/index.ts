type Capabilities = {
  /** Output only. Whether the current user can add children to folders in this shared drive. */
  canAddChildren?: boolean;
  /** Output only. Whether the current user can comment on files in this shared drive. */
  canComment?: boolean;
  /** Output only. Whether the current user can copy files in this shared drive. */
  canCopy?: boolean;
  /** Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
  canDeleteDrive?: boolean;
  /** Output only. Whether the current user can download files in this shared drive. */
  canDownload?: boolean;
  /** Output only. Whether the current user can edit files in this shared drive */
  canEdit?: boolean;
  /** Output only. Whether the current user can list the children of folders in this shared drive. */
  canListChildren?: boolean;
  /** Output only. Whether the current user can add members to this shared drive or remove them or change their role. */
  canManageMembers?: boolean;
  /** Output only. Whether the current user can read the revisions resource of files in this shared drive. */
  canReadRevisions?: boolean;
  /** Output only. Whether the current user can rename files or folders in this shared drive. */
  canRename?: boolean;
  /** Output only. Whether the current user can rename this shared drive. */
  canRenameDrive?: boolean;
  /** Output only. Whether the current user can change the background of this shared drive. */
  canChangeDriveBackground?: boolean;
  /** Output only. Whether the current user can share files or folders in this shared drive. */
  canShare?: boolean;
  /** Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive. */
  canChangeCopyRequiresWriterPermissionRestriction?: boolean;
  /** Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive. */
  canChangeDomainUsersOnlyRestriction?: boolean;
  /** Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive. */
  canChangeDriveMembersOnlyRestriction?: boolean;
  /** Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive. */
  canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
  /** Output only. Whether the current user can reset the shared drive restrictions to defaults. */
  canResetDriveRestrictions?: boolean;
  /** Output only. Whether the current user can delete children from folders in this shared drive. */
  canDeleteChildren?: boolean;
  /** Output only. Whether the current user can trash children from folders in this shared drive. */
  canTrashChildren?: boolean;
};

type BackgroundImageFile = {
  /** The ID of an image file in Google Drive to use for the background image. */
  id?: string;
  /** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
  xCoordinate?: number;
  /** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
  yCoordinate?: number;
  /** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
  width?: number;
};

type Restrictions = {
  /** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive. */
  copyRequiresWriterPermission?: boolean;
  /** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
  domainUsersOnly?: boolean;
  /** Whether access to items inside this shared drive is restricted to its members. */
  driveMembersOnly?: boolean;
  /** Whether administrative privileges on this shared drive are required to modify restrictions. */
  adminManagedRestrictions?: boolean;
  /** If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
  sharingFoldersRequiresOrganizerPermission?: boolean;
};

export interface DriveResource {
  /** Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
  id?: string;
  /** The name of this shared drive. */
  name?: string;
  /** The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set `themeId`. */
  colorRgb?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "drive#drive". */
  kind?: string;
  /** Output only. A short-lived link to this shared drive's background image. */
  backgroundImageLink?: string;
  /** Output only. Capabilities the current user has on this shared drive. */
  capabilities?: Capabilities;
  /** The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
  themeId?: string;
  /** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
  backgroundImageFile?: BackgroundImageFile;
  /** Output only. The time at which the shared drive was created (RFC 3339 date-time). */
  createdTime?: string;
  /** Whether the shared drive is hidden from default view. */
  hidden?: boolean;
  /** A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use drives.update to add restrictions. */
  restrictions?: Restrictions;
  /** Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to true. */
  orgUnitId?: string;
}
