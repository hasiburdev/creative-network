import isEmail from "validator/lib/isEmail";

export const isValidLoginInfo = (email, password, confirmPassword) => {
  if (!email.length || !password.length)
    return { status: false, message: "Please Fill All Fields!" };
  else if (!isEmail(email))
    return { status: false, message: "E-mail is not valid!" };
  else if (password.length <= 7)
    return { status: false, message: "Password must be minimum 8 characters!" };

  return { status: true, message: "" };
};

export const isValidSignUpInfo = (
  username,
  email,
  password,
  confirmPassword
) => {
  if (
    !email.length ||
    !password.length ||
    !confirmPassword.length ||
    !username.length
  )
    return { status: false, message: "Please Fill All Fields!" };
  else if (!isEmail(email))
    return { status: false, message: "E-mail is not valid!" };
  else if (password !== confirmPassword)
    return { status: false, message: "Password do not Match! Try again!" };
  else if (password.length <= 7)
    return { status: false, message: "Password must be minimum 8 characters!" };
  return { status: true, message: "" };
};
