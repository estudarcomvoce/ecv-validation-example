import { Validation, required, ValidationRule } from 'ecv-validation';
import { LoginData } from '../views';

const customValidation: ValidationRule<LoginData> = (alias, value) => {
  //tslint:disable-next-line:max-line-length
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (EMAIL_REGEX.test(value)) {
    return {
      error: '',
      invalid: false,
    }
  }

  return {
    error: `${alias} is not valid`,
    invalid: true,
  }
}

export default new Validation<LoginData>(
  "email",
  "email",
  "string",
  [required, customValidation]
);