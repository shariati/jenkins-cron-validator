export interface CronError {
  field?: FieldType;
  type: ErrorCode;
  values?: (string | number)[];
}

export interface CronFieldExact {
  values: number[];
}

export interface CronFieldWildcard {
  hash: boolean;
  range?: [number, number];
  interval?: number;
}

export type CronField = CronFieldExact | CronFieldWildcard;

export enum ErrorCode {
  InvalidFieldCount = 'Invalid field count',
  InvalidInputType = 'Invalid input type',
  ValueOutOfRange = 'Value out of range',
}

export enum FieldType {
  Minute = 'minute',
  Hour = 'hour',
  DayOfMonth = 'dayOfMonth',
  Month = 'month',
  DayOfWeek = 'dayOfWeek',
}

export interface FieldSpec {
  type: FieldType;
  range: [number, number];
}

export const cronFields: FieldSpec[] = [
  {
    type: FieldType.Minute,
    range: [0, 59],
  },
  {
    type: FieldType.Hour,
    range: [0, 23],
  },
  {
    type: FieldType.DayOfMonth,
    range: [1, 31],
  },
  {
    type: FieldType.Month,
    range: [1, 12],
  },
  {
    type: FieldType.DayOfWeek,
    range: [0, 7],
  },
];
