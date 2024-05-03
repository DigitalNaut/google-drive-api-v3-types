import { User } from "./user";

type LabelType = {
  id: string;
  kind: string;
};

type DateStringField = {
  valueType: "dateString";
  value: string[];
};

type IntegerField = {
  valueType: "integer";
  value: string[];
};

type SelectionField = {
  valueType: "selection";
  value: string[];
};

type TextField = {
  valueType: "text";
  value: string[];
};

type UserField = {
  valueType: "user";
  value: User[];
};

type LabelField = LabelType &
  (DateStringField | IntegerField | SelectionField | TextField | UserField);

/** Representation of label and label fields. */
export interface Label {
  /** The ID of the label. */
  id: string;
  /** The revision ID of the label. */
  revisionId: string;
  /** This is always drive#label */
  kind: string;
  /**
   * A map of the fields on the label, keyed by the field's ID.
   *
   * An object containing a list of "key": value pairs.
   *
   * @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  fields: Record<string, LabelField>;
}
