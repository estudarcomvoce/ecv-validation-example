import { ValidationRunner } from 'ecv-validation';
import { default as NameValidation } from "./NameValidation";
import { default as EmailValidation } from "./EmailValidation";
import { LoginData } from '../views';

export default new ValidationRunner<LoginData>(
  NameValidation,
  EmailValidation,
);
