import { CronError, CronField, FieldType } from './types';

export interface ParsedMetadata {
  type: FieldType;
}

export type ParsedField = CronField & ParsedMetadata;

export interface ParseFieldResult {
  errors: CronError[];
  field: ParsedField;
}

function parseField(type: FieldType, input: string): ParseFieldResult {
  return {
    errors: [],
    field: {
      type,
      hash: false,
    },
  };
}

export default parseField;
