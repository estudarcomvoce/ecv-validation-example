import { Validation, required, ValidationRule, longerThan } from 'ecv-validation';
import { LoginData } from '../views';

export default new Validation(
  "name",
  "name",
  "string",
  [required, longerThan(5)],
);