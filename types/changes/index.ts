import { DriveResource } from "../drives";
import { File } from "../files";

export interface ChangeResource {
  /** Identifies what kind of resource this is. Value: the fixed string "drive#change". */
  kind?: string;
  /** Whether the file or shared drive has beens removed from this list of changes, for example by deletion or loss of access. */
  removed?: boolean;
  /** The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. */
  file?: File;
  /** The ID of the file which has changed. */
  fileId?: string;
  /** The time of this change (RFC 3339 date-time). */
  time?: string;
  /** The ID of the shared drive associated with this change. */
  driveId?: string;
  /** @deprecated Use `changeType` instead. */
  type?: string;
  /** @deprecated Use `driveId` instead. */
  teamDriveId?: string;
  /** @deprecated Use `drive` instead. */
  teamDrive?: unknown;
  /** The type of the change. Possible values are file and drive. */
  changeType?: string;
  /** The updated state of the shared drive. Present if the `changeType` is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. */
  drive?: DriveResource;
}
