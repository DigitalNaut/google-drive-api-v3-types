export interface FilesCreateQueryParams {
  /**
   * The type of upload request to the /upload URI. If you are uploading data with an /upload URI, this field is required. If you are creating a metadata-only file, this field is not required. Additionally, this field is not shown in the "Try this method" widget because the widget doesn't support data uploads.
   *
   * Acceptable values are:
   *
   *  - media - Simple upload. Upload the media only, without any metadata.
   * @see https://developers.google.com/drive/api/guides/manage-uploads#simple
   *  - multipart - Multipart upload. Upload both the media and its metadata, in a single request.
   * @see https://developers.google.com/drive/api/guides/manage-uploads#multipart
   *  - resumable - Resumable upload. Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.
   * @see https://developers.google.com/drive/api/guides/manage-uploads#resumable
   */
  uploadType: string;
  /** @deprecated Creating files in multiple folders is no longer supported. */
  enforceSingleParent: boolean;
  /** Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
  ignoreDefaultVisibility: boolean;
  /** Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** Whether to use the uploaded content as indexable text. */
  useContentAsIndexableText: boolean;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels: string;
}
