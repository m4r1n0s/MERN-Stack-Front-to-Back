const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // The isEmpty that we created (checks for empty object, string, null etc)
  // If they are empty we convert it to emtry string so Validator.isEmpty can check it
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company title field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date title field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
