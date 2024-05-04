export interface FilesUpdatePathParams {
  /**
   * The type of upload request to the /upload URI. If you are uploading data with an /upload URI, this field is required. If you are creating a metadata-only file, this field is not required. Additionally, this field is not shown in the "Try this method" widget because the widget doesn't support data uploads.
   *
   * Acceptable values are:
   *  - media - [Simple upload](https://developers.google.com/drive/api/guides/manage-uploads#simple). Upload the media only, without any metadata.
   *  - multipart - [Multipart upload](https://developers.google.com/drive/api/guides/manage-uploads#multipart). Upload both the media and its metadata, in a single request.
   *  - resumable - [Resumable upload](https://developers.google.com/drive/api/guides/manage-uploads#resumable). Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.
   */
  uploadType: string;
  /** The ID of the file. */
  fileId: string;
}

export interface FilesUpdateQueryParams {
  /**
   * The type of upload request to the /upload URI. If you are uploading data with an /upload URI, this field is required. If you are creating a metadata-only file, this field is not required. Additionally, this field is not shown in the "Try this method" widget because the widget doesn't support data uploads.
   *
   * Acceptable values are:
   *  - media - [Simple upload](https://developers.google.com/drive/api/guides/manage-uploads#simple). Upload the media only, without any metadata.
   *  - multipart - [Multipart upload](https://developers.google.com/drive/api/guides/manage-uploads#multipart). Upload both the media and its metadata, in a single request.
   *  - resumable - [Resumable upload](https://developers.google.com/drive/api/guides/manage-uploads#resumable). Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.
   */
  uploadType: string;
  /** A comma-separated list of parent IDs to add. */
  addParents: string;
  /** @deprecated Adding files to multiple folders is no longer supported. Use shortcuts instead. */
  enforceSingleParent: boolean;
  /** Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code).A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage: string;
  /** A comma-separated list of parent IDs to remove. */
  removeParents: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives: boolean;
  /** @deprecated Use `supportsAllDrives` instead. */
  supportsTeamDrives: boolean;
  /** Whether to use the uploaded content as indexable text. */
  useContentAsIndexableText: boolean;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView: string;
  /** A comma-separated list of IDs of labels to include in the labelInfo part of the response. */
  includeLabels: string;
}
