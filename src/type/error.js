export default class Error {
  constructor(status, message, detail, validators = []) {
    this.status = status;
    this.message = message;
    this.detail = detail;
    this.validators = validators;
  }
}
