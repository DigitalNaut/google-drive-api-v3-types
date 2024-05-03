export interface FilesExportPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface FilesExportQueryParams {
  /** @required The MIME type of the format requested for this export. */
  mimeType: string;
}
