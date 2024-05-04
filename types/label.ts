import { User } from "./user";

type LabelType = {
  id: string;
  kind: string;
};

type StringField = {
  valueType: "dateString" | "integer" | "selection" | "text";
  value: string[];
};

type UserField = {
  valueType: "user";
  value: User[];
};

type LabelField = LabelType & (StringField | UserField);

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
