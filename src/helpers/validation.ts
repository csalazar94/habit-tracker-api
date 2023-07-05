import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as dayjs from 'dayjs';

@ValidatorConstraint({ name: 'isCustomDateString', async: false })
export class IsCustomDateString implements ValidatorConstraintInterface {
  validate(text: string) {
    return dayjs(text, 'YYYY-MM-DD', true).isValid();
  }

  defaultMessage() {
    return '($value) no es una fecha válida';
  }
}
