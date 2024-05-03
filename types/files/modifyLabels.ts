import { Label } from "../label";

export interface FilesModifyLabelsPathParams {
  /** The ID of the file. */
  fileId: string;
}

export interface FilesModifyLabelsResponse {
  /** The list of labels which were added or updated by the request. */
  modifiedLabels: Label[];
  /** This is always drive#modifyLabelsResponse */
  kind: string;
}
