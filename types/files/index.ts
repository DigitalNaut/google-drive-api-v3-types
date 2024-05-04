import { Label } from "../label";
import { PermissionResource } from "../permissions";
import { User } from "../user";

type ContentRestriction = {
  /** Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
  readOnly: boolean;
  /** Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. */
  reason: string;
  /** Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. */
  type: string;
  /** Output only. The user who set the content restriction. Only populated if `readOnly` is true. */
  restrictingUser: User;
  /** Output only. The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if `readOnly` is true. */
  restrictionTime: string;
  /** Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with organizer capabilities can modify or remove this content restriction. */
  ownerRestricted: boolean;
  /** Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. */
  systemRestricted: boolean;
};

type Thumbnail = {
  /**
   * The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
   *
   * A base64-encoded string.
   */
  image: string;
  /** The MIME type of the thumbnail. */
  mimeType: string;
};

type ContentHints = {
  /** Text to be indexed for the file to improve `fullText` queries. This is limited to 128KB in length and may contain HTML elements. */
  indexableText: string;
  /** A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail. */
  thumbnail: Thumbnail;
};

type Capabilities = {
  /** @deprecated Output only. */
  canChangeViewersCanCopyContent: boolean;
  /** Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
  canMoveChildrenOutOfDrive: boolean;
  /** Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
  canReadDrive: boolean;
  /** Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`. */
  canEdit: boolean;
  /** Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
  canCopy: boolean;
  /** Output only. Whether the current user can comment on this file. */
  canComment: boolean;
  /** Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder. */
  canAddChildren: boolean;
  /** Output only. Whether the current user can delete this file. */
  canDelete: boolean;
  /** Output only. Whether the current user can download this file. */
  canDownload: boolean;
  /** Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
  canListChildren: boolean;
  /** Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead. */
  canRemoveChildren: boolean;
  /** Output only. Whether the current user can rename this file. */
  canRename: boolean;
  /** Output only. Whether the current user can move this file to trash. */
  canTrash: boolean;
  /** Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
  canReadRevisions: boolean;
  /** @deprecated Output only. Use `canReadDrive` instead. */
  canReadTeamDrive: boolean;
  /** @deprecated Output only. Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead. */
  canMoveTeamDriveItem: boolean;
  /** @deprecated Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file. */
  canChangeCopyRequiresWriterPermission: boolean;
  /** @deprecated Output only. Use `canMoveItemOutOfDrive` instead. */
  canMoveItemIntoTeamDrive: boolean;
  /** Output only. Whether the current user can restore this file from trash. */
  canUntrash: boolean;
  /** Output only. Whether the current user can modify the content of this file. */
  canModifyContent: boolean;
  /** @deprecated Output only. Use `canMoveItemWithinDrive` instead. */
  canMoveItemWithinTeamDrive: boolean;
  /** @deprecated Output only. Use `canMoveItemOutOfDrive` instead. */
  canMoveItemOutOfTeamDrive: boolean;
  /** Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
  canDeleteChildren: boolean;
  /** @deprecated Output only. Use `canMoveChildrenOutOfDrive` instead. */
  canMoveChildrenOutOfTeamDrive: boolean;
  /** @deprecated Output only. Use `canMoveChildrenWithinDrive` instead. */
  canMoveChildrenWithinTeamDrive: boolean;
  /** Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
  canTrashChildren: boolean;
  /** Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
  canMoveItemOutOfDrive: boolean;
  /** Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
  canAddMyDriveParent: boolean;
  /** Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
  canRemoveMyDriveParent: boolean;
  /** Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed. */
  canMoveItemWithinDrive: boolean;
  /** Output only. Whether the current user can modify the sharing settings for this file. */
  canShare: boolean;
  /** Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder. */
  canMoveChildrenWithinDrive: boolean;
  /** @deprecated Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`. */
  canModifyContentRestriction: boolean;
  /** Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
  canAddFolderFromAnotherDrive: boolean;
  /** Output only. Whether the current user can change the `securityUpdateEnabled` field on link share metadata. */
  canChangeSecurityUpdateEnabled: boolean;
  /** Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files. */
  canAcceptOwnership: boolean;
  /** Output only. Whether the current user can read the labels on the file. */
  canReadLabels: boolean;
  /** Output only. Whether the current user can modify the labels on the file. */
  canModifyLabels: boolean;
  /** Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted. */
  canModifyEditorContentRestriction: boolean;
  /** Output only. Whether the current user can add or modify content restrictions which are owner restricted. */
  canModifyOwnerContentRestriction: boolean;
  /** Output only. Whether there is a content restriction on the file that can be removed by the current user. */
  canRemoveContentRestriction: boolean;
};

type Location = {
  /** Output only. The latitude stored in the image. */
  latitude: number;
  /** Output only. The longitude stored in the image. */
  longitude: number;
  /** Output only. The altitude stored in the image. */
  altitude: number;
};

type ImageMediaMetadata = {
  /** Output only. Whether a flash was used to create the photo. */
  flashUsed: boolean;
  /** Output only. The metering mode used to create the photo. */
  meteringMode: string;
  /** Output only. The type of sensor used to create the photo. */
  sensor: string;
  /** Output only. The exposure mode used to create the photo. */
  exposureMode: string;
  /** Output only. The color space of the photo. */
  colorSpace: string;
  /** Output only. The white balance mode used to create the photo. */
  whiteBalance: string;
  /** Output only. The width of the image in pixels. */
  width: number;
  /** Output only. The height of the image in pixels. */
  height: number;
  /** Output only. Geographic location information stored in the image. */
  location: Location;
  /** Output only. The number of clockwise 90 degree rotations applied from the image's original orientation. */
  rotation: number;
  /** Output only. The date and time the photo was taken (EXIF DateTime). */
  time: string;
  /** Output only. The make of the camera used to create the photo. */
  cameraMake: string;
  /** Output only. The model of the camera used to create the photo. */
  cameraModel: string;
  /** Output only. The length of the exposure, in seconds. */
  exposureTime: number;
  /** Output only. The aperture used to create the photo (f-number). */
  aperture: number;
  /** Output only. The focal length used to create the photo, in millimeters. */
  focalLength: number;
  /** Output only. The ISO speed used to create the photo. */
  isoSpeed: number;
  /** Output only. The exposure bias of the photo (APEX value). */
  exposureBias: number;
  /** Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
  maxApertureValue: number;
  /** Output only. The distance to the subject of the photo, in meters. */
  subjectDistance: number;
  /** Output only. The lens used to create the photo. */
  lens: string;
};

type VideoMediaMetadata = {
  /** Output only. The width of the video in pixels. */
  width: number;
  /** Output only. The height of the video in pixels. */
  height: number;
  /** Output only. The duration of the video in milliseconds. */
  durationMillis: string;
};

type ShortcutDetails = {
  /** The ID of the file that this shortcut points to. */
  targetId: string;
  /** Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
  targetMimeType: string;
  /** Output only. The ResourceKey for the target file. */
  targetResourceKey: string;
};

type LinkShareMetadata = {
  /** Output only. Whether the file is eligible for security update. */
  securityUpdateEligible: boolean;
  /** Output only. Whether the security update is enabled for this file. */
  securityUpdateEnabled: boolean;
};

type LabelInfo = {
  /** Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned. */
  labels: Label[];
};

export interface File {
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#file".
   */
  kind: string;
  /** Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. */
  driveId: string;
  /** Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive. */
  fileExtension: string;
  /** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
  copyRequiresWriterPermission: boolean;
  /** Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
  md5Checksum: string;
  /** Additional information about the content of the file. These fields are never populated in responses. */
  contentHints: ContentHints;
  /** Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives. */
  writersCanShare: boolean;
  /** Output only. Whether the file has been viewed by this user. */
  viewedByMe: boolean;
  /**
   * The MIME type of the file.
   *
   * Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded.
   *
   * If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.
   */
  mimeType: string;
  /**
   * Output only. Links for exporting Docs Editors files to specific formats.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  exportLinks: Record<string, string>;
  /**
   * The IDs of the parent folders which contain the file.
   *
   * If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. files.update requests must use the `addParents` and `removeParents` parameters to modify the parents list.
   */
  parents: string[];
  /** Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request. */
  thumbnailLink: string;
  /** Output only. A static, unauthenticated link to the file's icon. */
  iconLink: string;
  /** Output only. Whether the file has been shared. Not populated for items in shared drives. */
  shared: boolean;
  /** Output only. The last user to modify the file. */
  lastModifyingUser: User;
  /** Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. */
  owners: User[];
  /** Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. */
  headRevisionId: string;
  /** Output only. The user who shared the file with the requesting user, if applicable. */
  sharingUser: User;
  /** Output only. A link for opening the file in a relevant Google editor or viewer in a browser. */
  webViewLink: string;
  /** Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
  webContentLink: string;
  /** Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders. */
  size: string;
  /** @deprecated Use `copyRequiresWriterPermission` instead. */
  viewersCanCopyContent: boolean;
  /** Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. */
  permissions: PermissionResource[];
  /** Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the `thumbnailLink` field. */
  hasThumbnail: boolean;
  /** Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'. */
  spaces: string[];
  /**
   * The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource.
   *
   * If an unsupported color is specified, the closest color in the palette is used instead.
   */
  folderColorRgb: string;
  /** The ID of the file. */
  id: string;
  /** The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. */
  name: string;
  /** A short description of the file. */
  description: string;
  /** Whether the user has starred the file. */
  starred: boolean;
  /** Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. */
  trashed: boolean;
  /** Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
  explicitlyTrashed: boolean;
  /** The time at which the file was created (RFC 3339 date-time). */
  createdTime: string;
  /**
   * The last time the file was modified by anyone (RFC 3339 date-time).
   *
   * Note that setting `modifiedTime` also updates `modifiedByMeTime` for the user.
   */
  modifiedTime: string;
  /** Output only. The last time the file was modified by the user (RFC 3339 date-time). */
  modifiedByMeTime: string;
  /** The last time the file was viewed by the user (RFC 3339 date-time). */
  viewedByMeTime: string;
  /** Output only. The time at which the file was shared with the user, if applicable (RFC 3339 date-time). */
  sharedWithMeTime: string;
  /** Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled. */
  quotaBytesUsed: string;
  /** Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. */
  version: string;
  /** The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive. */
  originalFilename: string;
  /** Output only. Whether the user owns the file. Not populated for items in shared drives. */
  ownedByMe: boolean;
  /**
   * Output only. The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
   *
   * This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
   */
  fullFileExtension: string;
  /**
   * A collection of arbitrary key-value pairs which are visible to all apps.
   *
   * Entries with null values are cleared in update and copy requests.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  properties: Record<string, unknown>;
  /**
   * A collection of arbitrary key-value pairs which are private to the requesting app.
   *
   * Entries with null values are cleared in update and copy requests.
   *
   * These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with an OAuth 2 client ID. You cannot use an API key to retrieve private properties.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  appProperties: Record<string, unknown>;
  /** Output only. Whether the file was created or opened by the requesting app. */
  isAppAuthorized: boolean;
  /** @deprecated Output only. Use `driveId` instead. */
  teamDriveId: string;
  /** Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. */
  capabilities: Capabilities;
  /** Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
  hasAugmentedPermissions: boolean;
  /** Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. */
  trashingUser: User;
  /** Output only. The thumbnail version for use in thumbnail cache invalidation. */
  thumbnailVersion: string;
  /** Output only. The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. */
  trashedTime: string;
  /** Output only. Whether the file has been modified by this user. */
  modifiedByMe: boolean;
  /** Output only. files.list of permission IDs for users with access to this file. */
  permissionIds: string[];
  /** Output only. Additional metadata about image media, if available. */
  imageMediaMetadata: ImageMediaMetadata;
  /** Output only. Additional metadata about video media. This may not be available immediately upon upload. */
  videoMediaMetadata: VideoMediaMetadata;
  /** Shortcut file details. Only populated for shortcut files, which have the `mimeType` field set to `application/vnd.google-apps.shortcut`. */
  shortcutDetails: ShortcutDetails;
  /** Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
  contentRestrictions: ContentRestriction[];
  /** Output only. A key needed to access the item via a shared link. */
  resourceKey: string;
  /** Output only. LinkShare related details. Contains details about the link URLs that clients are using to refer to this item. */
  linkShareMetadata: LinkShareMetadata;
  /** Output only. An overview of the labels on the file. */
  labelInfo: LabelInfo;
  /** Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  sha1Checksum: string;
  /** Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  sha256Checksum: string;
}
