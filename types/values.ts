type Struct = { [key: string]: Value };

type ListValue = Value[];

type Value = null | number | string | boolean | ListValue | Struct;
