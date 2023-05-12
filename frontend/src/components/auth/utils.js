export const validateForm = (data, setter) => {
  let err = {};

  if (data.name.trim() === "") {
    err.name = "Please enter username";
  }

  if (data.email.trim() === "") {
    err.email = "Please enter email";
  }

  if (data.password.trim() === "") {
    err.password = "Please enter password";
  }

  setter({ ...err });

  return Object.keys(err).length < 1;
};
