import parseField, { ParsedField } from './parseField';
import { CronError, cronFields, ErrorCode } from './types';

export interface ParsedResult {
  errors: CronError[];
  fields: ParsedField[];
}

function parse(input: string): ParsedResult {
  if (typeof input !== 'string') {
    return {
      errors: [
        {
          type: ErrorCode.InvalidInputType,
        },
      ],
      fields: [],
    };
  }

  const str = input.trim();
  const inputFields = str.split(/\s+/);

  if (inputFields.length !== cronFields.length) {
    return {
      errors: [
        {
          type: ErrorCode.InvalidFieldCount,
        },
      ],
      fields: [],
    };
  }

  let errors: CronError[] = [];
  const parsedFields = inputFields.map((field, i) => parseField(cronFields[i].type, field));
  errors = parsedFields.reduce((err, parsedField) => err.concat(parsedField.errors), errors);

  return {
    errors,
    fields: parsedFields.map((parsedField) => parsedField.field),
  };
}

export default parse;
