const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostLoginInput(data) {
  let errors = {};

  // The isEmpty that we created (checks for empty object, string, null etc)
  // If they are empty we convert it to emtry string so Validator.isEmpty can check it
  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  // Validators isEmpty method that only checks for empty string
  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
