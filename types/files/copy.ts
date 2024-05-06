export interface FilesCopyPathParams {
  /** The ID of the file to copy. */
  fileId: string;
}

export interface FilesCopyQueryParams {
  /** @deprecated Copying files into multiple folders is no longer supported. Use shortcuts instead. */
  enforceSingleParent?: boolean;
  /** Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
  ignoreDefaultVisibility?: boolean;
  /** Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever?: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
}
