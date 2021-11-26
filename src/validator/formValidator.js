import isEmail from "validator/es/lib/isEmail";

export const signUpValidator = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  console.log("data");
  if (!firstName || !lastName || !password || !confirmPassword) {
    return "Please Fill Up All Fields!";
  } else if (password !== confirmPassword) {
    return "Password Did Not Match!";
  } else if (password.length < 8 || password.length > 32) {
    return "Password Must Be Between 8-32 characters!";
  } else if (!isEmail(email)) {
    return "Please Enter a Valid Email!";
  } else {
    return false;
  }
};

export const loginValidator = (email, password) => {
  if (!email || !password) {
    return "Please Provide Your Email and Password!";
  } else if (!isEmail(email)) {
    return "Please Enter a Valid Email!";
  } else {
    return false;
  }
};
