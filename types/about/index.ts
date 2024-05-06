import { User } from "../user";

/** The user's storage quota limits and usage. All fields are measured in bytes. */
type StorageQuota = {
  /** The usage limit, if applicable. This will not be present if the user has unlimited storage. */
  limit?: string;
  /** The usage by all files in Google Drive. */
  usageInDrive?: string;
  /** The usage by trashed files in Google Drive. */
  usageInDriveTrash?: string;
  /** The total usage across all services. */
  usage?: string;
};

/** A supported theme. */
type DriveTheme = {
  /** The ID of the theme. */
  id?: string;
  /** A link to this theme's background image. */
  backgroundImageLink?: string;
  /** The color of this theme as an RGB hex string. */
  colorRgb?: string;
};

/**  Information about the user, the user's Drive, and system capabilities. */
export interface AboutResource {
  /**
   * Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#about".
   * */
  kind?: string;
  /** The user's storage quota limits and usage. All fields are measured in bytes. */
  storageQuota?: StorageQuota;
  /** A list of themes that are supported for shared drives. */
  driveThemes?: DriveTheme[];
  /** Whether the user can create shared drives. */
  canCreateDrives?: boolean;
  /**
   * A map of source MIME type to possible targets for all supported imports.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  importFormats?: Record<string, Value>;
  /**
   * A map of source MIME type to possible targets for all supported exports.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  exportFormats?: Record<string, Value>;
  /** Whether the user has installed the requesting app. */
  appInstalled?: boolean;
  /** The authenticated user. */
  user?: User;
  /** The currently supported folder colors as RGB hex strings. */
  folderColorPalette?: string[];
  /**
   * A map of maximum import sizes by MIME type, in bytes.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   * */
  maxImportSizes?: Record<string, string>;
  /** The maximum upload size in bytes. */
  maxUploadSize?: string;
  /** @deprecated Use `driveThemes` instead. */
  teamDriveThemes?: DriveTheme[];
  /** @deprecated Use `canCreateDrives` instead. */
  canCreateTeamDrives?: boolean;
}
