type IconCategory = "application" | "document" | "documentShared";

type AppIcon = {
  /** Size of the icon. Represented as the maximum of the width and height. */
  size: number;
  /**
   * Category of the icon. Allowed values are:
   *  - application - The icon for the application.
   *  - document - The icon for a file associated with the app.
   *  - documentShared - The icon for a shared file associated with the app.
   */
  category: IconCategory;
  /** URL for the icon. */
  iconUrl: string;
};

export interface AppResource {
  /** The name of the app. */
  name: string;
  /** The type of object this app creates such as a Chart. If empty, the app name should be used instead. */
  objectType: string;
  /** Whether this app supports creating objects. */
  supportsCreate: boolean;
  /** A link to the product listing for this app. */
  productUrl: string;
  /** The list of primary MIME types. */
  // TODO: Add MIME type support

  primaryMimeTypes: string[];
  /** The list of secondary MIME types. */
  // TODO: Add MIME type support
  secondaryMimeTypes: string[];
  /** The list of primary file extensions. */
  primaryFileExtensions: string[];
  /** The list of secondary file extensions. */
  secondaryFileExtensions: string[];
  /** The ID of the app. */
  id: string;
  /** Whether this app supports importing from Google Docs. */
  supportsImport: boolean;
  /** Whether the app is installed. */
  installed: boolean;
  /** Whether the app is authorized to access data on the user's Drive. */
  authorized: boolean;
  /** The various icons for the app. */
  icons: AppIcon[];
  /** Whether the app is selected as the default handler for the types it supports. */
  useByDefault: boolean;
  /**
   * Output only. Identifies what kind of resource this is.
   *
   * Value: the fixed string "drive#app".
   * */
  kind: string;
  /** A short description of the app. */
  shortDescription: string;
  /** A long description of the app. */
  longDescription: string;
  /** Whether this app supports opening more than one file. */
  supportsMultiOpen: boolean;
  /** The ID of the product listing for this app. */
  productId: string;
  /**
   * The template URL for opening files with this app. The template contains
   *
   * {ids}
   *
   * or
   *
   * {exportIds}
   *
   * to be replaced by the actual file IDs. For more information, see [Open Files](https://developers.google.com/drive/api/guides/integrate-open) for the full documentation.
   */
  openUrlTemplate: string;
  /** The URL to create a file with this app. */
  createUrl: string;
  /** The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file. */
  createInFolderTemplate: string;
  /** Whether this app supports creating files when offline. */
  supportsOfflineCreate: boolean;
  /** Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive. */
  hasDriveWideScope: boolean;
}
