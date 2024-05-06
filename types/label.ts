import { User } from "./user";

type LabelMetadata = {
  id?: string;
  kind?: string;
};

type DateStringField = {
  valueType: "dateString";
  dateString: string[];
};

type IntegerField = {
  valueType: "integer";
  integer: number[];
};

type SelectionField = {
  valueType: "selection";
  selection: string[];
};

type TextField = {
  valueType: "text";
  text: string[];
};

type UserField = {
  valueType: "user";
  user: User[];
};

type LabelField = LabelMetadata &
  (DateStringField | IntegerField | SelectionField | TextField | UserField);

/** Representation of label and label fields. */
export interface Label {
  /** The ID of the label. */
  id?: string;
  /** The revision ID of the label. */
  revisionId?: string;
  /** This is always drive#label */
  kind?: string;
  /**
   * A map of the fields on the label, keyed by the field's ID.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  fields?: Record<string, LabelField>;
}
