const validateCommentForm = (values) => {
  const errors = {};

  if (values.rating === undefined) {
    errors.rating = "Required";
  }
  if (!values.author) {
    errors.author = "Required";
  } else if (values.author.length < 2) {
    errors.author = "Your name be at least 2 characters.";
  } else if (values.author.length > 15) {
    errors.author = "Your name must be 15 characters or less";
  }
  return errors;
};

export default validateCommentForm;
