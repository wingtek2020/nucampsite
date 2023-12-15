const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 7) {
    errors.username = "Your name be at least 6 characters.";
  } else if (values.username.length > 15) {
    errors.username = "Your name must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 9) {
    errors.password = "Your password must be at least 8 characters.";
  }
  return errors;
};

export default validateUserLoginForm;
