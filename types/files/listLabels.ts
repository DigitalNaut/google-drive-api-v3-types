import { Label } from "../label";

export interface FilesListLabelsPathParams {
  /** The ID for the file. */
  fileId: string;
}

export interface FilesListLabelsQueryParams {
  /** The maximum number of labels to return per page. When not set, defaults to 100. */
  maxResults: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken: string;
}

export interface FilesListLabelsResponse {
  /** The list of labels. */
  labels: Label[];
  /** The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken: string;
  /** This is always drive#labelList */
  kind: string;
}
